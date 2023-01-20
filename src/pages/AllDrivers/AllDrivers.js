import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function AllDrivers(){

const [drivers, setDrivers] = useState([])

const navigate = useNavigate()

//Get all drivers
const getDrivers = async () => {
  try{
    const response = await fetch(`api/drivers`)
    const data = await response.json()
    setDrivers(data)
  } catch (e) {
    console.log(e)
  }
}

useEffect(() => {
    getDrivers()
  }, [])

  console.log(drivers)

  return (
    <>
      <h1>All Drivers</h1>
      <div className='button-container'>
       <button onClick={()=>{navigate('/restaurantorders')}}>
        &#8249;
      </button>
      </div>
      {
        drivers
          ? <>
            {
              drivers.map((driver) => {
                return (
                  <div className='res-icon' key={driver._id} id='res-icon-index'>
                    <div className='res-image'>
                      <img src={driver.image} />
                    </div>
                    <div className='res-details'>
                      <h1>{driver.location}</h1>
                      <p>{driver.availability}</p>
                    </div>
                    {/* <div className='res-button'>
                      <button
                        to='orders/new' onClick={() =>
                        // setFoundRestaurant(restaurant)
                          handleChange(restaurant)}
                      >
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/orders/new'>Order from here</Link>
                      </button>
                    </div> */}
                  </div>
                )
              })
            }
            </>
          : 'No drivers to display'
      }
    </>
  )
}