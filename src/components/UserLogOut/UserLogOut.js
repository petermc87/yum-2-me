// import styles from './UserLogOut.module.scss';
import { logOut } from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function UserLogOut ({
  user,
  setUser,
  foundCustomer,
  foundDriver,
  setShowForm,
  getCustomer
}) {
  // console.log(foundDriver)
  const navigate = useNavigate()

  function handleLogOut () {
    logOut()
    setUser(null)
    navigate('/')
  }


// useEffect(() => {
//   getCustomer(user._id)
// })

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
                </>
                :
                ''
              }
              <button onClick={()=>{
                setShowForm(true)
              }}>EDIT PROFILE</button>
      
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
