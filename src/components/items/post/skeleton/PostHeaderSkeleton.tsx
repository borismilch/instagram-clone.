import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const PostSkeletonHeader = () => {
  return (
    <div className='p-3 gap-2 block'>
      <Skeleton circle={true} style={{width: 32, height: 32}} />
      <p className='flex flex-col'>
        <Skeleton count={1} style={{width: 200, height: 10}} />
      </p>
    </div>

  )
}

export default PostSkeletonHeader

