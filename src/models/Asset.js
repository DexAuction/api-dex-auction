const mongoose = require('mongoose')
const { Schema } = mongoose

const assetSchema = new Schema({
  tokenAssetId: String,
  mintedAt: Date,
  nsfw: Boolean,
  metadata: String
})

const Asset = mongoose.model('Asset', assetSchema)

module.exports = Asset
