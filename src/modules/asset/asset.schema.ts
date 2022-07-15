import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AssetDocument = Asset & Document;
@Schema({ collection: 'assets' })
export class Asset {
  @Prop({ required: true })
  assetTokenId: Number;

  @Prop()
  mintedAt: String;
  @Prop()
  assetContractAddress: String;

  @Prop()
  mintedBy: String;

  @Prop()
  name: String;

  @Prop()
  description: String;

  @Prop()
  image: String;

  @Prop()
  external_url: String;

  @Prop({ type: JSON })
  attributes: object;

  @Prop()
  metadataURL: String;

  @Prop()
  background_color: String;

  @Prop()
  background_image: String;

  @Prop({ type: JSON })
  metadataJSON: object;

  @Prop()
  NFTCollection: String;
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' })
  // collectionId: string; //object id of collection schema

  @Prop()
  owner: string;
}
export const AssetSchema = SchemaFactory.createForClass(Asset);
