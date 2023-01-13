import SignUpForm from '../../components/SignUpForm/SignUpForm'

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
