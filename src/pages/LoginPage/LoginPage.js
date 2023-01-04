
import LoginForm from '../../components/LoginForm/LoginForm'

export default function LoginPage (props) {
  return (
    <>
      <h1>Login</h1>
      <LoginForm setUser={props.setUser} />
    </>
  )
}
