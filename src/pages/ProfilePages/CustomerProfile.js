import CustomerProfileFormn from '../../components/UserProfileForm/CustomerProfileForm'
import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function CustomerProfilePage ({
  handleChange,
  setNewCustomer,
  newCustomer,
  createCustomer,
  user,
  setUser
}) {
  return (
    <>
    <h1>Your Profile</h1>
    <CustomerProfileFormn
        handleChange={handleChange}
        newCustomer={newCustomer}
        setNewCustomer={setNewCustomer}
        createCustomer={createCustomer}
      />
      <UserLogOut
        user={user}
        setUser={setUser}
       />
    </>
  )
}
