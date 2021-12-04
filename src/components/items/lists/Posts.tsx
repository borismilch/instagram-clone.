import React from 'react'
import Post from '../Post'
import { IPost } from '../../../types'
import PostsFallback from './PostsFallback'
import { connect, useSelector } from 'react-redux'

const Posts: React.FC<{posts: IPost[]}> = ({posts}) => {
  console.log(posts)
  return (
   <>
   { posts.length ? 
   <> {  posts.map(post => (<Post key={post.id} post={post} /> )) } </> : <PostsFallback /> 
   }
  </>
  )
}
  
export default connect()(Posts)
