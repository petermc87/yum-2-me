const mongoose = require('mongoose')
const Schema = mongoose.Schema


const restaurantProfileSchema = new Schema({
    image: { type: String },
    location: { type: String, required: true },
    menu: [{type: Schema.Types.ObjectId, ref: 'Item'}],
    completedOrders: [{ type: Schema.Types.ObjectId, ref: 'Order' }], //<<-- need to find out how to link the restaurant to customer orders
    currentOrder: { type: Schema.Types.ObjectId, ref: 'Order' }, //<<-- need to find out how to link the restaurant to customer order. Is this correct?
    type: { type: String, required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('RestaurantProfile', restaurantProfileSchema)