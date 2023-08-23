import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as ordersAPI from '../../utilities/orders-api'
import ShowRestaurant from '../../components/Restaurant/ShowRestaurant'
import MenuItem from '../../components/MenuItems/MenuItem'
import OrderDetail from '../../components/OrderDetail/OrderDetail'

export default function NewOrderPage ({
  foundRestaurant,
  user,
  menuItems,
  cart,
  setCart,
  setCurrentOrder
}) {
  const navigate = useNavigate()

  useEffect(function () {
    async function getCart () {
      const cart = await ordersAPI.getCart()
      setCart(cart)
    }
    getCart()
  }, [])

  // --- EVENT HANDLERS ---//
  async function handleAddToOrder (itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId)
    setCart(updatedCart)
  }

  async function handleChangeQty (itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
    setCart(updatedCart)
  }

  async function handleCheckout () {
    await ordersAPI.checkout()
    navigate('/orders')
  }

  return (
    <>
      <div className='res-icon' id='back-button'>
        <div className='button-container' id='back-button'>
          <button onClick={() => { navigate('/home') }}>
            &#8249;
          </button>
        </div>
      </div>
      <div className='res-icon' id='show-page'>
        <>
          <ShowRestaurant
            foundRestaurant={foundRestaurant}
            user={user}
          />
        </>
      </div>
      <h1>Restaurant Menu</h1>
      <div className='menu-select'>
        <>
          <h2>~ Starters ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleAddToOrder={handleAddToOrder}
            filterOne='starters'
            filterTwo='starter'
            user={user}
            cart={cart}
            foundRestaurant={foundRestaurant}
          />
        </>
        <>
          <h2>~ Mains ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleAddToOrder={handleAddToOrder}
            filterOne='mains'
            filterTwo='main'
            user={user}
            cart={cart}
            foundRestaurant={foundRestaurant}
          />
        </>
        <>
          <h2>~ Sides ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleAddToOrder={handleAddToOrder}
            filterOne='side'
            filterTwo='sides'
            user={user}
            cart={cart}
            foundRestaurant={foundRestaurant}
          />
        </>
        <>
          <h2>~ Desserts ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleAddToOrder={handleAddToOrder}
            filterOne='dessert'
            filterTwo='desserts'
            user={user}
            cart={cart}
            foundRestaurant={foundRestaurant}
          />
        </>
        <>
          <h2>~ Drinks ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleAddToOrder={handleAddToOrder}
            filterOne='drink'
            filterTwo='drinks'
            user={user}
            cart={cart}
            foundRestaurant={foundRestaurant}
          />
        </>
      </div>
      {cart
        ? <>
          <h1>Your Order</h1>
          <div className='menu-select' id='order-select'>
            <>
              <OrderDetail
                order={cart}
                setCurrentOrder={setCurrentOrder}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
                foundRestaurant={foundRestaurant}
                user={user}
              />
            </>
          </div>
          </>
        : <h1>No Order to Display</h1>}
    </>
  )
}
