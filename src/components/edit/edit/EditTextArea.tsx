import React, { ChangeEvent } from 'react'

const EditInput:React.FC<{label:string, onChange: (e: ChangeEvent<HTMLTextAreaElement>, ) => void, val: string}>
 = ({label, onChange, val }) => {
  return (
   
    <div className='flex gap-[6px] md:gap-[30px] flex-col md:flex-row items-start mx-[20px]'>

    <h1 className='text-[#262626] text-bold'>
      {label}
    </h1>

    <div className='flex flex-col w-full'>

    <textarea rows={3} value={val} onChange={onChange} style={{padding: '4px 6px'}} placeholder={label} 
      className='
      font-light
      placeholder-opacity-100 placeholder-gray-500  max-w-[328px] w-full border border-gray-300 rounded-sm mb-2
     focus-within:ring-[#262626] focus:border-[#262626]
    '></textarea>

    </div>
  </div>
  )
}

export default EditInput
