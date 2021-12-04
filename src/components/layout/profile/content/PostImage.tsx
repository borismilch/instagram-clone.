import { collection, DocumentData, onSnapshot, orderBy, query } from '@firebase/firestore'

import React, { useEffect, useState } from 'react'

import Skeleton from 'react-loading-skeleton'

import { connect, useSelector, useDispatch } from 'react-redux'

import { db } from '../../../../../firebase'
import { openPostDetailModal, selectPostDetailModalPost } from '../../../../redux/actions/generators'

import { IPost } from '../../../../types'

import './postSave.css'

const PostImage: React.FC<{post: IPost}> = ({post}) => {

  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user.user)

  const [loaded, setLoaded] = useState(false)

  const [comments, setCommetns] = useState<DocumentData[]>([])

  const loadImage = () => {
    setLoaded(true)
  }

  const selectPostForModal = () => {
    dispatch(selectPostDetailModalPost(post))
    dispatch(openPostDetailModal())
  }

  useEffect(() => 
    onSnapshot(
      query(
        collection(db, 'posts', post.id, 'comments'),
        orderBy("timestamp", 'desc')
      ),
      (snapshot) => setCommetns(snapshot.docs)
    )
  , [db, post.id])

  return (
    <div onClick={selectPostForModal.bind(null)} className='relative m-[2px] md:m-[12px]'>

      <div className='overlay'>
          <div className='flex items-center text-white font-semibold text-lg'>
            <span className='chat_icon ' />
            {comments.length}
          </div>
      </div>

        <div className='block overflow-hidden' style={{paddingBottom: '100%'}}>
          
           
        {  !loaded && <Skeleton style={{width: '100%', height: '100%', position: 'absolute'}} />}

          <div className={ 'transition-all duration-200 ' + loaded ? 'opacity-100' : 'opacity-0'}>
            <img onLoad={loadImage.bind(null)} src={post.img} className='object-cover w-full h-full top-0 left-0 absolute'  alt="" />
          </div>  
         
          
        </div>
     
    </div>
  )
}

export default connect()(PostImage)
