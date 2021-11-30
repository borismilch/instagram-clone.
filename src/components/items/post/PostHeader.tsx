import React, {FC} from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/outline'

const PostHeader:FC<{userImg: string, username: string}> = ({userImg, username}) => {
  return (
    <div className='flex p-4 border border-gray-300 justify-between items-center bg-white'>

    <div className='flex items-center '>
      <img src={userImg} className='w-8 h-8 rounded-full object-contain border-2 border-red-500 mr-3' alt="" />

      <span className='text-sm text-black font-bold '>{username}</span>
    </div>
    <DotsHorizontalIcon className='h-5' />
 </div>
  )
}

export default PostHeader
