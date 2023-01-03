const Restaurant = require('../../models/restaurant/restaurantProfile')

module.exports = {
  index,
  show
}

async function restaurantUser (email) {
  return Restaurant.findOne({ name }).populate('users').exec(err, users)
}
