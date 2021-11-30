import React from 'react'
import Skeleton from 'react-loading-skeleton'


const PostSkeletonFooter: React.FC<{rows: number}> = ({rows}) => {
  return (
    <div className='flex p-3 gap-2'>
      <Skeleton circle={true} style={{width: 32, height: 32}} />
      <p className='flex flex-col justify-center'>
        <Skeleton count={rows} style={{width: 200, height: 10}} />
      </p>
    </div>

  )
}

export default PostSkeletonFooter
