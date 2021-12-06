import React from 'react'
import { IUser } from '../../types'

import { connect, useDispatch, useSelector } from 'react-redux'
import { changeSelectedChat } from '../../redux/actions/creators'

const ChatItem:React.FC<{user: IUser}> = ({user}) => {

  const dispatch = useDispatch()
  const selected = useSelector((state: any) => state.chat.selectedChat)

  const selectThisItem = () => {
    dispatch(changeSelectedChat(user.uid))
  }

  return (
    <div onClick={selectThisItem.bind(null)} className={'chatItem py-[8px] ' + (selected === user.uid ? 'bg-gray-50' : '') }>

      <img src={user.photoURL} className='w-[54px] h-[54px] rounded-full object-cover' alt="" />

      <div className='flex flex-col'>

        <h1 className='text-[#262626] font-semibold'>
          {user.displayName}
        </h1>

        <p className='text-gray-400 font-semibold text-xs'> 
          Сейчас в сети
        </p>

      </div>
    </div>
  )
}

export default connect()(ChatItem)
