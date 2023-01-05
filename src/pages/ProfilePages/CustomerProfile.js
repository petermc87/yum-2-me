import CustomerProfileFormn from '../../components/UserProfileForm/CustomerProfileForm'

export default function CustomerProfilePage ({
  handleChange, 
  setNewCustomer, 
  newCustomer,
  createCustomer
}) {
    return (
      <>
        <CustomerProfileFormn handleChange = {handleChange} newCustomer={newCustomer} setNewCustomer={setNewCustomer} createCustomer={createCustomer} />
      </>
    )
  }
   