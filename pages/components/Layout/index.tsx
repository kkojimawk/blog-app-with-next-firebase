import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar'

type Props = {
  children: React.ReactNode
  isAuth: Promise<boolean>
}

const Layout: React.FC<Props> = ({ children, isAuth }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>サイトのタイトル</title>
        <meta name='description' content='サイトのデスクリプション' />
      </Head>

      <div className='min-h-screen bg-slate-200'>
        <Navbar isAuth={isAuth} />
        <main className='m-auto w-3/5 py-14'>{children}</main>
        <footer className='footer'></footer>
      </div>
    </>
  )
}

export default Layout
