import { useNavigate } from 'react-router-dom'

export default function DriverShowPage ({
  foundDriver,
  driverUser,
  setFoundDriver,
  activeOrder
}) {
  const navigate = useNavigate()

  // adding the selected order into selected drivers profile
  const updateDriver = async () => {
    try {
      const response = await fetch(`/api/drivers/orders/${foundDriver._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...activeOrder
        })
      })
      const data = await response.json()
      setFoundDriver(data)
    } catch (e) {
      console.error(e)
    }
  }

  const updateOrderAssginment = async () => {
    try {
      console.log(activeOrder._id)
      const response = await fetch(`/api/orders/${activeOrder._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          assigned: true,
          driver: driverUser._id
        })
      })
      const data = await response.json()
      console.log(data)
      setFoundDriver(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='driver-showpage'>
      <div className='button-container' id='back-button'>
        <button onClick={() => { navigate('/drivers') }}>
          &#8249;
        </button>
      </div>
      <h1>Driver Profile</h1>
      {foundDriver && driverUser
        ? <div className='form-container' id='profile-info'>
          <h2>{driverUser.name}</h2>
          <div className='res-image'>
            <img src={foundDriver.image} />
          </div>
          <br />
          <h4>{foundDriver.location}</h4>
          <p>{foundDriver.availability
            ? <>
              <div className='driver-available'>Available</div>
              <button onClick={() => {
                updateDriver()
                updateOrderAssginment()
              }}
              >Add
              </button>
              </>
            : <>
              <div className='driver-busy'>Busy</div>
              <br />
              <>Cannot Add Driver</>
              </>}
          </p>
          </div>
        : ''}
    </div>
  )
}
