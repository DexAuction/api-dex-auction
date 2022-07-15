export interface SealedBidAuctionAttribute {
  start_timestamp: Date;
  commit_timestamp: Date;
  winning_bid: Number;
  reveal_timestamp: Date;
  reserve_price: Number;
  revealed_count: Number;
  bids: [
    {
      address: string;
      sealed_bid: string;
      revealed_bid: Number;
    }
  ];
}
