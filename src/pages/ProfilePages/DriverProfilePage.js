export default function DriverProfilePage ({
    user,
    setUser
}){
    return(
        <>
            <h1>{user.userType}</h1>
            <h1>{user.name}</h1>
        </>

    ) 
}


// import RestaurantProfileFormn from '../../components/UserProfileForm/RestaurantProfileForm'
// import RestaurantEditPage from '../EditPages/RestaurantEditPage'
// import UserLogOut from '../../components/UserLogOut/UserLogOut'
// import { Routes, Route } from 'react-router-dom'

// export default function RestaurantProfilePage ({
//   createRestaurant,
//   setNewRestaurant,
//   newRestaurant,
//   setFoundRestaurant,
//   foundRestaurant,
//   setRestaurants,
//   restaurants,
//   restaurantHandleChange,

//   selectedItems,
//   handleAddItem,
//   handleRemoveItem,

//   getRestaurantsByUser,
//   setUser,
//   user

// }) {
//   return (
//     <>
//       <div className='index-header'>
//         <h1>Your Profile</h1>
//       </div>
//       <Routes>
//         <Route
//           path='/' element={
//             <RestaurantProfileFormn
//               createRestaurant={createRestaurant}
//               setNewRestaurant={setNewRestaurant}
//               newRestaurant={newRestaurant}

//               setFoundRestaurant={setFoundRestaurant}
//               foundRestaurant={foundRestaurant}
//               restaurantHandleChange={restaurantHandleChange}

//               selectedItems={selectedItems}
//               handleAddItem={handleAddItem}
//               handleRemoveItem={handleRemoveItem}

//               getRestaurantsByUser={getRestaurantsByUser}
//               user={user}
//               setUser={setUser}
//             />
// }
//         />
//       </Routes>
//       <UserLogOut
//         user={user}
//         setUser={setUser}
//       />
//     </>
//   )
// }
