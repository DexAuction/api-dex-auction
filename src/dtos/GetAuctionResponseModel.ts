export interface GetAuctionResponseModel {
  auctionId: string;
  auctionType: string;
  tokenContract: string;
  assetTokenId: string;
  assetMetadataURL: string;
  seller: string;
  buyer: string;
  state: string;
}
