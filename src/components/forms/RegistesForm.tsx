import React, {FC, SyntheticEvent, useRef} from 'react'

import { connect, useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { createNewUser } from '../../redux/actions/actions/userActions'

import icons8facebook from '../../assets/icons8-facebook.svg'

import { userCreadentials } from '../../types'

const RegisterForm:FC = () => {

  const isAuthenteficating = useSelector((state: any) => state.user.isAuth)

  const dipatch = useDispatch()

  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const name = useRef<HTMLInputElement>(null)
  const address = useRef<HTMLInputElement>(null)

  const formHandler = async (e:SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData: userCreadentials = {
      email: email.current!.value,
      password: password.current!.value,
      displayName: name.current!.value,
      photoURL: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'
    }
    
    dipatch(createNewUser(formData))
    
  }

  return (
    <>
    <div>
      <div className="box">
        <div className="heading"></div>
        <form onSubmit={formHandler.bind(null)} className="login-form">

        <button 
          className="login-button my-4 flex items-center justify-center" 
          title="Sign in with Facebook">

          <img className='h-5 w-5 text-white fill mr-1' src={icons8facebook} alt="" />
          Sign in with Facebook</button>  

        <div className="separator">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
        </div>

          <div className="field">
            <input 
              className='auth_input'
              ref={name}
              id="username"
              type="name"
              placeholder=" "
            />
            <label htmlFor="username">Name</label>
          </div>

          <div className="field">

            <input
              className='auth_input'
              ref={email}
              id="username"
              type="email"
              placeholder=" "
            />
            <label htmlFor="username">Email</label>
          </div>

          <div className="field">
            <input
                className='auth_input'
              id="username"
              ref={password}
              type="name"
              placeholder=" "
            />
            <label htmlFor="username">Password</label>
          </div>

          <div className="field">
            <input
              className='auth_input'
              ref={address}
              id="username"
              type="name"
              placeholder=" "
            />
            <label htmlFor="username">Address</label>
          </div>

          <button type='submit' className="login-button my-3 disabled:opacity-50" disabled={isAuthenteficating} title="login">Sign Up</button>

        </form>
      </div>
      <div className="box">
        <p>Don't have an account? <Link to='/auth/signin'>Sign in</Link></p>
      </div>
    </div>
    </>
  )
}

export default connect()(RegisterForm)
