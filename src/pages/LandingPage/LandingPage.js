
import NavBar from '../../components/NavBar/NavBar'
import Perks from '../../components/Perks/Perks'
import '../../styles.css'
import Footer from '../../components/Footer/Footer'
import LoginPage from '../LoginPage/LoginPage'
import SignUpPage from '../SignupPage/SignupPage'

import { Routes, Route } from 'react-router-dom'

export default function LandingPage (props) {
  return (
    <>
      <body>
        <header>
          <nav aria-label='Main Navigation' role='navigation'>
            <ul class='navigation-list' id='header-list'>
              <NavBar />
            </ul>
          </nav>
        </header>
        <main>
          <article className='top-content'>
            <div className='top-container' id='top-container-1'>
              <div class='container'>
                <div class='row'>
                  <div class='col-md-12 text-center'>
                    <h3 class='animate-charcter'> CONVENIENT</h3>
                    <h3 class='animate-charcter'>&nbsp;AND </h3>
                    <h3 class='animate-charcter'>&nbsp;&nbsp;TRANSPARENT </h3>
                    <h3 class='animate-charcter'>&nbsp;&nbsp;&nbsp; DELIVERY</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='top-container'>

              <Routes>
                <Route
                  path='/' element={<LoginPage
                    setUser={props.setUser}
                    getRestaurantsByUser={props.getRestaurantsByUser}
                    setRestaurantsByUser={props.setRestaurantsByUser}
                    getCustomer={props.getCustomer}
                    user={props.user}
                                    />}
                />
                <Route
                  path='/signup' element={<SignUpPage
                    setUser={props.setUser}
                                          />}
                />
              </Routes>
            </div>
          </article>
          <Perks />
          <Perks />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  )
}
