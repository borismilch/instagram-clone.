import React, { useState, useEffect } from 'react'
import ChatHeader from './ChatHeader'

import { connect, useSelector } from 'react-redux'
import { IUser } from '../../types'
import ChatItem from './ChatItem'

const ChatSidebar = () => {

  const follows: IUser[] = useSelector((state: any) => state.user.followers)

  return (
    <div className='flex flex-col min-w-[299px] border-gray-300 border-r lg:min-w-[350xp]'>
     <ChatHeader />

      <div className='flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-track-transparent scrollbar-trumb-gray-600 scrollbar-thin ml-1'>  

      { follows.length > 0 &&  follows.map(p => <ChatItem user={p} key={p.uid} />) }
      </div>
    </div>
  )
}

export default connect()(ChatSidebar)
