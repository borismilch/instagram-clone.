
import React, { useState, useEffect } from 'react'
import './likeAnimation.css'

const LikeAnimation:React.FC<{likeFunction: () => void}> = ({likeFunction}) => {

  const [active, setActive] = useState(false)

  const likeImage = () => {
    setActive(true)
    likeFunction()
  }

  useEffect(() => {
    active && setTimeout(() => setActive(false), 1000)
  }, [active])

  return (
    <div onDoubleClick={likeImage} className="inset-0 absolute z-10 flex justify-center items-center">

      <div className={"instagram-heart " + (active ? 'heart_active' : '' )} />
    
    </div>
  )
}

export default LikeAnimation
