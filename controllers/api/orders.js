const Order = require('../../models/customer/order')

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  history,
  historyByRestaurant,
  order,
  update
}

// A cart is the unpaid order for a user
async function cart (req, res) {
  try {
    const cart = await Order.getCart(req.user._id)
    res.status(200).json(cart)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

// Add an item to the cart
async function addToCart (req, res) {
  try {
    const cart = await Order.getCart(req.user._id)
    await cart.addItemToCart(req.params.id)
    res.status(200).json(cart)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

// Updates an item's qty in the cart
async function setItemQtyInCart (req, res) {
  try {
    const cart = await Order.getCart(req.user._id)
    await cart.setItemQty(req.body.itemId, req.body.newQty)
    res.status(200).json(cart)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

// Update the cart's isPaid property to true
async function checkout (req, res) {
  try {
    const cart = await Order.getCart(req.user._id)
    cart.isPaid = true
    await cart.save()
    res.status(200).json(cart)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

// Return the logged in user's paid order history
async function history (req, res) {
  // Sort most recent orders first
  try {
    const orders = await Order
      .find({ user: req.user._id, isPaid: true })
      .sort('-updatedAt').exec()
    res.status(200).json(orders)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

async function historyByRestaurant (req, res) {
  try{
    const orders = await Order
      .find({
        //finding the order by the restaurantId
        "lineItems.item.restaurantId": req.params.id},
        //picking the first line item in the array of items that has the restaurantId stored
        //The restaurantId was nested when creating the new menu item
        { "lineItems.$": 1 })
      res.status(200).json(orders)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

async function order (req, res){
  try{
    const order = await Order.findById(req.params.id)
    res.status(200).json(order)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

async function update (req, res){
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedOrder)
  } catch (e) {
    res.status(400).send({ msg: e.message })
  }
}



