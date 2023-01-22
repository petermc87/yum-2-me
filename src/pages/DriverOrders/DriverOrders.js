import { useState, useEffect } from 'react'
import OrderDetail from '../../components/OrderDetail/OrderDetail'

export default function DriverOrders ({
  driverProfile,
  foundDriver,
  setActiveOrder,
  activeOrder,
  user,
  getRestaurant
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
  // const getDriver
  // console.log(foundDriver)
  // console.log(driverProfile)

  useEffect(() => {
    getAssignedOrders(user._id)
  }, [])

  // console.log(orders)
  // console.log(user._id)
  return (
    <>
      {/* <OrderDetail
          orders={orders}
          setActiveOrder={setActiveOrder}
          getRestaurant={getRestaurant}
          user={user}
          activeOrder={activeOrder}
    
      /> */}
    </>
  )
}
