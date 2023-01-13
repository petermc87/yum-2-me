
import { useState, useEffect } from 'react'
import HomePage from '../HomePage/HomePage'
import LandingPage from '../LandingPage/LandingPage'

function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)
  const [restaurantsByUser, setRestaurantsByUser] = useState([])
  //Profile info
  const [customerProfile, setCustomerProfile] = useState([])
  const [restaurantProfile, setRestaurantProfile] = useState([])

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
      console.log(data)
      setRestaurantsByUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  //Get customer profile
  const getCustomerProfile = async (id) => {
    try {
      const response = await fetch(`/api/customers/${id}`)
      const data = await response.json()
      setCustomerProfile(data)
    } catch (err) {
      console.log(err)
    }
  }

  //Get restaurant profile
  const getRestaurantProfile = async (id) => {
    try {
      const response = await fetch(`/api/restaurants/${id}`)
      const data = await response.json()
      setRestaurantProfile(data)
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
            user={user}
            setUser={setUser}
            restaurantsByUser={restaurantsByUser}
            getRestaurantsByUser={getRestaurantsByUser}
            setRestaurantsByUser={setRestaurantsByUser}

            getCustomerProfile={getCustomerProfile}
            getRestaurantProfile={getRestaurantProfile}

            setCustomerProfile={setCustomerProfile}
            customerProfile={customerProfile}

            setRestaurantProfile={setRestaurantProfile}
            restaurantProfile={restaurantProfile}

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
            // customerProfile={customerProfile}

            setRestaurantProfile={setRestaurantProfile}
            // restaurantProfile={restaurantProfile}
          />}
    </>
  )
}

export default App
