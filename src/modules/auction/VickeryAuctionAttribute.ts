export interface VickeryAuctionAttribute {
  start_timestamp: Date;
  commit_timestamp: Date;
  winning_bid: Number;
  reveal_timestamp: Date;
  reserve_price: Number;
  revealed_count: Number;
  bids: [
    {
      address: string;
      sealed_bid: Number;
      revealed_bid: Number;
    }
  ];
  highest_bid: Number;
  second_highest_bid: Number;
}
