import { IAlert, IComment, IDispatch, IPost, IUser, userCreadentials } from '../../../types'
import { startLoading, endLoading, loadPosts, hideModal, setUser,deleteUser, setAuthtoTrue, setAuthToFalse, setLoadingUpdatingToTrue, setLoadingUpdatingToFalse } from '../creators'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithRedirect, getRedirectResult} from 'firebase/auth'
import { SHOW_ALERT, HIDE_ALERT } from '../variables'

import { db, storage, auth, facebookProvider } from '../../../../firebase'

import { alerts } from '../../../utils/alerts'

import { push } from 'connected-react-router'

import { doc, collection, setDoc, getDocs, addDoc, getDoc, updateDoc } from 'firebase/firestore'
import { ref, uploadString, getDownloadURL } from 'firebase/storage'

export const createNewUser = (credentials: userCreadentials) => {

  return async (dispatch: IDispatch) => {
    dispatch(setAuthtoTrue())
    try {
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      const uid = auth.currentUser!.uid
    
      const usersRef = doc(db, 'users', uid)
      await setDoc(usersRef, { ...credentials, uid })

      console.log({...credentials, uid})
      
      dispatch(setUser({ ...credentials, uid }))
      dispatch(push('/'))
      dispatch(setAuthToFalse())

      dispatch(callAlert('user_registered'))
    }
    catch (e: any) {
      dispatch(setAuthToFalse())
      dispatch(callAlert(e.code))
    }
  }
 

}

export const signin =  (credentials: {email: string, password: string}) => {

  return async (dispatch: IDispatch) => {
    dispatch(setAuthtoTrue())
    console.log(credentials)
    try { 
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password)

      const uid = auth.currentUser!.uid
      const userRef = doc(db, 'users', uid)

      const user =  (await getDoc(userRef)).data()

      dispatch(setUser(user!))

      dispatch(push('/'))

      dispatch(setAuthToFalse())

      dispatch(callAlert('user_singed_in'))
    }
    catch (e: any) {
      dispatch(setAuthToFalse())
      dispatch(callAlert(e.code))
    }
  }
 
} 

export const readiedSignIn = <T extends IUser>(user: T) => {

  return async (dispatch: IDispatch) => {
    dispatch(setAuthtoTrue())
    
    const databaseUserRef = doc(db, 'users', user.uid)
    const databaseUser = getDoc(databaseUserRef)

    if (!(await databaseUser).exists()) {
      await setDoc(databaseUserRef, user)
    }

    try { 
      dispatch(setUser({...user, ...(await databaseUser).data()}))

      dispatch(push('/'))

      dispatch(setAuthToFalse())
    }
    catch (e: any) { dispatch(setAuthToFalse()) }
  }
 
} 

export const updateUser = (user: any) => {
  return async (dispatch: IDispatch, getState: () => any) => {
    dispatch(setLoadingUpdatingToTrue())

    if (getState().user.user.photoURL !== user.photoURL) {
      const storageRef = ref(storage, `users/${user.uid}`)

      await uploadString(storageRef, user.photoURL, 'data_url')

      const downloadURL = await getDownloadURL(storageRef)

      user = { ...user, photoURL: downloadURL }
    }

    console.log(getState().user.user.photoURL, user.photoURL )

    const userRef = doc(db, 'users', getState().user.user.uid)
    await updateDoc(userRef, { ...user })

    const userDoc = (await getDoc(userRef)).data()

    dispatch(setUser(userDoc!))

    dispatch(setLoadingUpdatingToFalse())

    dispatch(push('/profile'))
  }
}


export const singOutUser = () => {
  return async (dispatch:IDispatch) => {
    await signOut(auth)
    dispatch(deleteUser())
    dispatch(push('/auth/signin'))
    dispatch(callAlert('user_singed_out'))  
  }
}

export const callAlert = (code: string) => {
  console.log(code)
  const alert: IAlert = alerts[code]
  return ({type: SHOW_ALERT, payload: alert})
  
}

export const loginWithFacebook = () => {
  return async () => {
    await signInWithRedirect(auth, facebookProvider)
    const result = await getRedirectResult(auth)
    
    console.log(result)
  }
}