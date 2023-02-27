import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as ordersAPI from '../../utilities/orders-api'
import OrderList from '../../components/OrderList/OrderList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
// import PreviousOrderDetail from '../../components/PreviousOrderDetail/PreviousOrderDetail'

export default function OrderHistoryPage ({
  user,
  setUser,
  foundRestaurant,
  getRestaurant,
  setCurrentOrder,
  activeOrder,
  setActiveOrder
}) {
  // ---HOOKS--//
  const [orders, setOrders] = useState([])
  // const [activeOrder, setActiveOrder] = useState(null)

  useEffect(function () {
    async function fetchOrderHistory () {
      const orders = await ordersAPI.getOrderHistory()
      setOrders(orders)
      setActiveOrder(orders[0] || null)
    }
    fetchOrderHistory()
  }, [])

  // ---EVENT HANDLERS---//
  function handleSelectOrder (order) {
    setActiveOrder(order)
  }
  // console.log(user)
  return (
    <>
      <h1>Previous Orders</h1>
      <div className='form-container'>
        <OrderList
          orders={orders}
          activeOrder={activeOrder}
          handleSelectOrder={handleSelectOrder}
          setActiveOrder={setActiveOrder}
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
              setCurrentOrder={setCurrentOrder}
              user={user}
            />
            </div>
          : ''}
      </div>
    </>
  )
}
