const mongoose = require('mongoose')
const { Schema } = mongoose

const auctionSchema = new Schema({
  auctionId: {
    type: String,
    unique: true,
    required: true
  },
  auctionType: {
    type: String,
    enum: ['FPL', 'DUTCH', 'ENGLISH', 'SEALED-BID', 'VICKERY']
  },
  tokenContract: String,
  assetTokenId: String,
  assetMetadataURL: String, //TODO find src
  collectionId: String,  //objectId of collection model
  seller: String,
  buyer: String,
  bidders: [String],
  category: String,
  paymentType: String,
  state: Number,
  attributes: Schema.Types.Mixed //?
})

const Auction = mongoose.model('Auction', auctionSchema)

module.exports = Auction
