import React, {useState, useCallback, SyntheticEvent, useEffect} from 'react'
import Cropper from 'react-easy-crop'

import { ZoomInIcon, FilmIcon } from '@heroicons/react/outline'

import { setNewCroppeDrawlerImage } from '../../redux/actions/actions/drawlerActions'

import { useDispatch, connect, useSelector } from 'react-redux'

import { ArrowsExpandIcon } from '@heroicons/react/solid'

import DropList from '../forms/DropList'

import './formStyle.css'
import getCroppedImg from '../../utils/cropImage'

declare function parseInt (x: string, base?: number): number

const ImageDrawler: React.FC<{image: string}> = ({image}) => {

  const dispatch = useDispatch()

  const ratio = useSelector((state: any) => state.drawler.imageRatio)

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const [croppedAreaPixels, setCroppedAreaPixels] = useState({})

  const [aspect, steAspect] = useState(16/9)

  const [dropList, setDropList] = useState(false)
  const [cropedImage, setCroppedImage] = useState('')

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        0
      )
      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels])

  const parseRatio = (val: string): number => {
    const nums = val.split(':').map(Number)
    return (nums[0] / nums[1])
  }

  useEffect(() => {
    
    return () => {
      console.log('unmounted')
      showCroppedImage()
   
      dispatch(setNewCroppeDrawlerImage({img: cropedImage, id: Date.now()}))
    }
  })

  useEffect(() => {
    steAspect(parseRatio(ratio))
  }, [ratio])

  const onCropComplete = (croppedArea: any, croppedAreaPixel: { [key: string]: number }) => {
    console.log(croppedAreaPixel)
    setCroppedAreaPixels({...croppedAreaPixel})
    console.log(croppedAreaPixels)
   
    if (croppedArea.width / croppedArea.x > 2.9 && !croppedArea.y  ) {
      setDropList(false)
      setCrop({x: 0, y: 0})
    }
  }

  return (
    <div 
      className='h-[458px] flex items-end relative' 
      onClick={() => setDropList(false)}
    >
    <Cropper
      restrictPosition={true}
      image={image}
      crop={crop}
      zoom={zoom}
      aspect={aspect || 16/9}

      style={{mediaStyle: {aspectRatio: ratio.split(':').join('/')}}}
      classes={{mediaClassName: 'image_DrawlerStyle'}}
      
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
    />
      <div className='absolute px-3 bottom-4 flex justify-between items-center w-full'>

      <div className='flex gap-4  items-center'>

      <div 
        onClick={(e: SyntheticEvent) => {
          e.stopPropagation(); setDropList(prev => !prev)
        }} 
        style={{borderRadius: '50%'}} 
        className='drawler_action_button'
      >
        <span> <ArrowsExpandIcon className='w-4 h-4' /></span>
      </div>

      <div className={'absolute -top-52 left-5 opacity-0 transition-all duration-200 ' + (dropList && 'opacity-100' )}>
        <DropList  />
      </div>
     
      <div style={{borderRadius: '50%'}} className='drawler_action_button'>
        <span> <ZoomInIcon className='w-4 h-4' /></span>
      </div>

      </div>

      <div style={{borderRadius: '50%'}} className='drawler_action_button'>
        <span> <FilmIcon className='w-4 h-4' /> </span>
      </div>

      </div>
    </div>
    
  )
}

export default connect()(ImageDrawler)
