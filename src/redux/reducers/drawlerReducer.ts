import { IAction, IPostIMage } from "../../types"
import { CHANGE_RATIO, CHANGE_CONFIRM_MODAL, ADD_IMAGE_TO_NEW_POST, REMOVE_IMAGE_FROM_NEW_POST, CLEAR_IMAGE_FROM_NEW_POST, ADD_CROPPED_IMAGE_TO_NEW_POST, CLEAR_CROPPED_IMAGE_FROM_NEW_POST, REMOVE_CROPPED_IMAGE_FROM_NEW_POST, CHANGE_DRAWLER_CONTROLLER, CHANGE_STEP_OF_POST } from "../actions/variables"

const initializeState = {
  imageRatio: '16/9' as string,
  confirmModal: false as boolean,
  newPostImage: null as null | IPostIMage,
  croppedNewPostImage: null as null | IPostIMage,
  drawlerController: false,
  stepOfModal: 0
}

export const drawlerReducer = (state = initializeState, action: IAction) => {
  switch (action.type) {

    case CHANGE_RATIO: return { ...state, imageRatio: action.payload }

    case CHANGE_CONFIRM_MODAL: return {  ...state, consfirmModal: action.payload }

    case ADD_IMAGE_TO_NEW_POST: return { ...state, newPostImage: action.payload }

    case REMOVE_IMAGE_FROM_NEW_POST: 
    return { ...state, newPostImage: action.payload}

    case CLEAR_IMAGE_FROM_NEW_POST: return { ...state, newPostImage: null }

    case ADD_CROPPED_IMAGE_TO_NEW_POST: return {...state, croppedNewPostImage: action.payload}
  
    case CHANGE_DRAWLER_CONTROLLER: return { ...state, drawlerController: !state.drawlerController }

    case CLEAR_CROPPED_IMAGE_FROM_NEW_POST: return { ...state, croppedNewPostImage: null }

    case CHANGE_STEP_OF_POST: return { ...state, stepOfModal: action.payload }

    default: return state
  }
}