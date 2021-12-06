
import { IAction } from "../../types"
import { HIDE_INTERECTION_MODAL, SET_CURRENT_ITERECTING_ID, SHOW__INTERECTION_MODAL } from "../actions/variables"

const initializeState = {
  show: false as boolean,
  currentId: ''
}

export const interectionModalReducer = (state = initializeState, action: IAction) => {
  switch (action.type) {

    case SHOW__INTERECTION_MODAL: return { ...state, show: true }
    case HIDE_INTERECTION_MODAL: return { ...state, show: false }

    case SET_CURRENT_ITERECTING_ID: return { ...state, currentId:action.payload  }

    default: return state
  }
}