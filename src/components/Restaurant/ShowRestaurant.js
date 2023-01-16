import { Link } from 'react-router-dom'
import DeleteRestauantButton from '../Buttons/DeleteRetaurantButton'
// import BackButton from '../Buttons/BackButton'
import EditButton from '../Buttons/EditButton'
import { useState } from 'react'



export default function ShowRestaurant ({
  foundRestaurant,
  deleteRestaurant,
  user
}) {
  const link = '/home'

  const [showForm, setShowForm] = useState(false)

  return (
    <>
    {showForm
      ?
        <form>
          <input placeholder='name'></input>
          <input placeholder='location'></input>
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
