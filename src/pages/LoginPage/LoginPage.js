import LoginForm from '../../components/LoginForm/LoginForm'
export default function LoginPage (props) {
  return (
    <>
        <div>
        <h2>Try out a sample account!</h2>
          <strong>Customer:</strong>
          <br />
          Email: j@j.com
          <br />
          Password: 12345
        <br/>
        <br/>
          <strong>Driver:</strong>
            <br />
            Email: jerry@mail.com
            <br />
            Password: 12345
        <br/>
        <br/>
          <strong>Restaurant:</strong>
            <br />
            Email: me@gmail.com
            <br />
            Password: 12345
      </div>

      <h2>~ OR ~</h2>
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
