const Item = require('../../models/restaurant/item')
const Restaurant = require('../../models/restaurant/restaurantProfile')

module.exports = {
  index,
  show,
  indexUser,
  getMenuByRestaurant
}

async function index (req, res) {
  try {
    const items = await Item.find({}).sort('name')
    res.status(200).json(items)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

async function show (req, res) {
  try {
    const item = await Item.findById(req.params.id)
    res.status(200).json(item)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

async function indexUser (req, res) {
  try {
    console.log(req.params.id)
    const item = await Item.find({ restaurantId: req.params.id })
    console.log(item)
    res.status(200).json(item)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

// Get Menu items by restaurant
async function getMenuByRestaurant (req, res) {
  try {
    const restaurant = await Restaurant.findById(req.params.id)
    const response = await Item.find().where('_id').in(restaurant.menu)
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
  }
}
