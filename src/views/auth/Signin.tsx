import React,{FC, useEffect} from 'react'

import bg from '../../assets/auth/bg.png'

import { authLoaded } from '../../redux/actions/actions/actions'

import { connect, useDispatch, useSelector } from 'react-redux'

import SignInSlider from '../../components/slider/SignInSlider'

import classes from './signin.module.css'
import AuthForm from '../../components/forms/AuthForm'

const signin:FC = () => {

  return (
    <>
    <div className='flex w-screen h-screen items-center justify-center '>
      
    <div 
      className={classes.ph + ' relative smdxl'} 
      style={{backgroundImage: `url(${bg})`}}
    >
      <SignInSlider />
    </div>

    <AuthForm />
      
   </div>
  
 
  </>)
}

export default connect()(signin)
