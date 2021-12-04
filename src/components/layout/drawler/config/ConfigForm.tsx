
import React, { useState, useEffect, useMemo, ChangeEvent, useRef, SyntheticEvent } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { IComment, IPost, IPostIMage, IUser } from '../../../../types'

import { hideModal } from '../../../../redux/actions/generators'

import { Location } from '../../../icons'

import { useStore } from 'react-redux' 
import EmojiPicker from '../../../forms/emojiicker'

import { clearNewPostImages, clearCroppedNewPostImages, cahngeStepOfPostModal,   } from '../../../../redux/actions/actions/drawlerActions'  

import { Smile } from '../../../icons'

import 'emoji-mart/css/emoji-mart.css'

import './cofogStyle.css'
import { addPost } from '../../../../redux/actions/actions/postsActions'

import Other from './Other'

const ConfigForm = () => {
  const [showEmoji, setShowEmoji] = useState(false)
  const [decription, setDesription] = useState('')

  const inputRef = useRef<null | HTMLInputElement>(null)

  const dispatch = useDispatch()

  const user: IUser = useSelector((state: any) => state.user.user)

  const postImage: IPostIMage = useSelector((state: any) => state.drawler.croppedNewPostImage) 

  const step = useSelector((state: any) => state.drawler.stepOfModal)


  useEffect(() => {
    console.log(step)
    if (step === 2) {
      addPostHandler()
    }
    
  }, [step])


  const commit = () => {
    dispatch(hideModal())
    dispatch(clearNewPostImages())
    dispatch(clearCroppedNewPostImages()) 
    dispatch(cahngeStepOfPostModal(0))
   
  }

  const addPostHandler = () => {
    const firstComment: IComment = {
      likes: [],
      userId: user.uid,
      userImg: user.photoURL,
      userName: user.displayName,
      message: decription,
      timestamp: Date.now(),
      postId: '',
      id: ''
    }

    const postData: IPost  = {
      img: postImage.img,
      username: user.displayName.split(' ').join(''),
      id: '',
      userImg: user.photoURL,
      description: '',
      likes: [],
      uid: user.uid,
      comments: [firstComment],
      timestamp: Date.now()
    }

    console.log(postData)

    setDesription('')

    dispatch(addPost(postData))

    commit()
   
  }

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDesription(e.target.value)
  }

  const setEmojiPicker = (val: boolean) => {
    setShowEmoji(val)
  }

  const toggleEmojiPicker = (e: SyntheticEvent) => {
    e.stopPropagation()
    setEmojiPicker(!showEmoji)
  }

  const addEmoji = (data: any) => {
    setDesription(prev => prev + data.native)
    console.log(data.native)
  }

  return (
    <div className='
    flex flex-col flex-grow border-l border-gray-300 w-[329px]'>

      <div className='flex items-center gap-2 mx-[11px] h-[60px]'>

      <div className='mr-[2px]'>
        <img src={user.photoURL} className='rounded-full w-[28px] h-[28px]' alt="" />
      </div>    

      <b className='text-sm'>{user.displayName }</b>

      </div>
 
      <div className='relative flex flex-col flex-grow z-50'>

        <textarea value={decription} onChange={(e) => changeHandler(e)} name="textArea" id="" className='config_text_area w-full outline-none ring-0  focus-within:ring-0 focus:border-gray-300 border-0 border-t border-b pt-4 border-gray-300' placeholder='Придумайте щось...' />

        <div className='absolute bottom-5 left-2'>
        
        <EmojiPicker showEmoji={showEmoji} addEmoji={addEmoji} />

        <div className='flex justify-between items-center z-50'>
          <div className='hover:bg-gray-200 p-1 rounded-full transition-all duration-200 cursor-pointer' onClick={(e) => toggleEmojiPicker(e)}>
          <Smile />
          </div>
          
          <span className='text-gray-400 text-xs'>{decription.length}/2 200</span>
        </div>

        </div>

      </div>

      <div className='
      flex items-center relative px-[12px] bg-transparent border-gray-300 py-1 z-0'>
        <input
          ref={inputRef}
          placeholder='fmdx' 
          className='text-gray-600 text-base z-50 border-transparent focus:border-transparent text-medium outline-none focus-within:ring-0 py-2 '
        />

        <Location/>

      </div>

      <Other />

    </div>

    

    

  )
}

export default connect()(ConfigForm)
