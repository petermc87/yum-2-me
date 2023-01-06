import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
export default function Mains ({
  getMainItems,
  mainItems,
  setFoundMainItem,
  foundMainItem
}) {
  return (
    <>
      <h2>Mains</h2>
      <>
        {
            mainItems
              ? <>
                {
                  mainItems.map((item) => {
                    return (
                      <>
                        <div className='res-icon' key={item._id}>
                          <h1>{item}</h1>
                          <p>{item.type}</p>
                          {/* <p>{item.category}</p> */}
                          <button to='/profile' onClick={() => setFoundMainItem(item)}>
                            {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
                            Add Item
                          </button>
                        </div>
                      </>
                    )
                  })
                }
              </>
              : 'No mains to display'
          }
      </>
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
