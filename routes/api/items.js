const express = require('express')
const router = express.Router()
const itemsCtrl = require('../../controllers/api/items')

// GET /api/items
router.get('/', itemsCtrl.index)
// GET /api/items/:id
router.get('/:id', itemsCtrl.show)
// DELETE
// router.get('/:id', itemsCtrl.show)

// // GET /api/restaurants/items/:id
// router.get('restaurants/:id', itemsCtrl.indexUser)

// GET menu items by restaurant
router.get('/restaurant/:id', itemsCtrl.getMenuByRestaurant)
// router.get('/restaurant/', itemsCtrl.getMenuByRestaurant)

module.exports = router
