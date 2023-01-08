import { useEffect } from "react"
import { Link } from 'react-router-dom'
export default function RestaurantShowPage ({
    restaurantsByUser,
    setFoundRestaurant
})

{
    
  return (
    <>

    {
         
      restaurantsByUser
        ? <>     

    
    <div className="index-header">
        <h1>Your Restaurants</h1>
     </div>

          {
      restaurantsByUser.map((restaurant) => {
        return (
        <>
          <div className='res-icon' key={restaurant._id} id='res-icon-index' >
            <div className="res-image">
            </div>
            <div className="res-details">
                <h1>{restaurant.name}</h1>
                <p>{restaurant.type}</p>
            </div>
            <div className="res-button">
            <button to='orders/new' onClick={() => setFoundRestaurant(restaurant)}>
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

