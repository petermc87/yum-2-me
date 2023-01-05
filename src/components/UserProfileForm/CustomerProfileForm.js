export default function CreateCustomerProfile ( {
    handleChange, 
    newCustomer,
    createCustomer,
})

{
    return (
        <>
        <div className='form-container' id='form-container-profile'>
        <h1>Create your profile below</h1>
          <form autoComplete='off' onSubmit={createCustomer}>
            <input type='text' name='image' value={newCustomer.image} onChange={handleChange} placeholder='image'/>
            <input type='text' name='location' value={newCustomer.location} onChange={handleChange} placeholder='location' required />
            <button type='submit' >UPDATE PROFILE</button>
          </form>
        </div>
        <div>
            <div>
             <button onClick={()=>{
             }}>LOG OUT</button>
            </div>
         </div>
        </>
        )

    }

