const mongoose = require('mongoose')
const { Schema } = mongoose

const accountSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String
  },
  address: {
    type: String
  }
})

const Account = mongoose.model('Account', accountSchema)

module.exports = Account
