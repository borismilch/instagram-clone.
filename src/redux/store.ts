import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer';

import logger from 'redux-logger'

export const history = createBrowserHistory()

export const store = configureStore(
  {
    reducer: rootReducer(history),
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk, routerMiddleware(history)),

  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;