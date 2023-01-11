import LineItem from '../../components/LineItem/LineItem'

export default function OrderDetail ({
    order,
    handleChangeQty,
    handleCheckout,
    foundRestaurant
}) 

{
  const lineItems = order.lineItems.map(item => 
    <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
        foundRestaurant={foundRestaurant}
    />
  )

//   const test = (item) => {
//     console.log(item[0].props.foundRestaurant._id)
//     console.log(item[0].props.lineItem.item.restaurantId)
//   }

  const test = (order) => {
    console.log(order)
  }

  return (
    <>
      <div classNam='order-heading'>
        {order.isPaid?
            <h2>Order</h2>
            :
            <h2>New Order</h2>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString}</span>
      </div>
      <div className='order-container'>
        {lineItems.length ?
            <>
                {lineItems}
                {test(order)}
                <section className='order-total'>
                    
                    {order.isPaid?
                    <h3>TOTAL</h3> 
                    :
                    <button
                        onClick={handleCheckout}
                        disabled={!lineItems.length}
                    >CHECKOUT</button>
                }
              
                <span>${order.orderTotal.toFixed(2)}</span>
                <br/>
                <span>Items: {order.totalQty}</span>
                </section>
            </>
            :
            <div className='hungry'>Hungry?</div>
        }
      </div>
    </>
  )
}

