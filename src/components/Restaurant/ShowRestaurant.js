import { Link } from 'react-router-dom'
import DeleteRestauantButton from '../Buttons/DeleteRetaurantButton'
import EditButton from '../Buttons/EditButton'
import { useEffect, useState } from 'react'




  //check controller and route

  //handleChange function? might not work for each element. Try to dry this

export default function ShowRestaurant ({
  setFoundRestaurant,
  foundRestaurant,
  deleteRestaurant,
  user
}) {
  const link = '/home'

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
    } catch (e) {
      console.error(e)
    } 
  }

// console.log(foundRestaurant)
// setNewRestaurantInfo(foundRestaurant)
 // console.log(newRestaurantInfo)
 //  console.log(newRestaurantInfo.location)
 // console.log(newRestaurantInfo)

  useEffect(() => {
    setNewRestaurantInfo(foundRestaurant)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateRestaurant()
    setShowForm(false)
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
          <h3>Located at: {foundRestaurant.location}</h3>
        </>
    }
      <div className='menu-button'>
        {user.userType
          ? <>
              <Link style={{ textDecoration: 'none', color: 'white' }} to={link}>
                <button>
                  &#8249;
                </button>
              </Link>
              <DeleteRestauantButton
                foundRestaurant={foundRestaurant}
                deleteRestaurant={deleteRestaurant}
              />
              <EditButton 
                setShowForm={setShowForm}
              />
            </>
          : <Link style={{ textDecoration: 'none', color: 'white' }} to={link}>
            <button>
              &#8249;
            </button>
          </Link>
        }
      </div>
    </>
  )
}



  //input values that will target each individual input field matching the element of the restaurant
  //store foundRestaurant in setNewRestaurantInfo

  //pass down setFoundRestaurant so that it will show up on the page

    //put request
