const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/userstest')

// POST /api/restaurants
router.post('/', dataController.create, apiController.show)

// // PUT /api/restaurants/:id
// router.put('/:id', dataController.addBlog, apiController.show)

// PUT /api/restaurants/:id
router.put('/:id', dataController.createBlog, apiController.show)

// // POST /api/restaurants/:id
// router.post('/:id', dataController.addblog, apiController.show)

module.exports = router
