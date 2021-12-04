import { DocumentData } from '@firebase/firestore'
import React from 'react'
import DetailComment from './DetailComment'
 
const CommentList:React.FC<{comments: DocumentData[]}> = ({comments}) => {
  return (
    <div className='flex flex-col h-[350px]  md:max-h-[404px] overflow-y-scroll overflow-x-hidden p-[16px]'>
      { comments.map(c => <DetailComment comment={c.data()} key={c.data().timestamp} />) }
    </div>
  )
}

export default CommentList
