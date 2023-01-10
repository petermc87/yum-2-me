import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import ShowRestaurant from '../../components/Restaurant/ShowRestaurant'
import MenuItem from '../../components/MenuItems/MenuItem'

// import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage ({
  foundRestaurant,
  user,
  menuItems,
  setMenuItems,
  getMenuItems

}) {

  // const [menuItems, setMenuItems] = useState([]);
  // const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);


  //--- EVENT HANDLERS ---//
  async function handleAddToOrder(itemId){
    console.log(itemId)
    const updatedCart = await ordersAPI.addItemToCart(itemId)
    console.log(updatedCart)
  }

  async function handleCheckout() {
    await ordersAPI.checkout()
    navigate('/orders')
  }

  return (
    <>
      <div className='res-icon' id='show-page'>
        <>
          <ShowRestaurant
            foundRestaurant={foundRestaurant}
            user={user}
          />
        </>
      </div>

      <h1>Your Menu</h1>
      <div className='menu-select'>
        <>
          <h2>~ Starters ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleAddToOrder={handleAddToOrder}
            filterOne='starters'
            filterTwo='starter'
            user={user}
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
          />
        </>
      </div>
    </>
  )
}
