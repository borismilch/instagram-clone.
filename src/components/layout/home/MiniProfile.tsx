import React, {FC} from 'react'

import { IUser } from '../../../types'
import { useDispatch, connect } from 'react-redux'
import { singOutUser } from '../../../redux/actions/actions/userActions'

import { useHistory } from 'react-router'

const MiniProfile:FC<{user: IUser}> = ({user}) => {

  const dispatch = useDispatch()

  const history = useHistory()
  

  const signOut = () => {
    dispatch(singOutUser())
  }

  return (
    <div className='flex items-center p-6 pl-0 h-24 justify-between' >
      <img onClick={() => history.push('/profile')} className='w-12 h-12 rounded-full p-[2px]' src={user.photoURL} alt="" />

      <div className='ml-2'>
        <h2 className='text-md font-bold text-gray-700'>{user.displayName}</h2>
        <h3 className='text-xs text-gray-400'>Welcome to instagram</h3>
      </div>
      <div className='w-20'/>
    </div>
  )
}

export default connect()(MiniProfile)
