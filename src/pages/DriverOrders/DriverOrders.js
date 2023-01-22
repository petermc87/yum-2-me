import { useState, useEffect } from 'react'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import OrderList from '../../components/OrderList/OrderList'

export default function DriverOrders ({
  driverProfile,
  foundDriver,
  setActiveOrder,
  activeOrder,
  user,
  getRestaurant,
  foundRestaurant,
  setCurrentOrder
}) {
  const [orders, setOrders] = useState([])

  const getAssignedOrders = async (id) => {
    try {
      const response = await fetch(`/api/drivers/orders/${id}`)
      const data = await response.json()
      setOrders(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAssignedOrders(user._id)
  }, [])

  console.log(activeOrder)
  return (
    <>
      <h1>Assigned Orders</h1>
      <OrderList
          orders={orders}
          setActiveOrder={setActiveOrder}
          getRestaurant={getRestaurant}
          user={user}
          activeOrder={activeOrder}
      />
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
