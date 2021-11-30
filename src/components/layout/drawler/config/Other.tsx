import React from 'react'

import { Chevron } from '../../../icons'

const Other = () => {
  return (
    <div>
      <div className='
    flex items-center relative px-[12px] border-t justify-between h-[45px] border-gray-300 py-1 '>
        
      <span className='text-base text-black'>More Features</span>

        <div className='mr-[30px]'>

          <div className ="w-7 h-7 transform translate-y-2">
          <Chevron/>
          </div>

      </div>
    </div>
    
    <div className='
    flex items-center relative px-[12px] border-t border-b mb-2 justify-between h-[45px] border-gray-300 py-1 '>
        
        <a className='text-base text-black ' href='https://github.com/Saloed2' >Git Hub</a>
  
          <div className='mr-[30px]'>
  
            <div className ="w-7 h-7 transform translate-y-2">
              <Chevron/>
            </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Other
