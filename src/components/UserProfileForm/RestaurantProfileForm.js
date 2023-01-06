import Mains from '../../components/MenuItems/Mains'
import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
export default function CreateRestaurantProfile ({
  createRestaurant,
  newRestaurant,
  restaurantHandleChange,

  starterItems,
  foundStarterItem,
  setFoundStarterItem,
  getStarterItems,

  getMainItems,
  mainItems,
  setFoundMainItem,
  foundMainItem,

  dessertItems,
  setFoundDessertItem,
  foundDessertItem,

  sideItems,
  setFoundSideItem,
  foundSideItem,

  drinkItems,
  setFoundDrinkItem,
  foundDrinkItem,

  selectedItems,
  handleAddItem,

  handleRemoveItem
}) {


  return (
    <>
      <div className='form-container' id='form-container-profile'>
        <h1>Create your profile below</h1>
        <form autoComplete='off' onSubmit={createRestaurant}>
          <input type='text' name='name' value={newRestaurant.name} onChange={restaurantHandleChange} placeholder='name' required />
          <input type='text' name='location' value={newRestaurant.location} onChange={restaurantHandleChange} placeholder='location' required />
          <input type='text' name='type' value={newRestaurant.type} onChange={restaurantHandleChange} placeholder='type' required />
          
          <button type='submit'>CREATE
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/home' />
          </button>
        </form>
          <h1>Selected Items</h1>
          <>
          <h2>~ Starters ~</h2>
            {
                selectedItems.length > 0
                  ? <>
                    {
                      selectedItems.filter(item => item.category === '63b4374e29fa968943911bbf').map((item) => {
                        return (
                          <>
                            <div className='res-icon' key={item._id}>
                              <h1>{item.name}</h1>
                              <p>{item.type}</p>
                              {/* <p>{item.category}</p> */}
                              
                                {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
                                <button onClick={() => {
                                handleRemoveItem(item)
                              }}>Remove</button>

                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  : 'No items to display'
              }
          </>
          <>
          <h2>~ Mains ~</h2>
            {
                selectedItems.length > 0
                  ? <>
                    {
                      selectedItems.filter(item => item.category === '63b4374e29fa968943911bc0').map((item) => {
                        return (
                          <>
                            <div className='res-icon' key={item._id}>
                              <h1>{item.name}</h1>
                              <p>{item.type}</p>
                              {/* <p>{item.category}</p> */}
                              
                                {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
                                <button onClick={() => {
                                handleRemoveItem(item)
                              }}>Remove</button>

                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  : 'No items to display'
              }
          </>
          <>
          <h2>~ Sides ~</h2>
            {
                selectedItems.length > 0
                  ? <>
                    {
                      selectedItems.filter(item => item.category === '63b4374e29fa968943911bc1').map((item) => {
                        return (
                          <>
                            <div className='res-icon' key={item._id}>
                              <h1>{item.name}</h1>
                              <p>{item.type}</p>
                              {/* <p>{item.category}</p> */}
                              
                                {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
                                <button onClick={() => {
                                handleRemoveItem(item)
                              }}>Remove</button>

                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  : 'No items to display'
              }
          </>
          <>
          <h2>~ Desserts ~</h2>
            {
                selectedItems.length > 0
                  ? <>
                    {
                      selectedItems.filter(item => item.category === '63b4374e29fa968943911bc2').map((item) => {
                        return (
                          <>
                            <div className='res-icon' key={item._id}>
                              <h1>{item.name}</h1>
                              <p>{item.type}</p>
                              {/* <p>{item.category}</p> */}
                              
                                {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
                                <button onClick={() => {
                                handleRemoveItem(item)
                              }}>Remove</button>

                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  : 'No items to display'
              }
          </>
          <>
          <h2>~ Drinks ~</h2>
            {
                selectedItems.length > 0
                  ? <>
                    {
                      selectedItems.filter(item => item.category === '63b4374e29fa968943911bc3').map((item) => {
                        return (
                          <>
                            <div className='res-icon' key={item._id}>
                              <h1>{item.name}</h1>
                              <p>{item.type}</p>
                              {/* <p>{item.category}</p> */}
                              
                                {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
                                <button onClick={() => {
                                handleRemoveItem(item)
                              }}>Remove</button>

                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  : 'No items to display'
              }
          </>
          <h1>Select Menu Items</h1>
          <h2>~ Starters ~</h2>
          <>
            {
                starterItems
                  ? <>
                    {
                      starterItems.map((item) => {
                        return (
                          <>
                            <div className='res-icon' key={item._id}>
                              <h1>{item.name}</h1>
                              <p>{item.type}</p>
                              {/* <p>{item.category}</p> */}
                              <button onClick={() => {
                                handleAddItem(item)
                              }}>Add Item</button>

                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  : 'No starters to display'
              }
          </>
          <>
          <h2>~ Mains ~</h2>
            {
                mainItems
                  ? <>
                    {
                      mainItems.map((item) => {
                        return (
                          <>
                            <div className='res-icon' key={item._id}>
                              <h1>{item.name}</h1>
                              <p>{item.type}</p>
                              {/* <p>{item.category}</p> */}
                              <button onClick={() => {
                                handleAddItem(item)
                              }}>Add Item</button>
                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  : 'No mains to display'
              }
          </>
          <>
          <h2>~ Sides ~</h2>
            {
                sideItems
                  ? <>
                    {
                      sideItems.map((item) => {
                        return (
                          <>
                            <div className='res-icon' key={item._id}>
                              <h1>{item.name}</h1>
                              <p>{item.type}</p>
                              {/* <p>{item.category}</p> */}
                              <button onClick={() => {
                                handleAddItem(item)
                              }}>Add Item</button>
                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  : 'No sides to display'
              }
          </>
          <>
          <h2>~ Desserts ~</h2>
            {
                dessertItems
                  ? <>
                    {
                      dessertItems.map((item) => {
                        return (
                          <>
                            <div className='res-icon' key={item._id}>
                              <h1>{item.name}</h1>
                              <p>{item.type}</p>
                              {/* <p>{item.category}</p> */}
                              <button onClick={() => {
                                handleAddItem(item)
                              }}>Add Item</button>
                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  : 'No desserts to display'
              }
          </>
          <>
          <h2>~ Drinks ~</h2>
            {
                drinkItems
                  ? <>
                    {
                      drinkItems.map((item) => {
                        return (
                          <>
                            <div className='res-icon' key={item._id}>
                              <h1>{item.name}</h1>
                              <p>{item.type}</p>
                              {/* <p>{item.category}</p> */}
                              <button onClick={() => {
                                handleAddItem(item)
                              }}>Add Item</button>
                            </div>
                          </>
                        )
                      })
                    }
                  </>
                  : 'No drinks to display'
              }
          </>         
      </div>
    </>
  )
}

/* <div>
            <div>
             <button onClick={()=>{
                // this.props.user = null
               " props.user"
             }}>LOG OUT</button>
            </div>
         </div> */




      //    <button to='/profile' onClick={handleStarters}>
      //    {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
      //    Add Item
      //  </button>

      //    <Mains 
      //    getMainItems={getMainItems}
      //    mainItems={mainItems}
      //    setFoundMainItem={setFoundMainItem}
      //    foundMainItem={found}
      //  />
      //  <>



        //  <h2>Mains</h2>
        //  <>
        //    {
        //        mainItems
        //          ? <>
        //            {
        //              mainItems.map((mainItem) => {
        //                return (
        //                  <>
        //                    <div className='res-icon' key={mainItem._id}>
        //                      <h1>{mainItem.name}</h1>
        //                      <p>{mainItem.type}</p>
        //                      {/* <p>{item.category}</p> */}
        //                      <button to='/profile' onClick={() => setFoundMainItem(mainItem)}>
        //                        {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/orders/new'>Add Item</Link> */}
        //                        Add Item
        //                      </button>
        //                    </div>
        //                  </>
        //                )
        //              })
        //            }
        //          </>
        //          : 'No mains to display'
        //      }
        //  </>