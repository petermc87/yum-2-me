// const e = require('express')
const Usertest = require('../../models/restaurant/usertest')
const Blog = require('../../models/restaurant/blog')
require('../../models/restaurant/blog')
const dataController = {
  async addBlog (req, res) {
    try {
      const updatedUser = await Usertest.findByIdAndUpdate(req.params.id)
        .populate('blogs').exec()
      res.status(200).json(updatedUser)
      res.locals.data.user = updatedUser
    } catch (e) {
      res.status(400).json({ msg: e.message })
    }
  },

  async createBlog (req, res, next) {
    Blog.create(req.body, async (err, createdBlog) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        await Usertest.findByIdAndUpdate(req.params.id, { $push: { blogs: createdBlog._id } })
        res.locals.data.user = createdBlog
        next()
      }
    })
  },

  // addBlog (req, res, next) {
  //   Usertest.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUsertest) => {
  //     if (err) {
  //       res.status(400).send({
  //         msg: err.message
  //       })
  //     } else {
  //       updatedUsertest.populate("blogs").exec()
  //       res.locals.data.user = updatedUsertest
  //       next()
  //     }
  //   })
  // },
  create (req, res, next) {
    Usertest.create(req.body, (err, createdUser) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.user = createdUser
        next()
      }
    })
  }
}

const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.users)
  },
  show (req, res, next) {
    res.json(res.locals.data.user)
  }
}

module.exports = {
  dataController,
  apiController
}
