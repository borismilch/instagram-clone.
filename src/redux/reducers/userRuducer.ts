import { IAction, IUser } from "../../types"
import { USER_SINGED_IN, USER_SINGED_OUT, SET_AUTH_TO_FASLE, SET_AUTH_TO_TRUE, LOAD_USER_UPDATE, LOAD_USER_UPDATE_ENDED, SET_USERS, SET_USER_FOLLOWERS, SET_USER_FOLLOWING } from "../actions/variables"

const initialastate = {
  user: null as null | IUser,
  isAuth: false as boolean,
  loading: false,
  users: [] as IUser[],
  followers: [],
  following: []
}

export const  userReducer = (state = initialastate, action: IAction) => {
  switch (action.type) {
    case USER_SINGED_IN: return {...state, user: action.payload}
    case USER_SINGED_OUT: return { ...state, user: null }

    case LOAD_USER_UPDATE: return { ...state, loading: true }
    case LOAD_USER_UPDATE_ENDED: return { ...state, loading: false }

    case SET_USERS: return { ...state, users: action.payload }

    case SET_AUTH_TO_FASLE: return { ...state, isAuth: false }
    case SET_AUTH_TO_TRUE: return { ...state, isAuth: true }

    case SET_USER_FOLLOWERS: return { ...state, followers: action.payload }
    case SET_USER_FOLLOWING: return { ...state, following: action.payload }

    default: return state
  }
}