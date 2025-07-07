import React from 'react'
import Image from 'next/image'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg overflow-x-auto no-scrollbar shadow-xl'>
      <div className='flex gap-8 w-max overflow-x-auto no-scrollbar'>
        <div className='flex flex-col p-2 items-center gap-2 cursor-pointer'>
          <div className='w-20 h-20  rounded-full ring-2 overflow-hidden relative'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover' />
          </div>
            <span className='font-medium'>Abhi</span>
        </div>
        <div className='flex flex-col p-2 items-center gap-2 cursor-pointer'>
          <div className='w-20 h-20  rounded-full ring-2 overflow-hidden relative'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover' />
          </div>
            <span className='font-medium'>Abhi</span>
        </div>
        <div className='flex flex-col p-2 items-center gap-2 cursor-pointer'>
          <div className='w-20 h-20  rounded-full ring-2 overflow-hidden relative'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover' />
          </div>
            <span className='font-medium'>Abhi</span>
        </div>
        <div className='flex flex-col p-2 items-center gap-2 cursor-pointer'>
          <div className='w-20 h-20  rounded-full ring-2 overflow-hidden relative'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover' />
          </div>
            <span className='font-medium'>Abhi</span>
        </div>
        <div className='flex flex-col p-2 items-center gap-2 cursor-pointer'>
          <div className='w-20 h-20  rounded-full ring-2 overflow-hidden relative'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover' />
          </div>
            <span className='font-medium'>Abhi</span>
        </div>
        <div className='flex flex-col p-2 items-center gap-2 cursor-pointer'>
          <div className='w-20 h-20  rounded-full ring-2 overflow-hidden relative'>
            <Image src='/images2/89045.jpg' alt='' fill className='object-cover' />
          </div>
            <span className='font-medium'>Abhi</span>
        </div>
        
      </div>
    </div>
  )
}

export default Stories
