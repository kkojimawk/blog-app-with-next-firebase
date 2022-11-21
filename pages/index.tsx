import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import type { NextPage } from 'next'
import { useEffect, useMemo, useState } from 'react'
import { auth, db } from '../firebase'
import Article from './components/Article'

export type Post = {
  id: string
  title: string
  postsText: string
  author: {
    username: string
    id: string
  }
  createdAt: string
}
const Home: NextPage = () => {
  const [posts, setPosts] = useState<Array<Post>>([])

  useEffect(() => {
    const getPosts = async () => {
      const getData = await getDocs(collection(db, 'posts'))
      const postList = getData.docs
        .map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
              createdAt: doc.data().createdAt,
            } as Post),
        )
        .sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)))
      setPosts(postList)
    }
    getPosts()
  }, [])

  const deletePost = async (id: string) => {
    await deleteDoc(doc(db, 'posts', id))
    const newPosts = posts.filter((post) => post.id !== id)
    setPosts(newPosts)
  }

  return (
    <>
      {posts.map((post) => {
        return <Article key={post.id} post={post} auth={auth} deletePost={deletePost} />
      })}
    </>
  )
}

export default Home
