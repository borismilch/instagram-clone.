import React, {useMemo} from 'react'
import Post from '../Post'
import { IPost } from '../../../types'
import { connect, useSelector } from 'react-redux'

const Posts: React.FC<{posts: IPost[]}> = () => {
  const posts:IPost[] = useSelector((state: any) => state.posts.posts)

  console.log('posts')

  return (
   <>
   { posts.map(post => ( <Post key={post.id} post={post} /> )) }
  </>
  )
}
  
export default connect()(Posts)
