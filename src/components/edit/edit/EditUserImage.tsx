import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { IUser } from '../../../types'

import './editStyles.css'

const EditUserImage:React.FC<{image: string, triggerInput: () => void}> = ({image, triggerInput}) => {

  const user:IUser = useSelector((state: any) => state.user.user)

  return (
    <div className='mt-[12px] md:mt-[32px] flex mx-auto w-full items-center'>

      <img onClick={triggerInput} src={image} className='rounded-full object-cover w-[37px] h-[37px] mt-[2px] ml-[20px] mr-[20px] md:mr-[32px] md:ml-[124px] border border-gray-300' alt="" />

      <div className='flex flex-col'>

        <h1 className='edit_user_title'>
            {user.displayName.toLowerCase().split(' ').join('')}
        </h1>

        <h2 onClick={triggerInput} className='text-[#0095f6] font-semibold hover:underline '>
        Изменить фото профиля
        </h2>
      </div>
      
    </div>
  )
}

export default connect()(EditUserImage)
