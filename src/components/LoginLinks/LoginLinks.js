import { Link } from 'react-router-dom'

export default function LoginLinks (props) {
  return (
    <nav>
      <Link to='/login'>login</Link>
       <br/>
      <Link to='/signup'>signup</Link>
    </nav>
  )
}
