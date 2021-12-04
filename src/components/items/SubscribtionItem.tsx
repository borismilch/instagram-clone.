import React, { useEffect, useState } from 'react'
import { IUser } from '../../types'

import { useHistory } from 'react-router'

import { connect, useSelector } from 'react-redux'
import { db } from '../../../firebase'
import { deleteDoc, doc, onSnapshot, setDoc } from '@firebase/firestore'

const SubscribtionItem:React.FC<{user:IUser}> = ({user}) => {

  const currentUser:IUser = useSelector((state: any) => state.user.user)

  const [isFollowing, setIsFollowing] = useState<boolean>() 

  const history = useHistory()

  const pushHistory = () => {
    history.push('/profile/' + user.uid)
  }

  useEffect(() => {
    const subscriptionRef = doc(db, 'users', currentUser.uid, 'followers', user.uid)
   
    onSnapshot(
      subscriptionRef,
      (snapshot) =>  {setIsFollowing(snapshot.exists()); console.log('followeed', snapshot.exists()) }
    )

  }, [db, user.uid])

  const follow = async () => {
    const subscriptionRef = doc(db, 'users', currentUser.uid, 'followers', user.uid) 
    const follewRef = doc(db, 'users', user.uid, 'following', currentUser.uid) 
    if (isFollowing) {
      await deleteDoc(subscriptionRef)
      await deleteDoc(follewRef)
    }
    else {
      await setDoc(subscriptionRef, {id: user.uid, ...user})
      await setDoc(follewRef, {id: currentUser.uid, currentUser})
    } 
  }
  
  return (
    <div className='flex justify-between w-full my-2 items-center'>

      <div className='flex gap-3 items-center'>
        <div onClick={pushHistory.bind(null)}>
          <img src={user.photoURL} className='avatar_img w-10 h-10' alt="" />
        </div>

      <div className='flex flex-col '>

        <h1  onClick={pushHistory.bind(null)} className='font-semibold cursor-pointer text-sm hover:underline'>{user.displayName}</h1>

        <h2 className='font-light  text-sm '>
          #{user.displayName}#
        </h2>

        <p className='font-light text-xs'>
        Новый пользователь Instagram
        </p>

      </div>
    </div>

      { isFollowing ?
      
        <button onClick={follow.bind(null)} className='submit_btn w-[100px] h-[32px] bg-white border font-base border-gray-900 text-[#262626] px-5 py-2 hover:opacity-80 transition-all duration-200 text-sm'>
          Unsubscribe
        </button>
        :
        <button onClick={follow.bind(null)} className='submit_btn  w-[100px] h-[32px] px-5 py-2 hover:opacity-80 transition-all duration-200 text-sm'>
          Subscribe
        </button>
      }
     
    </div>
  )
}

export default connect()(SubscribtionItem)
