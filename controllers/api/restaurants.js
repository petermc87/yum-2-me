const Restaurant = require('../../models/restaurant/restaurantProfile')

const dataController = {
  // Index,
  index (req, res, next) {
    Restaurant.find({}, (err, foundRestaurants) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.restaurants = foundRestaurants
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Restaurant.findByIdAndDelete(req.params.id, (err, deletedRestaurant) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.restaurant = deletedRestaurant
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRestaurant) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.restaurant = updatedRestaurant
        next()
      }
    })
  },
  // Create
  // create (req, res, next) {
  //   Restaurant.create(req.body, (err, createdRestaurant) => {
  //     if (err) {
  //       res.status(400).send({
  //         msg: err.message
  //       })
  //     } else {
  //       res.locals.data.restaurant = createdRestaurant
  //       next()
  //     }
  //   })
  // },
  create (req, res, next) {
    Restaurant.create(req.body, (err, createdRestaurant) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.restaurant = createdRestaurant
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Restaurant.findById(req.params.id, (err, foundRestaurant) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a Restaurant with that ID'
        })
      } else {
        res.locals.data.restaurant = foundRestaurant
        next()
      }
    })
  }
}

const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.restaurants)
  },
  show (req, res, next) {
    res.json(res.locals.data.restaurant)
  }
}

module.exports = { dataController, apiController }
