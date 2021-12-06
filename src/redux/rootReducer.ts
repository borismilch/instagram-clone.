import { combineReducers } from "redux";
import { postReducer } from './reducers/post/postReducer'

import { appReducer } from './reducers/appReducer'
import { connectRouter } from 'connected-react-router'
import { userReducer } from "./reducers/userRuducer";

import { drawlerReducer } from "./reducers/drawlerReducer";
import { postModalReducer } from './reducers/post/postModalReducer'

import { interectionModalReducer } from './reducers/interectionsModalReducers'

import { chatReducer } from './reducers/chatReducer'
  
export const rootReducer = (history: any) => combineReducers({
  app: appReducer,
  posts: postReducer,
  router: connectRouter(history),
  drawler: drawlerReducer,
  user: userReducer,
  postDetailModal: postModalReducer,
  interectionModal: interectionModalReducer,
  chat: chatReducer,

})