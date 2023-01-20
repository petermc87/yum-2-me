import CustomerProfileFormn from '../../components/UserProfileForm/CustomerProfileForm'
import UserLogOut from '../../components/UserLogOut/UserLogOut'

import { useEffect } from 'react'
export default function CustomerProfilePage ({
  handleChange,
  setNewCustomer,
  newCustomer,
  createCustomer,
  getCustomer,

  user,
  setUser,

  foundCustomer
}) {
  return (
    <div>
      <h1>Your Profile</h1>
      <CustomerProfileFormn
        handleChange={handleChange}
        newCustomer={newCustomer}
        setNewCustomer={setNewCustomer}
        createCustomer={createCustomer}
        foundCustomer={foundCustomer}
        user={user}
        getCustomer={getCustomer}
      />
      <UserLogOut
        user={user}
        setUser={setUser}
        foundCustomer={foundCustomer}
        getCustomer={getCustomer}
      />

    </div>
  )
}
