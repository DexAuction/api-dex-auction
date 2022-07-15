export interface EnglishAuctionAttribute {
  opening_price: Number;
  min_increment: Number;
  start_timestamp: Number;
  end_timestamp: Number;
  start_datetime: Date;
  end_datetime: Date;
  soft_close_duration: Number;
  winning_bid: Number;
  buyout_price: Number;
  bids: [
    {
      address: String;
      bid: Number;
    }
  ];
}
