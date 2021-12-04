import React from 'react'
import ChatSidebar from '../components/chats/chatSidebar'
import ChatWindow from '../components/chats/ChatWindow'


const Chats = () => {
  return (
    <div className='lg:p-[20px] w-full h-[95vh]'>

     <div className='mx-auto w-full h-full flex max-w-[945px] bg-white border border-gray-300 rounded-md'>
       <ChatSidebar /> 
       <ChatWindow />
     </div>

    </div>
  )
}

export default Chats
