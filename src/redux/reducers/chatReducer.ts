import { IAction } from "../../types"
import { CHANGE_SELCTED_CHAT } from "../actions/variables"

const initializeState = {
  selectedChat: null as null | string
}

export const chatReducer = (state = initializeState, action: IAction) => {
  switch (action.type) {
    case CHANGE_SELCTED_CHAT: return { ...state, selectedChat: action.payload }

    default: return state
  }
}