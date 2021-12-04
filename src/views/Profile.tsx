import React, { useState, useEffect } from 'react'
import UserStats from '../components/layout/profile/UserStats'
import ProfileTabs from '../components/layout/profile/ProfileTabs'

import ProfileSaved from '../components/layout/profile/content/ProfileSaved'
import PostsPreviews from '../components/layout/profile/content/PostsPreviews'

import ProfileFooter from '../components/layout/profile/content/ProfileFooter'
import { connect, useSelector } from 'react-redux'
import { IUser } from '../types'

const Profile = () => {

  const user: IUser = useSelector((state: any) => state.user.user)

  const [selectedFirst, setSelectedFirst] = useState(true)

  const changeSelectedFirst = (val: boolean) => {
    setSelectedFirst(val)
  }

  return (
    <div className='justify-between items-center mx-auto flex flex-col overflow-x-hidden pt-[31px] md:pt-[23px] pb-[60px] md:px-[20px]' style={{maxWidth: 975}}>
     <UserStats user={user} />

     <ProfileTabs activeFirst={selectedFirst} changeActiveFirst={changeSelectedFirst} />

      { selectedFirst ? <PostsPreviews uid={user.uid} /> : <ProfileSaved /> }
     <ProfileFooter /> 
    </div>
  )
}

export default connect()(Profile)
