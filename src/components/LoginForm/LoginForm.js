// import Link from 'react-router-dom'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function LoginForm ({
  getRestaurantsByUser,
  setRestaurantsByUser,
  setUser,
  user,

  getCustomer

}) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const user = await userService.login(credentials)
      setUser(user)
      navigate('/home')
      // setting the restaurants created by the user ID if the user is a restaurant owner
      if (user.userType) {
        getRestaurantsByUser(user._id)
      } else {
        getCustomer(user._id)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div>
        <div className='form-container'>
          <form autoComplete='off' onSubmit={handleSubmit}>
            <input type='email' name='email' value={credentials.email} onChange={handleChange} placeholder='email' required />
            <input type='password' name='password' value={credentials.password} onChange={handleChange} placeholder='password' required />
            <button type='submit'>
              LOG IN
            </button>
          </form>
        </div>
        <h1 className='error-message'>&nbsp;{error}</h1>
      </div>
      <p>Don't have an account? <Link to='/signup'>signup</Link>
      </p>
    </>
  )
}
