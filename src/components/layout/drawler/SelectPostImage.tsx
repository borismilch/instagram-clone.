import React, { useRef, ChangeEvent } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import { setNewPostImage } from '../../../redux/actions/actions/drawlerActions'

import ModalIcon from '../../icons/ModalIcon'

import ImageDrawler from '../../forms/ImageDrawler'

import { IPostIMage } from '../../../types'

const SelectPostImage = () => {
  const dispatch = useDispatch()

  const fileImage: IPostIMage = useSelector((state: any) => state.drawler.newPostImage)

  const inputRef = useRef<HTMLInputElement>(null)

  const addImageToHost = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      dispatch(setNewPostImage({img: readerEvent.target!.result + '', id: Date.now()}))
    }
  }

  return (
    <div className='w-min-[500px]'>
    
     { !fileImage && (
      
      <div className='p-[24px] flex-1 flex flex-col justify-center  h-[508px] items-center gap-2'>

        <div>
         
        <ModalIcon />
        </div>
    

       <h3 className='text-[#262626] text-[22px] text-center' style={{margin: '-4px 0 -5px'}} >
        
         Перетащите сюда фото и видео
       </h3>

       <button onClick={() => inputRef.current!.click()} className='modal_button_bkue'>
         Вибрати з комп'ютера    
       </button>

      </div> 
    ) }

    { !!(fileImage) && (
      <div className='max-w-[500px] w-full'>

      <ImageDrawler image={fileImage.img} key={fileImage.id} />
      </div> )
    }

    
    <input 
      type="file" 
      onChange={addImageToHost.bind(null)}
      hidden 
      ref={inputRef}
    />
    </div>
  )
}

export default connect()(SelectPostImage)
