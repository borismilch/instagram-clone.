import React from 'react'

import {Arrows, SettingsIcon, PorfileIcon, BookmarkSmall } from '../icons'

import { Link } from 'react-router-dom'

import { singOutUser } from '../../redux/actions/actions/userActions'

import { connect, useDispatch } from 'react-redux'

const ProfileDropdown: React.FC<{down: boolean}> = ({down = false}) => {

  const disaptch = useDispatch()
  
  const signOutUser = async () => {
    disaptch(singOutUser())
  }

  return (
    <div className={
      'flex flex-col absolute bg-white shadow-md border rounded-md border-gray-300 ' + 
      ( !down ? 'top-[30px] right-0 ' :  'bottom-[35px] right-5 ' )
      }>
      <div className='flex flex-col border-b border-gray-400'>
        <div 
        className={
          'bg-white w-3 h-3 absolute  rotate-45  border-gray-300  '
           +  ( !down ? ' -top-2 border-t border-l right-5' :  '-bottom-2 border-r border-b right-10' )
        }
          
        />
     
      <Link to='/profile' className='dropDownItem'>

        <PorfileIcon />
        <p className='truncate text-[#262626] text-[14px]'>
          Профиль
        </p>

      </Link>

      <div className='dropDownItem'>

        <BookmarkSmall />
        <p className='truncate text-[#262626] text-[14px]'>
          Збережені
        </p>

      </div>

      <Link to='/accounts/edit' className='dropDownItem'>

        <SettingsIcon />
        <p className='truncate text-[#262626] text-[14px]'>
          Settings
        </p>

      </Link>

      <div className='dropDownItem'>

        <Arrows />
        <p className='truncate text-[#262626] text-[14px]'>
          Cahnge Account
        </p>

      </div>

     </div>

     <p onClick={signOutUser.bind(null)} className='dropDownItem'>Вийти</p>

    </div>
  )
}

export default connect()(ProfileDropdown)
