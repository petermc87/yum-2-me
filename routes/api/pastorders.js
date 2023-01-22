const express = require('express')
const router = express.Router()
const ordersCtrl = require('../../controllers/api/orders')

router.get('/:id', ordersCtrl.order)

module.exports = router
 