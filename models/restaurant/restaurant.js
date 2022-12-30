const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const SALT_ROUNDS = 6;

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret
        }
    }
})

restaurantSchema.pre('save', async function(next) {
    //this is the use document
    if (!this.isModified('password')) return next()
    //update password with compute hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})

module.exports = mongoose.model('Restaurant', restaurantSchema)