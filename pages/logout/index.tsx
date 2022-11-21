import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import React from 'react'
import { auth } from '../../firebase'

const Logout = ({ setIsAuth }) => {
  const router = useRouter()
  const logoutWithGoogle = async () => {
    await signOut(auth)
    localStorage.clear()
    setIsAuth(false)
    router.push('/')
  }
  return (
    <div>
      <p>ログアウトする</p>
      <button type='button' className='border shadow-sm' onClick={() => logoutWithGoogle()}>
        ログアウト
      </button>
    </div>
  )
}

export default Logout
