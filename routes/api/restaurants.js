// /routes/api/users.js
const express = require('express')
const router = express.Router()
const { checkToken, dataController, apiController } = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/restaurants
router.post('/', dataController.restuarantCreate, apiController.auth)
// POST /api/restaurants/login
router.post('/login', dataController.restaurantLogin, apiController.auth)

// GET /api/restuarant/check-token
router.get('/check-token', ensureLoggedIn, checkToken)

module.exports = router