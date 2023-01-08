
import { useState, useEffect } from 'react'

// import NewOrderPage from '../NewOrderPage/NewOrderPage'
// import CompletedOrdersPage from '../OrderHistotyPage/OrderHistoryPage.js'
// import { Routes, Route } from 'react-router-dom'
// import NavBar from '../../components/NavBarLinks/NavBarLinks'
import HomePage from '../HomePage/HomePage'
import LandingPage from '../LandingPage/LandingPage'

function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)
  const [restaurantsByUser, setRestaurantsByUser] = useState([])

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
      // getRestaurantsByUser(user)
      // console.log(user._id)
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
      // console.log(restaurantsByUser)
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
          />
        </>
        : <LandingPage
            setUser={setUser}
            restaurantsByUser={restaurantsByUser}
            getRestaurantsByUser={getRestaurantsByUser}
            setRestaurantsByUser={setRestaurantsByUser}
          />}
    </>
  )
}

export default App
