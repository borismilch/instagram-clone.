import React from 'react'

import { connect, useDispatch, useSelector } from 'react-redux'

import { showModal } from '../../redux/actions/generators'

import { HomeFilled, HomeIcon, MessageIcon, MessaagesFilled, CompasIcon, CompasFilled, AddIcon, HeartIcon  } from '../icons'

import { Link } from 'react-router-dom'

import { useHistory, useLocation } from 'react-router'

const HeaderFooter = () => {
 
  const showModalVindow = () => {
    dispatch(showModal())
  }

  const dispatch = useDispatch()

  const router = useHistory()
  const location = useLocation()
  const user = useSelector((state: any) => state.user.user)

  const userSignOut = async () => {
    router.push('/auth/signin')
  }

  return (
    <>
    <footer className='bg-white border-b border-t py-2 sml border-gray-300 shadow-sm z-50  px-2 fixed w-full bottom-0' > 
     <div className='justify-between flex items-center mx-auto w-full'>

    <div className='flex gap-3 items-center justify-center w-full'>

      <div className='gap-4 items-center flex justify-around w-full'>

        <Link to='/' className='navBtn'>
          { location.pathname === '/' ? <HomeFilled/> : <HomeIcon />}
        </Link>
      
        { 
          user ? 
          <>
            <div className='relative'>

            <Link to='photos' className='navBtn'>
             
             { location.pathname === '/photos' ? <CompasFilled/> :  <CompasIcon />}
           </Link>

            </div>

            <div className='navBtn' onClick={showModalVindow.bind(null)}>
              <AddIcon  />
            </div>

            <div className='navBtn'>
            <HeartIcon />
            </div>

            <div className=''>
            { user && (
              <>
              <img src={user.photoURL} onClick={() => userSignOut()} className='w-8 h-8 rounded-full' alt="" />  
            </>
             )}
            </div>
          </>
          :  <button onClick={() => router.push('/auth/signin')}>Sign in</button>

        }
        
      </div>
     

   
    </div>


    </div>  

    </footer>
    </>
  )
}


export default connect  ()(HeaderFooter)
