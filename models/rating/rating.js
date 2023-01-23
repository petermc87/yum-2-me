const { Schema, model } = require('mongoose')

const ratingSchema = new Schema({
  rating: { type: Number, min: 1, max: 5 },
  rater: { type: Schema.Types.ObjectId, ref: 'User'},
//   restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' }
  comment: {type: String}
}, {
  timestamps: true
})

const Rating = model('Rating', ratingSchema)

module.exports = Rating
