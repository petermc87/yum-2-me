// import styles from './UserLogOut.module.scss';
import { logOut } from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom'

export default function UserLogOut ({
  user,
  setUser,
  foundCustomer,
  foundDriver,
}) {
  const navigate = useNavigate()

  function handleLogOut () {
    logOut()
    setUser(null)
    navigate('/')
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
          {/* <div className='image-container'><img src='https://i.imgur.com/ShtsVkV.jpg' /></div> */}
          <div className='image-container'><img src={foundCustomer[0].image} /></div>
          <br />
          <div>{foundCustomer[0].location}</div>
        <button onClick={handleLogOut}>LOG OUT</button>
        </div>
        : user.userType === 'driver' 
            ?
            <div className='form-container' id='profile-info'>
              <h2>Profile Info</h2>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <br />
              <div className='image-container'><img src={foundDriver[0].image} /></div>
              <br />
              <div>{foundDriver[0].location}</div>
              <button onClick={handleLogOut}>LOG OUT</button>
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
