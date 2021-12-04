import React from 'react'

import Comment from '../Commnet'

import { FilledHeart, HeartIcon, PaperFlyIcon, ChatIcon, BooKMarkIcon, BooKMarkFilled } from '../../icons'
import { DocumentData } from '@firebase/firestore'
import { useDispatch } from 'react-redux'
import { openPostDetailModal, selectPostDetailModalPost } from '../../../redux/actions/generators'
import { IPost } from '../../../types'

const PostFooter: React.FC<
{likes: DocumentData[], comments: DocumentData[], liked: boolean, likePost: () => void, post: IPost}> = 
(
  {comments, liked, likes, likePost, children, post}
  ) => {
  const dispatch = useDispatch()
  

  const selectPostForModal = () => {
    dispatch(selectPostDetailModalPost(post))
    dispatch(openPostDetailModal())
  }
 
  return (
    <div className='border border-gray-300  border-t-0 bg-white relative'>

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
          <div onClick={selectPostForModal.bind(null)} className='iconButton'>
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

      <p className='px-4 truncate'>
         {likes.length > 0 && (
           <p className='font-semibold mb-1'>{likes.length} Відміток "Подобається"</p>
         )}
      </p>

      { comments.length > 0 && (
        <div 
        className='ml-4 max-h-20 flex flex-col gap-3 overflow-y-scroll 
        scrollbar-thumb-black scrollbar-thin'
        >
          { comments.map(c => <Comment key={c.data().id} comment={c.data()} />) }
        </div>
       )
      }

      {children} 

    </div>

  
  )
}

export default PostFooter
