const mongoose = require('mongoose')
const Schema = mongoose.Schema

//may need to create functions in here like in order to populate the array of previous deliveries??
//this can also just be done in the front end? 
const driverProfileSchema = new Schema({
    image: { type: String },
    location: { type: String, required: true },
    driversLicense: { type: String, required: true },
    carRegistration: { type: String, required: true },
    previousDeliveries: [{ type: Schema.Types.ObjectId, ref: 'Order' }], //<<-- need to find out how to link the restaurant to customer orders
    currentDelivery: { type: Schema.Types.ObjectId, ref: 'Order' }, //<<-- need to find out how to link the restaurant to customer order. Is this correct?
    type: { type: String, required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('DriverProfile', driverProfileSchema)