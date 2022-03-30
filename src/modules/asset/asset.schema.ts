import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AssetDocument = Asset & Document;
@Schema({ collection: 'Asset' })
export class Asset {
  @Prop({ required: true, unique: true })
  assetTokenId: string;

  @Prop()
  mintedAt: Date;

  @Prop()
  nsfw: Boolean;

  @Prop()
  metadataURL: string;

  @Prop()
  assetcontractaddress: string;

  @Prop()
  owner: string;
}
export const AssetSchema = SchemaFactory.createForClass(Asset);

//seeder for development
/*
{"_id":{"$oid":"623178ff72d178528bacfbfa"},
"assetTokenId":0,  
"mintedAt":"ENGLISH",
"nsfw":"false",
"metadataURL":"100",
"assetcontractaddress":"ipfs://11ww3",
"owner":"cryptopunks",
}
*/
