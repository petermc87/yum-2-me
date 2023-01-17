import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import MenuItem from '../../components/MenuItems/MenuItem'
import NewMenuItem from '../../components/MenuItems/NewMenuItem'
import ShowRestaurant from '../../components/Restaurant/ShowRestaurant'

export default function RestaurantEditPage ({
  setFoundRestaurant,
  foundRestaurant,
  user,
  getRestaurantsByUser,
  menuItems,
  setMenuItems,
  getMenuItems
}) {
  
  // ----HOOKS---//
  const [newMenuItem, setNewMenuItem] = useState({
    name: '',
    restaurantId: foundRestaurant._id,
    category: '',
    price: Number
  })

  const navigate = useNavigate()

  // ----BACKEND REQUESTS ----//
  // delete restaurant
  const deleteRestaurant = async (id) => {
    try {
      await fetch(`/api/restaurants/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }

      })
      console.log(menuItems)
      getRestaurantsByUser(user._id)
    } catch (error) {
      console.error(error)
    }
  }

  // create menu item
  const createMenuItem = async () => {
    try {
      const response = await fetch('/api/restaurants/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newMenuItem })
      })
      const data = await response.json()
      setNewMenuItem({
        name: '',
        restaurantId: foundRestaurant._id,
        // category,
        price: Number
      })
    } catch (error) {
      console.error(error)
    }
  }

  // delete menu item
  const deleteItem = async (id) => {
    try {
      await fetch(`/api/restaurants/menu/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }

      })
      getMenuItems(foundRestaurant._id)
    } catch (error) {
      console.error(error)
    }
  }

  // --- EVENT HANDLERS ---//
  const menuHandleChange = (evt) => {
    setNewMenuItem({ ...newMenuItem, [evt.target.name]: evt.target.value })
  }

  const handleRemoveItem = (id) => {
    deleteItem(id)
    setMenuItems(getMenuItems(foundRestaurant._id))
  }

  const handleSubmitMenuItem = (e) => {
    e.preventDefault()
    createMenuItem()
    navigate('/edit')
    getMenuItems(foundRestaurant._id)
  }

  useEffect(() => {
    setMenuItems(getMenuItems(foundRestaurant._id))
  }, [])

  return (
    <>
      <h1>Edit Your Restaurant Below</h1>
      <div className='res-icon' id='show-page'>

        <ShowRestaurant
          setFoundRestaurant={setFoundRestaurant}
          foundRestaurant={foundRestaurant}

          deleteRestaurant={deleteRestaurant}

          getRestaurantsByUser={getRestaurantsByUser}
          
          user={user}
        />

        <NewMenuItem
          createMenuItem={createMenuItem}
          newMenuItem={newMenuItem}
          menuHandleChange={menuHandleChange}
          getMenuItems={getMenuItems}
          handleSubmitMenuItem={handleSubmitMenuItem}
        />
      </div>

      <h1>Your Menu</h1>
      <div className='menu-select'>
        <>
          <h2>~ Starters ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleRemoveItem={handleRemoveItem}
            filterOne='starters'
            filterTwo='starter'
            user={user}
          />
        </>
        <>
          <h2>~ Mains ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleRemoveItem={handleRemoveItem}
            filterOne='mains'
            filterTwo='main'
            user={user}
          />
        </>
        <>
          <h2>~ Sides ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleRemoveItem={handleRemoveItem}
            filterOne='sides'
            filterTwo='side'
            user={user}
          />
        </>
        <>
          <h2>~ Desserts ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleRemoveItem={handleRemoveItem}
            filterOne='desserts'
            filterTwo='dessert'
            user={user}
          />
        </>
        <>
          <h2>~ Drinks ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleRemoveItem={handleRemoveItem}
            filterOne='drinks'
            filterTwo='drink'
            user={user}
          />
        </>
      </div>
    </>
  )
}
