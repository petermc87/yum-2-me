import { useState, useEffect } from 'react'

export default function OrderListItem ({
  order,
  isSelected,
  setActiveOrder
}) {

  // ---EVENT HANDLERS---//
  function handleSelectOrder (order) {
    setActiveOrder(order)
  }

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
