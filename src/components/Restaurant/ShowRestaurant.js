import { Link } from 'react-router-dom'
import DeleteRestauantButton from '../Buttons/DeleteRetaurantButton'
import EditButton from '../Buttons/EditButton'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

  //handleChange function? might not work for each element. Try to dry this

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

  const updateRestaurant = async () => {
    try{
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
    // getRestaurantsByUser(user._id)
    navigate('/home')
  }

  return (
    <>
    {showForm
      ?
        <form onSubmit={(e) => {
            handleSubmit(e)
        }}>
            <input type='text'value={newRestaurantInfo.name} placeholder='name' onChange={(e) => {
              setNewRestaurantInfo({
                ...newRestaurantInfo, name: e.target.value
              })
            }}/>
            <input type='text'value={newRestaurantInfo.image} placeholder='image' onChange={(e) => {
              setNewRestaurantInfo({
                ...newRestaurantInfo, image: e.target.value
              })
            }}/>
            <input type='text'value={newRestaurantInfo.type} placeholder='type' onChange={(e) => {
              setNewRestaurantInfo({
                ...newRestaurantInfo, type: e.target.value
              })
            }}/>
            <input type='text'value={newRestaurantInfo.location} placeholder='location' onChange={(e) => {
              setNewRestaurantInfo({
                ...newRestaurantInfo, location: e.target.value
              })
            }}/>                             
          <button type='submit'>
            Edit Restaurant
          </button>
          <button onClick={() => {
            setShowForm(false)}
            }> Close
         </button>
        </form>
      :
        <>
          <br />
          <h2>{foundRestaurant.name}</h2>
          <br />
          <div className='menu-image'>
            <img src={foundRestaurant.image} />
          </div>
          <h2>{foundRestaurant.type}</h2>
          <h3>Location: <br/>{foundRestaurant.location}</h3>
          <br/>
          {/* <button onClick={navigate('/restaurantorders')}>
            Order History
          </button> */}
          <button onClick={() => {
            navigate('/restaurantorders')
          }}>Order History</button>
          <br/>
          <br/>
          <br/>
          <br/>
        </>
        
    }
      <div className='menu-button'>
        {user.userType === true || user.userType === 'restaurant'
          ? 
            <>
              <div className='button-container'>
                <button onClick={restaurantIndexUpdate}>
                  &#8249;
                </button>
              </div>
              <DeleteRestauantButton
                foundRestaurant={foundRestaurant}
                deleteRestaurant={deleteRestaurant}
              />
              <EditButton 
                setShowForm={setShowForm}
              />
            </>
          : 
            <div className='button-container'>
              <button onClick={restaurantIndexUpdate}>
                &#8249;
              </button>
            </div>
        }
      </div>
    </>
  )
}

