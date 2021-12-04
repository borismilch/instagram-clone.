import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { IPost, IUser } from '../../../types'
import GearIcon from '../../icons/GearIcon'
import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { collection, DocumentData, getDocs, onSnapshot } from '@firebase/firestore'
import { db } from '../../../../firebase'

const UserStats:React.FC<{user: IUser}> = ({user}) => {

  const [likes, setLikes] = useState<DocumentData[]>([])

  const posts: IPost[] = useSelector((state:any) => state.posts.posts)
  const userPosts = posts.filter(p => p.uid === user.uid)
  const [following, stFollowing] = useState<DocumentData[]>([])  
 
  useEffect(() => {
    
    userPosts.forEach(async p => {
      const likesRef = collection(db, 'posts', p.id, 'likes')
      const lieksData = await getDocs(likesRef)
      lieksData.forEach(l => {console.log(l.data());   setLikes(prev => [...prev, l.data()]) })
    })
   
  }, [])

  useEffect(() => {
    const followingef = collection(db, 'users', user.uid, 'following')
    onSnapshot(
      followingef,
      (snap) => {stFollowing(snap.docs.map(d => d.data())); console.log('datadatadatadatafatafara')}
    )
  }, [db, user.uid])


  const history = useHistory()

  return (
    <>
    <div className='flex  md:gap-[30px] w-full'>

      <div className='flex items-center justify-center h-[77px] md:h-[150px] ' style={{flex: '0  0 30%'}}>
        <img src={user.photoURL} className='md:w-[150px] w-[77px] h-[77px] md:h-[150px] object-cover rounded-full' alt='dd' />
      </div>
    
      <div className='flex flex-1 flex-col'>

        <div className='flex gap-5 items-center justify-center md:justify-start mb-[20px]'>

          <h2 className='font-light text-[28px] text-[#262626] truncate' style={{ margin: '-5px 0 -6px' }}>
            { '@' + user.displayName.split(' ').join('') }
          </h2>

          <Link to='/accounts/edit' className='userSectionButtonLink text-sm smd'>
            Редактиров профиль
          </Link>

          <div onClick={() => history.push('accounts/edit')}>
            <GearIcon />
          </div>
        
        </div>

        
        <Link to='/accounts/edit' className='userSectionButtonLink text-sm sml'>
            Редактиров профиль
        </Link>

        <div className='flex items-center gap-8 smd'>
            <p className='profileChip'>
              {userPosts.length} публікацй
            </p>

            <p className='profileChip'>
              {following.length} підписників
            </p>

            <p className='profileChip'>
             {likes.length} вподобано
            </p>
        </div>

        <p className='font-semibold smd px-1 py-4 text-[#262626]'>
            { user.bio }
        </p>

      </div>
    </div>

    
    <p className='font-semibold flex justify-start items-center w-full ml-12 mt-2  sml px-1 text-[#262626]'>
     {user.bio}
     </p>

     <div className='flex w-full justify-around border-t mt-3 sml text-center border-gray-300 py-2 '>

      <div className='flex flex-col'>
        <span className='font-bold'>{userPosts.length}</span>
        <p >Публікацій</p>
      </div>

       
      <div className='flex flex-col'>
        <span className='font-bold'>0</span>
        <p>Підписників</p>
      </div>
       
      <div className='flex flex-col'>
        <span className='font-bold'>{likes.length}</span>
        <p>Вподобааних</p>
      </div>

     </div>

    </>
  )
}

export default connect()(UserStats)
