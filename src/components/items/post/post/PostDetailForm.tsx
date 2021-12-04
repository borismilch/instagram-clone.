
import React, { useState, useEffect, ChangeEvent, useRef } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { IComment, IPost, IPostIMage, IUser } from '../../../../types'
 
import EmojiPicker from '../../../forms/emojiicker'

import 'emoji-mart/css/emoji-mart.css'

import '../../../layout/drawler/config/cofogStyle.css'
import PostDetailUser from './PostDetailUser'

import { db } from '../../../../../firebase'
import { collection, DocumentData, onSnapshot, orderBy, query } from '@firebase/firestore'
import CommentList from './comments/CommentList'
import { comment } from 'postcss'
import PostForm from '../PostForm'
import PostActionFomr from './PostActionFomr'

const PostDetailForm: React.FC<{post: IPost, child: any, comments: DocumentData[]}> = ({post, child, comments}) => {

  const [showEmoji, setShowEmoji] = useState(false)
  const [decription, setDesription] = useState('')

  const inputRef = useRef<null | HTMLInputElement>(null)

  const dispatch = useDispatch()

  const user: IUser = useSelector((state: any) => state.user.user)

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDesription(e.target.value)
  }

  return (
    <div className='
    flex flex-col flex-grow border-l border-gray-300'>
      <PostDetailUser user={user} />
 
      <div className='relative flex flex-col flex-grow z-50'>

     { <CommentList comments={(comments || []).length ? comments : [] } />}

     {child}

     <PostForm id={post.id} />

      </div>

    </div>

  )
}

export default connect()(PostDetailForm)

