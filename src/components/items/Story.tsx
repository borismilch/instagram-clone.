import React, {FC} from 'react'
import { IProfile } from '../../types'


const Story:FC<{profile: IProfile, onImageLoaded: () => void}> = ({profile, onImageLoaded}) => {

  const imageLoaded = () => {
    console.log('loaded', profile.name)
    onImageLoaded()
  }

  return (
    <div className='flex flex-col max-w-[56px]' >
      <img onLoad={imageLoaded} className='stories_profile' src={profile.image} alt="" />
      <p className='text-xs text-gray-700 truncate text-center'>{profile.username}</p>
    </div>
  )
}

export default Story
