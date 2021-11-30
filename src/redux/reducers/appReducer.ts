import { IPost, IAction, IAlert } from "../../types"
import { APP_LOADED, APP_LOADING, SHOW_ALERT,  HIDE_ALERT, AUTH_LOADED } from "../actions/variables"

const initializeState = {
  loading: true,
  alert: null as IAlert | null,
  authLoading: true
}

export const appReducer = (state = initializeState, action: IAction) => {
  switch (action.type) {

    case APP_LOADED: return { ...state, loading: false }
    case APP_LOADING: return { ...state, loading: true }
    case SHOW_ALERT: return { ...state, alert: action.payload }
    case HIDE_ALERT: return { ...state, alert: null }
    case AUTH_LOADED: return { ...state, authLoading: false }

    default: return state
  }
}