// import styles from './UserLogOut.module.scss';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div>
    <div>{user.name}</div>
    <div>{user.email}</div>
    <button onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}