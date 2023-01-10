export default function LineItem ({
    lineItem,
    isPaid,
    handleChangeQty,
    foundRestaurant
  
  }) {
  
    // const test = (lineItem) => {
    //         //line item by restaurant
    //         console.log(lineItem.item.restaurantId)
    //         console.log(foundRestaurant._id)
    //         console.log(lineItem.item)
    //   }

    return (
        <>
        {lineItem.item.restaurantId === foundRestaurant._id?
            <>
            <div className='res-icon' id='menu-item' key={lineItem._id}>
              <div className='menu-image'>
                <img src={lineItem.image} alt='starter' />
              </div>
              <div className='menu-details'>
                <h4>{lineItem.item.name}</h4>
                <p>${lineItem.item.price}</p>
              </div>
  
              <div className="menu-button">
              {!isPaid &&
              // <div className="menu-button">
                  <button
                  onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
                  >−</button>
         
              }
              <span>{lineItem.qty}</span>
              {!isPaid &&
          
                  <button
                  className="menu-button"
                  onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
                  >+</button>
              
              }
              </div>
  
            </div>
          </> :
          ''
        }
        </>
            // <div className='res-icon' id='menu-item' key={lineItem._id}>
            //   <div className='menu-image'>
            //     <img src={lineItem.image} alt='starter' />
            //   </div>
            //   <div className='menu-details'>
            //     <h4>{lineItem.name}</h4>
            //     <p>${lineItem.price}</p>
            //   </div>
  
            //   <div className="menu-button">
            //   {!isPaid &&
            //   // <div className="menu-button">
            //       <button
            //       onClick={() => 
                    
            //         {handleChangeQty(lineItem.item._id, lineItem.qty - 1)
            //         test(lineItem)}
            //     }
            //       >−</button>
         
            //   }
            //   <span>{lineItem.qty}</span>
            //   {!isPaid &&
          
            //       <button
            //       className="menu-button"
            //       onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
            //       >+</button>
              
            //   }
            //   </div>
            // </div>
      )
  }
  



