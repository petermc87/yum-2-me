import LineItem from '../LineItem/LineItem'

export default function PreviousOrderDetail ({
    order,
    handleChangeQty,
    handleCheckout,
    foundRestaurant
}) 

{
  // const lineItems = order.lineItems.map(item => 
  //   <LineItem
  //       lineItem={item}
  //       isPaid={order.isPaid}
  //       handleChangeQty={handleChangeQty}
  //       key={item._id}
  //       foundRestaurant={foundRestaurant}
  //   />
  // )

  const test = (order) => {
    console.log(order.isPaid)
  }

  return (
    // <>
    //   <div classNam='order-heading'>
    //     {order.isPaid?
    //         <span>ORDER</span>
    //         :
    //         <span>NEW ORDER</span>
    //     }
    //     <span>{new Date(order.updatedAt).toLocaleDateString}</span>
    //   </div>
    //   <div className='order-container'>
    //     {lineItems.length ?
    //         <>
    //             {lineItems}
    //             {test(order)}
    //             <section className='order-total'>
                    
    //                 {order.isPaid?
    //                 <span>TOTAL</span> 
    //                 :
    //                 <button
    //                     onClick={handleCheckout}
    //                     disabled={!lineItems.length}
    //                 >CHECKOUT</button>
    //             }
    //             <span>{order.totalQty}</span>
    //             <span>${order.orderTotal.toFixed(2)}</span>
    //             </section>
    //         </>
    //         :
    //         <div className='hungry'>Hungry?</div>
    //     }
    //   </div>
    // </>
    <div>{order.LineItems[0].item.name}</div>
  )
}

