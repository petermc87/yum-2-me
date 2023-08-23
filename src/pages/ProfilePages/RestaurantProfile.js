import RestaurantProfileFormn from '../../components/UserProfileForm/RestaurantProfileForm'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import { Routes, Route, useNavigate } from 'react-router-dom'

export default function RestaurantProfilePage ({
  createRestaurant,
  setNewRestaurant,
  newRestaurant,
  setFoundRestaurant,
  foundRestaurant,
  restaurantHandleChange,

  selectedItems,
  handleAddItem,
  handleRemoveItem,

  getRestaurantsByUser,
  setUser,
  user

}) {
  const navigate = useNavigate()
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

              selectedItems={selectedItems}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}

              getRestaurantsByUser={getRestaurantsByUser}
              user={user}
              setUser={setUser}
            />
}
        />
      </Routes>
      <UserLogOut
        user={user}
        setUser={setUser}
      />
    </>
  )
}
