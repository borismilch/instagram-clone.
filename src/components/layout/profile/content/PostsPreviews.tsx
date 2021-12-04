import React from 'react'
import './postSave.css'
import PostImage from './PostImage'

import { connect, useDispatch, useSelector } from 'react-redux'
import { IPost } from '../../../../types'
import ProfileFallback from '../../../../views/ProfileFallback'

const PostsPreviews:React.FC<{uid: string}> = ({uid}) => {

  const posts: IPost[] = useSelector((state: any) => state.posts.posts)
  const filteredPosts: IPost[] = posts.filter(p => p.uid === uid)

  console.log(uid, posts)

  return (
    <div className='py-0 flex mb-7 flex-wrap w-full h-full' >
      { filteredPosts.length ? 
        filteredPosts.map(p => (

         <div className='w-[32%]'>
          <PostImage post={p} />
         </div>
        )) : <ProfileFallback />
      }
      
    </div>
  )
}

export default connect()(PostsPreviews)
