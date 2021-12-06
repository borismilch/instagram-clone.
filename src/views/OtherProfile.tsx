import React, { useState, useEffect } from 'react'
import UserStats from '../components/layout/profile/UserStats'
import ProfileTabs from '../components/layout/profile/ProfileTabs'

import ProfileSaved from '../components/layout/profile/content/ProfileSaved'
import PostsPreviews from '../components/layout/profile/content/PostsPreviews'

import ProfileFooter from '../components/layout/profile/content/ProfileFooter'

import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'

import { IUser } from '../types'

const OtherPorofile = () => {
  const location = useLocation()
  const uid: string = location.pathname.split('/')[2]

  const current:IUser = useSelector((state: any) => state.user.users.find((p: IUser) => p.uid === uid))
 

  const [selectedFirst, setSelectedFirst] = useState(true)

  const changeSelectedFirst = (val: boolean) => {
    setSelectedFirst(val)
  }

  return (
    <div className='justify-between items-center mx-auto flex flex-col overflow-x-hidden pt-[31px] md:pt-[23px] pb-[60px] md:px-[20px]' style={{maxWidth: 975}}>
     <UserStats user={current} />

     <ProfileTabs activeFirst={selectedFirst} changeActiveFirst={changeSelectedFirst} />

      { selectedFirst ? <PostsPreviews uid={uid} /> : <ProfileSaved /> }
     <ProfileFooter /> 
    </div>
  )
}

export default OtherPorofile
