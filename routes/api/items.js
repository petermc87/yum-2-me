const express = require('express')
const router = express.Router()
const itemsCtrl = require('../../controllers/api/items')

// GET /api/items
router.get('/', itemsCtrl.index)
// GET /api/items/:id
router.get('/:id', itemsCtrl.show)

// GET menu items by restaurant
router.get('/restaurant/:id', itemsCtrl.getMenuByRestaurant)
// router.get('/restaurant/', itemsCtrl.getMenuByRestaurant)

// // DELETE menu item by restaurant
// router.delete('/restaurant/:id', itemsCtrl.deleteMenuItemByRestaurant)


module.exports = router
