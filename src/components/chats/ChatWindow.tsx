import React from 'react'

import ChatsFallBack from './ChatsFallBack'
import ChatBanner from './ChatBanner'
import ChatBody from './ChatBody'

import { connect, useDispatch, useSelector } from 'react-redux'

import ChatForm from './ChatForm'


const ChatWindow = () => {

  const dispatch = useDispatch()
  const currentChat = useSelector((state: any) => state.chat.selectedChat)

  return (
    <div className='w-full'>
     {
        !currentChat ? ( <ChatsFallBack  /> ) : 

        (
          <div className='flex flex-col relative w-full h-full'> 
            <ChatBanner />
            <ChatBody />
            <ChatForm />
          </div>
        

        ) 
     } 
  
    </div>
  )
}

export default connect()(ChatWindow)
