const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Products = new Schema({
  id: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('product',  Products)