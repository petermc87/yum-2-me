import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function AllDrivers({
    setFoundDriver,
    foundDriver,
    getDriverProfile
}){

const [drivers, setDrivers] = useState([])
const [userInfo, setUserInfo] = useState()
const [driversByUser, setDriversByUser] = useState([])

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

//Get user information
const getUser = async (id) => {
  try{
    const response = await fetch(`api/users/${id}`)
    const data = response.json()
  } catch (e) {
    console.log(e)
  }
}

const getDriversByUser = async () => {
  try{
    const response = await fetch(`api/users/`)
    const data = await response.json()
    setDriversByUser(data)
  } catch (e) {
    console.log(e)
  }
}

useEffect(() => {
    getDrivers()
    getDriversByUser()
  }, [])

//   console.log(driversByUser)

  function availability (driver) {
    if(driver && driver.availability){
      return <div className='driver-available'>Available</div>
    }
    else{
      return <div className='driver-busy'>Busy</div>
    }
  }


const driverInfo = (id) => {
    //finding the drivers user info by the index from the nested user id in 'driver'
    const driverIndex = driversByUser.findIndex(element => element._id === id)
    if (driverIndex >= 0){
        return <>{driversByUser[driverIndex].name}</>
    }
}

  return (
    <>
      <div className='res-icon' id='back-button'>
        <div className='button-container' id='back-button'>
          <button onClick={()=>{navigate('/restaurantorders')}}>
            &#8249;
          </button>
        </div>
      </div>
      <h1>All Drivers</h1>
      {
        drivers
          ? <>
            {
              drivers.map((driver) => {
                return (
                  <div className='res-icon' key={driver._id} id='res-icon-index' onClick={() => {
                    setFoundDriver(driver)
                  }}>
                    <div className='res-image'>
                      <img src={driver.image} />
                    </div>
                    <div className='res-details'>
                     <h2>{driverInfo(driver.user)}</h2>
                      <p>{driver.location}</p>
                      <div>{availability(driver)}</div>
                    </div>
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