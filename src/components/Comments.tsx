import React from 'react'
import Image from 'next/image'

const Comments = () => {
  return (
    <div className=''>
      {/* WRITE */}
      <div className='flex items-center gap-4'>
        <Image src='/images2/bg1.jpg' alt='' width={32} height={32} className='w-8 h-8 rounded-full'></Image>
        <div className='flex flex-1 items-center justify-between bg-slate-200 rounded-xl text-sm px-4 py-2 w-full '>
          <input type="text" placeholder='Write a comment...' className='bg-transparent outline-none flex-1' />
          <Image  src='/images/emoji.png'  alt='emoji'  width={16}  height={16}  className='w-8 h-8 border-2 cursor-pointer self-end'   />
        </div>
      </div>
      {/* COMMENT SCTION */}
      <div className=''>
        {/* COMMENT */}
        <div className='flex gap-4 justify-between mt-6'>
          {/* AVATAR */}
          <Image src='/images2/bg1.jpg' alt='' width={40} height={40} className='w-10 h-10 rounded-full'></Image>
          {/* DESC */}
          <div className='flex flex-col gap-2'>
            <span className='font-medium'>Abhijith </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt perferendis nobis, velit dolorum sequi doloribus totam voluptatem dolore non maiores voluptatibus aliquam beatae iure cupiditate a quae! Vero, animi!</p>
            <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
              <div className='flex items-center gap-4'> 
                <Image src='/images/like.png' alt='like' width={12} height={12} className='cursor-pointer'></Image>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>456 Likes</span>
              </div>
            <div>reply</div>
            </div>
          </div>
          {/* ICON MORE */}
          <Image src='/images/more.png' width={16} height={16} alt='more' className='cursor-pointer w-4 h-4 '></Image>
        </div>
      </div>
    </div>
  )
}

export default Comments
