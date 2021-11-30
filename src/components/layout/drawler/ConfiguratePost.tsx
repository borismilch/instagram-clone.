import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { IPostIMage } from '../../../types'
import ConfigForm from './config/ConfigForm'

const ConfiguratePost = () => {

  const dispatch = useDispatch()
  const croppedPostImage: Promise<IPostIMage> = useSelector((state: any) => state.drawler.croppedNewPostImage)
  const [croppedImage, setCroppedImage] = useState('')

  const setImage = async () => {
    const img = (await croppedPostImage).img
    console.log(img)
    setCroppedImage(img)
  }
 
  useEffect(() => {
    setImage()
  })

  return (
    <div className='h-[520px] w-[970px] flex '>

      <div className='relative flex-grow flex items-center justify-center'>
       { croppedImage && <img className='object-contain h-full' src={croppedImage} alt="" /> }
      </div>
    
    
      <div className='w-[329px] flex flex-col h-full'>
        <ConfigForm />
      </div>
    </div>
  )
}

export default connect()(ConfiguratePost)
