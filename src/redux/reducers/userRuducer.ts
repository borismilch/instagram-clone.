import { IAction, IUser } from "../../types"
import { USER_SINGED_IN, USER_SINGED_OUT, SET_AUTH_TO_FASLE, SET_AUTH_TO_TRUE } from "../actions/variables"

const initialastate = {
  user: null as null | IUser,
  isAuth: false as boolean
}

export const  userReducer = (state = initialastate, action: IAction) => {
  switch (action.type) {
    case USER_SINGED_IN: return {...state, user: action.payload}
    case USER_SINGED_OUT: return { ...state, user: null }

    case SET_AUTH_TO_FASLE: return { ...state, isAuth: false }
    case SET_AUTH_TO_TRUE: return { ...state, isAuth: true }

    default: return state
  }
}