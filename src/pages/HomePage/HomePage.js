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
import RestaurantOrderHistory from '../RestaurantOrderHistory/RestaurantOrderHistory'
import DriverProfilePage from '../ProfilePages/DriverProfilePage'

import { useState, useEffect } from 'react'
import { MdDinnerDining, MdLunchDining } from 'react-icons/md'
import { RiCake3Fill } from 'react-icons/ri'
import { BsCupStraw } from 'react-icons/bs'
import { Routes, Route } from 'react-router-dom'


export default function HomePage (props) {
  // ---HOOKS---//


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

  // customers
  const [customers, setCustomers] = useState([])
  const [newCustomer, setNewCustomer] = useState({
    image: '',
    location: '',
    user: props.user._id
  })


  // selected Items
  const [selectedItems, setSelectedItems] = useState([])

  // cart
  const [cart, setCart] = useState(null)
  const [activeOrder, setActiveOrder] = useState(null)
  const [currentOrder, setCurrentOrder] = useState(null)

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
        body: JSON.stringify({
          //nesting the user id on creation 
          ...newCustomer,
          user: props.user._id 
        })
      })
      const data = await response.json()
      props.setFoundCustomer(data)
      setNewCustomer({
        image: '',
        location: '',
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
    if (props.user.userType === 'restaurant' || props.user.userType === 'true') {
      console.log(props.user._id)
    } else if (props.user.userType === 'customer' || props.user.userType === 'false') {
      props.getCustomer(props.user._id)
    } else {
      props.getDriverProfile(props.user._id)
    }
  }, [])

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
              {props.user.userType === "true" || props.user.userType === 'restaurant'
                ? 
                  <>
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
                      <Route 
                        path='/restaurantorders' element={<RestaurantOrderHistory
                          restaurantsByUser={props.restaurantsByUser}
                          foundRestaurant={foundRestaurant}

                          activeOrder={activeOrder}
                          setActiveOrder={setActiveOrder}

                          getRestaurant={getRestaurant}
                          user={props.user}
                          />}
                      />
                  </>
                : 
                  props.user.userType === "false" || props.user.userType === 'customer' ?
                    <>
                      <Route
                        path='/orders/new' element={<NewOrderPage
                          foundRestaurant={foundRestaurant}

                          userType={props.user.userType}
                          user={props.user}

                          menuItems={menuItems}
                          setMenuItems={setMenuItems}
                          getMenuItems={getMenuItems}

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

                          setCurrentOrder={setCurrentOrder}

                          activeOrder={activeOrder} 
                          setActiveOrder={setActiveOrder}
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
                    </>
                  : 
                  <>
                    <Route
                      path='/profile' element={<DriverProfilePage
                        user={props.user}
                        setUser={props.setUser}

                        getDriverProfile={props.getDriverProfile}
                        setDriverProfile={props.getDriverProfile}
                        driverProfile={props.driverProfile}
                        
                        setFoundDriver={props.setFoundDriver}
                        foundDriver={props.foundDriver}
                                              />}
                    />
                  </>
              }
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


      

        // {props.user.userType === true || props.user.userType === 'restaurant'
        // ? 
        //   <>
        //       <Route
        //         path='/profile' element={<RestaurantProfilePage
        //           selectedItems={selectedItems}
        //           handleAddItem={handleAddItem}

        //           handleRemoveItem={handleRemoveItem}

        //           user={props.user}
        //           setUser={props.setUser}

        //           setNewRestuarant={setNewRestaurant}
        //           newRestaurant={newRestaurant}
        //           setRestaurants={setRestaurants}
        //           restaurants={restaurants}
        //           foundRestaurant={foundRestaurant}
        //           setFoundRestaurant={setFoundRestaurant}
        //           createRestaurant={createRestaurant}
        //           restaurantHandleChange={restaurantHandleChange}
        //           getRestaurantsByUser={props.getRestaurantsByUser}

        //           menuItem={menuItem}
        //           setMenuItem={setMenuItem}
        //           menuItems={menuItems}
        //           setMenuItems={setMenuItems}
        //           getMenuItems={getMenuItems}

        //                                 />}
        //       />
        //       <Route
        //         path='/home'element={<RestaurantIndexPage
        //           getRestaurantsByUser={props.getRestaurantsByUser}
        //           setRestaurantsByUser={props.setRestaurantsByUser}
        //           restaurantsByUser={props.restaurantsByUser}
        //           user={props.user}

        //           setFoundRestaurant={setFoundRestaurant}
        //           foundRestaurant={foundRestaurant}

        //           getMenuItems={getMenuItems}
        //           setMenuItems={setMenuItems}
        //                             />}
        //       />
        //       <Route
        //         path='/edit' element={<RestaurantEditPage
        //           setFoundRestaurant={setFoundRestaurant}
        //           foundRestaurant={foundRestaurant}

        //           restaurantsByUser={props.restaurantsByUser}

        //           userType={props.user.userType}
        //           user={props.user}

        //           getRestaurantsByUser={props.getRestaurantsByUser}
        //           setRestaurantsByUser={props.setRestaurantsByUser}

        //           menuItem={menuItem}
        //           setMenuItem={setMenuItem}
        //           menuItems={menuItems}
        //           setMenuItems={setMenuItems}
        //           getMenuItems={getMenuItems}
        //                               />}
        //       />
        //       {/* <Route 
        //         path='/history' element={<RestaurantOrderHistory />}
        //       /> */}
        //   </>
        // : 
        //   props.user.userType === false || props.userType === 'customer' ?
        //     <>
        //     <Route
        //       path='/orders/new' element={<NewOrderPage
        //         foundRestaurant={foundRestaurant}

        //         userType={props.user.userType}
        //         user={props.user}

        //         menuItems={menuItems}
        //         setMenuItems={setMenuItems}
        //         getMenuItems={getMenuItems}

        //         cart={cart}
        //         setCart={setCart}
        //                                   />}
        //     />

        //     <Route
        //       path='/orders' element={<OrderHistoryPage
        //         user={props.user}
        //         foundRestaurant={foundRestaurant}
        //         setFoundRestaurant={setFoundRestaurant}
        //         getRestaurantsByUser={props.getRestaurantsByUser}
        //         getRestaurant={getRestaurant}

        //         setCurrentOrder={setCurrentOrder}
        //                               />}
        //     />
        //     <Route
        //       path='/home' element={<Restaurants
        //         setRestaurants={setRestaurants}
        //         restaurants={restaurants}

        //         setFoundRestaurant={setFoundRestaurant}
        //         foundRestaurant={foundRestaurant}

        //         setMenuItems={setMenuItems}
        //         menItems={menuItems}

        //         getMenuItems={getMenuItems}

        //         foundCustomer={props.foundCustomer}
        //         // createRestaurant={createRestaurant}
        //                             />}
        //     />
        //     <Route
        //       path='/profile' element={<CustomerProfilePage
        //         handleChange={handleChange}

        //         newCustomer={newCustomer}
        //         foundCustomer={props.foundCustomer}

        //         setNewCustomer={setNewCustomer}
        //         createCustomer={createCustomer}
        //         getCustomer={props.getCustomer}

        //         user={props.user}
        //         setUser={props.setUser}
        //                               />}
        //     />
        //     </>
        //   : 
        //   ''
        // }



              // {props.user.userType 
              //   ? 
              //     <>
              //               <Route
              //                 path='/profile' element={<RestaurantProfilePage
              //                   selectedItems={selectedItems}
              //                   handleAddItem={handleAddItem}

              //                   handleRemoveItem={handleRemoveItem}

              //                   user={props.user}
              //                   setUser={props.setUser}

              //                   setNewRestuarant={setNewRestaurant}
              //                   newRestaurant={newRestaurant}
              //                   setRestaurants={setRestaurants}
              //                   restaurants={restaurants}
              //                   foundRestaurant={foundRestaurant}
              //                   setFoundRestaurant={setFoundRestaurant}
              //                   createRestaurant={createRestaurant}
              //                   restaurantHandleChange={restaurantHandleChange}
              //                   getRestaurantsByUser={props.getRestaurantsByUser}

              //                   menuItem={menuItem}
              //                   setMenuItem={setMenuItem}
              //                   menuItems={menuItems}
              //                   setMenuItems={setMenuItems}
              //                   getMenuItems={getMenuItems}

              //                                         />}
              //               />
              //               <Route
              //                 path='/home'element={<RestaurantIndexPage
              //                   getRestaurantsByUser={props.getRestaurantsByUser}
              //                   setRestaurantsByUser={props.setRestaurantsByUser}
              //                   restaurantsByUser={props.restaurantsByUser}
              //                   user={props.user}

              //                   setFoundRestaurant={setFoundRestaurant}
              //                   foundRestaurant={foundRestaurant}

              //                   getMenuItems={getMenuItems}
              //                   setMenuItems={setMenuItems}
              //                                     />}
              //               />
              //               <Route
              //                 path='/edit' element={<RestaurantEditPage
              //                   setFoundRestaurant={setFoundRestaurant}
              //                   foundRestaurant={foundRestaurant}

              //                   restaurantsByUser={props.restaurantsByUser}

              //                   userType={props.user.userType}
              //                   user={props.user}

              //                   getRestaurantsByUser={props.getRestaurantsByUser}
              //                   setRestaurantsByUser={props.setRestaurantsByUser}

              //                   menuItem={menuItem}
              //                   setMenuItem={setMenuItem}
              //                   menuItems={menuItems}
              //                   setMenuItems={setMenuItems}
              //                   getMenuItems={getMenuItems}
              //                                       />}
              //               />
              //               {/* <Route 
              //                 path='/history' element={<RestaurantOrderHistory />}
              //               /> */}
              //     </>
              //   : 
              //     <>
              //             <Route
              //               path='/orders/new' element={<NewOrderPage
              //                 foundRestaurant={foundRestaurant}

              //                 userType={props.user.userType}
              //                 user={props.user}

              //                 menuItems={menuItems}
              //                 setMenuItems={setMenuItems}
              //                 getMenuItems={getMenuItems}

              //                 cart={cart}
              //                 setCart={setCart}
              //                                           />}
              //             />

              //             <Route
              //               path='/orders' element={<OrderHistoryPage
              //                 user={props.user}
              //                 foundRestaurant={foundRestaurant}
              //                 setFoundRestaurant={setFoundRestaurant}
              //                 getRestaurantsByUser={props.getRestaurantsByUser}
              //                 getRestaurant={getRestaurant}

              //                 setCurrentOrder={setCurrentOrder}
              //                                       />}
              //             />
              //             <Route
              //               path='/home' element={<Restaurants
              //                 setRestaurants={setRestaurants}
              //                 restaurants={restaurants}

              //                 setFoundRestaurant={setFoundRestaurant}
              //                 foundRestaurant={foundRestaurant}

              //                 setMenuItems={setMenuItems}
              //                 menItems={menuItems}

              //                 getMenuItems={getMenuItems}

              //                 foundCustomer={props.foundCustomer}
              //                 // createRestaurant={createRestaurant}
              //                                     />}
              //             />
              //             <Route
              //               path='/profile' element={<CustomerProfilePage
              //                 handleChange={handleChange}

              //                 newCustomer={newCustomer}
              //                 foundCustomer={props.foundCustomer}

              //                 setNewCustomer={setNewCustomer}
              //                 createCustomer={createCustomer}
              //                 getCustomer={props.getCustomer}

              //                 user={props.user}
              //                 setUser={props.setUser}
              //                                       />}
              //             />
              //     </>
              // } 