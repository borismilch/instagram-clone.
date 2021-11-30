import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth, FacebookAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAxd4LjGh06lJ88s7NrnxQMFy2L1FDc7Qw",
  authDomain: "nedoproject-811b7.firebaseapp.com",
  projectId: "nedoproject-811b7",
  storageBucket: "nedoproject-811b7.appspot.com",
  messagingSenderId: "416541587341",
  appId: "1:416541587341:web:579ec405f3249531022fc4"
};

// init firebase
export const facebookProvider = new FacebookAuthProvider()

export const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth()

export const db = getFirestore()

export const storage = getStorage()