import LoginForm from '../../components/LoginForm/LoginForm'
import { useEffect } from 'react'

export default function LoginPage (props) {
  return (
    <>
      <h1>Login</h1>
      <LoginForm
        setUser={props.setUser}
        user={props.user}

        getCustomer={props.getCustomer}

        getRestaurantsByUser={props.getRestaurantsByUser}
        setRestaurantsByUser={props.setRestaurantsByUser}

        foundCustomer={props.foundCustomer}
      />
    </>
  )
}
