import React, {FC} from 'react'

import { IUser } from '../../../types'
import { useDispatch, connect } from 'react-redux'
import { singOutUser } from '../../../redux/actions/actions/userActions'

const MiniProfile:FC<{user: IUser}> = ({user}) => {

  const dispatch = useDispatch()
  

  const signOut = () => {
    dispatch(singOutUser())
  }

  return (
    <div className='flex items-center p-6 pl-0 h-24 justify-between' >
      <img className='w-12 h-12 rounded-full p-[2px]' src={user.photoURL} alt="" />

      <div className='ml-2'>
        <h2 className='text-md font-bold text-gray-700'>{user.displayName}</h2>
        <h3 className='text-xs text-gray-400'>Welcome to instagram</h3>
      </div>

      <button
        onClick={() => signOut()}
        color="lightBlue"
        className='text-sm text-blue-500 hover:bg-blue-50 transition-all duration-200 rounded-md cursor-pointer ml-5 p-2'
        >
          Sing Out
       </button>
    </div>
  )
}

export default connect()(MiniProfile)
