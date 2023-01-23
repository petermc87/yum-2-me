
const { Schema, model } = require('mongoose')

const restaurantProfileSchema = new Schema({
  name: { type: String },
  user: { type: String },
  image: { type: String },
  location: { type: String, required: true },
  type: { type: String },
  menu: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  ratings: {type: Array}
}, {
  timestamps: true
})

const Restaurant = model('Restuarant', restaurantProfileSchema)

module.exports = Restaurant
