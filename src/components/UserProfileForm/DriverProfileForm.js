import { useState, useEffect } from 'react'

export default function DriverProfileForm ({
    user,
    setUser,

    getDriverProfile,
    setDriverProfile,
    driverProfile,
    
    setFoundDriver,
    foundDriver,
    setShowForm,
    showForm
  
  }) {
    console.log(user)
 
    const [newDriver, setNewDriver] = useState({})
    const [newDriverInfo, setNewDriverInfo] = useState()
  
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
    //   setNewDriver({ ...newDriver, user: user._id})
      createDriver()
      getDriverProfile(user._id)
    }
    //new driver info
    const handleChange = (evt) => {
        setNewDriver({ ...newDriver, [evt.target.name]: evt.target.value })
        // setNewDriver({ ...newDriver, user: user._id})
      }
    
      useEffect(() => {
        setNewDriverInfo(foundDriver)
      }, [])


    //update profile
    const updateDriver = async () => {
        try{
          const response = await fetch(`/api/drivers/${foundDriver[0]._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDriverInfo)
          })
          const data = await response.json()
          setFoundDriver(data)
          getDriverProfile(user._id)
        } catch (e) {
          console.error(e)
        } 
      }
    
      const handleSubmitUpdate = (e) => {
        e.preventDefault()
        updateDriver()
        setShowForm(false)
      }

    return (
      <>
        {foundDriver[0]
          ? 
            showForm 
              ?
                <>
                  <form onSubmit={(e) => {handleSubmitUpdate(e)}}>
                     <h2>Edit your profile</h2>
                     <br/>
                     <input type='text'value={newDriverInfo.image} placeholder='image' onChange={(e) => {
                      setNewDriverInfo({...newDriverInfo, image: e.target.value})}}/>
                     <input type='text'value={newDriverInfo.location} placeholder='location' onChange={(e) => {
                      setNewDriverInfo({...newDriverInfo, location: e.target.value})}}/>
                    <div className='button-container'>
                      <button type='submit'> confirm</button>
                      <button onClick={() => {setShowForm(false)}}> Close</button>
                    </div>
                  </form>
                </>
              :
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
  