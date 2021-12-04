import React from 'react'
import './grid.css'

const ProfileFallback = () => {
  return (
    <div className='w-full flex flex-col'>

    <div className='flex justify-center text-center'>

     <div className='flex flex-col justify-center items-center gap-[18px] mx-[44px] my-[60px] w-full max-w-[350px]' >

        <div className='border-2 border-[#262626] w-12 h-12 cursor-pointer hover:bg-gray-50 transition-all duration-200 p-2 felx items-center justify-center' style={{borderRadius: '50%'}}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
</svg>

        </div>
      
      

       <h2 className='text-[#262626] font-light text-3xl'>
          Заполните профиль
       </h2>
       
       <span className=' text-sm text-[#262626]'>
         Укажите свое имя и добавьте биографию, чтобы друзья могли вас найти.
       </span>

     </div>

    </div>

  </div>
  )
}

export default ProfileFallback
