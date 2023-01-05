import RestaurantProfileFormn from '../../components/UserProfileForm/RestaurantProfileForm'

export default function RestaurantProfilePage ({
  createRestaurant,
  setNewRestaurant, 
  newRestaurant,
  setFoundRestaurant,
  foundRestaurant, 
  setRestaurants, 
  restaurants, 
  restaurantHandleChange,
  items,
  foundItem,
  setFoundItem

}) {
    return (
      <>
        <RestaurantProfileFormn  
          createRestaurant={createRestaurant} 
          setNewRestaurant={setNewRestaurant} 
          newRestaurant={newRestaurant} 
          setFoundRestaurant={setFoundRestaurant} 
          foundRestaurant={foundRestaurant} 
          restaurantHandleChange={restaurantHandleChange}
          items={items} 
          foundItem={foundItem}
          setFoundItem={setFoundItem}
        />
      </>
    )
  }
   