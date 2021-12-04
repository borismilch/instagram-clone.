import React from 'react'

const ProfileFooter = () => {

  const str = `Meta Информация Блог Вакансии Помощь API Конфиденциальность Условия Популярные аккаунты Хэштеги Места Instagram Lite Русский Русский © 2021 Instagram от Meta`

  return (
    <div className='flex gap-4 mx-auto max-w-[975px] flex-wrap justify-center'>
     { str.split(' ')
     .map(s => 
       (<span 
         className='text-xs font-semibold cursor-pointer text-gray-400 hover:underline'>
          {s}</span>)) }
    
     
    </div>
  )
}

export default ProfileFooter
