import React, { useState, useEffect } from 'react'
import { IComment } from '../../../../../types'

import Moment from 'react-moment'

import HeartSmallFilled from '../../../../detailmodal/HeartSmallFilled'
import HeartSmall from '../../../../detailmodal/heartSmall'
import { db } from '../../../../../../firebase'
import { useSelector } from 'react-redux'
import { collection, deleteDoc, doc, onSnapshot, serverTimestamp, setDoc } from '@firebase/firestore'

const DetailComment:React.FC<{comment: IComment}> = ({comment}) => {

  const user = useSelector((state:any) => state.user.user)

  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState<any[]>([])

  useEffect(() => onSnapshot(
    collection(db, 'posts', comment.postId, 'comments', comment.id, 'likes' ), 
    (snapshot) => setLikes(snapshot.docs)

  ) , [db, comment.id])
 
  useEffect(() => {
    setLiked(
      (likes.findIndex(like => like.data().userId === comment.userId) )!== -1
    )
  }, [likes, db])

  useEffect(() => {
    setLiked(
      (likes.findIndex(like => like.data().userId === comment.userId) )!== -1
    )
  }, [])

  useEffect(() => {

  }, [db, likes])

  const likePost = async () => {
    const data = {
      username: user.displayName,
      userId: user.uid,
      timestamp: serverTimestamp(),
      userImage: user.photoURL
    }
    const docRef = doc(db, 'posts', comment.postId, 'comments', comment.id, 'likes', user.uid)

    console.log(comment.id)
    if (liked) {
      await deleteDoc(docRef)
    }

    else {
      await setDoc(docRef, data)
    }
  }



  return (
    <div className='flex items-center gap-2 min-h-[49px] justify-between'>

    <div className='flex items-start  gap-2'>


    <div className='flex flex-col gap-0 flex- '>

   

    <div className='mr-[2px] truncate whitespace-nowrap max-w-[120px] flex gap-2 '>
        <img src={comment.userImg} className='rounded-full w-[28px] h-[28px]' alt="" />

        <p className='text-[14px] font-semibold truncate'>{comment.userName }</p>
      </div>    

      </div>

    <p className='font-light text-[14px] truncate'>
       {comment.message}
     </p>
 
    </div>
  
      <div
        onClick={likePost.bind(null)}
        className='p-1 rounded-full transition-all duration-200 hover:bg-gray-50 cursor-pointer'>
        { !liked ?  <HeartSmall /> : 
        <div className='flex items-center text-xs text-[#262626] gap-2 font-semibold'>{likes.length}<HeartSmallFilled /> </div> }        
      </div>


  </div>
  )
}

export default DetailComment
