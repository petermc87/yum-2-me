// AuthPage.js

import SignUpForm from '../../components/SignUpForm/SignUpForm'
// import LoginForm from '../../components/LoginForm/LoginForm'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function SignUpPage (props) {
  return (
    <>
      <h1>Signup</h1>
      <SignUpForm
        setUser={props.setUser}
        getRestaurantsByUser={props.getRestaurantsByUser}
        setRestaurantsByUser={props.setRestaurantsByUser}
      />
    </>
  )
}
