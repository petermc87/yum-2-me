import NavBar from '../../components/NavBar/NavBar'
import Perks from '../../components/Perks/Perks'
// import '../../styles.css'
import Footer from '../../components/Footer/Footer'
import NavBarLinks from '../../components/NavBarLinks/NavBarLinks'
import { Routes, Route } from 'react-router-dom'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistotyPage/OrderHistoryPage'
import Restaurants from '../../components/Restaurant/Restaurants'
import { useState, useEffect } from 'react'
import RestaurantProfilePage from '../ProfilePages/RestaurantProfile'
import CustomerProfilePage from '../ProfilePages/CustomerProfile'
import { MdDinnerDining, MdLunchDining } from 'react-icons/md'
import { RiCake3Fill } from 'react-icons/ri'
import { BsCupStraw } from 'react-icons/bs'

export default function HomePage (props) {
  const [items, setItems] = useState([])
  const [foundItem, setFoundItem] = useState(null)

  const [restaurants, setRestaurants] = useState([])
  const [foundRestaurant, setFoundRestaurant] = useState(null)
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    location: '',
    type: '',
    user: props.user._id,
    menu: []
  })
  const [customers, setCustomers] = useState([])
  const [foundCustomer, setFoundCustomer] = useState(null)
  const [newCustomer, setNewCustomer] = useState({
    image: '',
    location: '',
    user: props.user._id
  })

    // create customer
    const createCustomer = async () => {
      try {
        console.log('posting')
        const response = await fetch('/api/customers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...newCustomer })
        })
        const data = await response.json()
        setFoundCustomer(data)
        setNewCustomer({
          image: '',
          location: '',
          user: props.user._id
        })
      } catch (error) {
        console.error(error)
      }
    }
        // create
        const createRestaurant = async () => {
          try {
            const response = await fetch('/api/restaurants', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ ...newRestaurant })
            })
            const data = await response.json()
            setFoundRestaurant(data)
            setNewRestaurant({
              name: '',
              location: '',
              type:'',
              user: props.user._id,
              menu: []
            })
          } catch (error) {
            console.error(error)
          }
        }

  //Index Restaurants
  const getRestaurants = async () => {
    try {
      const response = await fetch('/api/restaurants')
      const data = await response.json()
      setRestaurants(data)
    } catch (err) {
      console.log(err)
    }
  }
  //Index Customers
  const getCustomers = async () => {
    try {
      const response = await fetch('/api/customers')
      const data = await response.json()
      setCustomers(data)
    } catch (err) {
      console.log(err)
    }
  }

  //Index Items
  const getItems= async () => {
    try {
      const response = await fetch('/api/items')
      const data = await response.json()
      setItems(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (evt) => {
    setNewCustomer({ ...newCustomer, [evt.target.name]: evt.target.value })
  }

  const restaurantHandleChange = (evt) => {
    setNewRestaurant({ ...newRestaurant, [evt.target.name]: evt.target.value })
  }


  useEffect(() => {
    getRestaurants()
  }, [foundRestaurant])

  useEffect(() => {
    getCustomers()
  }, [foundCustomer])

  useEffect(() => {
    getItems()
  }, [foundItem])


  return (
    <>
      <body>
        <header>
          <nav aria-label='Main Navigation' role='navigation'>
            <ul class='navigation-list' id='header-list'>
              <NavBar />
              <NavBarLinks />
            </ul>
          </nav>
        </header>
        <main>
        <section className="category">
            <div className='cat-icon'><MdDinnerDining size={20}/></div>
            <div className='cat-icon'><MdLunchDining size={20}/></div>
            <div className='cat-icon'>< RiCake3Fill size={20}/></div>
            <div className='cat-icon'><BsCupStraw size={20}/></div>
          </section>
        <section className="restaurant">
          <Routes>
            <>
            { props.user.userType ?
              <Route path='/profile' element ={<RestaurantProfilePage user={props.user} setNewRestuarant={setNewRestaurant} newRestaurant={newRestaurant} setRestaurants={setRestaurants} restaurants={restaurants} foundRestaurant={foundRestaurant} setFoundRestaurant={setFoundRestaurant} createRestaurant ={createRestaurant} restaurantHandleChange={restaurantHandleChange} items={items} foundItem={setFoundItem}/> } />
                :
                <>
                <Route path='/orders/new' element={<NewOrderPage foundRestaurant={foundRestaurant} />} />
                <Route path='/orders' element={<OrderHistoryPage />} />
                <Route path='/home' element ={<Restaurants setRestaurants={setRestaurants} restaurants={restaurants} foundRestaurant={foundRestaurant} setFoundRestaurant={setFoundRestaurant} createRestaurant ={createRestaurant}/> } />
                <Route path='/profile' element ={<CustomerProfilePage handleChange = {handleChange} newCustomer={newCustomer} setNewCustomer={setNewCustomer} createCustomer={createCustomer} /> } />
              </>
            }
            </>
          </Routes>
          </section>
          <Perks />
          <Perks />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  )
}

