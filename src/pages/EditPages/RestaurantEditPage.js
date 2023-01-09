import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MenuItem from '../../components/MenuItems/MenuItem'

export default function NewOrderPage ({
  foundRestaurant,
  user,
  getRestaurantsByUser,
  restaurantsByUser,
  menuItem,
  setMenuItem,
  menuItems,
  setMenuItems,
  getMenuItems
}) {
  // new menu
  const [newMenuItem, setNewMenuItem] = useState({
    name: '',
    restaurantId: foundRestaurant._id,
    category: '',
    price: Number
  })

  const navigate = useNavigate()

  // -----delete restaurant----//
  const deleteRestaurant = async (id) => {
    try {
      await fetch(`/api/restaurants/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }

      })
      console.log(menuItems)
      getRestaurantsByUser(user._id)
      // console.log(restaurantsByUser)
    } catch (error) {
      console.error(error)
    }
  }

  // create menu item
  const createMenuItem = async (category) => {
    try {
      const response = await fetch('/api/restaurants/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newMenuItem })
      })
      const data = await response.json()
      // setMenuItem(data)
      // console.log(menuItem)
      setNewMenuItem({
        name: '',
        restaurantId: foundRestaurant._id,
        category,
        price: Number
      })
    } catch (error) {
      console.error(error)
    }
  }

  // delete menu item
  const deleteMenuItem = async (category) => {
    try {
      const response = await fetch('/api/restaurants/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newMenuItem })
      })
      const data = await response.json()
      setNewMenuItem({
        name: '',
        restaurantId: foundRestaurant._id,
        category,
        price: Number
      })
    } catch (error) {
      console.error(error)
    }
  }

  // -----delete menu item----//
  const deleteItem = async (id) => {
    try {
      await fetch(`/api/restaurants/menu/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }

      })
      getMenuItems(foundRestaurant._id)
    } catch (error) {
      console.error(error)
    }
  }

  const menuHandleChange = (evt) => {
    setNewMenuItem({ ...newMenuItem, [evt.target.name]: evt.target.value })
  }

  // updating selected list without the item to be removed
  const handleRemoveItem = (id) => {
    deleteItem(id)
    setMenuItems(getMenuItems(foundRestaurant._id))
  }

  useEffect(() => {
    setMenuItems(getMenuItems(foundRestaurant._id))
  }, [])

  return (
    <>
      <h1>Edit Your Restaurant Below</h1>
      <div className='res-icon' id='show-page'>
        <br />
        <h2>{foundRestaurant.name}</h2> <br />
        <h2>{foundRestaurant.type}</h2>
        <h3>Located at: {foundRestaurant.location}</h3>
        <div className='menu-button'>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>
            <button>
              &#8249;
            </button>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>
            <button onClick={(evt) => {
              deleteRestaurant(foundRestaurant._id)
            }}
            >
              &#10006;
            </button>
          </Link>
        </div>
        <div className='form-container' id='form-container-profile'>
          <h1>Create your Menu Below</h1>
          <form
            autoComplete='off' onSubmit={(e) => {
              e.preventDefault()
              createMenuItem('starter')
              navigate('/edit')
              getMenuItems(foundRestaurant._id)
            }}
          >
            <input type='text' name='name' value={newMenuItem.name} onChange={menuHandleChange} placeholder='name' required />
            <input type='text' name='price' value={newMenuItem.price} onChange={menuHandleChange} placeholder='price' required />
            <input
              type='text' name='category' value={newMenuItem.category} onChange={menuHandleChange} placeholder='category' required
            />
            <div className='create-button'>
              <button type='submit'>CREATE
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1>Your Menu</h1>
      <div className='menu-select'>
        <>
          <h2>~ Starters ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleRemoveItem={handleRemoveItem}
            filterOne='starters'
            filterTwo='starter'
          />
        </>
        <>
          <h2>~ Mains ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleRemoveItem={handleRemoveItem}
            filterOne='mains'
            filterTwo='main'
          />
        </>
        <>
          <h2>~ Sides ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleRemoveItem={handleRemoveItem}
            filterOne='side'
            filterTwo='sides'
          />
        </>
        <>
          <h2>~ Desserts ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleRemoveItem={handleRemoveItem}
            filterOne='dessert'
            filterTwo='desserts'
          />
        </>
        <>
          <h2>~ Drinks ~</h2>
          <MenuItem
            menuItems={menuItems}
            handleRemoveItem={handleRemoveItem}
            filterOne='drink'
            filterTwo='drinks'
          />
        </>
      </div>
    </>
  )
}

// <div className='menu-button'>
// <button onClick={() => {
//   handleRemoveItem(item)
// }}
// >&#10006;
// </button>

// import { Link } from 'react-router-dom'
// import { useState } from 'react'

// export default function NewOrderPage ({
//   foundRestaurant,
//   user,
//   getRestaurantsByUser,
//   restaurantsByUser
// }) {

//   //new menu
//   const [newMenuItem, setNewMenuItem] = useState({
//     name: '',
//     restaurantId: foundRestaurant._id,
//     // category: category,
//     price: Number
//   })

//   //menu item
//   const [menuItem, setFoundMenuItem] = useState(null)

//   //menu index - get
//   const [menuItems, setMenuItems] = useState([])

//   //delete
//   const deleteRestaurant = async (id) => {
//     try {
//       await fetch(`/api/restaurants/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         }

//       })
//       getRestaurantsByUser(user._id)

//     } catch (error) {
//       console.error(error)
//     }
//   }

//   //create menu item
//   const createMenuItem = async (category) => {
//     try {
//       const response = await fetch('/api/restaurants/menu', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ ...newMenuItem })
//       })
//       const data = await response.json()
//       setFoundMenuItem(data)
//       setNewMenuItem({
//         name: '',
//         restaurantId: foundRestaurant._id,
//         category: category,
//         price: Number
//       })
//       // navigate('/edit')
//       // props.setUser(props.user)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const menuHandleChange = (evt) => {
//     setNewMenuItem({ ...newMenuItem, [evt.target.name]: evt.target.value })
//   }

//   return (
//     <>
//     <div className='res-icon' id='show page'>
//       <button>
//         <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>GO BACK</Link>
//       </button>
//       <h1>Edit Your Restaurant Below</h1>
//       <br />
//       <h2>{foundRestaurant.name}</h2> <br />
//       <h2>{foundRestaurant.type}</h2>
//       <h3>Located at: {foundRestaurant.location}</h3>
//       <button onClick={(evt) => {
//         // evt.stopPropagation()
//         deleteRestaurant(foundRestaurant._id)
//       }}
//       >
//         <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>Delete</Link>
//       </button>
//     </div>

//     <div className='form-container' id='form-container-profile'>
//       <h1>Create your Menu Below</h1>
//       {/* <Link style={{ textDecoration: 'none', color: 'white' }} to='/home' > */}
//       <h2>~Create Starters~</h2>
//       <form autoComplete='off' onSubmit={() => {createMenuItem('starter')}}>
//           <input type='text' name='name' value={newMenuItem.name} onChange={menuHandleChange} placeholder='name' required />
//           <input type='text' name='price' value={newMenuItem.price} onChange={menuHandleChange} placeholder='price' required />
//           {/* <input type='text' name='type' value={newMenuItem.type} onChange={menuHandleChange} placeholder='type' required /> */}
//           <div className='create-button'>
//               <button type='submit'>CREATE
//               </button>
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

{ /* <>
      <div className='form-container' id='form-container-profile'>
        <h1>Create your Menu Below</h1> */ }
{ /* <Link style={{ textDecoration: 'none', color: 'white' }} to='/home' > */ }
{ /* <h2>~Create Starters~</h2>
          <form autoComplete='off' onSubmit={createMenu}>
            <input type='text' name='name' value={newMenuItem.name} onChange={menuHandleChange} placeholder='name' required />
            <input type='text' name='price' value={newMenuItem.price} onChange={restaurantHandleChange} placeholder='price' required />
            <input type='text' name='type' value={newMenuItem.type} onChange={restaurantHandleChange} placeholder='type' required />

            <div className='create-button'>
                <button type='submit'>CREATE
                </button>
              </div>
          </form>
        </div> */ }

{ /* <h1>Your Menu</h1>
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
          </> */ }
{ /* </> */ }

// <label>
// Select a Category
// <select >
//   <option name='category' value={newMenuItem.category} onChange={menuHandleChange}>Starter</option>
//   <option name='category' value={newMenuItem.category}>Main</option>
//   <option name='category' value={newMenuItem.category}>Side</option>
//   <option name='category' value={newMenuItem.category}>Dessert</option>
//   <option name='category' value={newMenuItem.category}>Drink</option>
// </select>
// </label>
