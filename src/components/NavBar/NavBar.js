import { Link } from 'react-router-dom'

export default function NavBar ({
  user
}) {
  return (
    <>
      {user
        ? <li>
          <Link className='logo' to='/home'>Yum2me</Link>
        </li>
        : <li>
          <Link className='logo' to='/'>Yum2me</Link>
        </li>}
      <li />
      <li />
    </>
  )
}
