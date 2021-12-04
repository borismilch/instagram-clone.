import { IPost, IAction, IAlert } from "../../../types"
import { OPEN_POST_DETAIL_MODAL, CLOSE_POST_DETAIL_MODAL, SELECT_POST_DETAIL_MODAL_POST } from "../../actions/variables"

const initializeState = {
  open: false as  boolean,
  currentPostSelected: {id: 'kkkddd'} as IPost
}

export const postModalReducer = (state = initializeState, action: IAction) => {
  switch (action.type) {

    case OPEN_POST_DETAIL_MODAL: return { ...state, open: true }
    case CLOSE_POST_DETAIL_MODAL: return { ...state, open: false }
    case SELECT_POST_DETAIL_MODAL_POST: return { ...state, currentPostSelected: action.payload }

    default: return state
  }
}