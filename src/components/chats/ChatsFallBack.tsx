import React from 'react'
import './postSave.css'

const ChatsFallBack = () => {
  return (
    <div className='w-full flex flex-col items-center 
    h-full felx-1 justify-center'>


     <div className='flex justify-center text-center'>

      <div className='flex flex-col justify-center items-center gap-[18px] mx-[44px] my-[60px] w-full max-w-[350px]' >

        <div className='flyIocn' />
       

        <h2 className='text-[#262626] font-light text-3xl'>
        Ваши сообщения

        </h2>
        
        <span className=' text-sm text-gray-400'>
        Отправляйте личные фото и сообщения другу или группе.
        </span>

        <button className='submit_btn px-6 py-2'>
        Отправить сообщение
        </button>

      </div>

     </div>

   </div>
  )
}

export default ChatsFallBack
