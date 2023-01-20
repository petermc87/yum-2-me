import { useEffect } from "react"
export default function CreateCustomerProfile ({
  handleChange,
  newCustomer,
  createCustomer,
  foundCustomer,
  getCustomer,
  user

}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    createCustomer()
    getCustomer(user._id)
  }

  useEffect(() => {
    getCustomer(user._id)
  }, [])

  return (
    <>
      {foundCustomer.length > 0
        ? 
          ''
        : 
          <div className='form-container' id='form-container-profile'>
            <h2>Update Your Profile</h2>
            <form autoComplete='off' onSubmit={handleSubmit}>
              <input type='text' name='image' value={newCustomer.image} onChange={handleChange} placeholder='image' />
              <input type='text' name='location' value={newCustomer.location} onChange={handleChange} placeholder='location' required />
              <button type='submit'>Submit</button>
            </form>
          </div>}
    </>
  )
}
