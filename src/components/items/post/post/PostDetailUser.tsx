import React from 'react'
import { IUser } from '../../../../types'
import DotsIcon from '../../../icons/DotsIcon'

const PostDetailUser:React.FC<{user:IUser}> = ({user}) => {
  return (

    <div className='flex items-center border-b max-w-full md:max-w-[404px] w-full border-gray-300 gap-2 px-[18px] h-[60px] justify-between'>

      <div className='flex items-center gap-2'>
        <div className='mr-[2px]'>
        <img src={user.photoURL} className='rounded-full w-[28px] h-[28px]' alt="" />
      </div>    

      <b className='text-sm'>{user.displayName }</b>

      <span className='flex items-center justify-center mx-1 text-[#262626]'>
      •
      </span>

      <p className='text-[#0095f6] font-semibold transition-all duration-200 p-1 rounded-sm cursor-pointer hover:bg-blue-50'>
        Подписаться
      </p>
      </div>
    

    <DotsIcon />

    </div>
      
  
   
  )
}

export default PostDetailUser
