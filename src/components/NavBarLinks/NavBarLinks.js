import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
export default function NavBarLinks ({
  user,
  foundCustomer
}) {
  // // console.log(user.userType)
  // if(user.userType === false){
  //   console.log(foundCustomer[0].location)
  // }

  return (
    <>
      {/* {user.userType?
        ''
      :
        <li className='header-text'>
        {foundCustomer[0].location}
        </li>
      }
    */}

      {user.userType
        ? <li />
        : <li className='header-text'>
          <Link to='/orders'>Order History</Link>
        </li>}

      <li id='icon'>
        <Link className='cat-icon' to='/profile'><CgProfile size={22} /></Link>
      </li>
    </>
  )
}
