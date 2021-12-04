import React from 'react'
import ChatHeader from './ChatHeader'

import { connect, useSelector } from 'react-redux'
import { IUser } from '../../types'
import ChatItem from './ChatItem'

const ChatSidebar = () => {

  const users:IUser[] = useSelector((state: any) => state.user.users)
  const follows: {id: string}[] = useSelector((state: any) => state.user.user)
  const mF: string[] = follows.map(f => f.id) 
  const filteredContakts = users.filter(u => mF.includes(u.uid))

  return (
    <div className='flex flex-col min-w-[299px] lg:min-w-[350xp]'>
     <ChatHeader />

      <div>
      { filteredContakts.map(p => <ChatItem user={p} />) }
      </div>
    </div>
  )
}

export default connect()(ChatSidebar)
