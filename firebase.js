import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAbQKEx9zvUsOyIVwsHpaq29VOOGWY0sWM',
  authDomain: 'blog-app-e80bf.firebaseapp.com',
  projectId: 'blog-app-e80bf',
  storageBucket: 'blog-app-e80bf.appspot.com',
  messagingSenderId: '301411372453',
  appId: '1:301411372453:web:1744f8845f8134bfd0ec4c',
  measurementId: 'G-BYE67SKGVR',
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const db = getFirestore()

export { auth, provider, db }
