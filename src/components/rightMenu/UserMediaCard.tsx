import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { User } from '@prisma/client'

const UserMediaCard = ({user}:{user:User}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      {/* TOP */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500 '>User Media Card</span>
        <Link href=''  className='text-blue-500 text-sm'>See all</Link>
      </div>
      {/* BOTTOM */}
      <div className='flex gap-4 justify-between flex-wrap mt-2'>
        <div className='relative  w-1/5 h-24'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover rounded-md'></Image>
        </div>
        <div className='relative  w-1/5 h-24'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover rounded-md'></Image>
        </div>
        <div className='relative  w-1/5 h-24'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover rounded-md'></Image>
        </div>
        <div className='relative  w-1/5 h-24'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover rounded-md'></Image>
        </div>
        <div className='relative  w-1/5 h-24'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover rounded-md'></Image>
        </div>
        <div className='relative  w-1/5 h-24'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover rounded-md'></Image>
        </div>
        <div className='relative  w-1/5 h-24'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover rounded-md'></Image>
        </div>
        <div className='relative  w-1/5 h-24'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover rounded-md'></Image>
        </div>
        
      </div>
    </div>
  )
}

export default UserMediaCard
