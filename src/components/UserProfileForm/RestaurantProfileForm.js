import { Link } from 'react-router-dom'
// import item from '../../../models/restaurant/item'
export default function CreateRestaurantProfile ({
  createRestaurant,  
  newRestaurant,
  restaurantHandleChange,
  items,
  foundItem,
  setFoundItem
})

{

    return (
        <>
        <div className='form-container' id='form-container-profile'>
        <h1>Create your profile below</h1>
          <form autoComplete='off' onSubmit={createRestaurant}>
            <input type='text' name='name' value={newRestaurant.name} onChange={restaurantHandleChange} placeholder='name' required/>
            <input type='text' name='location' value={newRestaurant.location} onChange={restaurantHandleChange} placeholder='location' required />
            <input type='text' name='type' value={newRestaurant.type} onChange={restaurantHandleChange} placeholder='type' required />
            <button type='submit' >UPDATE PROFILE
              <Link style={{textDecoration: 'none', color: 'white'}} to='/home'></Link>
            </button>
          </form>
          <h1>Select Menu Items</h1>
          <>
        {
        // items && items.category === '63b4374e29fa968943911bc2'
        items
          ? <>
            {
              items.map((item) => {
                  return (
                    <>
                    <div className='res-icon' key={item._id} >
                    <h1>{item.name}</h1>
                        <p>{item.type}</p>
                        {/* <p>{item.category}</p> */}
                        <button to='/profile' onClick={() => setFoundItem(item)}>
                            {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
                            Add Item
                        </button>
                    </div>
                    </> 
                  )
              })
            }
          </>
          : 'No items to display'

      // items
      //     ? <>
      //       {
      //         items.filter((item) => {
      //           item.category === 'Drinks'
      //           return (  
      //               <>
      //               <h1>Drinks</h1>
      //               <div className='res-icon' key={item._id} >
      //                 <h1>{item.name}</h1>
      //                     <p>{item.type}</p>
      //                     <button to='/profile' onClick={() => setFoundItem(item)}>
      //                         {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
      //                         Add Item
      //                     </button>
      //                 </div>
      //               </>
      //           )
      //         })
      //       }
      //     </>
      //     : 'No restaurants to display'


      }
    </>
        </div>
        {/* <div>
            <div>
             <button onClick={()=>{
                // this.props.user = null
               " props.user"
             }}>LOG OUT</button>
            </div>
         </div> */}
        </>
        )

    }

