const Item = require('../../models/restaurant/item')

module.exports = {
  index,
  show,
  indexUser
}

async function index (req, res) {
  try {
    const items = await Item.find({}).sort('name')
    // const items = await Item.find({}).sort('name').populate('category').exec()
    // re-sort based upon the sortOrder of the categories
    // items.sort((a, b) => a.category.sortOrder - b.category.sortOrder)
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

// const indexUser = (req, res, next) => {
//  Item.find({ restaurantId: req.params.id }, (err, foundItems) => {
//     if (err) {
//       res.status(400).send({
//         msg: err.message
//       })
//     } else {
//       console.log(foundItems)
//       // res.locals.data.restaurants = foundRestaurants
//       res.status(200).json(foundItems)
//       next()
//     }
//   })
// }

// // Index by User
// indexUser (req, res, next) {
//   Restaurant.find({ user: req.params.id }, (err, foundRestaurants) => {
//     if (err) {
//       res.status(400).send({
//         msg: err.message
//       })
//     } else {
//       console.log(foundRestaurants)
//       res.locals.data.restaurants = foundRestaurants
//       next()
//     }
//   })
// },
