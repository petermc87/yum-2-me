const { Schema, model } = require('mongoose')

const restaurantProfileSchema = new Schema({
  name: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  image: { type: String },
  location: { type: String, required: true },
  menu: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  // completedOrders: [{ type: Schema.Types.ObjectId, ref: 'Order' }], //<<-- need to find out how to link the restaurant to customer orders
  // currentOrder: { type: Schema.Types.ObjectId, ref: 'Order' }, //<<-- need to find out how to link the restaurant to customer order. Is this correct?
  type: { type: String, required: true }
}, {
  timestamps: true
})

const Restaurant = model('Restuarant', restaurantProfileSchema, 'restaurants')

module.exports = Restaurant
