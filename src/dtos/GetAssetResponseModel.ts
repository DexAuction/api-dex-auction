export interface GetAssetResponseModel {
  assetTokenId: string;
  mintedAt: Date;
  metadataURL: string;
  attributes: Object;
  owner: string;
  mintedBy: string;
  name : string;
  image : string,
  description:string,
  contract: {
    address: string,
    imageURL: string,
    name: string,
    symbol: string,
    description: string
  }
}
