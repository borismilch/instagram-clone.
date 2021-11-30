import { IPost, IAction, IAlert } from "../../types"
import { CHANGE_LOADER_MODAL } from "../actions/variables"

const initializeState = {
  loadingModal: false as boolean
}

export const loaderMOdalreducer = (state = initializeState, action: IAction) => {
  switch (action.type) {

    case CHANGE_LOADER_MODAL: return { ...state, loadingModal: action.payload }

    default: return state
  }
}