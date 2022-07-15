import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Asset, AssetDocument } from './asset.schema';
import { GetAssetByFilter } from './get-asset-by-filter';
@Injectable()
export class AssetService {
  constructor(
    @InjectModel(Asset.name)
    private asset: Model<AssetDocument>,
  ) {}

  async getAssets(
    queryParams: GetAssetByFilter
  ): Promise<any> {
    let queryResponse;
    if (
      queryParams.owner &&
      queryParams.assetTokenId &&
      queryParams.assetContractAddress
    ) {
      queryResponse = await this.asset.find({
        owner: queryParams.owner,
        assetTokenId: parseInt(queryParams.assetTokenId),
        assetContractAddress: queryParams.assetContractAddress,
      });
    } else if (
      queryParams.assetTokenId &&
      queryParams.assetContractAddress &&
      !queryParams.owner
    ) {
      queryResponse = await this.asset.find({
        assetTokenId: parseInt(queryParams.assetTokenId),
        assetContractAddress: queryParams.assetContractAddress,
      });
    } else if (
      queryParams.assetTokenId &&
      queryParams.owner &&
      !queryParams.assetContractAddress
    ) {
      queryResponse = await this.asset.find({
        assetTokenId: parseInt(queryParams.assetTokenId),
        owner: queryParams.owner,
      });
    } else if (
      queryParams.assetContractAddress &&
      queryParams.owner &&
      !queryParams.assetTokenId
    ) {
      queryResponse = await this.asset.find({
        assetContractAddress: queryParams.assetContractAddress,
        owner: queryParams.owner,
      });
    } else if (
      queryParams.assetContractAddress &&
      !queryParams.owner &&
      !queryParams.assetTokenId
    ) {
      queryResponse = await this.asset.find({
        assetContractAddress: queryParams.assetContractAddress,
      });
    } else if (
      queryParams.owner &&
      !queryParams.assetContractAddress &&
      !queryParams.assetTokenId
    ) {
      queryResponse = await this.asset.find({ owner: queryParams.owner });
    } else if (
      queryParams.assetTokenId &&
      !queryParams.owner &&
      !queryParams.assetContractAddress
    ) {
      queryResponse = await this.asset.find({
        assetTokenId: parseInt(queryParams.assetTokenId),
      });
    }
    return queryResponse;
  }
}
