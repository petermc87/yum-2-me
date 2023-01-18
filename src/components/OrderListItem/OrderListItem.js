import { useState, useEffect } from 'react'

export default function OrderListItem ({
  order,
  setActiveOrder,
  getRestaurant,
  user
}) {

  const [restaurantOrder, setRestaurantOrder] = useState()

  const getOrder = async (id) => {
    try {
      const response = await fetch(`/api/orders/${id}`)
      const data = await response.json()
      setRestaurantOrder(data)
    } catch (err) {
      console.log(err)
    }
  }

  
  // ---EVENT HANDLERS---//
  function handleSelectOrder (order) {
    if(user.userType === true || user.userType === 'restaurant'){
      setActiveOrder(restaurantOrder)
      getRestaurant(restaurantOrder.lineItems[0].item.restaurantId)
    }
    else if(user.userType === false || user.userType === 'customer'){
      setActiveOrder(order)
      getRestaurant(order.lineItems[0].item.restaurantId)
    }
  }

  useEffect(() => {
    getOrder(order.id)
  }, [])

  console.log(restaurantOrder)
  return (
    <>
      <div
        className='res-icon' id='menu-item' onClick={() => { handleSelectOrder(order) }}
      >
        <div>
          <div>Order ID: {order._id}</div>
          <div>{new Date(order.updatedAt).toLocaleDateString()}</div>
        </div>
        <div>
          <div>${order.orderTotal.toFixed(2)}</div>
          <div>{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
        </div>
      </div>
    </>
  )
}
