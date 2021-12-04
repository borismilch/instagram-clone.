import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NotFound from './views/NotFound'

import { auth } from '../firebase'

import { readiedSignIn } from './redux/actions/actions/userActions'

import { useSelector, connect, useDispatch } from 'react-redux'

import { ConnectedRouter } from 'connected-react-router'

import { history } from './redux/store'
import MainLayout from './components/layout/MainLayout'
import Loader from './components/layout/home/loaders/Loader'

import { Provider as KeepAliveProvider } from 'react-keep-alive'

const Home = lazy(() => import('./views/Home'))
const ChatRoom = lazy(() => import('./views/ChanRoom'))
const Chats = lazy(() => import('./views/Chats'))
const Photos = lazy(() => import('./views/Photos'))
const SignIn = lazy(() => import('./views/auth/Signin'))
const SignUp = lazy(() => import('./views/auth/register'))
const Profile = lazy(() => import('./views/Profile'))
const EditPage = lazy(() => import('./views/EditProfile'))
const PostDetailModal = lazy(() => import('./components/items/post/post/PostDetailModal'))
const OtherProfile = lazy(() => import('./views/OtherProfile'))
const Recomendations = lazy(() => import('./views/Recomendations'))

const App = () => {

  const dispatch = useDispatch()

  auth.onAuthStateChanged((user:any) => {
    if(user) {
      console.log(user)
      const { providerData, uid, metadata } = user  
      dispatch(readiedSignIn({...providerData[0], uid, ...metadata}))
    }
  })

  return (
    <ConnectedRouter history={history}> 
     <KeepAliveProvider> 

     <Suspense fallback={<Loader />}>

     <Suspense fallback=''>
        <PostDetailModal />
      </Suspense>
      <Switch>

        <Route exact path="/photos">
         <MainLayout> <Photos /></MainLayout>
        </Route>

        <Route exact path="/">
        <MainLayout> <Home /></MainLayout>
        </Route>

        <Route exact path="/recomandations">
        <MainLayout> <Recomendations /></MainLayout>
        </Route>

        <Route exact path="/profile">
        <MainLayout> <Profile /></MainLayout>

        </Route>

        <Route exact path='/profile/:id'>
        <MainLayout> <OtherProfile /> </MainLayout>
          </Route>


        <Route exact path="/chatroom">
        <MainLayout> <ChatRoom /></MainLayout>

        </Route>

        <Route exact path="/chats">
          <MainLayout> <Chats /></MainLayout>
        </Route>

        <Route exact path="/accounts/edit">
         <MainLayout> <EditPage /> </MainLayout>
        </Route>

        <Route exact path="/auth/signin">
          <SignIn />
        </Route>        

        <Route exact path="/auth/register">
          <SignUp />
        </Route>

        
      
        <Route exact>
          <NotFound />
        </Route>

      </Switch>
      </Suspense>
    </KeepAliveProvider>  
    </ConnectedRouter>
  );
};

export default connect()(App);
