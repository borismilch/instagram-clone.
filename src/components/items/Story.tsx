import React, {FC} from 'react'
import { IProfile, IUser } from '../../types'


import { useHistory } from 'react-router'

const Story:FC<{profile: IUser, onImageLoaded: () => void}> = ({profile, onImageLoaded}) => {

  const history = useHistory()

  const imageLoaded = () => {
    console.log('loaded', profile.displayName)
    onImageLoaded()
  }

  return (
    <div className='flex flex-col max-w-[56px]' >
      <img onClick={() => history.push('/profile/' + profile.uid)} onLoad={imageLoaded} className='stories_profile object-cover' src={profile.photoURL} alt="" />
      <p className='text-xs text-gray-700 truncate text-center'>{profile.displayName}</p>
    </div>
  )
}

export default Story
