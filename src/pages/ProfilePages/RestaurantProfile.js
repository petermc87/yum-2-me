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

  getStarterItems,
  starterItems,
  setFoundStarterItem,
  foundStarterItem,

  mainItems,
  setFoundMainItems,
  foundMainItem,

  dessertItems,
  setFoundDessertItems,
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
      <RestaurantProfileFormn
        createRestaurant={createRestaurant}
        setNewRestaurant={setNewRestaurant}
        newRestaurant={newRestaurant}

        setFoundRestaurant={setFoundRestaurant}
        foundRestaurant={foundRestaurant}
        restaurantHandleChange={restaurantHandleChange}

        starterItems={starterItems}
        foundStarterItem={foundStarterItem}
        setFoundStarterItem={setFoundStarterItem}

        mainItems={mainItems}
        setFoundMainItems={setFoundMainItems}
        foundMainItem={foundMainItem}

        dessertItems={dessertItems}
        setFoundDessertItems={setFoundDessertItems}
        foundDessertItem={foundDessertItem}

        sideItems={sideItems}
        setFoundSideItem={setFoundSideItem}
        foundSideItem={foundSideItem}

        drinkItems={drinkItems}
        setFoundDrinkItem={setFoundDrinkItem}
        foundDrinkItem={foundDrinkItem}

        selectedItems={selectedItems}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
      />
    </>
  )
}
