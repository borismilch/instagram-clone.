import { IPost, IAction } from "../../../types"
import { HIDE_MODAL, SHOW_MODAL, ADD_POST, LOAD_POSTS, END_LOADING, START_LOADING } from "../../actions/variables"

const initializeState = {
  posts: [] as IPost[],
  modal: false,
  loading: false
}

export const postReducer = (state = initializeState, action: IAction) => {
  switch (action.type) {

    case SHOW_MODAL: return { ...state, modal: true }
    case HIDE_MODAL: return { ...state, modal: false }

    case START_LOADING: return { ...state, loading: true }
    case END_LOADING: return { ...state, loading: false }

    case LOAD_POSTS: return { ...state, posts: action.payload }

    default: return state
  }
}