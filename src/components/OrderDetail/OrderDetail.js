import LineItem from '../../components/LineItem/LineItem'
import { useNavigate } from 'react-router-dom'

export default function OrderDetail ({
  order,
  handleChangeQty,
  handleCheckout,
  foundRestaurant,
  user
}) {
  const navigate = useNavigate()

  const lineItems = order.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
      foundRestaurant={foundRestaurant}
      user={user}
    />
  )

  // console.log(order)
  // console.log(user)
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
              {order.isPaid && user.userType === 'true' || user.userType === 'restaurant'
                ? <>
                  <br />
                  <h3>TOTAL</h3>
                  <span>${order.orderTotal.toFixed(2)}</span>
                  <br />
                  <span>Items: {order.totalQty}</span>
                  <br />
                  {order.isPaid && !order.assigned
                    ? <button onClick={() => { navigate('/drivers') }}>
                      Add Driver
                    </button>
                    : ''}

                </>
                : <>
                  <span>${order.orderTotal.toFixed(2)}</span>
                  <br />
                  <span>Items: {order.totalQty}</span>
                  <br />
                  {order.isPaid
                    ? ''
                    : <button
                        onClick={handleCheckout}
                        disabled={!lineItems.length}
                      >CHECKOUT
                    </button>}

                </>}
            </section>
          </>
          : <div className='hungry'>Hungry?</div>}
      </div>
    </>
  )
}
