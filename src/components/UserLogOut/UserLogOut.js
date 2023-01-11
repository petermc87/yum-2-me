// import styles from './UserLogOut.module.scss';
import { logOut } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function UserLogOut({ 
    user, 
    setUser 
}) {
const navigate = useNavigate()

function handleLogOut() {
  logOut();
  setUser(null);
  navigate('/')

}

return (
  <div>
    <div>{user.name}</div>
    <div>{user.email}</div>
    <button onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}