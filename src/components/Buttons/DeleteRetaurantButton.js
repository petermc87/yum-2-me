import { Link } from 'react-router-dom'

export default function DeleteRestauantButton ({
  foundRestaurant,
  deleteRestaurant
}) {
  return (
    <>
      <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>
        <button onClick={(evt) => {
          deleteRestaurant(foundRestaurant._id)
        }}
        >
          &#10006;
        </button>
      </Link>
    </>
  )
}
