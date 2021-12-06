import React, { useState } from 'react'

import { connect, useDispatch, useSelector } from 'react-redux'

import { showModal } from '../../redux/actions/creators'

import { HomeFilled, HomeIcon, CompasIcon, CompasFilled, AddIcon, HeartIcon  } from '../icons'

import { Link } from 'react-router-dom'

import { useHistory, useLocation } from 'react-router'

import ProfileDropdown from '../forms/ProfileDropdown'

const HeaderFooter = () => {

  const [dropdown, setDropdown] = useState(false)

  const changeDropdown = (val: boolean) => {
    setDropdown(val)
  }
 
  const showModalVindow = () => {
    dispatch(showModal())
  }

  const dispatch = useDispatch()

  const router = useHistory()
  const location = useLocation()
  const user = useSelector((state: any) => state.user.user)

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

            <div onClick={() => changeDropdown(!dropdown)}>
            { user && (
              <>
              <img src={user.photoURL} className='w-8 h-8 rounded-full object-cover' alt="" />  

             { dropdown && <div className='absolute top-[30px] right-0 '>
                <ProfileDropdown down={true} />
              </div>}
           
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
