import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
export default function NavBarLinks (props) {
  return (
    <>
      <li className='header-text'>
        <Link to='/orders'>Order History</Link>
      </li>
      <li id='icon'>
        <Link className='cat-icon'to='/profile'><CgProfile size={22}/></Link>
      </li>
    </>
  )
}
