import React, {SyntheticEvent} from 'react'

import { useState } from 'react'

import { addComent } from '../../../redux/actions/actions/postsActions'

import { connect, useDispatch, useSelector} from 'react-redux'

import { IComment } from '../../../types'

import EmojiPicker from '../../forms/emojiicker'
import SmileBold from '../../icons/post/SmileBold'

const PostForm: React.FC<{id: string}> = ({id}) => {

  const user = useSelector((state: any) => state.user.user)

  const dispatch = useDispatch()

  const [comment, setComment] = useState('')
  const [showEmoji, setShowEmoji] = useState(false)

  const changeHandler = (e: any) => {
    setComment(e.target.value)
  }

  const setEmoji = (emoji: any) => {
    setComment(prev => prev + emoji.native)
  }

  const toggleEmoji = () => {
   setShowEmoji(!showEmoji)
  }

  const formHandler = (e:SyntheticEvent<HTMLFormElement> ) => {
    e.preventDefault()

    const formData: IComment = {
      postId: id,
      userImg: user.photoURL,
      userName: user.displayName,
      userId: user.uid,
      message: comment,
      timestamp: Date.now(),
      likes: [],
    }

    dispatch(addComent(formData))

    setComment('')
    
  }

  return (

    <form onSubmit={formHandler}  className='items-center flex py-1 border-t border-gray-300 mt-6 p-4 relative'>

      <div onClick={toggleEmoji} className='cursor-pointer p-1 z-20 hover:bg-gray-100 transition-all duration-200 rounded-full '>
        <SmileBold />
      </div>
     
      <div className='absolute z-10 -top-52'>
      <EmojiPicker addEmoji={setEmoji} showEmoji={showEmoji} />
      </div>
     

      <input 
        type="text" 
        value={comment}
        className='border-none flex-1 focus:ring-0 placeholder-gray-500' 
        placeholder='Add a comment...'
        onChange={changeHandler}
      />

      <button 
        disabled={!comment.trim()}
        className='text-blue-500 disabled:opacity-50 border-0 outline-none ring-0' 
        type='submit'
      >
        Comment
      </button>

    </form>

  )
}

export default connect()(PostForm)
