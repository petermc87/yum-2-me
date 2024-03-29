import { Link, useNavigate } from 'react-router-dom'
import DeleteRestauantButton from '../Buttons/DeleteRetaurantButton'
import EditButton from '../Buttons/EditButton'
import { useEffect, useState } from 'react'
import Ratings from '../Ratings/Ratings'
import { Rating } from '@mui/material'

export default function ShowRestaurant ({
  setFoundRestaurant,
  foundRestaurant,
  deleteRestaurant,
  getRestaurantsByUser,
  user
}) {
  const link = '/home'
  const navigate = useNavigate()

  const [showForm, setShowForm] = useState(false)
  const [newRestaurantInfo, setNewRestaurantInfo] = useState()
  const [showComments, setShowComments] = useState(false)

  const updateRestaurant = async () => {
    try {
      const response = await fetch(`/api/restaurants/${foundRestaurant._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRestaurantInfo)
      })
      const data = await response.json()
      setFoundRestaurant(data)
      getRestaurantsByUser(user._id)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    setNewRestaurantInfo(foundRestaurant)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateRestaurant()
    setShowForm(false)
  }

  const restaurantIndexUpdate = () => {
    navigate('/home')
  }

  const allReviews = foundRestaurant.ratings.map(rating => {
    <Ratings
      rating={rating}
    />
  })
  return (
    <>
      {showForm
        ? <form onSubmit={(e) => {
          handleSubmit(e)
        }}
          >
          <input
            type='text' value={newRestaurantInfo.name} placeholder='name' onChange={(e) => {
              setNewRestaurantInfo({
                ...newRestaurantInfo, name: e.target.value
              })
            }}
          />
          <input
            type='text' value={newRestaurantInfo.image} placeholder='image' onChange={(e) => {
              setNewRestaurantInfo({
                ...newRestaurantInfo, image: e.target.value
              })
            }}
          />
          <input
            type='text' value={newRestaurantInfo.type} placeholder='type' onChange={(e) => {
              setNewRestaurantInfo({
                ...newRestaurantInfo, type: e.target.value
              })
            }}
          />
          <input
            type='text' value={newRestaurantInfo.location} placeholder='location' onChange={(e) => {
              setNewRestaurantInfo({
                ...newRestaurantInfo, location: e.target.value
              })
            }}
          />
          <div className='button-container'>
            <button type='submit'>
              Submit
            </button>
            <button onClick={() => {
              setShowForm(false)
            }}
            > Cancel
            </button>
          </div>

        </form>
        : <>
          <br />
          <h2>{foundRestaurant.name}</h2>
          <br />
          <div className='menu-image'>
            <img src={foundRestaurant.image} />
          </div>
          <h2>{foundRestaurant.type}</h2>
          <h3>Location: <br />{foundRestaurant.location}</h3>
          <br />
          <br />
          <br />
        </>}
      {/* If the profile is restaurant, then you are allowed to edit or delete your */}
      {/* restaurants. */}
      <div className='menu-button'>
        {user.userType === 'true' || user.userType === 'restaurant'
          ? <>
            <DeleteRestauantButton
              foundRestaurant={foundRestaurant}
              deleteRestaurant={deleteRestaurant}
            />
            <EditButton
              setShowForm={setShowForm}
            />
          </>
          : ''}
      </div>
      <br />
      <br />
      {user.userType === 'true' || user.userType === 'restaurant'
        ? <div className='button-container' id='history-button'>
          <button onClick={() => {
            navigate('/restaurantorders')
          }}
          >Order History
          </button>
        </div>
        : ''}

      <div>
        {!showComments
          ? <>
            <div className='review-reveal' onClick={() => { setShowComments(true) }}><h4>show all reviews &#8964;</h4></div>
            </>
          : <>
            <div className='review-reveal' onClick={() => { setShowComments(false) }}><h4>hide reviews &#8963;</h4></div>
            </>}
      </div>
      {/* <Ratings/> */}
      {showComments
        ? foundRestaurant.ratings.length
          ?
          // allReviews
          foundRestaurant.ratings.map(rating => {
            <Rating
              rating={rating}
            />
          })
          : ''
        : ''}
      <br />
    </>
  )
}
