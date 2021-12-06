import React, { useState } from 'react'
import Post from '../Post'
import { IPost } from '../../../types'
import PostsFallback from './PostsFallback'
import { connect, useSelector } from 'react-redux'

import { db } from '../../../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { query, collection, orderBy } from '@firebase/firestore'
import SkeletonPosts from '../skeleton/SkeletonPosts'

const Posts: React.FC<{}> = () => {

  const [posts, loading]: any = useCollectionData(
    query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
  )

  if (loading )  {  return <> <SkeletonPosts /> </> }

  if (!posts.length) { return <PostsFallback />  }

  return (

    <> { posts.map((post: IPost) => (<Post  key={post.id}  post={post} /> )) } </>
    
  )
}
  
export default connect()(Posts)
