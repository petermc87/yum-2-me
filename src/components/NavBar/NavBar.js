import { Link } from 'react-router-dom'

export default function NavBar (props) {
  return (
    <>
      <li>
        <Link className='logo'to='/home'>Yum2me</Link>
      </li>
        <li></li >
        <li></li >
      <li className='header-text'></li>
    </>
  )
}
