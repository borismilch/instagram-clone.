import React, { FC, useEffect, useState } from 'react'

import Stories from '../components/layout/home/Stories'
import Posts from '../components/items/lists/Posts'
import Suggestions from '../components/items/lists/Suggestions'
import MiniProfile from '../components/layout/home/MiniProfile'

import { connect, useSelector, useDispatch} from 'react-redux'

import { loadApp, unloadApp } from '../redux/actions/generators'

import { fetchPosts } from '../redux/actions/actions/postsActions'
import { IUser } from '../types'

import KeepAlive from 'react-activation'


import { Redirect } from 'react-router-dom'

const Home: FC = () => {

  const posts = useSelector((state: any) => state.posts.posts)

  const dispatch = useDispatch()

  const loading = useSelector((state: any) => state.app.loading)
  const user: IUser = useSelector((state: any) => state.user.user)


  useEffect(() => {
    dispatch(loadApp())
    dispatch(fetchPosts())

    return () => { dispatch(unloadApp()) }
  }, [])

  

  if(!user) { return <Redirect to='auth/signin' /> }

  return (
    <>
    
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>

    <main className='grid mx-auto grid-cols-1 md:grid-cols-2 max-w-[975px] max-auto ]'>

      <section className={`col-span-2 flex ${!user && 'justify-center'}`}>
        <div className='mdw mr-0 md:mr-[20px] ' >

        <div className='mb-[24px]'> <Stories /> </div>
        
          
          { posts.length > 0 &&  <Posts posts={posts} /> }
          
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

