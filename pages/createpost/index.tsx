import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'

const CreatePost = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')
  const createPost = async () => {
    await addDoc(collection(db, 'posts'), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    })
    router.push('/')
  }

  useEffect(() => {
    if (!auth.currentUser) {
      router.push('/')
    }
  }, [router])

  return (
    <div>
      <h1 className='text-center text-4xl'>記事を投稿する</h1>
      <div className='my-14 w-full rounded-md border bg-white p-10 shadow-lg'>
        <div className='py-4'>
          <div className='text-2xl'>タイトル</div>
          <input
            className='mt-2 h-10 w-full rounded-md border p-2'
            type='text'
            placeholder='タイトルを記入'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='py-4'>
          <div className='text-2xl'>内容</div>
          <textarea
            className='mt-2 h-60 w-full rounded-md border p-2'
            placeholder='投稿内容を記入'
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <div className='py-2'>
          <button
            className='h-10 w-full rounded-md bg-blue-400 text-white shadow-md'
            onClick={createPost}>
            投稿する
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
