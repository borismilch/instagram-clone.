import React from 'react'

import './storiesLoader.css'

const StoriesLoader = () => {
  return (
    <div className='inset-0 flex items-center justify-center absolute z-10'> 

    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

    </div>
    
  )
}

export default StoriesLoader
