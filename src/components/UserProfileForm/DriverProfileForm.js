import { useState, useEffect } from 'react'

export default function DriverProfileForm ({
    user,
    setUser,

    getDriverProfile,
    setDriverProfile,
    driverProfile,
    
    setFoundDriver,
    foundDriver
  
  }) {
 
    const [newDriver, setNewDriver] = useState({})




    // create driver
    const createDriver = async () => {
        try {
        const response = await fetch('/api/drivers', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...newDriver })
        })
        const data = await response.json()
        setFoundDriver(data)
        setNewDriver({
            image: '',
            location: '',
            user: user._id
        })
        } catch (error) {
        console.error(error)
        }
    }
    //submit driver
    const handleSubmit = (e) => {
      e.preventDefault()
      //nesting the user ID when the form is being submitted
      setNewDriver({ ...newDriver, user: user._id})
      createDriver()
      getDriverProfile(user._id)
    }
    //new driver info
    const handleChange = (evt) => {
        setNewDriver({ ...newDriver, [evt.target.name]: evt.target.value })
      }
 

    return (
      <>
        {foundDriver
          ? 
            ''
          : 
          <div className='form-container' id='form-container-profile'>
            <h2>Create Your Profile</h2>
            <form autoComplete='off' onSubmit={handleSubmit}>
              <input type='text' name='image' value={newDriver.image} onChange={handleChange} placeholder='image' />
              <input type='text' name='location' value={newDriver.location} onChange={handleChange} placeholder='location' required />
              <button type='submit'>CREATE</button>
            </form>
          </div>}
      </>
    )
  }
  