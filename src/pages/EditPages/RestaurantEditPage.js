import { Link } from 'react-router-dom'

export default function NewOrderPage ({ foundRestaurant, user, getRestaurantsByUser, setRestaurantsByUser }) {

  const deleteRestaurant= async (id) => {
    try {
      await fetch(`/api/restaurants/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='res-icon' id='show page'>
      <h1>Edit Your Restaurant Below</h1>
      <br />
      <h2>{foundRestaurant.name}</h2> <br />
      <h2>{foundRestaurant.type}</h2>
      <h3>Located at: {foundRestaurant.location}</h3>
      <button onClick={(evt) => {
        evt.stopPropagation()
            deleteRestaurant(foundRestaurant._id)
            getRestaurantsByUser(user._id)
            }}
          >
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>Delete</Link>
      </button>
    </div>
  )
}

