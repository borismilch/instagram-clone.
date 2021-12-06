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

  const imageArr = ['https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg', 'https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg', 'https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg', 'https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg', 'https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg']

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
