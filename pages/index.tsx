import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='w-full rounded-md  bg-white py-7 px-10 shadow-lg'>
      <div className='py-2'>
        <h1 className='text-2xl font-bold'>タイトル</h1>
      </div>
      <div className='py-5'>
        <p className='text-lg'>テストテキストテストテキストテストテキストテストテキスト</p>
      </div>
      <div className='flex justify-between py-2'>
        <h3 className='text-lg font-bold'>@ShinCode</h3>
        <button type='button' className='text-md rounded-md border bg-red-500 px-3 py-1 text-white'>
          削除
        </button>
      </div>
    </div>
  )
}

export default Home
