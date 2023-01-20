import DriverProfileForm from "../../components/UserProfileForm/DriverProfileForm"
import UserLogOut from "../../components/UserLogOut/UserLogOut"
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

export default function DriverProfilePage ({
    user,
    setUser,
    getDriverProfile,
    setDriverProfile,
    driverProfile,
    setFoundDriver,
    foundDriver
}){

    const [showForm, setShowForm] = useState(false)

    return(
    <div>
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

                setShowForm={setShowForm}
                showForm={showForm}
            />}
        />
      </Routes>
        <UserLogOut
            user={user}
            setUser={setUser}
            foundDriver={foundDriver}
            setShowForm={setShowForm}
        />
    </div>
    ) 
}
