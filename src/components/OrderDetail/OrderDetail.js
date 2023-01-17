import LineItem from '../../components/LineItem/LineItem'

export default function OrderDetail ({
  order,
  handleChangeQty,
  handleCheckout,
  foundRestaurant
}) {


  const lineItems = order.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
      foundRestaurant={foundRestaurant}
    />
  )


  return (
    <>
      <div className='order-heading'>
        {order.isPaid
          ? <>
            <h2>Order</h2>
            {foundRestaurant
              ? <h3>{foundRestaurant.name}</h3>
              : <h4>Restaurant has been removed</h4>}
          </>
          : <h2>New Order</h2>}
        <span>{new Date(order.updatedAt).toLocaleDateString}</span>
      </div>
      <div className='order-container'>
        {lineItems.length
          ? <>
            {lineItems}
            <section className='order-total'>
              {order.isPaid
                ? <h3>TOTAL</h3>
                : 
                  <button
                      onClick={handleCheckout}
                      disabled={!lineItems.length}
                    >CHECKOUT
                  </button>
              }
              <span>${order.orderTotal.toFixed(2)}</span>
              <br />
              <span>Items: {order.totalQty}</span>

            </section>
          </>
          : <div className='hungry'>Hungry?</div>}
      </div>
    </>
  )
}


                {/* {order.totalQty >= 1 
                  ?
                    handleCurrentOrder(order)
                  :
                    handleCurrentOrder(order)
                } */}
                {/* {handleCurrentOrder(order.totalQty)} */}

  // const handleCurrentOrder = (orderState) => {
  //   // console.log(orderState)
  //   setCurrentOrder(orderState)
  // }
  // console.log(order.totalQty)