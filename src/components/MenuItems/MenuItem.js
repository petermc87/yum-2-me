
export default function MenuItem ({
  handleRemoveItem,
  handleAddToOrder,
  menuItems,
  filterOne,
  filterTwo,
  user,
  cart,
  foundRestaurant
}) {
//if there is no current order, then you can place an order. If there is a current order, 
// and youre looking at a different restaurant, then you can't add to order
const buttonSelector = (item) => {
  if(cart && cart.totalQty === 0 ){
    return(
      <button onClick={() => {
        handleAddToOrder(item._id)
      }}
      >&#43;
    </button>
    )
  } else if (cart && cart.lineItems[0].item.restaurantId === foundRestaurant._id) {
    return(
      <button onClick={() => {
        handleAddToOrder(item._id)
      }}
      >&#43;
    </button>
    )
  } else {
    return(
    <button id="button-grayed">
      &#43;
    </button>
    )
  }
}

  return (
    <>
      {
        menuItems.length > 0
          ? 
            <>
              {
                menuItems.filter(item => item.category === filterOne || item.category === filterTwo).map((item) => {
                  return (
                    <>
                      <div className='res-icon' id='menu-item' key={item._id}>
                        <div className='menu-image'>
                          <img src={item.image} alt='starter' />
                        </div>
                        <div className='menu-details'>
                          <h4>{item.name}</h4>
                          <p>${item.price}</p>
                        </div>

                        {
                        user.userType
                          ? 
                            <div className='menu-button'>
                              <button onClick={() => {
                                handleRemoveItem(item._id)
                              }}
                              >&#10006;
                              </button>
                            </div>
                          : 
                            <div className='menu-button' id='menu-button-select'> 
                                {buttonSelector(item)}
                            </div>
                        }

                      </div>
                    </>
                  )
                })
              }
            </>
          : 'No items to display'
      }
    </>
  )
}


                            {/* if there is a current order and the restaurant owner of one of the line items is equal to the selected show page */}
                            {/* {currentOrder && currentOrder.lineItems[0].item.restaurantId === foundRestaurant._id
                              ?
                                <button onClick={() => {
                                  handleAddToOrder(item._id)
                                }}
                                >&#43;
                                </button>
                              : 
                                <button>
                                  &#43;
                                </button>
                            } */}

                              // if(currentOrder === null ){
  //   console.log(currentOrder)
  //   return(
  //     <button onClick={() => {
  //       handleAddToOrder(item._id)
  //     }}
  //     >&#43;
  //   </button>
  //   )
  // } else if (currentOrder && currentOrder.lineItems[0].item.restaurantId === foundRestaurant._id) {
  //   return(
  //     <button onClick={() => {
  //       handleAddToOrder(item._id)
  //     }}
  //     >&#43;
  //   </button>
  //   )
  // } else {
  //   return(
  //   <button id="button-grayed">
  //     &#43;
  //   </button>
  //   )
  // }