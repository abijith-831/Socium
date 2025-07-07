'use client';

import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store';

const ProfileCard =  () => {
  
  const user = useSelector((state:RootState)=> state.user.currentUser)
  console.log('profile card',user);


  return (
    <div className='p-4 bg-white rounded-lg shadow-xl text-sm flex flex-col gap-6'>
      <div className='h-20 relative'>
        <Image src={user?.cover|| '/images2/bg1.jpg'} alt='profile picture' fill className='rounded-md object-cover'></Image>
        <Image src={user?.avatar || '/images2/bg2.jpeg'} alt='cover picture' width={48} height={48} className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'></Image>
      </div>
      <div className='h-20 flex flex-col items-center '>
        <span className='font-semibold pt-2'>{user?.username}</span>
        <div className='flex items-center gap-4'>
            <div className='flex '>
                <Image src='/images2/bg2.jpeg' alt='' width={12} height={12} className='rounded-full object-cover w-3 h-3'></Image>
                <Image src='/images2/bg2.jpeg' alt='' width={12} height={12} className='rounded-full object-cover w-3 h-3'></Image>
                <Image src='/images2/bg2.jpeg' alt='' width={12} height={12} className='rounded-full object-cover w-3 h-3'></Image>
            </div>
            <span className='text-xs text-gray-500'>{user?.followers?.length} Followers </span>
        </div>
            <button  className='bg-blue-500 text-white text-xs p-2 rounded-md mt-2'>My Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard
