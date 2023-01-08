const Restaurant = require('../../models/restaurant/restaurantProfile')

const Item = require('../../models/restaurant/item')

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
  // Index by User
  indexUser (req, res, next) {
    Restaurant.find({ user: req.params.id }, (err, foundRestaurants) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        console.log(foundRestaurants)
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
  // Update Menu
  async updateMenu (req, res, next) {
    // JobPost.findByIdAndDelete(req.params.id, (err, deletedJobPost) => {
    //   if (err) {
    //     res.status(400).send({
    //       msg: err.message
    //     })
    //   } else {
    //     res.locals.data.jobPost = deletedJobPost
    //     next()
    //   }
    // })
    try {
      const addedItem = await Item.findById(req.params.id)
      await Restaurant.findByIdAndUpdate(addedItem.company, {
        $push: {
          menu: req.params.id
        }
      })
      res.status(200).json(addedItem)
    } catch (error) {
      console.log(error)
    }
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
