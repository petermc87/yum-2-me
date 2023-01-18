import OrderListItem from '../OrderListItem/OrderListItem'
import { useState } from 'react'

export default function OrderList ({
  orders,
  setActiveOrder,
  getRestaurant,
  user,
  activeOrder
}) {
  const orderItems = orders.map(order =>
    <OrderListItem
      order={order}
      key={order._id}
      setActiveOrder={setActiveOrder}
      activeOrder={activeOrder}
      getRestaurant={getRestaurant}
      user={user}
    />
  )

  return (
    <>
      <div className='menu-select'>
        {orders.length
          ? orderItems
          : 'No Previous Orders'}
      </div>
    </>
  )
}
