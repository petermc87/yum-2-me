// const item = require('./item');

const Schema = require('mongoose').Schema

const itemSchema = new Schema({
  name: { type: String, required: true },
  // restaurant: {type: mongoose.Schema.Types.ObjectId, ref:'Restaurant' }, 
  restaurantId: {type: String }, 
  image: String,
  category: { type: String },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
})

module.exports = itemSchema
