import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { db } from '../../../firebase'

import { IUser } from '../../types'

import { InfoIcon } from '../icons'
import { doc, DocumentData } from '@firebase/firestore'

const ChatBanner = () => {

  const dispatch = useDispatch()
  const selected = useSelector((state: any) => state.chat.selectedChat)

  const userRef = doc(db, 'users', selected)

  const [user, loading, error] = useDocumentDataOnce(userRef);


  console.log(user)
  
  if (!user) { return <div></div> }

  return (
    <div className='absolute top-0 left-0 bg-white py-2 px-4 shadow-sm h-[60px] w-full border-gray-300 border-b  flex justify-between items-center'>

     <div className='flex gap-3 items-center flex-1'>

        <img className='w-[27px] h-[27px] object-cover rounded-full ' src={user!.photoURL} alt="" />

        <h2 className='text-[16px] text-[#262626] font-semibold'>
          {user!.displayName}
        </h2>

     </div>

     <div className='icon_do'>
       <InfoIcon />
     </div>

   </div>
  )
}

export default connect()(ChatBanner)
