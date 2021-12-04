import React from 'react'

import { useHistory } from 'react-router'

const PostsFallback = () => {

  const history = useHistory()

  return (
    <div className='w-full flex flex-col'>

    <div className='flex justify-center text-center'>

     <div className='flex flex-col justify-center items-center gap-[18px] mx-[44px] my-[60px] w-full max-w-[350px]' >

        <div className='border-2 border-[#262626] w-12 h-12 cursor-pointer hover:bg-gray-50 transition-all duration-200 p-2 felx items-center justify-center' style={{borderRadius: '50%'}}>

        <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
         </svg>
        </div>
      
      

       <h2 className='text-[#262626] font-light text-3xl'>
         У вас немає друзів
       </h2>
       
       <span onClick={() => history.push('/recomandations')} className=' submit_btn'>
          Додати
       </span>

     </div>

    </div>

  </div>  
  )
}

export default PostsFallback
