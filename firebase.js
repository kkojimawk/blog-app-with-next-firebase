import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAeGsTsCpcBzaCsB5H9OH1tzXMOI3mYh20',
  authDomain: 'blog-app-2efff.firebaseapp.com',
  projectId: 'blog-app-2efff',
  storageBucket: 'blog-app-2efff.appspot.com',
  messagingSenderId: '1044329343858',
  appId: '1:1044329343858:web:7b7357822d8fc24d324beb',
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const db = getFirestore()

export { auth, provider, db }
