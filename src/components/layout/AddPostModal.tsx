import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import { hideModal } from '../../redux/actions/generators'

import ModalLayout from './ModalLayout'

import { changeDrawlerConstroller } from '../../redux/actions/generators'

import ConfirmModal from './drawler/ConfirmModal'
import { changeConfirmDrawlerModal } from '../../redux/actions/actions/drawlerActions'

import AddPostHeader from './drawler/AddPostHeader'
import SelectPostImage from './drawler/SelectPostImage'
import ConfiguratePost from './drawler/ConfiguratePost'
import { IPostIMage } from '../../types'

const AddPostModal:React.FC = () => {
  const modalStep: number = useSelector((state: any) => state.drawler.stepOfModal)
  const fileImage: IPostIMage = useSelector((state: any) => state.drawler.newPostImage)

  const dispatch = useDispatch()

  const closeModal = () => {
    fileImage?  dispatch(changeConfirmDrawlerModal(true)) : dispatch(hideModal())

  }

  const isOpen = useSelector((state: any) => state.posts.modal)

  return (
    <>
    <ModalLayout isOpen={isOpen} closeModal={closeModal} >
    <div className="add_post_modal">

      <div>

      <AddPostHeader closeModal={closeModal} />

    {
      modalStep === 0 ? <SelectPostImage /> : <ConfiguratePost />
    }
      </div>

     <ConfirmModal />

    </div>
    </ModalLayout>
   
        
    </>
  )}

export default connect(null, null)(AddPostModal)
