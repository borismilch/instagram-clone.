import React from 'react'

import {FC, useState, useEffect} from 'react'

import p1 from '../../assets/auth/1.jpg'
import p2 from '../../assets/auth/2.jpg'
import p3 from '../../assets/auth/3.jpg'
import p4 from '../../assets/auth/4.jpg'
import p5 from '../../assets/auth/5.jpg'

import classes from './sloder.module.css'

const SignInSlider: FC = () => {

  const [idx, setIdx] = useState(0)

  const imageArr = [p1, p2, p3, p4, p5].map(img => img)

  useEffect(() => {
      const interval = setTimeout(() => {
        setIdx(prev => prev + 1)
        if(idx > imageArr.length - 2) { setIdx(prev => 0) }

      }, 5000)
    return () => clearTimeout(interval)
  }, [idx] )

  return (
    <>
      {imageArr.map((src, i) => (
        <img src={src} alt="kk" key={src} className={  classes.authimg +  ' ' + ( idx === i && classes.active) } />
      ))}
    </>
  )
}

export default SignInSlider
