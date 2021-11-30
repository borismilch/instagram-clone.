
import React from 'react'

import ModalLayout from '../ModalLayout'

import { connect,  useDispatch, useSelector } from 'react-redux'

import { hideModal } from '../../../redux/actions/generators'

import { changeConfirmDrawlerModal } from '../../../redux/actions/actions/drawlerActions'

import { clearNewPostImages } from '../../../redux/actions/actions/drawlerActions'

const  ConfirmDrawlerCodal:React.FC = () => {

  const dispatch = useDispatch()
  const isOpen = useSelector((state: any) => state.drawler.consfirmModal) 

  const closeModal = () => {
    dispatch(changeConfirmDrawlerModal(false))
  }

  const closeAll = () => {
    closeModal()
    dispatch(hideModal())
    dispatch(clearNewPostImages())
  }

  return (
    <>  
   {  
     isOpen &&
    <ModalLayout 
      closeModal={closeModal} isOpen={isOpen}
    >

      <div className="inline-block w-full max-w-md  my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

      <div className="m-[32px] flex flex-col text-center">

        <h2 className='text-[18px] text-[#262626] font-semibold' style={{margin: 'margin: -4px 0 -6px;'}}>
          Отменить публикацию? 
        </h2>

        <span className='text-gray-400 text-sm'>
          Если вы выйдете, изменения не будут сохранены
        </span>

      </div>

      <div className='flex flex-col'>

        <button
          type="button"
          className="text-red-600 confirm-button font-bold"
          onClick={closeAll}
        >
          Видалити
        </button>

        <button
          type="button"
          className="confirm-button"
          onClick={closeModal}
        >
          Відмінити
        </button>

      </div>

      </div>

    </ModalLayout>

  }

    </>     
    
           
  )
}

export default connect()(ConfirmDrawlerCodal)