import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import OrderList from '../../components/OrderList/OrderList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'

export default function RestaurantOrderHistory ({
  foundRestaurant,
  setActiveOrder,
  activeOrder,
  getRestaurant,
  user,
  getDriverProfile,
  foundDriver
}) {
  const [ordersByRestaurant, setOrdersByRestaurant] = useState([])

  const navigate = useNavigate()

  const getOrdersByRestaurant = async (id) => {
    try {
      const response = await fetch(`/api/orders/history/restaurant/${id}`)
      const data = await response.json()
      setOrdersByRestaurant(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getOrdersByRestaurant(foundRestaurant._id)
  }, [])

  // ---EVENT HANDLERS---//
  function handleSelectOrder (order) {
    setActiveOrder(order)
  }

  return (
    <div>
      <div className='res-icon' id='back-button'>
        <div className='button-container' id='back-button'>
          <button onClick={() => { navigate('/home') }}>
            &#8249;
          </button>
        </div>
      </div>
      <h1>Completed Orders & Orders In Progress</h1>
      <div className='form-container'>
        <OrderList
          orders={ordersByRestaurant}
          setActiveOrder={setActiveOrder}
          activeOrder={activeOrder}
          handleSelectOrder={handleSelectOrder}
          getRestaurant={getRestaurant}
          user={user}
        />
      </div>
      <div className='form-container'>
        <br />
        <br />
        {activeOrder !== null
          ? <div className='menu-select'>
            <OrderDetail
              order={activeOrder}
              foundRestaurant={foundRestaurant}
              user={user}
              getDriverProfile={getDriverProfile}
              foundDriver={foundDriver}
            />
          </div>
          : ''}
      </div>
    </div>
  )
}
