import { signInWithPopup } from 'firebase/auth'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { auth, provider } from '../../firebase'

type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}
const Login: NextPage<Props> = ({ setIsAuth }) => {
  const router = useRouter()
  const logInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
    localStorage.setItem('isAuth', 'true')
    setIsAuth(true)
    router.push('/')
  }
  return (
    <div>
      <p>ログインして始める</p>
      <button type='button' className='border shadow-sm' onClick={() => logInWithGoogle()}>
        Googleでログイン
      </button>
    </div>
  )
}

export default Login
