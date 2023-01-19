const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/driver')

// Index
router.get('/', dataController.index, apiController.index)
// Create
router.post('/', dataController.create, apiController.show)
// Delete
router.delete('/:id', dataController.delete, apiController.show)
// Update
router.put('/:id', dataController.update, apiController.show)
// Show
router.get('/:id', dataController.show, apiController.show)

module.exports = router