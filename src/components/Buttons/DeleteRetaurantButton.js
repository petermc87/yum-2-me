import { Link, useNavigate } from 'react-router-dom'

export default function DeleteRestauantButton ({
  foundRestaurant,
  deleteRestaurant
}) {

const navigate = useNavigate()

  return (
    <>
      <div className='button-container'>
        <button onClick={(evt) => {
          deleteRestaurant(foundRestaurant._id)
          navigate('/home')
        }}
        >
          &#10006;
        </button>
      </div>
    </>
  )
}
