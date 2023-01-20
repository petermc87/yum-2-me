// import styles from './UserLogOut.module.scss';
import { logOut } from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom'

export default function UserLogOut ({
  user,
  setUser,
  foundCustomer,
  foundDriver,
  setShowForm,
  getCustomer
}) {

  const navigate = useNavigate()

  function handleLogOut () {
    logOut()
    setUser(null)
    navigate('/')
  }

  function availability () {
    if(foundDriver[0] && foundDriver[0].availability){
      // console.log('Available')
      return <div className='driver-available'>Available</div>
    }
    else{
      // console.log('Not available')
      return <div className='driver-busy'>Busy</div>
    }
  }


  return (
    <>
      {user.userType === 'customer' || user.userType === 'false' 
        ?
        <div className='form-container' id='profile-info'>
          <h2>Profile Info</h2>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <br />
          {foundCustomer.length > 0
            ?
              <>
                <div className='image-container'><img src={foundCustomer[0].image} /></div>
                  <br />
                <div>{foundCustomer[0].location}</div>
              </>
            :
            ''
          }

        <button onClick={handleLogOut}>LOG OUT</button>
        </div>
        : user.userType === 'driver' 
            ?
            <div className='form-container' id='profile-info'>
              <h2>Profile Info</h2>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <br />
              {foundDriver[0]
                ?
                <>
                  <div className='image-container'><img src={foundDriver[0].image} />
                  </div>
                  <br />
                  <div>{foundDriver[0].location}</div>
                  <br/>
                  <div>{availability()}</div>
                  <br/>
                </>
                :
                ''
              }
              <div className='button-container'>
                <button onClick={()=>{
                  setShowForm(true)}}>EDIT PROFILE</button>
                <button onClick={handleLogOut}>LOG OUT</button>
              </div>
            </div>
            : 
            <div className='form-container' id='profile-info'>
              <h2>Profile Info</h2>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <br />
              <button onClick={handleLogOut}>LOG OUT</button>
            </div>
      }
    </>
  )
}
