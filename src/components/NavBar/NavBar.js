import { Link } from 'react-router-dom'

export default function NavBar ({
  foundCustomer,
  user
}) {
  return (
    <>
    {user ?
            <li>
            <Link className='logo' to='/home'>Yum2me</Link>
          </li>
          :
        <li>
          <Link className='logo' to='/'>Yum2me</Link>
        </li>
    }
      <li />
      <li />
    </>
  )
}
        

      {/* {foundCustomer.length > 0 ?
        <li className='header-text'>
          {foundCustomer[0].location}
        </li>
        :
        ''
      } */}



      {/* <li className='header-text'>
          {foundCustomer[0].location}
        </li> */}

      {/* {user ?
        {foundCustomer ?
          <li className='header-text'>
          {foundCustomer[0].location}
        </li>
        : ''
        
        } 
        : ''
      } */}