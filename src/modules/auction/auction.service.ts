import { Injectable, Logger } from '@nestjs/common';
import * as _ from 'lodash';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { APIUtil } from '../../helpers/util';
import { GetAuctionQuery } from './getAuctionQuery';
import { Auction, AuctionDocument } from './auction.schema';
import { GetAuctionResponseModel } from 'src/dtos/GetAuctionResponseModel';
@Injectable()
export class AuctionService {
  constructor(
    @InjectModel(Auction.name)
    private auction: Model<AuctionDocument>,
    private apiUtil: APIUtil
  ) {}

  async getAuctionById(auction_id: string): Promise<GetAuctionResponseModel> {
    try {
      const queryResponse = await this.auction.findOne({
        auctionId: auction_id,
      });
      const auctionResponse: GetAuctionResponseModel = {
        auctionId: queryResponse.auctionId,
        auctionType: queryResponse.auctionType,
        assetTokenId: queryResponse.assetTokenId,
        seller: queryResponse.seller,
        buyer: queryResponse.buyer,
        tokenContract: queryResponse.tokenContract,
        state: queryResponse.state,
      };
      return auctionResponse;
    } catch (err) {
      console.log(err);
    }
  }

  async getAuctions(
    queryParams: GetAuctionQuery
  ): Promise<GetAuctionResponseModel[]> {
    let queryResponse;
    if (queryParams.owner && queryParams.state) {
      queryResponse = await this.auction.find({
        seller: queryParams.owner,
        state: queryParams.state,
      });
    } else if (queryParams.state && !queryParams.owner) {
      queryResponse = await this.auction.find({ state: queryParams.state });
    } else if (queryParams.owner && !queryParams.state) {
      queryResponse = await this.auction.find({ seller: queryParams.owner });
    }

    let auctionOutput: GetAuctionResponseModel[] = [];
    for (let i = 0; i < queryResponse.length; i++) {
      const auctionResponse: GetAuctionResponseModel = {
        auctionId: queryResponse[i].auctionId,
        auctionType: queryResponse[i].auctionType,
        assetTokenId: queryResponse[i].assetTokenId,
        seller: queryResponse[i].seller,
        buyer: queryResponse[i].buyer,
        tokenContract: queryResponse[i].tokenContract,
        state: queryResponse[i].state,
      };
      auctionOutput.push(auctionResponse);
    }

    return auctionOutput;
  }
}
