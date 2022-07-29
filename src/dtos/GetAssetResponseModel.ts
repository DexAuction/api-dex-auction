export interface GetAssetResponseModel {
  assetContractAddress: string;
  assetTokenId: string;
  mintedAt: Date;
  metadataURL: string;
  external_url: string;
  metadataJSON: Object;
  attributes: Object;
  background_color: string;
  background_image: string;
  owner: string;
  mintedBy: string;
  name: string;
  image: string;
  description: string;
}
