import React, { FC, useEffect, useState } from 'react'

import Stories from '../components/layout/home/Stories'
import Posts from '../components/items/lists/Posts'
import Suggestions from '../components/items/lists/Suggestions'
import MiniProfile from '../components/layout/home/MiniProfile'

import { setAllUsers, setUserFollowers, setUserFollowing } from '../redux/actions/generators'

import { connect, useSelector, useDispatch} from 'react-redux'

import { loadApp, unloadApp } from '../redux/actions/generators'

import { fetchPosts } from '../redux/actions/actions/postsActions'
import { IPost, IUser } from '../types'

import { Redirect } from 'react-router-dom'
import { db } from '../../firebase'
import { collection, onSnapshot } from '@firebase/firestore'

const Home: FC = () => {

  const [followers, setFollowers] = useState<any[]>([])

  const posts:IPost[] = useSelector((state: any) => state.posts.posts)

  const dispatch = useDispatch()

  const user: IUser = useSelector((state: any) => state.user.user)
  const omlyId = followers.map(f => f.id)

  if(!user) { return <Redirect to='auth/signin' /> }

  useEffect(() => {
    dispatch(loadApp())
    dispatch(fetchPosts())

    return () => { dispatch(unloadApp()) }
  }, [])

  useEffect(() => {
    const usersRef = collection(db, 'users')
    onSnapshot(usersRef, (span) => {  dispatch(setAllUsers(span.docs.map(d => d.data())))})

  }, [])


  useEffect(() => {
    const followerssRef = collection(db, 'users', user.uid, 'followers')
    const followingRef = collection(db, 'users', user.uid, 'following')

    onSnapshot(followerssRef, (span) => {
    
      const follower = span.docs.map(d => d.data())
      console.log(follower, 'sslls')

      dispatch(setUserFollowers(follower))
    
      setFollowers(follower)
    })

    onSnapshot(followingRef, (span) => {dispatch(setUserFollowing(span.docs.map(d => d.data())))})
  }, [db, user.uid])

  const sortedPosts = [...posts].sort((a, b) => +a.timestamp - +b.timestamp).filter(p => omlyId.includes(p.uid))

  return (
    <>
    
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>

    <main className='grid mx-auto grid-cols-1 md:grid-cols-2 max-w-[975px] pb-8 max-auto ]'>

      <section className={`col-span-2 flex ${!user && 'justify-center'}`}>
        <div className='mdw mr-0 lg:mr-[20px] w-full' >

        <div className='mb-[12px] md:mb-[24px]'> <Stories /> </div>
        
          
          { <Posts posts={sortedPosts} /> }
          
        </div>
        {
          user &&

          <section className='md:col-span-1 smdxl relative flex fex-col '>
            <div className='fixed top-20'>
            <MiniProfile user={user!} />
            <Suggestions />
          </div>
          
          </section>
        }

      </section> 
    
    </main>

    </div> 
    </>
  )
}


export default connect()(Home)

