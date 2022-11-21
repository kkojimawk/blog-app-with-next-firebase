import type { AppProps } from 'next/app'
import { useState } from 'react'
import Layout from './components/Layout'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const readStorage = () => {
    const getStorage = () => {
      if (typeof window !== 'undefined' && localStorage.getItem('isAuth') === 'true') {
        return true
      }
      return false
    }
    return getStorage
  }
  const [isAuth, setIsAuth] = useState(readStorage())

  return (
    <>
      <Layout isAuth={isAuth}>
        <Component setIsAuth={setIsAuth} {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
