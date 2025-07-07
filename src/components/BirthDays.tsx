import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BirthDays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-xl text-sm'>
      {/* TOP */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>BirthDays</span>
      </div>
      {/* USER */}
      <div className='flex items-center justify-between pt-4'>
        <div className='flex items-center gap-4'>
          <Image src='/images2/89045.jpg' alt='Profile' width={40} height={40}  className='w-10 h-10 rounded-full object-cover' />
          <span className='font-medium'>abhi aaa</span>
        </div>
        <div className='flex gap-3 justify-end'>
          <button className='bg-blue-500 text-white text-sm  px-2 py-1 rounded-md '>celebrate</button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className='p-4 mt-3 bg-slate-200 rounded-lg flex items-center gap-4'>
        <Image src='/images/gift.png' alt=''width={24} height={24}></Image>
        <Link href='/' className='flex flex-col gap-1 text-xs'>
          <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
          <span className='text-gray-500'> See other 16 upcoming birthdays</span>
        </Link>
      </div>

    </div>
  )
}

export default BirthDays
