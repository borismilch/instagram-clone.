import React from 'react'

import { connect, useDispatch, useSelector } from 'react-redux'

import SignInSlider from '../../components/slider/SignInSlider'

import classes from './signin.module.css'
import AuthForm from '../../components/forms/AuthForm'

const signin:React.FC = () => {

  return (
    <>
    <div className='flex w-screen h-screen items-center justify-center '>
      
    <div 
      className={classes.ph + ' relative smdxl'} 
      style={{backgroundImage: `url(${'https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png'})`}}
    >
      <SignInSlider />
    </div>

    <AuthForm />
      
   </div>
  
 
  </>)
}

export default connect()(signin)
