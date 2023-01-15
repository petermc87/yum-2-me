import OrderListItem from '../OrderListItem/OrderListItem'
import { useState } from 'react'

export default function OrderList ({
  orders,
  activeOrder,
  handleSelectOrder,
  setActiveOrder,

  getRestaurant

}) {
  const orderItems = orders.map(order =>
    <OrderListItem
      order={order}
      key={order._id}
      setActiveOrder={setActiveOrder}
      getRestaurant={getRestaurant}
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
