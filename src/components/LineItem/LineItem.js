export default function LineItem ({
  lineItem,
  isPaid,
  handleChangeQty,
  foundRestaurant,
  user
}) {
// Ternary to ensure line items only associated with the current restaurant order shows when
// Looking at a different restaurant. Also when looking at order history hence the OR condition
  return (
    <>
      {foundRestaurant && lineItem.item.restaurantId === foundRestaurant._id || foundRestaurant === null && lineItem.item.restaurantId
        ? <>
          <div className='res-icon' id='menu-item' key={lineItem._id}>
            <div className='menu-image'>
              <img src={lineItem.image} alt='starter' />
            </div>
            <div className='menu-details'>
              <h4>{lineItem.item.name}</h4>
              <p>${lineItem.item.price}</p>
            </div>
            <div className='menu-button' id='menu-add'>
              {user.userType === 'false' || user.userType === 'customer'
                ? <>
                  {!isPaid &&
                    <button
                      className='menu-button' id='menu-button-minus' onClick={() => {
                        handleChangeQty(lineItem.item._id, lineItem.qty - 1)
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
                  </>
                : <>
                  <span>Qty: {lineItem.qty}</span>
                  </>}
            </div>
          </div>
          </>
        : ''}
    </>
  )
}
