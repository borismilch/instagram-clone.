import React, {useState} from 'react'
import { IProfile } from '../../types'
import SkeletonSuggestion from './skeleton/SkeletonSuggestion'

const Suggesttion: React.FC<{suggestion: IProfile}>  = ({suggestion}) => {

  const [imageLoaded, setImageLoaded] = useState<boolean>(false)

  const loadImage = () => {
    setImageLoaded(true)
  }

  return (
    <>

    <div className={imageLoaded ? 'opacity-100 relative' : 'opacity-0 absolute'}>

    <div className='py-2 px-1 flex justify-between items-center'>

      <div className='flex items-center gap-2'>

        <img onLoad={loadImage} className='w-8 h-8 rounded-full' src={suggestion.image} alt="" />

        <div className='flex flex-col'>
          <h6 className='text-black text-sm'>{suggestion.name}</h6>

          <span className='text-gray-500 text-xs'>Популярное</span>
        </div>

      </div>

      <span className='text-blue-500  text-sm cursor-pointer hover:bg-blue-50 transition-all duration-100 p-2 rounded-sm'>
         Підписатись
      </span>
   
    </div>
    </div>

    {!imageLoaded && <SkeletonSuggestion /> }

    </>

  )
}

export default Suggesttion
