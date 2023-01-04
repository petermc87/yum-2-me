import CustomerProfileFormn from '../../components/UserProfileForm/CustomerProfileForm'

export default function CustomerProfilePage (
  handleChange, 
  setNewCustomer, 
  newCustomer,
  createCustomer
  ) {
    return (
      <>
      <h1>Edit your profile below</h1>
      <CustomerProfileFormn handleChange = {handleChange} newCustomer={newCustomer} setNewCustomer={setNewCustomer} createCustomer={createCustomer}/>
      </>
    )
  }
   