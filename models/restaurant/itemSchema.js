const Schema = require('mongoose').Schema

const itemSchema = new Schema({
  name: { type: String, required: true },
  restaurantId: { type: String },
  image: String,
  category: { type: String },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
})

module.exports = itemSchema
