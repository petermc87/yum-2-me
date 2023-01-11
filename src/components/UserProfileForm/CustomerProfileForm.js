export default function CreateCustomerProfile ({
  handleChange,
  newCustomer,
  createCustomer
}) {
  return (
    <>
      <div className='form-container' id='form-container-profile'>
        <h2>Update Your Profile</h2>
        <form autoComplete='off' onSubmit={createCustomer}>
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
