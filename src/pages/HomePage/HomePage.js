import NavBar from '../../components/NavBar/NavBar'
import Perks from '../../components/Perks/Perks'
import Footer from '../../components/Footer/Footer'
import NavBarLinks from '../../components/NavBarLinks/NavBarLinks'
import RestaurantProfilePage from '../ProfilePages/RestaurantProfile'
import CustomerProfilePage from '../ProfilePages/CustomerProfile'
import RestaurantEditPage from '../EditPages/RestaurantEditPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import Restaurants from '../../components/Restaurant/AllRestaurants'
import RestaurantIndexPage from '../RestaurantByUser/RestaurantByUser'

import { useState, useEffect } from 'react'
import { MdDinnerDining, MdLunchDining } from 'react-icons/md'
import { RiCake3Fill } from 'react-icons/ri'
import { BsCupStraw } from 'react-icons/bs'
import { Routes, Route, useNavigate } from 'react-router-dom'

export default function HomePage (props) {
  // ---HOOKS---//
  const navigate = useNavigate()
  // selected Items
  const [selectedItems, setSelectedItems] = useState([])


  // mains
  // const [mainItems, setMainItems] = useState([])
  // const [foundMainItem, setFoundMainItem] = useState(null)

  // // sides
  // const [sideItems, setSideItems] = useState([])
  // const [foundSideItem, setFoundSideItem] = useState(null)

  // // desserts
  // const [dessertItems, setDessertItems] = useState([])
  // const [foundDessertItem, setFoundDessertItem] = useState(null)

  // // drinks
  // const [drinkItems, setDrinkItems] = useState([])
  // const [foundDrinkItem, setFoundDrinkItem] = useState(null)

  // restaurants
  const [restaurants, setRestaurants] = useState([])
  const [foundRestaurant, setFoundRestaurant] = useState(null)
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    location: '',
    type: '',
    user: props.user._id,
    menu: []
  })

  const [restaurantOrder, setRestaurantOrder] = useState(null)

  // customers
  const [customers, setCustomers] = useState([])
  const [newCustomer, setNewCustomer] = useState({
    image: '',
    location: '',
    user: props.user._id
  })

  // cart
  const [cart, setCart] = useState(null)
  // const []

  // single item
  const [menuItem, setMenuItem] = useState({})

  // items array
  const [menuItems, setMenuItems] = useState([])

  // ---BACKEND REQUESTS---//
  // create customer
  const createCustomer = async () => {
    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newCustomer })
      })
      const data = await response.json()
      props.setFoundCustomer(data)
      setNewCustomer({
        image: '',
        location: '',
        user: props.user._id
      })
    } catch (error) {
      console.error(error)
    }
    // console.log(foundCustomer)
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

  // Index Restaurants
  const getRestaurant = async (id) => {
    try {
      const response = await fetch(`/api/restaurants/${id}`)
      const data = await response.json()
      setFoundRestaurant(data)
    } catch (err) {
      console.log(err)
    }
  }

  // console.log(user)
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

  // // Get Customer Profile
  // const getCustomer = async (id) => {
  //   try {
  //     const response = await fetch(`api/customers/${id}`)
  //     const data = await response.json()
  //     setFoundCustomer(data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // Index starter items
  // const getStarterItems = async () => {
  //   try {
  //     const response = await fetch('/api/items')
  //     // console.log(props)
  //     const data = await response.json()
  //     setStarterItems(data.filter(item => item.category === '63b4374e29fa968943911bbf'))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // // Index main items
  // const getMainItems = async () => {
  //   try {
  //     const response = await fetch('/api/items')
  //     const data = await response.json()
  //     setMainItems(data.filter(item => item.category === '63b4374e29fa968943911bc0'))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // // Index side items
  // const getSideItems = async () => {
  //   try {
  //     const response = await fetch('/api/items')
  //     const data = await response.json()
  //     setSideItems(data.filter(item => item.category === '63b4374e29fa968943911bc1'))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // // Index dessert items
  // const getDessertItems = async () => {
  //   try {
  //     const response = await fetch('/api/items')
  //     const data = await response.json()
  //     setDessertItems(data.filter(item => item.category === '63b4374e29fa968943911bc2'))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // // Index drink items
  // const getDrinkItems = async () => {
  //   try {
  //     const response = await fetch('/api/items')
  //     const data = await response.json()
  //     setDrinkItems(data.filter(item => item.category === '63b4374e29fa968943911bc3'))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // Index menu items

  // --- Index Menu Items by Restaurant --//
  const getMenuItems = async (id) => {
    try {
      const response = await fetch(`/api/restaurants/menu/items/${id}`)
      const data = await response.json()
      setMenuItems(data)
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

  // adding to selected items only if it already isn't in the list
  const handleAddItem = (item) => {
    if (selectedItems.includes(item) === false) {
      setSelectedItems(copyItems => [...copyItems, item])
    }
  }

  // updating selected list without the item to be removed
  const handleRemoveItem = (removedItem) => {
    setSelectedItems((selectedItems) =>
      selectedItems.filter((item) => item._id !== removedItem._id)
    )
  }

  useEffect(() => {
    getRestaurants()
  }, [foundRestaurant])

  useEffect(() => {
    getCustomers()
  }, [props.foundCustomer])

  useEffect(() => {
    if (props.user.userType) {
      console.log(props.user._id)
    } else {
      props.getCustomer(props.user._id)
    }
  }, [])


  console.log(cart)

  return (
    <>
      <body>
        <header>
          <nav aria-label='Main Navigation' role='navigation'>
            <ul class='navigation-list' id='header-list'>
              <NavBar
                foundCustomer={props.foundCustomer}
                user={props.user}
              />

              <NavBarLinks
                user={props.user}
                foundCustomer={props.foundCustomer}
              />
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
                  ? <>

                    <Route
                      path='/profile' element={<RestaurantProfilePage
                        selectedItems={selectedItems}
                        handleAddItem={handleAddItem}

                        handleRemoveItem={handleRemoveItem}

                        user={props.user}
                        setUser={props.setUser}

                        setNewRestuarant={setNewRestaurant}
                        newRestaurant={newRestaurant}
                        setRestaurants={setRestaurants}
                        restaurants={restaurants}
                        foundRestaurant={foundRestaurant}
                        setFoundRestaurant={setFoundRestaurant}
                        createRestaurant={createRestaurant}
                        restaurantHandleChange={restaurantHandleChange}
                        getRestaurantsByUser={props.getRestaurantsByUser}

                        menuItem={menuItem}
                        setMenuItem={setMenuItem}
                        menuItems={menuItems}
                        setMenuItems={setMenuItems}
                        getMenuItems={getMenuItems}

                                               />}
                    />
                    <Route
                      path='/home'element={<RestaurantIndexPage
                        getRestaurantsByUser={props.getRestaurantsByUser}
                        setRestaurantsByUser={props.setRestaurantsByUser}
                        restaurantsByUser={props.restaurantsByUser}
                        user={props.user}

                        setFoundRestaurant={setFoundRestaurant}
                        foundRestaurant={foundRestaurant}

                        getMenuItems={getMenuItems}
                        setMenuItems={setMenuItems}
                                           />}
                    />
                    <Route
                      path='/edit' element={<RestaurantEditPage
                        setFoundRestaurant={setFoundRestaurant}
                        foundRestaurant={foundRestaurant}
                        
                        restaurantsByUser={props.restaurantsByUser}

                        userType={props.user.userType}
                        user={props.user}

                        getRestaurantsByUser={props.getRestaurantsByUser}
                        setRestaurantsByUser={props.setRestaurantsByUser}

                        menuItem={menuItem}
                        setMenuItem={setMenuItem}
                        menuItems={menuItems}
                        setMenuItems={setMenuItems}
                        getMenuItems={getMenuItems}
                                            />}
                    />
                  </>
                  : <>
                    <Route
                      path='/orders/new' element={<NewOrderPage
                        foundRestaurant={foundRestaurant}

                        userType={props.user.userType}
                        user={props.user}

                        menuItems={menuItems}
                        setMenuItems={setMenuItems}
                        getMenuItems={getMenuItems}

                        setRestaurantOrder={setRestaurantOrder}
                        restaurantOrder={restaurantOrder}

                        cart={cart}
                        setCart={setCart}
                                                  />}
                    />

                    <Route
                      path='/orders' element={<OrderHistoryPage
                        user={props.user}
                        foundRestaurant={foundRestaurant}
                        setFoundRestaurant={setFoundRestaurant}
                        getRestaurantsByUser={props.getRestaurantsByUser}
                        getRestaurant={getRestaurant}
                                              />}
                    />
                    <Route
                      path='/home' element={<Restaurants
                        setRestaurants={setRestaurants}
                        restaurants={restaurants}

                        setFoundRestaurant={setFoundRestaurant}
                        foundRestaurant={foundRestaurant}

                        setMenuItems={setMenuItems}
                        menItems={menuItems}

                        getMenuItems={getMenuItems}

                        foundCustomer={props.foundCustomer}
                        // createRestaurant={createRestaurant}
                                            />}
                    />
                    <Route
                      path='/profile' element={<CustomerProfilePage
                        handleChange={handleChange}

                        newCustomer={newCustomer}
                        foundCustomer={props.foundCustomer}

                        setNewCustomer={setNewCustomer}
                        createCustomer={createCustomer}
                        getCustomer={props.getCustomer}

                        user={props.user}
                        setUser={props.setUser}
                                               />}
                    />
                    </>}
              </>
            </Routes>
          </section>
          <section className='bottom'>
            <Perks />
            <Perks />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  )
}


          {/* {cart.isPaid
            ?
              ''
            : <div>You currently have an order pending, want to continue?</div>
          } */}