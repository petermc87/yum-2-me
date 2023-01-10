import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function RestaurantShowPage ({
  restaurantsByUser,
  setFoundRestaurant,
  foundRestaurant,
  getRestaurantsByUser,
  setRestaurantsByUser,
  user,

  getMenuItems,
  setMenuItems
}) {
  return (
    <>

      {

      restaurantsByUser
        ? <>

          <div className='index-header'>
            <h1>Your Restaurants</h1>
          </div>

          {
      restaurantsByUser.map((restaurant) => {
        return (
          <>
            <div className='res-icon' key={restaurant._id} id='res-icon-index'>
              <div className='res-image' />
              <div className='res-details'>
                <h1>{restaurant.name}</h1>
                <p>{restaurant.type}</p>
              </div>
              <div className='res-button'>
                <button onClick={() => {
                  setFoundRestaurant(restaurant)
                }}
                >
                  <Link style={{ textDecoration: 'none', color: 'white' }} to='/edit'>Edit</Link>
                </button>
              </div>
            </div>
          </>
        )
      })
      }
        </>

        : 'No restaurants to display'
    }
    </>

  )
}
