const express = require('express')
const router = express.Router()
const itemsCtrl = require('../../controllers/api/items')

// GET /api/items
router.get('/', itemsCtrl.index)
// GET /api/items/:id
router.get('/:id', itemsCtrl.show)

// // GET /api/restaurants/items/:id
// router.get('restaurants/:id', itemsCtrl.indexUser)

module.exports = router
