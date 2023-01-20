
import { useState, useEffect } from 'react'
import HomePage from '../HomePage/HomePage'
import LandingPage from '../LandingPage/LandingPage'

function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)
  const [restaurantsByUser, setRestaurantsByUser] = useState([])
  // Profile info
  const [customerProfile, setCustomerProfile] = useState([])
  const [restaurantProfile, setRestaurantProfile] = useState([])
  const [driverProfile, setDriverProfile] = useState({})
  // driver
  const [foundDriver, setFoundDriver] = useState()


  // customer
  const [foundCustomer, setFoundCustomer] = useState({})



  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  // Index created restaurants by user
  const getRestaurantsByUser = async (id) => {
    try {
      const response = await fetch(`/api/restaurants/user/${id}`)
      const data = await response.json()
      // console.log(data)
      setRestaurantsByUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  // Get customer profile
  const getCustomerProfile = async (id) => {
    try {
      const response = await fetch(`/api/customers/${id}`)
      const data = await response.json()
      setCustomerProfile(data)
    } catch (err) {
      console.log(err)
    }
  }

  // Get restaurant profile
  const getRestaurantProfile = async (id) => {
    try {
      const response = await fetch(`/api/restaurants/${id}`)
      const data = await response.json()
      setRestaurantProfile(data)
    } catch (err) {
      console.log(err)
    }
  }

  // get Driver Profile
  const getDriverProfile = async (id) => {
    try{
      const response = await fetch (`/api/drivers/${id}`)
      const data = await response.json ()
      setFoundDriver(data)
      console.log(foundDriver)
    } catch (e) {
      console.log(e)
    }
  }

  // Get Customer Profile
  const getCustomer = async (id) => {
    try {
      const response = await fetch(`api/customers/${id}`)
      const data = await response.json()
      // console.log(data)
      setFoundCustomer(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <>
      {user
        ? <>
          <HomePage
            setUser={setUser}
            user={user}

            getRestaurantsByUser={getRestaurantsByUser}
            setRestaurantsByUser={setRestaurantsByUser}
            restaurantsByUser={restaurantsByUser}

            getCustomerProfile={getCustomerProfile}
            setCustomerProfile={setCustomerProfile}
            customerProfile={customerProfile}

            getCustomer={getCustomer}

            setFoundCustomer={setFoundCustomer}
            foundCustomer={foundCustomer}


            getRestaurantProfile={getRestaurantProfile}
            setRestaurantProfile={setRestaurantProfile}
            restaurantProfile={restaurantProfile}

            getDriverProfile={getDriverProfile}
            setDriverProfile={setDriverProfile}
            driverProfile={driverProfile}
            setFoundDriver={setFoundDriver}
            foundDriver={foundDriver}            
          />
        </>
        : <LandingPage
            setUser={setUser}
            restaurantsByUser={restaurantsByUser}
            getRestaurantsByUser={getRestaurantsByUser}
            setRestaurantsByUser={setRestaurantsByUser}

            getCustomerProfile={getCustomerProfile}
            getRestaurantProfile={getRestaurantProfile}

            setCustomerProfile={setCustomerProfile}
            setRestaurantProfile={setRestaurantProfile}

            setFoundCustomer={setFoundCustomer}

            getDriverProfile={getDriverProfile}
            setDriverProfile={setDriverProfile}

      
          />}
    </>
  )
}

export default App
