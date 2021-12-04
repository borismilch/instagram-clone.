import  React, {FC, useRef, useEffect, SyntheticEvent} from 'react'

import { connect, useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { signin, loginWithFacebook } from '../../redux/actions/actions/userActions'

const AuthForm:FC = () => {

  const dispatch = useDispatch()
  const isAuthemteficating = useSelector((state: any) => state.user.isAuth)

  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
 
  const submitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(signin({email: email.current!.value, password: password.current!.value}))
  }

  const authWithFacebook = () => {
    dispatch(loginWithFacebook())
  }
  
  return (
    <>
   <div >
      <div className="box">
        <div className="heading"></div>
        <form onSubmit={submitHandler.bind(null)} className="login-form">
          <div className="field">
            <input
            className='auth_input'
              ref={email}
              id="username"
              type="name"
              placeholder=' '
             
            />
            <label htmlFor="username">Email</label>
          </div>
          <div className="field">
            <input
              className='auth_input'
              ref={password}
              placeholder=' '
             id="password"
             type="password"
            />
            <label htmlFor="password">Password</label>
          </div>
            <button className="login-button disabled:opacity-50" disabled={isAuthemteficating} title="login">Log In</button>
            <div className="separator">
              <div className="line"></div>
              <p>OR</p>
              <div className="line"></div>
            </div>
          <div className="other">
            <button className="fb-login-btn" type="submit">
             
              <span className="text-blue-500" onClick={() => authWithFacebook()}>Log in with Facebook</span>
            </button>
            <a className="forgot-password" href="#">Forgot password?</a>
          </div>
        </form>
      </div>
      <div className="box">
        <p>Don't have an account? 
        <span className='text-blue-500'><Link to='/auth/register'> Sign Up</Link></span> 
        </p>
      </div>
    </div>
    </>
  )
}

export default connect()(AuthForm)
