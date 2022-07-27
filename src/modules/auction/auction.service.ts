import { Injectable, Logger } from "@nestjs/common";
import * as _ from "lodash";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { GetAuctionQuery } from "./getAuctionQuery";
import { Auction, AuctionDocument } from "./auction.schema";
import { GetAuctionResponseModel } from "src/dtos/GetAuctionResponseModel";
@Injectable()
export class AuctionService {
  constructor(
    @InjectModel(Auction.name)
    private auction: Model<AuctionDocument>
  ) {}

  async getAuctionById(auction_id: Number): Promise<GetAuctionResponseModel> {
    try {
      const queryResponse = await this.auction.findOne({
        auctionId: auction_id
      });
      const auctionResponse: GetAuctionResponseModel = {
        auctionId: queryResponse.auctionId,
        auctionType: queryResponse.auctionType,
        assetTokenId: queryResponse.assetTokenId,
        seller: queryResponse.seller,
        buyer: queryResponse.buyer,
        tokenContract: queryResponse.tokenContract,
        state: queryResponse.state
      };
      if (queryResponse.auctionType == "english") {
        auctionResponse.EnglishAuctionAttribute = {
          opening_price: queryResponse.englishAuctionAttribute.opening_price,
          min_increment: queryResponse.englishAuctionAttribute.min_increment,
          start_datetime: queryResponse.englishAuctionAttribute.start_datetime,
          start_timestamp:
            queryResponse.englishAuctionAttribute.start_timestamp,
          end_datetime: queryResponse.englishAuctionAttribute.end_datetime,
          end_timestamp: queryResponse.englishAuctionAttribute.end_timestamp,
          soft_close_duration:
            queryResponse.englishAuctionAttribute.soft_close_duration,
          buyout_price: queryResponse.englishAuctionAttribute.buyout_price,
          winning_bid: queryResponse.englishAuctionAttribute.winning_bid,
          bids: queryResponse.englishAuctionAttribute.bids
        };
      } else if (queryResponse.auctionType == "dutch") {
        auctionResponse.DutchAuctionAttribute = {
          opening_price: queryResponse.dutchAuctionAttribute.opening_price,
          reserve_price: queryResponse.dutchAuctionAttribute.reserve_price,
          drop_amount: queryResponse.dutchAuctionAttribute.drop_amount,
          round_duration: queryResponse.dutchAuctionAttribute.round_duration,
          start_datetime: queryResponse.dutchAuctionAttribute.start_datetime,
          start_timestamp: queryResponse.dutchAuctionAttribute.start_timestamp,
          winning_bid: queryResponse.dutchAuctionAttribute.winning_bid
        };
      }
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
        state: queryParams.state
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
        state: queryResponse[i].state
      };
      if (queryResponse[i].auctionType == "english") {
        auctionResponse.EnglishAuctionAttribute = {
          opening_price: queryResponse[i].englishAuctionAttribute.opening_price,
          min_increment: queryResponse[i].englishAuctionAttribute.min_increment,
          start_datetime:
            queryResponse[i].englishAuctionAttribute.start_datetime,
          start_timestamp:
            queryResponse[i].englishAuctionAttribute.start_timestamp,
          end_datetime: queryResponse[i].englishAuctionAttribute.end_datetime,
          end_timestamp: queryResponse[i].englishAuctionAttribute.end_timestamp,
          soft_close_duration:
            queryResponse[i].englishAuctionAttribute.soft_close_duration,
          buyout_price: queryResponse[i].englishAuctionAttribute.buyout_price,
          winning_bid: queryResponse[i].englishAuctionAttribute.winning_bid,
          bids: queryResponse[i].englishAuctionAttribute.bids
        };
      } else if (queryResponse[i].auctionType == "dutch") {
        auctionResponse.DutchAuctionAttribute = {
          opening_price: queryResponse[i].dutchAuctionAttribute.opening_price,
          reserve_price: queryResponse[i].dutchAuctionAttribute.reserve_price,
          drop_amount: queryResponse[i].dutchAuctionAttribute.drop_amount,
          round_duration: queryResponse[i].dutchAuctionAttribute.round_duration,
          start_datetime: queryResponse[i].dutchAuctionAttribute.start_datetime,
          start_timestamp:
            queryResponse[i].dutchAuctionAttribute.start_timestamp,
          winning_bid: queryResponse[i].dutchAuctionAttribute.winning_bid
        };
      }
      auctionOutput.push(auctionResponse);
    }

    return auctionOutput;
  }
}
