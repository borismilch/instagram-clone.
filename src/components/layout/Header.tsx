import React, { useState } from 'react'

import { connect, useDispatch, useSelector } from 'react-redux'

import { showModal } from '../../redux/actions/generators'

import Logo from '../../assets/logo.png'

import { HomeFilled, HomeIcon, MessageIcon, MessaagesFilled, CompasIcon, CompasFilled, AddIcon, HeartIcon  } from '../icons'

import { useHistory, useLocation } from 'react-router'
import { SearchIcon } from '@heroicons/react/outline'

import { Link } from 'react-router-dom'

import ProfileDropdown from '../forms/ProfileDropdown'

const Header:React.FC = () => {

  const [dropdown, setDropdown] = useState(false)

  const showModalVindow = () => {
    dispatch(showModal())
  }

  const dispatch = useDispatch()

  const router = useHistory()
  const location = useLocation()
  const user = useSelector((state: any) => state.user.user)

  const changeDropDown = (val: boolean) => {
    setDropdown(val)
  }

  return (
    <>
     <div className=' h-12 lg:h-16' />
    <header className='bg-white top-0 border-b shadow-sm z-50 h-[54px] fixed w-full' > 
    <div className='justify-between flex items-center mx-auto px-[20px]' style={{maxWidth: 975}}>

      <div className=" relative w-24">

        <img 
          onClick={() => router.push('/')}
          className='cursor-pointer object-cover'
          src={Logo} 
        />

      </div>

    <div className="relative mt-1 p-3 rounded-md">
      <div className="absolute inset-y-0 pl-3 flex items-center">
        <SearchIcon className='w-5 h-5 text-gray-500' />
      </div>
      <input type="text" placeholder='Search' 
        className='header_input flex-shrink h-[28px]' 
      
      />
    </div>
    
    <div className='flex gap-3 items-center justify-end'>

      <div className='gap-5  items-center justify-end flex'>
        <Link to='/' className='navBtn smd'>
        { location.pathname === '/' ? <HomeFilled/> : <HomeIcon />}
        </Link>
      
        { 
          user ? 
          <>
            <div className='relative flex'>

            <Link to='/chats' className='navBtn'>
             { location.pathname === '/chats' ? <MessaagesFilled/> : <MessageIcon />}
            </Link>

              {/* <div className="tooltip_red">3</div> */}
            </div>

            <div className='navBtn smd' onClick={showModalVindow.bind(null)}>
              <AddIcon  />
            </div>

            <Link to='photos' className='navBtn smd'>
             
              { location.pathname === '/photos' ? <CompasFilled/> :  <CompasIcon />}
            </Link>

            <div className='navBtn smd'>
              <HeartIcon />
            </div>
          </>
          :  <button onClick={() => router.push('/auth/signin')}>Sign in</button>

        }
        
      </div>
     

     { user && (
        <>
          <img src={user.photoURL} onClick={() => changeDropDown(!dropdown)} className='w-7 h-7 hover:border border-gray-800 cursor-pointer  rounded-full smd' alt="" />  

        { dropdown &&
            <div className='relative' onClick={() => changeDropDown(false)}>
              <ProfileDropdown down={false} />
            </div>
        }
         
        </>
     )}
    </div>


    </div>  

    </header>
    </>
  )
}

export default connect(null, null)(Header)
