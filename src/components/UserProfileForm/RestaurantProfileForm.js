import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateRestaurantProfile ({
  createRestaurant,
  newRestaurant,
  restaurantHandleChange,
  getRestaurantsByUser,
  user
}) {
  useEffect(() => {
    getRestaurantsByUser(user._id)
  }, [])

  const navigate = useNavigate()

  const handleSubmit = () => {
    createRestaurant()
    getRestaurantsByUser(user._id)
    navigate('/home')
  }

  return (
    <>
      <div className='form-container' id='form-container-profile'>
        <h2>Create Restaurant</h2>
        <form
          autoComplete='off' onSubmit={handleSubmit}
        >
          <input type='text' name='name' value={newRestaurant.name} onChange={restaurantHandleChange} placeholder='name' required />
          <input type='text' name='location' value={newRestaurant.location} onChange={restaurantHandleChange} placeholder='location' required />
          <input type='text' name='type' value={newRestaurant.type} onChange={restaurantHandleChange} placeholder='type' required />
          <input type='text' name='image' value={newRestaurant.image} onChange={restaurantHandleChange} placeholder='image' required />
          <div className='create-button'>
            <button type='submit'>CREATE
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
