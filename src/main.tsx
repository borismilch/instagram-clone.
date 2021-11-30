import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'

import {store} from './redux/store'
import { Provider } from 'react-redux'

import App from './App'

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
       <ReactNotification />
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
