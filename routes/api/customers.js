const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/customers')

// Index
router.get('/', dataController.index, apiController.index)
// Delete
router.delete('/:id', dataController.destroy, apiController.show)
// Update
router.put('/:id', dataController.update, apiController.show)
// Create
router.post('/', dataController.create, apiController.show)
// Show
router.get('/:id', dataController.show, apiController.show)

module.exports = router
