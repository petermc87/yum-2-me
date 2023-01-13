// import styles from './UserLogOut.module.scss';
import { logOut } from '../../utilities/users-service'
import { useNavigate } from 'react-router-dom'
// import Customer from '../../../models/customer/customerProfile'
// import Customer from '../../../models/customer/customerProfile'

export default function UserLogOut ({
  user,
  setUser,

  foundCustomer

}) {
  const navigate = useNavigate()

  function handleLogOut () {
    logOut()
    setUser(null)
    navigate('/')
  }

  return (
    <div className='form-container' id='profile-info'>
      <h2>Profile Info</h2>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <br/>
      {/* <div className='image-container'><img src='https://i.imgur.com/ShtsVkV.jpg' /></div> */}
      {/* <div className='image-container'><img src={foundCustomer.image} /></div> */}
      <br/>
      {/* <div>{foundCustomer.location}</div> */}
      <button onClick={handleLogOut}>LOG OUT</button>

    </div>
  )
}
