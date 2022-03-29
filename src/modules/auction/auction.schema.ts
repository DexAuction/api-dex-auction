import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AuctionDocument = Auction & Document;
@Schema({ collection: 'Auction' })
export class Auction {
  @Prop({ required: true, unique: true })
  auctionId: string; //data type ??

  @Prop({
    required: true,
    enum: ['FPL', 'DUTCH', 'ENGLISH', 'SEALED-BID', 'VICKERY'],
  })
  auctionType: string;

  @Prop({ required: true })
  tokenContract: string;

  @Prop({ required: true })
  assetTokenId: string;

  @Prop()
  assetMetadataURL: string;

  // Commented as Collections are not yet active.
  // @Prop()
  // collectionId: ObjectID;

  @Prop()
  seller: string;

  @Prop()
  buyer: string;

  @Prop()
  bidders: Array<String>;

  // Commented as category are not yet active.
  // @Prop()
  // category: string;

  // Commented as payment are not yet active.
  // @Prop()
  // paymentType: string;

  @Prop({
    required: true,
    enum: [
      'NOT-STARTED',
      'ONGOING',
      'SUCCESSFULLY-COMPLETED',
      'CANCELLED',
      'EXPIRED',
    ],
  })
  state: string;
}
export const AuctionSchema = SchemaFactory.createForClass(Auction);

//seeder for development
/*

{"_id":{"$oid":"623178ff72d178528bacfbfa"},
"auctionId":0,  
"auctionType":"ENGLISH",
"tokenContract":"x0sddd2333233dccccccsqwsswseee",
"assetTokenId":"100",
"assetMetadataURL":"ipfs://11ww3",
"seller":"cryptopunks",
"buyer":"opensea",
"state":"NOT-STARTED",
,"__v":0}

*/
