import { Link } from 'react-router-dom'

export default function LoginLinks (props) {
  return (
    <nav>
      <Link  to='/login'>login</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link  to='/signup'>signup</Link>
    </nav>
  )
}
