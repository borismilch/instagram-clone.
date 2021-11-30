import React, {FC} from 'react'
import { IComment } from '../../types'

import Moment from 'react-moment'

const Commnet: FC<{comment: IComment}> = ({comment}) => {
  return (
    <div className='flex items-center justify-between'>

      <div className='flex items-center gap-2'>
       
        <div className='flex items-center justify-center gap-2'>
          <span className='font-semibold text-black text-sm'>{comment.userName}: </span>
          <p className='text-gray-600 font-medium text-sm'> {comment.message}</p>
        </div>
      
      </div>



    </div>
   
  )
}

export default Commnet
