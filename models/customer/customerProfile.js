const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = require('./order')

//will need to create functio
const customerProfileSchema = new Schema({
    image: { type: String },
    location: { type: String, required: true },
    previousOrders: [{ type: Schema.Types.ObjectId, ref: 'Order'}],
    currentOrder: { type: Schema.Types.ObjectId, ref: 'Order'}
}, {
    timestamps: true
})

module.exports = mongoose.model('CustomerProfile', customerProfileSchema)