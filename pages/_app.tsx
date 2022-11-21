import type { AppProps } from 'next/app'
import { useState } from 'react'
import Layout from './components/Layout'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('app')
  const readStrorage = async () => {
    return (await localStorage.getItem('isAuth')) === 'true' ? true : false
  }
  const [isAuth, setIsAuth] = useState(readStrorage())

  return (
    <>
      <Layout isAuth={isAuth}>
        <Component setIsAuth={setIsAuth} {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
