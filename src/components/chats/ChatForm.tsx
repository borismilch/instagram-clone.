import { addDoc, collection, doc, serverTimestamp } from '@firebase/firestore'
import React, { ChangeEvent, SyntheticEvent, useState, useRef, useEffect } from 'react'
import { IMessage } from '../../types'
import Emojicker from '../forms/emojiicker'

import GalleryIcon from '../icons/GalleryIcon'
import HeartToSendIcon from '../icons/HeartToSendIcon'
import SmileBold from '../icons/post/SmileBold'

import { connect, useSelector } from 'react-redux'
import { db, storage } from '../../../firebase'
import { getDownloadURL, ref, uploadString } from '@firebase/storage'

const ChatForm = () => {

  const fileInput = useRef<HTMLInputElement>(null)

  const user = useSelector((state: any) => state.user.user)

  const selectedChat  = useSelector((state: any) => state.chat.selectedChat)

  const [message, setMessage] = useState<string>('')

  const [showEmoji, setShowEmoji] = useState<boolean>(false)

  const [fileImage, setFIleImage] = useState<string>('')
  
  const messageRef = collection(db, 'rooms', selectedChat + user.uid , 'messages')

  const setEmoji = (emoji: any) => {
    setMessage(prev => prev + emoji.native)
  }

  const toggleEmoji = () => {
    setShowEmoji(prev => !prev)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  
  const addMessage = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newMessage: IMessage = {
      content: message,
      timeStamp: serverTimestamp(),
      userId: user.uid,
      userImg: user.photoURL,
      userName: user.displayName,
      type: 'text'
    }
    setMessage('')
    await addDoc(messageRef, newMessage)
  }

  const addImage = async () => {
    const docFer = doc(collection(db, 'rooms', selectedChat + user.uid, 'messages' ))
      const id = docFer.id

      await uploadString(ref(storage, 'chats/' + id), fileImage, 'data_url')
      const url = await getDownloadURL(ref(storage, 'chats/' + id))

      const newMessage: IMessage = {
        content: url,
        timeStamp: serverTimestamp(),
        userId: user.uid,
        userImg: user.photoURL,
        userName: user.displayName,
        type: 'image'
      }
      setMessage('')
       addDoc(messageRef, newMessage)
  }

  useEffect(() => {

    if (fileImage.trim()) {
      addImage()
    }
  }, [fileImage])

  const changeFile = async (e: ChangeEvent<HTMLInputElement>) => {

    const reader = new FileReader()

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
       setFIleImage(readerEvent.target?.result + '')
    }
  
  }


  return (
    <div className='p-[20px] absolute  left-0 bottom-0 w-full bg-white z-10'>

      <form onSubmit={addMessage}  className='items-center border-gray-300 border rounded-3xl flex py-1 p-4 relative'>

      <div onClick={toggleEmoji} className='cursor-pointer p-1 z-20 hover:bg-gray-100 transition-all duration-200 rounded-full '>
        <SmileBold />
      </div>

      <div className='absolute z-10 -top-52'>
      <Emojicker addEmoji={setEmoji} showEmoji={showEmoji} />
      </div>

      <input 
        type="text" 
        value={message}
        className='border-none text-sm flex-1 focus:ring-0 placeholder-gray-500' 
        placeholder='Add a comment...'
        onChange={changeHandler}
      />

     { !message.trim() ? 
       (
        <div className='flex gap-3 items-center'>

          <div onClick={() => fileInput.current?.click()} className='p-1 transition-all duration-200 rounded-full hover:bg-gray-200 cursor-pointer'>
            <GalleryIcon />
          </div>



          <div className='p-1 transition-all duration-200 rounded-full hover:bg-gray-200 cursor-pointer'>
            <HeartToSendIcon />
          </div>

        </div>
       )
        : 
       ( 
         <button 
           className='text-blue-500 disabled:opacity-50 border-0 text-sm outline-none ring-0' 
           type='submit'
         >
           Comment
         </button>
       ) 
      }

      </form>
        <div>
        <input 
          className='opacity-0'
          type="file" 
          onChange={changeFile.bind(null)}
          hidden 
          ref={fileInput}
        />
        </div>
     
    </div>
  

  )
}

export default connect()(ChatForm)
