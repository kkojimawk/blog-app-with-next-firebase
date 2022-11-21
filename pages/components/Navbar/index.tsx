import { faHome, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

type Props = {
  isAuth: Promise<boolean>
}
const Navbar: React.FC<Props> = ({ isAuth }) => {
  return (
    <nav className='bg-orange-400 py-4'>
      <ul className='flex justify-center text-2xl'>
        <li className='flex items-center gap-2 px-5 text-white hover:text-opacity-80'>
          <FontAwesomeIcon icon={faHome} />
          <Link href='/'>ホーム</Link>
        </li>
        {!isAuth ? (
          <li className='flex items-center gap-2 px-5 text-white hover:text-opacity-80'>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            <Link href='/login'>ログイン</Link>
          </li>
        ) : (
          <>
            <li className='flex items-center gap-2 px-5 text-white hover:text-opacity-80'>
              <FontAwesomeIcon icon={faFilePen} />
              <Link href='/createpost'>記事投稿</Link>
            </li>
            <li className='flex items-center gap-2 px-5 text-white hover:text-opacity-80'>
              <Link href='/logout'>ログアウト</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
