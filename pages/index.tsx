import { collection, getDocs } from 'firebase/firestore'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { db } from '../firebase'

const Home: NextPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const getData = await getDocs(collection(db, 'posts'))
      setPosts(getData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getPosts()
  }, [])
  console.log(posts.map((post) => post))

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} className='my-8 w-full rounded-md bg-white py-7 px-10 shadow-lg'>
            <div className='py-2'>
              <h1 className='text-2xl font-bold'>{post.title}</h1>
            </div>
            <div className='py-5'>
              <p className='text-lg'>{post.postsText}</p>
            </div>
            <div className='flex justify-between py-2'>
              <h3 className='text-lg font-bold'>{post.author.username}</h3>
              <button
                type='button'
                className='text-md rounded-md border bg-red-500 px-3 py-1 text-white'>
                削除
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Home
