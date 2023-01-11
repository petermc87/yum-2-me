import OrderListItem from "../OrderListItem/OrderListItem";
import { useState } from 'react'

export default function OrderList({
    orders,
    activeOrder,
    handleSelectOrder,
    setActiveOrder
}){
// const [activeOrder, setActiveOrder] = useState(null)
    
const orderItems = orders.map(order =>
    <OrderListItem
        order={order}
        key={order._id}
        setActiveOrder={setActiveOrder}
    />
  )

  return(
    <>
        <div className="menu-select" >
        {orders.length ?
            orderItems
            :
            'No Previous Orders'    
        }
        </div>
        {/* <div>
            <br/>
            <br/>
            {activeOrder !== null ?
                <div>{activeOrder._id}</div>
                :
                ''
            }
        </div> */}
    </>
  )
}


