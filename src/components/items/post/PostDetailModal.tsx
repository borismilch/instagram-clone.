import React from 'react'
import ModalLayout from '../../layout/ModalLayout'

import { connect, useDispatch, useSelector } from 'react-redux'

import { closepostDetailModal } from '../../../redux/actions/generators'

const PostDetailModal = () => {

  const closeModal = () => {
    dispatch(closepostDetailModal())
  }

  const dispatch = useDispatch()
  const isOpen = useSelector((state: any) => state.postDetailModal.open)

  return (
    <>
   <ModalLayout isOpen={isOpen} closeModal={closeModal} >
      <div className="add_post_modal">
    
      <h1>dbfijedoknfv</h1>
      </div>
    </ModalLayout>
   
        
    </>
  )
}

export default connect()(PostDetailModal)
