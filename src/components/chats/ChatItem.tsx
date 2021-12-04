import React from 'react'
import { IUser } from '../../types'

const ChatItem:React.FC<{user: IUser}> = ({user}) => {
  return (
    <div className='chatItem'>

      <img src={user.photoURL} className='w-[52px] h-[52px] rounded-full object-cover' alt="" />

      <div className='flex flex-col'>

        <h1 className='text-[#262626] font-light'>
          {user.displayName}
        </h1>

        <p className='text-gray-400 font-semibold text-xs'> 
          Сейчас в сети
        </p>

      </div>
    </div>
  )
}

export default ChatItem
