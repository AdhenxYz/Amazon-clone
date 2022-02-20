import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {
  return (
    <div className='login_wrapper'>
        <Link to='/'>
          <img className="Login_logo" src='https://pngimg.com/uploads/amazon/amazon_PNG1.png' alt='' />
        </Link>
          <div className='Login_signin'>
              <h2 className='title'>Sign-In</h2>
              <p className='login_title'>Email or Mobile Phone Number</p>
              <input className='Login_input' type="text" />
              <p className='login_title'>Password</p>
              <input className='Login_input' type="password" />
              <button>Continue</button>
              <p className='Login_term'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          </div>
    </div>
  )
}

export default Login