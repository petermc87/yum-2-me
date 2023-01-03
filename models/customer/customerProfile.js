const { Schema, model } = require('mongoose')
require('./order')

const customerProfileSchema = new Schema({
  image: { type: String },
  location: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'Order' },
  previousOrders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  currentOrder: { type: Schema.Types.ObjectId, ref: 'Order' }
}, {
  timestamps: true
})

const Customer = model('Customer', customerProfileSchema)

module.exports = Customer
