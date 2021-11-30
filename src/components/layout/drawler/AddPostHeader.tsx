import React from 'react'
import { ArrowBackIcon } from '../../icons'
import { connect, useSelector, useDispatch } from 'react-redux'
import { cahngeStepOfPostModal } from '../../../redux/actions/actions/drawlerActions'

import { IPostIMage } from '../../../types'

const AddPostHeader: React.FC<{closeModal: () => void}> = ({ closeModal }) => {

  const dispatch = useDispatch()
  const step = useSelector((state: any) => state.drawler.stepOfModal)
  const fileimage: IPostIMage = useSelector((state: any) => state.drawler.newPostImage)

  const closeOrChange = () => {
    step === 0 ? closeModal() : dispatch(cahngeStepOfPostModal(0))
  }

  const commit = () => {
    console.log('added to sessionStorage')
  }

  const change = (n: number) => {
    dispatch(cahngeStepOfPostModal(n))
  }

  const commitOrChange = () => {
    console.log(step)
    step == 1 ?  change(2) : change(1)  
  }
    

  return (
    <div className="flex justify-between items-center py-2 shadow-md px-3 border-b border-gray-300">

    <div onClick={closeOrChange.bind(null)} className='flex items-center justify-center h-7 w-7'> <ArrowBackIcon /> </div>

    <h1 className='flex text-gray-800 items-center text-center text-sm font-semibold'>
      Створити публікацію
    </h1>

   {
    fileimage ?
    (
      <div onClick={commitOrChange}
      className='
        font-medium 
        text-sm text-blue-700 
        hover:bg-blue-50 px-2 py-
        1 rounded-md 
      '
      >
      {step < 1? 'Далі' : 'Публікувати'}
    </div>
    ) : <div />

   }
    </div>
  )
}

export default AddPostHeader
