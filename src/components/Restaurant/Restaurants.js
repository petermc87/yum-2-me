import { Link } from 'react-router-dom'

export default function AllRestaurants ({ restaurants, setFoundRestaurant }) {
  return (
    <>
        {
        restaurants
          ? <>
            {
        restaurants.map((restaurant) => {
          return (
            <div className='res-icon' key={restaurant._id} >
              {/* <img src='public/images/restaurantback.png' /> */}
            <h1>{restaurant.name}</h1>
                <p>{restaurant.type}</p>
                <button to='orders/new' onClick={() => setFoundRestaurant(restaurant)}>
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Order from here</Link>
                </button>
                
            </div>
          )
        })
        }
          </>
          : 'No restaurants to display'
      }
    </>
  )
}