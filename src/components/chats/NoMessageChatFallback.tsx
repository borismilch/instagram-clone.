import React from 'react'

import { connect } from 'react-redux'

const NoMessageChatFallback:React.FC<{sender: () => void, isSended: boolean}> = ({sender, isSended}) => {

  const hello = 'https://firebasestorage.googleapis.com/v0/b/nedoproject-811b7.appspot.com/o/hi-sticker-social-media-content-hand.jpg?alt=media&token=8ac75ff4-d39f-445a-a0d8-267a6af7aa47'

  if (isSended) { return <div></div> }

  return (
    <div className='w-full flex flex-col items-center 
    h-[90vh] felx-1 justify-center'>

     <div className='flex justify-center items-center text-center'>

      <div className='flex flex-col justify-center items-center gap-[18px] mx-[44px] my-[60px] w-full max-w-[350px]' >
        <h2 className='text-[#262626] font-semibold text-xl'>
         Почніть розмову із привітання
        </h2>
        
        <img src={hello} className='w-40 h-40' alt="" />

        <button onClick={sender} className='submit_btn px-4 py-2 text-sm'>
         Отправить сообщение
        </button>

      </div>

     </div>

   </div>
  )
}

export default connect()(NoMessageChatFallback)
