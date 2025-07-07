import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FriendRequest = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-xl text-sm'>
      {/* TOP */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500 '>Friend Requests</span>
        <Link href=''  className='text-blue-500 text-sm'>See all</Link>
      </div>
      {/* BOTTOM */}
      <div className='flex items-center justify-between pt-4'>
        <div className='flex flex-center gap-4'>
            <Image src='/images2/89045.jpg' alt='Profile' width={40} height={40}  className='w-10 h-10 rounded-full object-cover' />
            <span className='font-semibold'>Shamil</span>
        </div>
        <div className='flex gap-3 items-end'>
            <Image src='/images/accept.png' alt='Profile' width={20} height={20}  className='cursor-pointer' />
            <Image src='/images/reject.png' alt='Profile' width={20} height={20}  className='cursor-pointer' />
        </div>
      </div>
      <div className='flex items-center justify-between pt-4'>
        <div className='flex flex-center gap-4'>
            <Image src='/images2/89045.jpg' alt='Profile' width={40} height={40}  className='w-10 h-10 rounded-full object-cover' />
            <span className='font-semibold'>Shamil</span>
        </div>
        <div className='flex gap-3 items-end'>
            <Image src='/images/accept.png' alt='Profile' width={20} height={20}  className='cursor-pointer' />
            <Image src='/images/reject.png' alt='Profile' width={20} height={20}  className='cursor-pointer' />
        </div>
      </div>
      <div className='flex items-center justify-between pt-4'>
        <div className='flex flex-center gap-4'>
            <Image src='/images2/89045.jpg' alt='Profile' width={40} height={40}  className='w-10 h-10 rounded-full object-cover' />
            <span className='font-semibold'>Shamil</span>
        </div>
        <div className='flex gap-3 items-end'>
            <Image src='/images/accept.png' alt='Profile' width={20} height={20}  className='cursor-pointer' />
            <Image src='/images/reject.png' alt='Profile' width={20} height={20}  className='cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default FriendRequest
