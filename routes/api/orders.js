const express = require('express')
const router = express.Router()
const ordersCtrl = require('../../controllers/api/orders')

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart)
// GET /api/orders/history
router.get('/history', ordersCtrl.history)
// GET /api/orders/history/restaurant/:id
router.get('/history/restaurant/:id', ordersCtrl.historyByRestaurant)
// GET /api/orders/:id
router.get('/:id', ordersCtrl.order)
// GET /api/orders/:id
router.put('/:id', ordersCtrl.update)



// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart)
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout)
// PUT /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart)

module.exports = router
 