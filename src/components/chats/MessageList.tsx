import React, { useEffect, useRef } from 'react'
import { IMessage } from '../../types'

import { connect, useSelector } from 'react-redux'
import { collection, onSnapshot, query } from '@firebase/firestore'
import { db } from '../../../firebase'

const MessageList: React.FC<{messages: any[]}> = ({messages}) => {

  const user = useSelector((state: any) => state.user.user)

  const selectedChat = useSelector((state: any) => state.chat.selectedChat)

  const messageRef = collection(db, 'rooms', selectedChat + user.uid , 'messages')

  const windowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    onSnapshot( messageRef, (snap) => {windowRef.current?.scrollBy( 0, 300 )}  )
    console.log(messages)
  }, [user.uid, db])


  const ImageMessage: React.FC<{url: string}> = ({url}) => {
    return (
      <div>
        <img src={url} className='w-[236px] h-[177px] object-cover rounder-[22px]' alt="ll" />
      </div>
    )
  }

  const CurrentUserMessage: React.FC<{message: IMessage}> = ({message}) => {
    return (
      <div className='w-full items-center flex justify-end'>

        { message.type !== 'image' ?
            <div className='p-[16px] rounded-[22px] bg-[#efefef] overflow-x-hidden text-sm text-[#262626] font-base'>
              <p className='max-w-[234px]'>
                {message.content}
              </p>
         </div>
         :
          <ImageMessage url={message.content} />
        }

      </div>
      
    )
  }

  const OtherUserMessage: React.FC<{message: IMessage}> = ({message}) => {
    return (

      <div className='w-full flex items-start gap-3'>

        <img src={message.userImg} className='w-[27px] h-[27px] rounded-full object-cover' alt="ff" />
          <div className='p-[16px] overflow-x-hidden max-w-[234px] rounded-[22px] border border-gray-400 text-sm bg-white text-[#262626] font-base'>
            { message.content }
     
        </div>
      </div>
     
    )
  }

  return (
     <div ref={windowRef} className='flex flex-col overflow-y-scroll max-h-[89vh] pb-[70px] lg:pb-[40px] pt-[75px] px-[20px] overflow-x-hidden gap-5'>
        { messages.map(m => m.userId === user.uid ? <CurrentUserMessage message={m} /> : <OtherUserMessage message={m} /> ) }
     </div>
  )
}

export default connect()(MessageList)
