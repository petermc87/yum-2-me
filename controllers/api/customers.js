const Customer = require('../../models/customer/customerProfile')
const Rating = require('../../models/rating/rating')

const dataController = {
  // Index,
  index (req, res, next) {
    Customer.find({}, (err, foundCustomers) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.customers = foundCustomers
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Customer.findByIdAndDelete(req.params.id, (err, deletedCustomer) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.customer = deletedCustomer
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    Customer.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCustomer) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.customer = updatedCustomer
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    Customer.create(req.body, (err, createdCustomer) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.customer = createdCustomer
        next()
      }
    })
  },
  // Edit
  // Show - finding profile info by their ID
  show (req, res, next) {
    Customer.find({ user: req.params.id }, (err, foundCustomer) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a Customer with that ID'
        })
      } else {
        console.log(foundCustomer)
        res.locals.data.customer = foundCustomer
        next()
      }
    })
  }
}

const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.customers)
  },
  show (req, res, next) {
    res.json(res.locals.data.customer)
  }
}

module.exports = {
  dataController,
  apiController
}
