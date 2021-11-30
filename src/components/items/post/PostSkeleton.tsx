import React from 'react'
import PostImageSkeleton from './skeleton/PostImageSkeleton'
import PostSkeletonFooter from './skeleton/PostSkeletonFooter'

import 'react-loading-skeleton/dist/skeleton.css'


const PostSkeleton = () => {
  return (
    <div className='flex flex-col bg-white border border-gray-300 '>
      <PostSkeletonFooter rows={1} />
      <PostImageSkeleton />
      <PostSkeletonFooter rows={2} />
    </div>
  )
}

export default PostSkeleton
