import RestaurantProfileFormn from '../../components/UserProfileForm/RestaurantProfileForm'
import RestaurantEditPage from '../EditPages/RestaurantEditPage'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import { Routes, Route } from 'react-router-dom'

export default function RestaurantProfilePage ({
  createRestaurant,
  setNewRestaurant,
  newRestaurant,
  setFoundRestaurant,
  foundRestaurant,
  setRestaurants,
  restaurants,
  restaurantHandleChange,

  // getStarterItems,
  // starterItems,
  // setFoundStarterItem,
  // foundStarterItem,

  // mainItems,
  // setFoundMainItems,
  // foundMainItem,

  // dessertItems,
  // setFoundDessertItems,
  // foundDessertItem,

  // sideItems,
  // setFoundSideItem,
  // foundSideItem,

  // drinkItems,
  // setFoundDrinkItem,
  // foundDrinkItem,

  selectedItems,
  handleAddItem,
  handleRemoveItem,

  getRestaurantsByUser,
  setUser,
  user,

}) {
  return (
    <>
      <div className='index-header'>
        <h1>Your Profile</h1>
      </div>
      <Routes>
        <Route
          path='/' element={
            <RestaurantProfileFormn
              createRestaurant={createRestaurant}
              setNewRestaurant={setNewRestaurant}
              newRestaurant={newRestaurant}

              setFoundRestaurant={setFoundRestaurant}
              foundRestaurant={foundRestaurant}
              restaurantHandleChange={restaurantHandleChange}

              // starterItems={starterItems}
              // foundStarterItem={foundStarterItem}
              // setFoundStarterItem={setFoundStarterItem}

              // mainItems={mainItems}
              // setFoundMainItems={setFoundMainItems}
              // foundMainItem={foundMainItem}

              // dessertItems={dessertItems}
              // setFoundDessertItems={setFoundDessertItems}
              // foundDessertItem={foundDessertItem}

              // sideItems={sideItems}
              // setFoundSideItem={setFoundSideItem}
              // foundSideItem={foundSideItem}

              // drinkItems={drinkItems}
              // setFoundDrinkItem={setFoundDrinkItem}
              // foundDrinkItem={foundDrinkItem}

              selectedItems={selectedItems}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}

              getRestaurantsByUser={getRestaurantsByUser}
              user={user}
              setUser={setUser}
            />}
        />
      </Routes>
      <UserLogOut
        user={user}
        setUser={setUser}
      />

    </>
  )
}
