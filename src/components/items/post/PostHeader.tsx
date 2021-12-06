import React, {FC, lazy, Suspense} from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/outline'


import { connect, useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

import { showInterectionModal, setCurrentInterectionId } from '../../../redux/actions/creators'

const PostHeader:FC<{userImg: string, username: string, postId: string}> = ({userImg, username, postId}) => {

  const dispatch = useDispatch()

  const history = useHistory()

  const openModal = () => {
    dispatch(setCurrentInterectionId(postId))
    dispatch(showInterectionModal())

  }

  return (
    <div className='flex p-4 border border-gray-300 justify-between items-center bg-white'>

    <div className='flex items-center '>
      <img src={userImg} onClick={() => history.push('/profile/' + postId.split(' ')[1])} className='w-8 h-8 rounded-full object-contain border-2 border-red-500 mr-3' alt="" />

      <span className='text-sm text-black font-bold '>{username}</span>
    </div>

    <div onClick={openModal.bind(null)} className='p-1 rounded-full transition-all duration-200 hover:bg-gray-100 cursor-pointer'>
      <DotsHorizontalIcon className='h-5' />
    </div>
    
 </div>
  )
}

export default connect()(PostHeader)
