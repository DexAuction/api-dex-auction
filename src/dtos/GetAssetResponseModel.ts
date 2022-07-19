export interface GetAssetResponseModel {
  assetContractAddress: String;
  assetTokenId: Number;
  mintedAt: Date;
  metadataURL: String;
  external_url: String;
  metadataJSON: Object;
  attributes: Object;
  background_color: String;
  background_image: String;
  owner: String;
  mintedBy: String;
  name: String;
  image: String;
  description: String;
}

// Needed to form wrapper objets in place of primitive data types
