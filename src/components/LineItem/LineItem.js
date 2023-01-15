export default function LineItem ({
  lineItem,
  isPaid,
  handleChangeQty,
  foundRestaurant
}) {
  // Added a ternary to check if the restaurant ID matches the current selected restaurant
  // so only items in that restaurant are indexed
  return (
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
    </>
  )
}

// <>
// {lineItem.item.restaurantId === foundRestaurant._id ?
//     <>
//     <div className='res-icon' id='menu-item' key={lineItem._id}>
//       <div className='menu-image'>
//         <img src={lineItem.image} alt='starter' />
//       </div>
//       <div className='menu-details'>
//         <h4>{lineItem.item.name}</h4>
//         <p>${lineItem.item.price}</p>
//       </div>

//       <div className="menu-button">
//       {!isPaid &&
//       // <div className="menu-button">
//           <button
//           onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
//           >−</button>

//       }
//       <span>{lineItem.qty}</span>
//       {!isPaid &&

//           <button
//           className="menu-button"
//           onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
//           >+</button>

//       }
//       </div>

//     </div>
//   </> :
//   ''
// }
// </>
