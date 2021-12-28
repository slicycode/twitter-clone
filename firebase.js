// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJNxF41Sz7dvCqLaejTDL0gJypjvNC52o',
  authDomain: 'twitter-clone-v2.firebaseapp.com',
  projectId: 'twitter-clone-v2',
  storageBucket: 'twitter-clone-v2.appspot.com',
  messagingSenderId: '140480992519',
  appId: '1:140480992519:web:152566243ef33d80c061a2',
  measurementId: 'G-6X2TFRT1R8',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
