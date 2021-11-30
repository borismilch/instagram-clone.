import { IPost, IAction, IAlert } from "../../../types"
import { OPEN_POST_DETAIL_MODAL, CLOSE_POST_DETAIL_MODAL } from "../../actions/variables"

const initializeState = {
  open: false as  boolean
}

export const postModalReducer = (state = initializeState, action: IAction) => {
  switch (action.type) {
    case OPEN_POST_DETAIL_MODAL: return { ...state, open: true }
    case CLOSE_POST_DETAIL_MODAL: return { ...state, open: false }

    default: return state
  }
}