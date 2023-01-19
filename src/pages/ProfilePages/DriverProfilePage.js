import DriverProfileForm from "../../components/UserProfileForm/DriverProfileForm"
import UserLogOut from "../../components/UserLogOut/UserLogOut"
import { Routes, Route } from 'react-router-dom'

export default function DriverProfilePage ({
    user,
    setUser,

    getDriverProfile,
    setDriverProfile,
    driverProfile,
    
    setFoundDriver,
    foundDriver
}){
    return(
    <>
      <div className='index-header'>
        <h1>Your Profile</h1>
      </div>
      <Routes>
        <Route
          path='/' element={
            <DriverProfileForm
                user={user}
                setUser={setUser}

                getDriverProfile={getDriverProfile}
                setDriverProfile={setDriverProfile}
                driverProfile={driverProfile}

                setFoundDriver={setFoundDriver}
                foundDriver={foundDriver}
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
