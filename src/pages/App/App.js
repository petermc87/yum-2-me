
import { useState, useEffect } from 'react'
// import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import CompletedOrdersPage from '../OrderHistotyPage/OrderHistoryPage.js'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBarLinks/NavBarLinks'
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
    <main className='App'>
      {user
        ? <>
          <NavBar />
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<CompletedOrdersPage />} />
            <Route path='/' element={<NewOrderPage />} />
          </Routes>
        </>
        : <LandingPage setUser={setUser} />}
    </main>
  )
}

export default App
