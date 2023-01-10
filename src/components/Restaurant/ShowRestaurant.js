import { Link } from 'react-router-dom'
import DeleteRestauantButton from '../Buttons/DeleteRetaurantButton'
import BackButton from '../Buttons/BackButton'

export default function ShowRestaurant ({
  foundRestaurant,
  deleteRestaurant,
  user
}) {
  const link = '/home'

  return (
    <>
      <br />
      <h2>{foundRestaurant.name}</h2>
      <br />
      <h2>{foundRestaurant.type}</h2>
      <h3>Located at: {foundRestaurant.location}</h3>
      <div className='menu-button'>
        {
        user.userType
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
