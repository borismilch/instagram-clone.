import React from 'react'
import './postSave.css'

const ProfileSaved = () => {
  return (
   <div className='w-full flex flex-col'>

     <div className='w-full items-center justify-between flex mt-[32px] mb-[16px] '>
        <span className='text-[#8e8e8e] text-xs'>Список сохраненного виден только вам</span>
        
        <p className='text-blue-500 hover:bg-blue-50 text-sm font-semibold font-sans transition-all duration-200 p-1 cursor-pointer'>
            +Додати підбірку
        </p>
     </div>

     <div className='flex justify-center text-center'>

      <div className='flex flex-col justify-center items-center gap-[18px] mx-[44px] my-[60px] w-full max-w-[350px]' >

        <div className='post_bookMark' />
       

        <h2 className='text-[#262626] font-light text-3xl'>
          Сохранить
        </h2>
        
        <span className=' text-sm text-[#262626]'>
        Сохраняйте фото и видео, которые хотите посмотреть снова. Никто не получит уведомления об этом, а сохраненные объекты сможете видеть только вы.
        </span>

      </div>

     </div>

   </div>
  )
}

export default ProfileSaved
