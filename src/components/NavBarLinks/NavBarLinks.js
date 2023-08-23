import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'

export default function NavBarLinks ({
  user
}) {
  return (
    <>
      {user.userType === 'true' || user.userType === 'restaurant'
        ? <li />
        : user.userType === 'false' || user.userType === 'customer'
          ? <li className='header-text'>
            <Link to='/orders'>Order History</Link>
            </li>
          : ''}
      <li id='icon'>
        <Link className='cat-icon' to='/profile'><CgProfile size={22} /></Link>
      </li>
    </>
  )
}
