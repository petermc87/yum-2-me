// /controllers/api/users.js

const User = require('../../models/user')
const Restaurant = require('../../models/restaurant/restaurant')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create (req, res, next) {
    try {
      // console.log(user)
      const user = await User.create(req.body)
      // token will be a string
      const token = createJWT(user)
      // send back the token as a string
      // which we need to account for
      // in the client
      res.locals.data.user = user
      res.locals.data.token = token
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async restuarantCreate (req, res, next) {
    try {
      const restaurant = await Restaurant.create(req.body)
      // token will be a string
      const token = createJWT(restaurant)
      // send back the token as a string
      // which we need to account for
      // in the client
     
      res.locals.data.user = restaurant
      res.locals.data.token = token
      next()
    } catch (e) {
      res.status(400).json(e)
    }
  },
  async login (req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error()
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      next()
    } catch {
      res.status(400).json('Bad Credentials')
    }
  },
  async restaurantLogin (req, res, next) {
    try {
      const restaurant = await Restaurant.findOne({ email: req.body.email })
      if (!restaurant) throw new Error()
      const match = await bcrypt.compare(req.body.password, restaurant.password)
      if (!match) throw new Error()
      res.locals.data.restaurant = restaurant
      res.locals.data.token = createJWT(restaurant)
      next()
    } catch {
      res.status(400).json('Bad Credentials')
    }
  }
}

const apiController = {
  auth (req, res) {
    console.log('Auth')
    res.json(res.locals.data.token)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

/* -- Helper Functions -- */

function createJWT (user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}