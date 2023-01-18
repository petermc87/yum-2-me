import { useState, useEffect } from 'react'
import OrderList from '../../components/OrderList/OrderList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'

export default function RestaurantOrderHistory({
    restaurantsByUser,
    foundRestaurant,
    setActiveOrder,
    activeOrder,
    getRestaurant,
    user
})

{
    const [ordersByRestaurant, setOrdersByRestaurant] = useState([])
    // console.log(restaurantsByUser)
    const getOrdersByRestaurant = async (id) => {
        try {
          const response = await fetch(`/api/orders/history/restaurant/${id}`)
          const data = await response.json()
          setOrdersByRestaurant(data)
        } catch (err) {
          console.log(err)
        }
      }

    useEffect(() => {
        getOrdersByRestaurant(foundRestaurant._id)
      }, [])
      console.log(ordersByRestaurant)
    

    // ---EVENT HANDLERS---//
    function handleSelectOrder (order) {
        setActiveOrder(order)
    }
        
    return (
        <>
        <h1>Completed Orders & Orders In Progress</h1>
        <div className='form-container'>
          <OrderList
            orders={ordersByRestaurant}
            setActiveOrder={setActiveOrder}
            activeOrder={activeOrder}
            handleSelectOrder={handleSelectOrder}
            getRestaurant={getRestaurant}
            user={user}
          />
        </div>
        <div className='form-container'>
          <br />
          <br />
          {activeOrder !== null
            ? <div className='menu-select'>
              <OrderDetail
                order={activeOrder}
                foundRestaurant={foundRestaurant}
                // setCurrentOrder={setCurrentOrder}
              />
              </div>
            : ''
          }
        </div>
      </>
    )
}