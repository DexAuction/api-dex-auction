import { DutchAuctionAttribute } from '../modules/auction/DutchAuctionAttribute';
import { EnglishAuctionAttribute } from '../modules/auction/EnglishAuctionAttribute';

export interface GetAuctionResponseModel {
  auctionId: Number;
  auctionType: String;
  tokenContract: String;
  assetTokenId: Number;
  seller: String;
  buyer: String;
  state: String;
  EnglishAuctionAttribute?: EnglishAuctionAttribute;
  DutchAuctionAttribute?: DutchAuctionAttribute;
  bidders?: Array<String>;
}
