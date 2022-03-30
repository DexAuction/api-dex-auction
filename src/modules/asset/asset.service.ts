import { Injectable, Logger } from '@nestjs/common';
import * as _ from 'lodash';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { APIUtil } from '../../helpers/util';
import { Asset, AssetDocument } from './asset.schema';
import { GetAssetResponseModel } from 'src/dtos/GetAssetResponseModel';
import { GetAssetByFilter } from './get-asset-by-filter';
@Injectable()
export class AssetService {
  constructor(
    @InjectModel(Asset.name)
    private asset: Model<AssetDocument>,
    private apiUtil: APIUtil
  ) {}

  async getAssets(
    queryParams: GetAssetByFilter
  ): Promise<GetAssetResponseModel[]> {
    let queryResponse;
    if (
      queryParams.owner &&
      queryParams.assetTokenId &&
      queryParams.assetcontractaddress
    ) {
      queryResponse = await this.asset.find({
        owner: queryParams.owner,
        assetTokenId: queryParams.assetTokenId,
        assetcontractaddress: queryParams.assetcontractaddress,
      });
    } else if (
      queryParams.assetTokenId &&
      queryParams.assetcontractaddress &&
      !queryParams.owner
    ) {
      queryResponse = await this.asset.find({
        assetTokenId: queryParams.assetTokenId,
        assetcontractaddress: queryParams.assetcontractaddress,
      });
    } else if (
      queryParams.assetTokenId &&
      queryParams.owner &&
      !queryParams.assetcontractaddress
    ) {
      queryResponse = await this.asset.find({
        assetTokenId: queryParams.assetTokenId,
        owner: queryParams.owner,
      });
    } else if (
      queryParams.assetcontractaddress &&
      queryParams.owner &&
      !queryParams.assetTokenId
    ) {
      queryResponse = await this.asset.find({
        assetcontractaddress: queryParams.assetcontractaddress,
        owner: queryParams.owner,
      });
    } else if (
      queryParams.assetcontractaddress &&
      !queryParams.owner &&
      !queryParams.assetTokenId
    ) {
      queryResponse = await this.asset.find({
        assetcontractaddress: queryParams.assetcontractaddress,
      });
    } else if (
      queryParams.owner &&
      !queryParams.assetcontractaddress &&
      !queryParams.assetTokenId
    ) {
      queryResponse = await this.asset.find({ owner: queryParams.owner });
    } else if (
      queryParams.assetTokenId &&
      !queryParams.owner &&
      !queryParams.assetcontractaddress
    ) {
      queryResponse = await this.asset.find({
        assetTokenId: queryParams.assetTokenId,
      });
    }
    console.log('queryResponse', queryResponse);
    let assetOutput: GetAssetResponseModel[] = [];
    for (let i = 0; i < queryResponse.length; i++) {
      const assetResponse: GetAssetResponseModel = {
        assetTokenId: queryResponse[i].assetTokenId,
        metadataURL: queryResponse[i].metadataURL,
        mintedAt: queryResponse[i].mintedAt,
        assetcontractaddress: queryResponse[i].assetcontractaddress,
        owner: queryResponse[i].owner,
      };
      assetOutput.push(assetResponse);
    }
    console.log('assetOutput', assetOutput);
    return assetOutput;
  }
}
