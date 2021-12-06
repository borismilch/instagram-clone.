import { IPost } from '../../../types'
import { ADD_POST, HIDE_MODAL, SHOW_MODAL, START_LOADING, END_LOADING, LOAD_POSTS, APP_LOADING, APP_LOADED, USER_SINGED_IN, USER_SINGED_OUT, SET_AUTH_TO_FASLE, SET_AUTH_TO_TRUE, CHANGE_DRAWLER_CONTROLLER, CHANGE_LOADER_MODAL, OPEN_POST_DETAIL_MODAL, CLOSE_POST_DETAIL_MODAL, SELECT_POST_DETAIL_MODAL_POST, LOAD_USER_UPDATE, LOAD_USER_UPDATE_ENDED, SET_USERS, SET_USER_FOLLOWING, SET_USER_FOLLOWERS, SHOW__INTERECTION_MODAL, HIDE_INTERECTION_MODAL, SET_CURRENT_ITERECTING_ID, CHANGE_SELCTED_CHAT,  } from '../variables'

import { IUser } from '../../../types'
import { User } from '@firebase/auth'
import { DocumentData } from '@firebase/firestore'

export const showModal = () => ({ type: SHOW_MODAL })
export const hideModal = () => ({ type: HIDE_MODAL })
export const startLoading = () => ({ type: START_LOADING })
export const endLoading = () => ({ type: END_LOADING })
export const loadPosts = (payload: IPost[]) => ({ type: LOAD_POSTS, payload })
export const loadApp = () => ({ type: APP_LOADED })
export const unloadApp = () => ({ type: APP_LOADING })
export const setUser = (payload: IUser | DocumentData) => ({ type: USER_SINGED_IN, payload })
export const deleteUser = () => ({ type: USER_SINGED_OUT })
export const setAuthToFalse = () => ({ type: SET_AUTH_TO_FASLE })
export const setAuthtoTrue = () => ({ type: SET_AUTH_TO_TRUE })

export const setLoadingUpdatingToTrue = () => ({ type: LOAD_USER_UPDATE })
export const setLoadingUpdatingToFalse = () => ({ type: LOAD_USER_UPDATE_ENDED })

export const changeDrawlerConstroller = () => ({ type: CHANGE_DRAWLER_CONTROLLER })

export const changeLoasingodal = (payload: boolean) => ({
  type: CHANGE_LOADER_MODAL,
  payload
})

export const openPostDetailModal = () => ({
  type: OPEN_POST_DETAIL_MODAL
})

export const closepostDetailModal = () => ({
  type: CLOSE_POST_DETAIL_MODAL
})

export const selectPostDetailModalPost = (payload: IPost) => ({
  type:SELECT_POST_DETAIL_MODAL_POST,
  payload
})


export const setAllUsers = (payload: DocumentData[]) => ({
  type: SET_USERS,
  payload
})

export const setUserFollowing = (payload: DocumentData[]) => ({
  type: SET_USER_FOLLOWING,
  payload
})


export const setUserFollowers = (payload:DocumentData[]) => ({
  type: SET_USER_FOLLOWERS,
  payload
})

export const showInterectionModal = () => ({
  type: SHOW__INTERECTION_MODAL,
})

export const hideInterectionModal = () => ({
  type: HIDE_INTERECTION_MODAL
})

export const setCurrentInterectionId = (payload: string) => ({
  type: SET_CURRENT_ITERECTING_ID,
  payload
})

export const changeSelectedChat = (payload: string) => ({
  type: CHANGE_SELCTED_CHAT,
  payload
})