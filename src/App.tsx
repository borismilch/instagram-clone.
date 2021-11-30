import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NotFound from './views/NotFound'

import { auth } from '../firebase'

import { readiedSignIn } from './redux/actions/actions/userActions'

import { useSelector, connect, useDispatch } from 'react-redux'

import { ConnectedRouter } from 'connected-react-router'

import { history } from './redux/store'
import MainLayout from './components/layout/MainLayout'
import Loader from './components/layout/Loader'

const Home = lazy(() => import('./views/Home'))
const ChatRoom = lazy(() => import('./views/ChanRoom'))
const Chats = lazy(() => import('./views/Chats'))
const Photos = lazy(() => import('./views/Photos'))
const SignIn = lazy(() => import('./views/auth/Signin'))
const SignUp = lazy(() => import('./views/auth/register'))
const Profile = lazy(() => import('./views/Profile'))

const App = () => {

  const dispatch = useDispatch()

  auth.onAuthStateChanged((user:any) => {
    const { providerData, uid, metadata } = user
    if(user) {
      dispatch(readiedSignIn({...providerData[0], uid, ...metadata}))
    }
  })

  return (
    <ConnectedRouter history={history}>  
     <Suspense fallback={<Loader />}>
      <Switch>

        <Route  path="/photos">
         <MainLayout> <Photos /></MainLayout>
        </Route>

        <Route  path="/">
        <MainLayout> <Home /></MainLayout>
        </Route>

        <Route  path="/profile">
        <MainLayout> <Profile /></MainLayout>
        </Route>

        <Route  path="/chatroom">
        <MainLayout> <ChatRoom /></MainLayout>
        </Route>

        <Route  path="/chats">
          <MainLayout> <Chats /></MainLayout>
        </Route>

        <Route  path="/auth/signin">
          <SignIn />
        </Route>        

        <Route path="/auth/register">
          <SignUp />
        </Route>
      
        <Route>
          <NotFound />
        </Route>

      </Switch>
      </Suspense>
    </ConnectedRouter>
  );
};

export default connect()(App);
