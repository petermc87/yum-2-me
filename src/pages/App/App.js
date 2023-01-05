
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

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <>
      {user
        ? <>
          <HomePage user={user} setUser={setUser}/>
        </>
        : <LandingPage setUser={setUser} />}
    </>
  )
}

export default App
