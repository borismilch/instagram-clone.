import React from 'react'
import PostImage from '../components/layout/profile/content/PostImage'
import { connect, useSelector } from 'react-redux'
import { IPost } from '../types'

import './grid.css'

const PhotosGrid = () => {

  const posts:IPost[] = useSelector((state: any) => state.posts.posts)
  
  return (
    <div className='py-[25px] max-w-[945px] mx-auto'>
      <div className='flex mb-7 flex-wrap w-full h-full' >

        <div className="post_grid w-full h-full">
        {
        posts.map(p => (
         <div className='post_ig'>
          <PostImage post={p} />
         </div>
        ))
      }
        </div>
    
      
    </div>
    </div>
  )
}

export default connect()(PhotosGrid)
