import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonSuggestion = () => {
  return (
    <div className='flex p-3 gap-2'>
    <Skeleton circle={true} style={{width: 28, height: 28}} />
    <p className='flex flex-col justify-center'>
      <Skeleton count={2} style={{width: 80, height: 10 }} />
    </p>
  </div>
  )
}

export default SkeletonSuggestion
