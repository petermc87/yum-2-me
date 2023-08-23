import LineItem from '../../components/LineItem/LineItem'
import { useNavigate } from 'react-router-dom'

export default function OrderDetail ({
  order,
  handleChangeQty,
  handleCheckout,
  foundRestaurant,
  user,
  setOrder,
  foundDriver,
  getDriverProfile
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

  const updateOrderComplete = async () => {
    try {
      const response = await fetch(`/api/orders/${order._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          isComplete: true
        })
      })
      const data = await response.json()
      setOrder(data)
    } catch (e) {
      console.error(e)
    }
  }

  const updateDriverStatus = async () => {
    try {
      const response = await fetch(`/api/drivers/${foundDriver[0]._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          availability: true
        })
      })
      const data = await response.json()
      getDriverProfile(user._id)
    } catch (e) {
      console.error(e)
    }
  }

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
            {/* Making sure both the legacy items (boolean for just restaurant and customer) and the added restaurant profile option. */}
            <section className='order-total'>
              {order.isPaid && (user.userType === 'true' || user.userType === 'restaurant')
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
                  {/* Covering all profiles in terms of button display for each pay state & profiel type. */}
                  {order.isPaid === false && (user.userType === 'customer' || user.userType === 'false')
                    ? <button
                        onClick={handleCheckout}
                        disabled={!lineItems.length}
                      >CHECKOUT
                      </button>

                    : !order.isComplete && user.userType === 'driver'
                        ? <>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              updateOrderComplete()
                              updateDriverStatus()
                            }}
                          >Order Complete
                          </button>
                          </>
                        : ''}
                </>}
            </section>
          </>
          : <div className='hungry'>Hungry?</div>}
      </div>
    </>
  )
}
