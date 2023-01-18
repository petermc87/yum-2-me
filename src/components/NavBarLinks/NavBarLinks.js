import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
// import { FALSE } from 'sass'
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
      {user.userType === true || user.userType === 'restaurant'
        ? 
          <li />
        : user.userType === false || user.userType === 'customer' ?
          <li className='header-text'>
            <Link to='/orders'>Order History</Link>
          </li>
            : 
              ''  
      }
      <li id='icon'>
        <Link className='cat-icon' to='/profile'><CgProfile size={22} /></Link>
      </li>
    </>
  )
}


// {user.userType === true || user.userType === 'restaurant'
// ? 
//   <li />
// : user.userType === false || user.userType === 'customer' ?
//   <li className='header-text'>
//     <Link to='/orders'>Order History</Link>
//   </li>
//     : 
//       ''  
// }


// {user.userType === true || user.userType === 'restaurant'
// ? 
//   <li />
// : 
//   <li className='header-text'>
//     <Link to='/orders'>Order History</Link>
//   </li>
// }

{/* <li className='header-text'>
<Link to='/history'></Link>
</li> */}