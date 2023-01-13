import { useNavigate } from 'react-router-dom'
 

export default function CreateCustomerProfile ({
  handleChange,
  newCustomer,
  createCustomer
}) {

  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    createCustomer()
  }

  return (
    <>
      <div className='form-container' id='form-container-profile'>
        <h2>Update Your Profile</h2>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <input type='text' name='image' value={newCustomer.image} onChange={handleChange} placeholder='image' />
          <input type='text' name='location' value={newCustomer.location} onChange={handleChange} placeholder='location' required />
          <button type='submit'>UPDATE</button>
        </form>
      </div>
      <div>
        {/* <div>
          <button onClick={() => {
          }}
          >LOG OUT
          </button>
        </div> */}
      </div>
    </>
  )
}
