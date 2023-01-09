import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
export default function MenuItem ({
  handleRemoveItem,
  menuItems,
  filterOne,
  filterTwo
}) {
  return (
    <>
      {
        menuItems.length > 0
          ? <>
            {
              menuItems.filter(item => item.category == filterOne || item.category == filterTwo).map((item) => {
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
                      <div className='menu-button'>
                        <button onClick={() => {
                          handleRemoveItem(item._id)
                        }}
                        >&#10006;
                        </button>
                      </div>
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

// <>
// {
//     mainItems
//       ? <>
//         {
//           mainItems.map((mainItem) => {
//             return (
//               <>
//                 <div className='res-icon' key={mainItem._id}>
//                   <h1>{mainItem.name}</h1>
//                   <p>{mainItem.type}</p>
//                   {/* <p>{item.category}</p> */}
//                   <button to='/profile' onClick={() => setFoundMainItem(mainItem)}>
//                     {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
//                     Add Item
//                   </button>
//                 </div>
//               </>
//             )
//           })
//         }
//       </>
//       : 'No mains to display'
//   }
// </>
