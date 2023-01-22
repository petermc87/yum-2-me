const Driver = require('../../models/driver/driverProfile')
const Order = require('../../models/customer/order')
const dataController = {
  async index (req, res, next) {
    try {
      const foundDrivers = await Driver.find({})
      res.locals.data.drivers = foundDrivers
      next()
    } catch (e) {
      res.status(400).send({ msg: e.message })
    }
  },
  // create
  async create (req, res, next) {
    // console.log(req.body)
    try {
      const createdDriver = await Driver.create(req.body)
      res.locals.data.driver = createdDriver
      next()
    } catch (e) {
      res.status(400).send({ msg: e.message })
    }
  },
  // update
  async update (req, res, next) {
    try {
      const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.locals.data.driver = updatedDriver
      next()
    } catch (e) {
      res.status(400).send({ msg: e.message })
    }
  },
  // update orders
  async updateDriverOrders (req, res, next) {
    try {
      const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, {
        $push: {
          assignedOrders: req.body
        },
        availability: false
      })
      res.locals.data.driver = updatedDriver
      next()
    } catch (e) {
      res.status(400).send({ msg: e.message })
    }
  },

  // Delete
  async delete (req, res, next) {
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
    try {
      const foundDriver = await Driver.find({ user: req.params.id })
      // console.log(foundDriver)
      res.locals.data.driver = foundDriver
      next()
    } catch (e) {
      res.status(400).send({ msg: e.message })
    }
  },

  async ordersIndex (req, res, next) {
    try {
      const orders = await Order.find(
        {"driver": req.params.id}
      )
      res.locals.data.drivers = orders
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
