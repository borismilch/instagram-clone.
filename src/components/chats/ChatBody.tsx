import React, { useEffect, useState } from 'react'
import NoMessageChatFallback from './NoMessageChatFallback'

import { IMessage, IUser } from '../../types'
import { addDoc, collection, doc, DocumentData, onSnapshot, orderBy, query, serverTimestamp } from '@firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { db } from '../../../firebase'

import { connect, useSelector } from 'react-redux'
import MessageList from './MessageList'

const hello = 'https://firebasestorage.googleapis.com/v0/b/nedoproject-811b7.appspot.com/o/hi-sticker-social-media-content-hand.jpg?alt=media&token=8ac75ff4-d39f-445a-a0d8-267a6af7aa47'

const ChatBody = () => {

  const selectedChat  = useSelector((state: any) => state.chat.selectedChat)

  const user: IUser = useSelector((state: any) => state.user.user)

  const messageRef = collection(db, 'rooms', selectedChat + user.uid , 'messages')

  const [messages, setMessages] = useState<DocumentData[]>([])

  useEffect(() => {
    onSnapshot( query(messageRef, orderBy('timeStamp')), (snap) => {setMessages(snap.docs.map(s => s.data())); console.log(snap.docs)}  )
    console.log(messages)
  }, [user.uid, db])

  const addMessage = async () => {
    const message: IMessage = {
      content: hello,
      timeStamp: serverTimestamp(),
      userId: user.uid,
      userImg: user.photoURL,
      userName: user.displayName,
      type: 'image'
    }

    await addDoc(messageRef, message)
  }

  return (
    <div>
      <NoMessageChatFallback sender={addMessage} isSended={messages?.length > 0} />

      <MessageList messages={messages.map(d => d)} />
    </div>
  )
}

export default connect()(ChatBody)
