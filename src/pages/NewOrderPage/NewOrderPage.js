import { useState, useEffect, useReducer } from 'react'
import ShowRestaurant from '../../components/Restaurant/ShowRestaurant'
import MenuItem from '../../components/MenuItems/MenuItem'

export default function NewOrderPage ({ 
  foundRestaurant,
  user,
  menuItems,
  setMenuItems,
  getMenuItems

}) {


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
            // handleRemoveItem={handleRemoveItem}
            filterOne='starters'
            filterTwo='starter'
            user={user}
          />
        </>
        <>
          <h2>~ Mains ~</h2>
          <MenuItem
            menuItems={menuItems}
            // handleRemoveItem={handleRemoveItem}
            filterOne='mains'
            filterTwo='main'
            user={user}
          />
        </>
        <>
          <h2>~ Sides ~</h2>
          <MenuItem
            menuItems={menuItems}
            // handleRemoveItem={handleRemoveItem}
            filterOne='side'
            filterTwo='sides'
            user={user}
          />
        </>
        <>
          <h2>~ Desserts ~</h2>
          <MenuItem
            menuItems={menuItems}
            filterOne='dessert'
            filterTwo='desserts'
            user={user}
          />
        </>
        <>
          <h2>~ Drinks ~</h2>
          <MenuItem
            menuItems={menuItems}
            filterOne='drink'
            filterTwo='drinks'
            user={user}
          />
        </>
      </div>
</>
  )
}
