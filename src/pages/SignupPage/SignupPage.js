// AuthPage.js

import SignUpForm from '../../components/SignUpForm/SignUpForm'
// import LoginForm from '../../components/LoginForm/LoginForm'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function SignUpPage(props) {
  return (
    <>
    {/* <header>
      <NavBar />
    </header>
    <main> */}
      <h1>Login</h1>
      <SignUpForm setUser={props.setUser} />
    {/* </main>
    <footer>
      <Footer />
    </footer> */}
    </>
  )
}
