import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { IPost, IPostIMage } from '../../../../types'
import PostDetailForm from './PostDetailForm'
import ModalLayout from '../../../layout/ModalLayout'

import { closepostDetailModal } from '../../../../redux/actions/creators'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from '@firebase/firestore'
import { db } from '../../../../../firebase'
import PostActionFomr from './PostActionFomr'

const ConfiguratePost = () => {

  const dispatch = useDispatch()
  const current: IPost = useSelector((state: any) => state.postDetailModal.currentPostSelected)

  const user = useSelector((state: any) => state.user.user)

  const open = useSelector((state: any) => state.postDetailModal.open)

  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState<any[]>([])
  const [comments, setComments] = useState<any[]>([])

  const closeModal = () => {
    dispatch(closepostDetailModal())
  }

  useEffect(() => 
    onSnapshot(
    query(
      collection(db, 'posts', current.id, 'comments'),
      orderBy("timestamp", 'desc')
    ),
    (snapshot) =>  {setComments(snapshot.docs), console.log('dddlll')}
  )
  , [db, current.id])

  useEffect(() => onSnapshot(
    query (
      collection(db, 'posts', current.id, 'likes') 
    ),
    (snapshot) => {setLikes(snapshot.docs); console.log('dd')}

  ) , [db, current.id])

  useEffect(() => {
    setLiked(
      (likes.findIndex(like => like.data().userId === user?.uid) )!== -1
    )
  }, [likes, db])

  useEffect(() => {
    setLiked(
      (likes.findIndex(like => like.data().userId === user?.uid) )!== -1
    )
  }, [])

  const likePost = async () => {
    const data = {
      username: user.displayName,
      userId: user.uid,
      timestamp: serverTimestamp(),
      userImage: user.photoURL
    }
    const docRef = doc(db, 'posts', current.id, 'likes', user.uid)

    if (liked) {
      await deleteDoc(docRef)
    }

    else {
      await setDoc(docRef, data)
    }
  }

  return (
    <ModalLayout isOpen={open} closeModal={closeModal}>
      <div className='h-screen flex justify-center items-center overflow-y-hidden'>

      <div className='add_post_modal'>

        <div className='md:w-[70vw] w-full flex-col md:flex-row  flex '>

        <div className='relative flex-grow flex items-center justify-center'>
        { <img className='object-cover max-h-[280px] md:max-h-full h-full w-full' src={current.img} alt="" /> }
        </div>


        <div className='flex flex-col h-full ' style={{flex: '0 0 404px'}}>
          <PostDetailForm 
            post={current} 
            comments={comments}
            child={ <PostActionFomr liked={liked} likePost={likePost} likes={likes.length}  /> }  
          /> 
          
        </div>
        </div>

        </div>
      </div>
    
    </ModalLayout>
   
  )
}

export default connect()(ConfiguratePost)
