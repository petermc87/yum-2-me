import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import * as ordersAPI from '../../utilities/orders-api'
import OrderList from "../../components/OrderList/OrderList"
import OrderDetail from "../../components/OrderDetail/OrderDetail"
import PreviousOrderDetail from "../../components/PreviousOrderDetail/PreviousOrderDetail"
// import Order from "../../../models/customer/order"
// import Order from "../../../models/customer/order"

export default function OrderHistoryPage ({
  user, 
  setUser,
  foundRestaurant
}) {
  
  //---HOOKS--//
  const [orders, setOrders] = useState([])
  const [activeOrder, setActiveOrder] = useState(null)
  
  useEffect(function (){
    async function fetchOrderHistory(){
      const orders = await ordersAPI.getOrderHistory()
      setOrders(orders)
      setActiveOrder(orders[0] || null)
      // console.log(activeOrder)
      console.log(orders)
    }
    fetchOrderHistory()
  }, [])
  
  //---EVENT HANDLERS---//
  function handleSelectOrder(order){
    setActiveOrder(order)
    console.log(activeOrder)
  }

  return (
    <>
    <h1>Previous Orders</h1>
      <div className="form-container">
        <OrderList 
          orders={orders}
          activeOrder={activeOrder}
          handleSelectOrder={handleSelectOrder}
          setActiveOrder={setActiveOrder}
        />
      </div>
       <div className="form-container">
        
          <br/>
          <br/>
            {activeOrder !== null ?
              <div className="menu-select">
                <OrderDetail 
                  order={activeOrder}
                />
              </div>
                :
                ''
            }
      </div>
    </>


  )
}
