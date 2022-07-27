import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { DutchAuctionAttribute } from "./DutchAuctionAttribute";
import { EnglishAuctionAttribute } from "./EnglishAuctionAttribute";
import { SealedBidAuctionAttribute } from "./SealedBidAuctionAttribute";
import { VickeryAuctionAttribute } from "./VickeryAuctionAttribute";
export type AuctionDocument = Auction & Document;
@Schema({ collection: "auctions" })
export class Auction {
  @Prop({ required: true, unique: true })
  auctionId: Number;

  @Prop({
    required: true,
    enum: ["fpl", "dutch", "english", "sealed-bid", "vickery"]
  })
  auctionType: String;

  @Prop({ required: true })
  tokenContract: String;

  @Prop({ required: true })
  assetTokenId: Number;

  // Commented as Collections are not yet active.
  // @Prop()
  // collectionId: ObjectID;

  @Prop()
  seller: String;

  @Prop()
  buyer: String;

  @Prop({ required: false })
  bidders?: Array<String>;

  // Commented as category are not yet active.
  // @Prop()
  // category: string;

  // Commented as payment are not yet active.
  // @Prop()
  // paymentType: string;

  @Prop({
    required: true,
    enum: [
      "NOT-STARTED",
      "ONGOING",
      "SUCCESSFULLY-COMPLETED",
      "CANCELLED",
      "EXPIRED"
    ]
  })
  state: String;

  @Prop({
    type: Object,
    required: function() {
      return this.auctionType === "english";
    }
  })
  englishAuctionAttribute?: EnglishAuctionAttribute;

  @Prop({
    type: Object,
    required: function() {
      return this.auctionType === "dutch";
    }
  })
  dutchAuctionAttribute?: DutchAuctionAttribute;

  // @Prop({
  //   type: Object,
  //   required: function() {
  //     return this.auctionType === 'sealed-bid';
  //   },
  // })
  // SealedBidAuctionAttr?: SealedBidAuctionAttribute;

  // @Prop({
  //   type: Object,
  //   required: function() {
  //     return this.auctionType === 'vickery';
  //   },
  // })
  // VickeryBidAuctionAttr?: VickeryAuctionAttribute;
}

export const AuctionSchema = SchemaFactory.createForClass(Auction);
