import React, {useState} from 'react'
import { IProfile, IUser } from '../../types'
import SkeletonSuggestion from './skeleton/SkeletonSuggestion'
import { connect, useDispatch, useSelector } from 'react-redux'

const Suggesttion: React.FC<{suggestion: IUser}>  = ({suggestion}) => {

  const user = useSelector((state: any) => state.user.user)

  const [imageLoaded, setImageLoaded] = useState<boolean>(false)

  const loadImage = () => {
    setImageLoaded(true)
  }

  if (user.uid === suggestion.uid) return <span />

  return (
    <>

    <div className={imageLoaded ? 'opacity-100 relative' : 'opacity-0 absolute'}>

    <div className='py-2 px-1 flex justify-between items-center'>

      <div className='flex items-center gap-2'>

        <img onLoad={loadImage} className='avatar_image' src={suggestion.photoURL} alt="" />

        <div className='flex flex-col'>
          <h6 className='text-black text-sm'>{suggestion.displayName}</h6>

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

export default connect()(Suggesttion)
