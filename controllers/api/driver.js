const Driver = require('../../models/driver/driverProfile')

const dataController = {
  async index (req, res, next){
    try{
      const foundDrivers = await Driver.find({})
      res.locals.data.drivers = foundDrivers
      next()
    } catch (e) {
      res.status(400).send({ msg: e.message })
    }
  },
  //create
  async create (req, res, next){
    // console.log(req.body)
    try{
      const createdDriver = await Driver.create(req.body)
      res.locals.data.driver = createdDriver
      next()
    } catch (e) {
      res.status(400).send({ msg: e.message })
    }
  },
  //update
  async update (req, res, next){
    try {
      const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.locals.data.driver = updatedDriver
      next()
    } catch (e) {
      res.status(400).send({ msg: e.message })
    }
  },
  //Delete
  async delete (req, res, next){
    try {
      const deletedDriver = await Driver.findByIdAndDelete(req.params.id)
      res.locals.data.driver = deletedDriver
      next()
    } catch (e) {
      res.status(400).send({ msg: e.message })
    }
  },
  // Show - finding profile info by their ID
  async show (req, res, next) {
    try{
      const foundDriver = await Driver.find({ user: req.params.id })
      // console.log(foundDriver)
      res.locals.data.driver = foundDriver
      next()
    } catch (e) {
      res.status(400).send({ msg: e.message })
    }
  }
}


const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.drivers)
  },
  show (req, res, next) {
    res.json(res.locals.data.driver)
  }
}

module.exports = {
  dataController,
  apiController
}





 
  
  
  // index (req, res, next) {
  //   Driver.find({}, (err, foundDrivers) => {
  //     if (err) {
  //       res.status(400).send({
  //         msg: err.message
  //       })
  //     } else {
  //       res.locals.data.drivers = foundDrivers
  //       next()
  //     }
  //   })
  // },


  // // Create
  // create (req, res, next) {
  //   Driver.create(req.body, (err, createdDriver) => {
  //     if (err) {
  //       res.status(400).send({
  //         msg: err.message
  //       })
  //     } else {
  //       res.locals.data.driver = createdDrievr
  //       next()
  //     }
  //   })
  // },





//   // Destroy
//   destroy (req, res, next) {
//     Driver.findByIdAndDelete(req.params.id, (err, deletedDriver) => {
//       if (err) {
//         res.status(400).send({
//           msg: err.message
//         })
//       } else {
//         res.locals.data.driver = deletedDriver
//         next()
//       }
//     })
//   },
//   // Update
//   update (req, res, next) {
//     Driver.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedDriver) => {
//       if (err) {
//         res.status(400).send({
//           msg: err.message
//         })
//       } else {
//         res.locals.data.driver = updatedDriver
//         next()
//       }
//     })
//   },
//   // Create
//   create (req, res, next) {
//     Driver.create(req.body, (err, createdDriver) => {
//       if (err) {
//         res.status(400).send({
//           msg: err.message
//         })
//       } else {
//         res.locals.data.driver = createdDriver
//         next()
//       }
//     })
//   },
//   // Edit
//   // Show - finding profile info by their ID
//   show (req, res, next) {
//     Driver.find({ user: req.params.id }, (err, foundDriver) => {
//       if (err) {
//         res.status(404).send({
//           msg: err.message,
//           output: 'Could not find a Driver with that ID'
//         })
//       } else {
//         console.log(foundDriver)
//         res.locals.data.driver = foundDriver
//         next()
//       }
//     })
//   }
// }














// createDriver (req, res, next) {
//   Driver.create(req.body, (err, createdDriver) => {
//     if (err) {
//       res.status(400).send({
//         msg: err.message
//       })
//     } else {
//       res.locals.data.Driver = createdDriver
//       next()
//     }
//   })
// },

// async createBlog (req, res, next) {
//   Blog.create(req.body, async (err, createdBlog) => {
//     if (err) {
//       res.status(400).send({
//         msg: err.message
//       })
//     } else {
//       await Usertest.findByIdAndUpdate(req.params.id, { $push: { blogs: createdBlog._id } })
//       res.locals.data.user = createdBlog
//       next()
//     }
//   })
// },
// async updateDriver (req, res, next) {
//   User.findById(req.params.id, async (err, foundUser) => {
//     if (err) {
//       res.status(404).send({
//         msg: err.message,
//         output: 'Could not find a movie with that ID'
//       })
//     } else {
//       await Driver.findByIdAndUpdate(req.params.id, { $push: { user: foundUser._id } })
//       res.locals.data.Driver = foundUser
//       next()
//     }
//   })
