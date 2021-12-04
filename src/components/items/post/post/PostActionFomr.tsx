import React from 'react'

import { FilledHeart, HeartIcon, ChatIcon, PaperFlyIcon,BooKMarkIcon  } from '../../../icons'

const PostActionFomr:React.FC<{liked: boolean, likePost: () => void, likes:number}> = ({liked, likePost ,likes}) => {
  return (
    <div className='sborder-gray-300  border-t bg-white relative'>

    <div className='flex items-center justify-between px-[16px] pt-[16px] pb-[12px]'>

    <div className='flex gap-3'>
        
       {liked ? 

        <div onClick={likePost} className='iconButton text-red-600'>
          <FilledHeart />
        </div>
        : 
        <div onClick={likePost} className='iconButton'>
          <HeartIcon />
        </div>
        
       }
        <div className='iconButton'>
          <ChatIcon />
        </div>
        
        <div className='iconButton'>
          <PaperFlyIcon />
        </div>

      </div>

        <div className='iconButton'>
          <BooKMarkIcon  />
        </div>
      

    </div>

    <p className='px-4 pb-4 truncate'>

      <p className='font-semibold mb-1'>{likes} Відміток "Подобається"</p>
      
    </p>

  </div>
  )
}

export default PostActionFomr
