import React from 'react'

const Article = ({ post, auth, deletePost }) => {
  console.log('article')

  return (
    <div key={post.id} className='my-8 w-full rounded-md bg-white py-7 px-10 shadow-lg'>
      <div className='py-2'>
        <h1 className='text-2xl font-bold'>{post.title}</h1>
      </div>
      <div className='py-5'>
        <p className='text-lg'>{post.postsText}</p>
      </div>
      <div className='py-2 text-right'>
        {post.author.id === auth.currentUser.uid ? (
          <button
            type='button'
            className='text-md rounded-md border bg-red-500 px-3 py-1 text-white'
            onClick={() => deletePost(post.id)}>
            削除
          </button>
        ) : null}
      </div>
      <div className='flex justify-between py-2'>
        <h3 className='text-lg font-bold'>{post.author.username}</h3>
        <p>{post.createdAt}</p>
      </div>
    </div>
  )
}

export default Article
