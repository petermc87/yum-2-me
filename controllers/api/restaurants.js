const Restaurant = require('../../models/restaurant/restaurantProfile')
const Rating = require('../../models/rating/rating')

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
        // console.log(foundRestaurants)
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
  // Create Menu item
  async createMenu (req, res, next) {
    try {
      const newMenuItem = await Item.create(req.body)
      // find the restaurant by the id stored in the new menu item
      await Restaurant.findByIdAndUpdate(newMenuItem.restaurantId, {
        // push that new menu item into the menu array
        $push: {
          menu: newMenuItem._id
        }
      })
      res.status(200).json(newMenuItem)
      res.locals.data.restaurant = newMenuItem
      next()
    } catch (error) {
      console.log(error)
    }
  },
  //Create rating
async createRating (req, res, next) {
  try{
    //stores the new rating in a variable
    const rating = await Rating.create(req.body)
    //finds the restaurant profile by the stored user id and updates
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, {
      $push: {
        ratings: rating
      }
    })
    res.status(200).json(restaurant)
    res.locals.data.restaurant= restaurant
    next()
  } catch (e){
    res.status(400).json(e)
  }
},
  // Find menu items by restaurant
  // Index by User
  indexItems (req, res, next) {
    Item.find({ restaurantId: req.params.id }, (err, foundItems) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.restaurants = foundItems
        next()
      }
    })
  },
  // Delete Menu Items
  deleteItem (req, res, next) {
    console.log(req.params.id)
    Item.findByIdAndDelete(req.params.id, (err, deletedRestaurant) => {
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



// async createRating (req, res, next) {
//   try{
//     console.log(req.body)
//     console.log(req.params.id)
//     //stores the new rating in a variable
//     const rating = await Rating.create(req.body)
//     //finds the restaurant profile by the stored user id
//     await Restaurant.findByIdAndUpdate(req.params.id, {
//       $push: {
//         ratings: rating
//       }
//     })
//     res.status(200).json(rating)
//     res.locals.data.customer = rating
//     next()
//   } catch (e){
//     res.status(400).json(e)
//   }
// }



    // restaurantComments.ratings.rater.forEach(rater => {
    //   console.log(rater)
    //   if(rater === rating.rater){
    //     console.log('it already exists')
    //   }
    // })
    // console.log(restaurantComments.ratings)

    //   restaurantComments.ratings.forEach(rater => {
    //   console.log(rater)
    // })

    // restaurantComments.ratings.forEach(currentrating => {
    //   console.log(currentrating.rater._id, rating.rater)

    //   if(currentrating.rater._id === rating.rater._id){
    //     console.log('it already exists')
    //     res.locals.data.restaurant = 'You have already created a comment'
    //     next()
    //   }
    //   else()
    // })



// async createRating (req, res, next) {
//   try{
//     console.log(req.body)
//     //stores the new rating in a variable
//     const rating = await Rating.create(req.body)
//     //finds the restaurant profile by the stored user id
//     // await Restaurant.findByIdAndUpdate(rating.restaurant, {
//     //   $push: {
//     //     ratings: rating
//     //   }
//     // })
//     res.status(200).json(rating)
//     res.locals.data.customer = rating
//     next()
//   } catch (e){
//     res.status(400).json(e)
//   }
// },