const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/restaurants')

// Create
router.post('/', dataController.create, apiController.show)
// Index
router.get('/', dataController.index, apiController.index)
// Delete
router.delete('/:id', dataController.destroy, apiController.show)
// Update
router.put('/:id', dataController.update, apiController.show)
// Show
router.get('/:id', dataController.show, apiController.show)

// IndexUser
router.get('/user/:id', dataController.indexUser, apiController.index)

// MENU ITEMS
// Create Menu Item
router.post('/menu', dataController.createMenu, apiController.show)

// Get Menu Items
router.get('/menu/items/:id', dataController.indexItems, apiController.index)

// Delete Menu Items
router.delete('/menu/items/:id', dataController.deleteItem, apiController.show)

// RATINGS
// Create
router.post('/rating/:id', dataController.createRating, apiController.show)

module.exports = router
