import React, { ChangeEvent } from 'react'

const EditInput:React.FC<{text?: string, label:string, onChange: (e: ChangeEvent<HTMLInputElement>, ) => void, val: string}>
 = ({ text, label, onChange, val }) => {
  return (
   
    <div className='flex gap-[6px] md:gap-[30px] flex-col md:flex-row items-start mx-[20px]'>

    <h1 className='text-[#262626] text-bold'>
      {label}
    </h1>

    <div className='flex flex-col w-full'>

    <input value={val} onChange={onChange} style={{padding: '4px 6px'}} type="text" placeholder={label} 
      className='
      font-light
      placeholder-opacity-100 placeholder-gray-500  max-w-[328px] w-full border border-gray-300 rounded-sm mb-2
     focus-within:ring-[#262626] focus:border-[#262626]
    ' />

    { text && <p className='text-xs text-[#8e8e8e] py-1 max-w-[358px] w-full'>
      {text}
     </p>}

    </div>
  </div>
  )
}

export default EditInput
