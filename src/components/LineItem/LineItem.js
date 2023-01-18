export default function LineItem ({
  lineItem,
  isPaid,
  handleChangeQty,
  foundRestaurant,
  user
}) {
// Ternary to ensure line items only associated with the current restaurant order shows when 
// Looking at a different restaurant. Also when looking at order history hence the OR condition
console.log(user)
  return (
    <>
    {foundRestaurant && lineItem.item.restaurantId === foundRestaurant._id || foundRestaurant === null && lineItem.item.restaurantId?
        <>
          <div className='res-icon' id='menu-item' key={lineItem._id}>
            <div className='menu-image'>
              <img src={lineItem.image} alt='starter' />
            </div>
            <div className='menu-details'>
              <h4>{lineItem.item.name}</h4>
              <p>${lineItem.item.price}</p>
            </div>
            <div className='menu-button' id='menu-add'>
              {!isPaid && user.userType === false || !isPaid && user.userType === 'customer' &&
                <button
                  className='menu-button' id='menu-button-minus' onClick={() => {
                    handleChangeQty(lineItem.item._id, lineItem.qty - 1)
                  }}
                >−
                </button>}
              <span>{lineItem.qty}</span>
              {!isPaid && user.userType === false || !isPaid && user.userType === 'customer' &&
                <button
                  className='menu-button' id='menu-button-plus'
                  onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
                >+
                </button>}
            </div>
          </div>
        </> :
          ''
    }
    </> 
  )
}




// !isPaid && user.userType === false || !isPaid && user.userType === 'customer' &&


{/* <>
<div className='res-icon' id='menu-item' key={lineItem._id}>
  <div className='menu-image'>
    <img src={lineItem.image} alt='starter' />
  </div>
  <div className='menu-details'>
    <h4>{lineItem.item.name}</h4>
    <p>${lineItem.item.price}</p>
  </div>
  <div className='menu-button' id='menu-add'>
    {!isPaid &&
      <button
        className='menu-button' id='menu-button-minus' onClick={() => {
          handleChangeQty(lineItem.item._id, lineItem.qty - 1)
          test(lineItem)
        }}
      >−
      </button>}
    <span>{lineItem.qty}</span>
    {!isPaid &&
      <button
        className='menu-button' id='menu-button-plus'
        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
      >+
      </button>}
  </div>
</div>
</>  */}



{/* <>
  {lineItem.item.restaurantId === foundRestaurant._id ?
      <>
        <div className='res-icon' id='menu-item' key={lineItem._id}>
          <div className='menu-image'>
            <img src={lineItem.image} alt='starter' />
          </div>
          <div className='menu-details'>
            <h4>{lineItem.item.name}</h4>
            <p>${lineItem.item.price}</p>
          </div>
          <div className='menu-button' id='menu-add'>
            {!isPaid &&
              <button
                className='menu-button' id='menu-button-minus' onClick={() => {
                  handleChangeQty(lineItem.item._id, lineItem.qty - 1)
                  test(lineItem)
                }}
              >−
              </button>}
            <span>{lineItem.qty}</span>
            {!isPaid &&
              <button
                className='menu-button' id='menu-button-plus'
                onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
              >+
              </button>}
          </div>
        </div>
      </> :
        ''
  }
</> */}


{/* <>
  {lineItem.item.restaurantId === foundRestaurant._id || lineItem.item.restaurantId ?
      <>
        <div className='res-icon' id='menu-item' key={lineItem._id}>
          <div className='menu-image'>
            <img src={lineItem.image} alt='starter' />
          </div>
          <div className='menu-details'>
            <h4>{lineItem.item.name}</h4>
            <p>${lineItem.item.price}</p>
          </div>
          <div className='menu-button' id='menu-add'>
            {!isPaid &&
              <button
                className='menu-button' id='menu-button-minus' onClick={() => {
                  handleChangeQty(lineItem.item._id, lineItem.qty - 1)
                  test(lineItem)
                }}
              >−
              </button>}
            <span>{lineItem.qty}</span>
            {!isPaid &&
              <button
                className='menu-button' id='menu-button-plus'
                onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
              >+
              </button>}
          </div>
        </div>
      </> :
        ''
  }
</> */}