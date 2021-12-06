import React from 'react'
import NoteIcon from '../icons/NoteIcon'
import { ChevronDownIcon } from '@heroicons/react/outline'

import { connect, useSelector } from 'react-redux'
import { IUser } from '../../types'

const ChatHeader = () => {

  const user:IUser = useSelector((state: any) => state.user.user)

  return (
    <div className='flex w-full h-[60px] border-gray-300 border-r border-b items-center justify-center pt-1 px-[20px]'>
     
     <div className='flex  items-center flex-1 px-[15px] justify-center '>
        <h1 className='font-semibold text-[16px]'>{user.displayName.toLowerCase().split(' ').join('')}</h1>
        
        <ChevronDownIcon width='22px'  />
     </div>

      <NoteIcon />
    
     
      
    </div>
  )
}

export default connect()(ChatHeader)
