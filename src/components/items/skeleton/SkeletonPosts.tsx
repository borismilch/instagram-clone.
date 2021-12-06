import React from 'react'
import PostSkeleton from '../post/PostSkeleton'

const SkeletonPosts = () => {
  return (
    <div className='flex flex-col gap-5'>
      <PostSkeleton />
      <PostSkeleton />
    </div>
  )
}

export default SkeletonPosts
