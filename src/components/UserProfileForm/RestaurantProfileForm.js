import Mains from '../../components/MenuItems/Mains'
import { Link } from 'react-router-dom'
// import charcuterie from 'https://imgur.com/OPJSZq9'
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
                                  handleRemoveItem(item)
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
          <>
            <h2>~ Mains ~</h2>
            {
                selectedItems.length > 0
                  ? <>
                    {
                      selectedItems.filter(item => item.category === '63b4374e29fa968943911bc0').map((item) => {
                        return (
                          <>
                            <div className='res-icon' id='menu-item' key={item._id}>
                              <div className='menu-image'>
                                {item.image}
                              </div>
                              <div className='menu-details'>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                              </div>
                              <div className='menu-button'>
                                <button onClick={() => {
                                  handleRemoveItem(item)
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
          <>
            <h2>~ Sides ~</h2>
            {
                selectedItems.length > 0
                  ? <>
                    {
                      selectedItems.filter(item => item.category === '63b4374e29fa968943911bc1').map((item) => {
                        return (
                          <>
                            <div className='res-icon' id='menu-item' key={item._id}>
                              <div className='menu-image'>
                                {item.image}
                              </div>
                              <div className='menu-details'>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                              </div>
                              <div className='menu-button'>
                                <button onClick={() => {
                                  handleRemoveItem(item)
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
          <>
            <h2>~ Desserts ~</h2>
            {
                selectedItems.length > 0
                  ? <>
                    {
                      selectedItems.filter(item => item.category === '63b4374e29fa968943911bc2').map((item) => {
                        return (
                          <>
                            <div className='res-icon' id='menu-item' key={item._id}>
                              <div className='menu-image'>
                                {item.image}
                              </div>
                              <div className='menu-details'>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                              </div>
                              <div className='menu-button'>
                                <button onClick={() => {
                                  handleRemoveItem(item)
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
          <>
            <h2>~ Drinks ~</h2>
            {
                selectedItems.length > 0
                  ? <>
                    {
                      selectedItems.filter(item => item.category === '63b4374e29fa968943911bc3').map((item) => {
                        return (
                          <>
                            <div className='res-icon' id='menu-item' key={item._id}>
                              <div className='menu-image'>
                                {item.image}
                              </div>
                              <div className='menu-details'>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                              </div>
                              <div className='menu-button'>
                                <button onClick={() => {
                                  handleRemoveItem(item)
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
          <div className='create-button'>
            <button type='submit'>CREATE
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/home' />
            </button>
          </div>
        </form>
        <div className='menu-select'>
          <br />
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
                            <div className='res-icon' id='menu-item' key={item._id}>
                            <div className='menu-image'>
                                <img src={item.image} alt='starter' />
                                {/* <img src={require(item.image)} alt='starter' />  */}
                            </div>
                              <div className='menu-details'>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                              </div>
                              <div className='menu-button'>
                                <button onClick={() => {
                                  handleAddItem(item)
                                }}
                                >&#x2713;
                                </button>
                              </div>
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
                            <div className='res-icon' id='menu-item' key={item._id}>
                              <div className='menu-image'>
                                {item.image}
                              </div>
                              <div className='menu-details'>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                              </div>
                              <div className='menu-button'>
                                <button onClick={() => {
                                  handleAddItem(item)
                                }}
                                >&#x2713;
                                </button>
                              </div>
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
                            <div className='res-icon' id='menu-item' key={item._id}>
                              <div className='menu-image'>
                                <img src={`${item.image}`} ></img>
                              </div>
                              <div className='menu-details'>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                              </div>
                              <div className='menu-button'>
                                <button onClick={() => {
                                  handleAddItem(item)
                                }}
                                >&#x2713;
                                </button>
                              </div>
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
                            <div className='res-icon' id='menu-item' key={item._id}>
                              <div className='menu-image'>
                                {item.image}
                              </div>
                              <div className='menu-details'>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                              </div>
                              <div className='menu-button'>
                                <button onClick={() => {
                                  handleAddItem(item)
                                }}
                                >&#x2713;
                                </button>
                              </div>
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
                            <div className='res-icon' id='menu-item' key={item._id}>
                              <div className='menu-image'>
                                {item.image}
                              </div>
                              <div className='menu-details'>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                              </div>
                              <div className='menu-button'>
                                <button onClick={() => {
                                  handleAddItem(item)
                                }}
                                >&#x2713;
                                </button>
                              </div>
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
      </div>
    </>

  )
}
