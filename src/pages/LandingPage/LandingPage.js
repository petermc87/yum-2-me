
import NavBar from '../../components/NavBar/NavBar'
import Perks from '../../components/Perks/Perks'
import '../../styles.css'
import Footer from '../../components/Footer/Footer'
import LoginLinks from '../../components/LoginLinks/LoginLinks'
import LoginPage from '../LoginPage/LoginPage'
import SignUpPage from '../SignupPage/SignupPage'
import { Routes, Route } from 'react-router-dom'

export default function NavBarLinks (props) {
  return (
    <>
      <body>
        <header>
          <NavBar/>
        </header>
        <main>
          <article className='top-content'>
            <div className='top-container' id='top-container-1'><img src='' alt='IMAGE' /></div>
            <div className='top-container'>
              <LoginLinks />
              <Routes>
                <Route path='/login' element={<LoginPage setUser={props.setUser}/>} />
                <Route path='/signup' element={<SignUpPage setUser={props.setUser}/>} />
              </Routes>
            </div>
          </article>
          <Perks />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>

  )
}

