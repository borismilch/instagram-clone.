import { CHANGE_RATIO, CHANGE_CONFIRM_MODAL, ADD_IMAGE_TO_NEW_POST, REMOVE_IMAGE_FROM_NEW_POST, CLEAR_IMAGE_FROM_NEW_POST, ADD_CROPPED_IMAGE_TO_NEW_POST, REMOVE_CROPPED_IMAGE_FROM_NEW_POST, CLEAR_CROPPED_IMAGE_FROM_NEW_POST, CHANGE_STEP_OF_POST } from '../variables'

import { IPostIMage } from '../../../types'

export const changeRatio = (payload: string) => ({ type: CHANGE_RATIO, payload })

export const changeConfirmDrawlerModal = (payload: boolean) => ({ type:  CHANGE_CONFIRM_MODAL, payload })

export const setNewPostImage = (payload: IPostIMage) => ({ type: ADD_IMAGE_TO_NEW_POST, payload })
export const removeNewPostImage = (payload: string) => ({ type: REMOVE_IMAGE_FROM_NEW_POST, payload })
export const clearNewPostImages = () => ({ type: CLEAR_IMAGE_FROM_NEW_POST })

export const setNewCroppeDrawlerImage = (payload: IPostIMage) => ({ type: ADD_CROPPED_IMAGE_TO_NEW_POST, payload })
export const removeCroppedNewPostImage = (payload: string) => ({ type: REMOVE_CROPPED_IMAGE_FROM_NEW_POST, payload })
export const clearCroppedNewPostImages = () => ({ type: CLEAR_CROPPED_IMAGE_FROM_NEW_POST })

export const cahngeStepOfPostModal = (payload: number) => ({ type: CHANGE_STEP_OF_POST, payload })