import React from 'react'
import Image from 'next/image'
import Comments from './Comments'

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/* USER */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src='/images2/89045.jpg' alt='' width={40} height={40} className='w-10 h-10 rounded-full fill border-2 relative'></Image>
                <span className='font-medium' > Jack Sparrow</span>
            </div>
            <Image src='/images/more.png' width={16} height={16} alt='more'></Image>
        </div>
        {/* DESCRIPOTION */}
        <div className='flex flex-col gap-4'>
            <div className='w-full min-h-96 relative'>
                <Image src='/images2/bg1.jpg' fill className='object-cover rounded-md' alt='more'></Image>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, reiciendis exercitationem. Veritatis, quasi! Consequatur quo distinctio illo aliquam est perferendis mollitia veniam quos, ullam quia sint fuga quae modi ex!</p>
        </div>
        {/* INTERTATION */}
        <div className='flex items-center justify-between text-sm my-4'>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-200 p-2 rounded-xl'>
                    <Image src='/images/like.png' alt='like' width={16} height={16} className='cursor-pointer'></Image>
                    <span className='text-gray-300'> |</span>
                    <span className='text-gray-500'>123<span className='hidden md:inline'> Likes</span> </span>
                </div>
            </div>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-200 p-2 rounded-xl'>
                    <Image src='/images/comment.png' alt='like' width={16} height={16} className='cursor-pointer'></Image>
                    <span className='text-gray-300'> |</span>
                    <span className='text-gray-500'>123<span className='hidden md:inline'> Comments</span> </span>
                </div>
            </div>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-200 p-2 rounded-xl'>
                    <Image src='/images/share.png' alt='like' width={16} height={16} className='cursor-pointer'></Image>
                    <span className='text-gray-300'> |</span>
                    <span className='text-gray-500'>123<span className='hidden md:inline'> Shares</span> </span>
                </div>
            </div>
        </div>
        <Comments/>
        
    </div>
  )
}

export default Post
