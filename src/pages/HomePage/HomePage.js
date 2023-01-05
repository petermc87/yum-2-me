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
  //starters
  const [starterItems, setStarterItems] = useState([])
  const [foundStarterItem, setFoundStarterItem] = useState(null)
  const [selectedItems, setSelectedItems] = useState([])

  //mains
  const [mainItems, setMainItems] = useState([])
  const [foundMainItem, setFoundMainItem] = useState(null)

  //sides
  const [sideItems, setSideItems] = useState([])
  const [foundSideItem, setFoundSideItem] = useState(null)

  //desserts
  const [dessertItems, setDessertItems] = useState([])
  const [foundDessertItem, setFoundDessertItem] = useState(null)

  //drinks
  const [drinkItems, setDrinkItems] = useState([])
  const [foundDrinkItem, setFoundDrinkItem] = useState(null) 



  //restaurants
  const [restaurants, setRestaurants] = useState([])
  const [foundRestaurant, setFoundRestaurant] = useState(null)
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    location: '',
    type: '',
    user: props.user._id,
    menu: []
  })

  // customers
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
  // create restaurant
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
        type: '',
        user: props.user._id,
        menu: []
      })
    } catch (error) {
      console.error(error)
    }
  }

  // Index Restaurants
  const getRestaurants = async () => {
    try {
      const response = await fetch('/api/restaurants')
      const data = await response.json()
      setRestaurants(data)
    } catch (err) {
      console.log(err)
    }
  }

  // Index Customers
  const getCustomers = async () => {
    try {
      const response = await fetch('/api/customers')
      const data = await response.json()
      setCustomers(data)
    } catch (err) {
      console.log(err)
    }
  }

  // Index starter items
  const getStarterItems = async () => {
    try {
      const response = await fetch('/api/items')
      const data = await response.json()
      setStarterItems(data.filter(item => item.category === '63b4374e29fa968943911bbf'))
    } catch (err) {
      console.log(err)
    }
  }

    // Index main items
    const getMainItems = async () => {
      try {
        const response = await fetch('/api/items')
        const data = await response.json()
        setMainItems(data.filter(item => item.category === '63b4374e29fa968943911bc0'))
      } catch (err) {
        console.log(err)
      }
    }
    // Index side items
      const getSideItems = async () => {
        try {
          const response = await fetch('/api/items')
          const data = await response.json()
          setSideItems(data.filter(item => item.category === '63b4374e29fa968943911bc1'))
        } catch (err) {
          console.log(err)
        }
      }
        // Index dessert items
        const getDessertItems = async () => {
          try {
            const response = await fetch('/api/items')
            const data = await response.json()
            setDessertItems(data.filter(item => item.category === '63b4374e29fa968943911bc2'))
          } catch (err) {
            console.log(err)
          }
        }
        // Index drink items
        const getDrinkItems = async () => {
          try {
            const response = await fetch('/api/items')
            const data = await response.json()
            setDrinkItems(data.filter(item => item.category === '63b4374e29fa968943911bc3'))
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

const handleStarters = (evt) => {
  console.log(foundStarterItem)
  setSelectedItems(starterItems => [ ...starterItems, [evt.target.value]])
}



  useEffect(() => {
    getRestaurants()
  }, [foundRestaurant])

  useEffect(() => {
    getCustomers()
  }, [foundCustomer])


//items
  useEffect(() => {
    getStarterItems()
  }, [foundStarterItem])

  useEffect(() => {
    getMainItems()
  }, [foundMainItem])

  useEffect(() => {
    getDessertItems()
  }, [foundDessertItem])

  useEffect(() => {
    getSideItems()
  }, [foundSideItem])

  useEffect(() => {
    getDrinkItems()
  }, [foundDrinkItem])

  // useEffect(() => {
  //   selectedItems  
  // }, [])

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
          <section className='category'>
            <div className='cat-icon'><MdDinnerDining size={20} /></div>
            <div className='cat-icon'><MdLunchDining size={20} /></div>
            <div className='cat-icon'><RiCake3Fill size={20} /></div>
            <div className='cat-icon'><BsCupStraw size={20} /></div>
          </section>
          <section className='restaurant'>
            <Routes>
              <>
                {props.user.userType
                  ? <Route path='/profile' element={<RestaurantProfilePage 
                      drinkItems={drinkItems} 
                      setFoundDrinkItem={setFoundDrinkItem} 
                      foundDrinkItem={foundDrinkItem}  

                      dessertItems={dessertItems} 
                      setFoundDessertItem={setFoundDessertItem} 
                      foundDessertItem={foundDessertItem}

                      sideItems={sideItems}
                      setFoundSideItem={setFoundSideItem}
                      foundSideItem={foundSideItem}

                      foundMainItem={foundMainItem} 
                      mainItems={mainItems} 
                      setFoundMainItem={setFoundMainItem}  

                      setFoundStarterItem={setFoundStarterItem} 
                      starterItems={starterItems}
                    

                      selectedItems={selectedItems}
                      handleStarters={handleStarters}
                      
                      user={props.user} 
            
                      setNewRestuarant={setNewRestaurant}
                      newRestaurant={newRestaurant} 
                      setRestaurants={setRestaurants} 
                      restaurants={restaurants} 
                      foundRestaurant={foundRestaurant} 
                      setFoundRestaurant={setFoundRestaurant} 
                      createRestaurant={createRestaurant} 
                      restaurantHandleChange={restaurantHandleChange}
                    />} />
                  : <>
                    <Route path='/orders/new' element={<NewOrderPage foundRestaurant={foundRestaurant} />} />
                    <Route path='/orders' element={<OrderHistoryPage />} />
                    <Route path='/home' element={<Restaurants 
                      setRestaurants={setRestaurants} 
                      restaurants={restaurants} 
                      foundRestaurant={foundRestaurant} 
                      setFoundRestaurant={setFoundRestaurant} 
                      createRestaurant={createRestaurant} 
                      />} />
                    <Route path='/profile' element={<CustomerProfilePage 
                      handleChange={handleChange} 
                      newCustomer={newCustomer} 
                      setNewCustomer={setNewCustomer} 
                      createCustomer={createCustomer} 
                      />} />
                    </>}
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
