import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const UserInfoCard = ({userId}:{userId:string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      {/* TOP */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500 '>User infotmations</span>
        <Link href=''  className='text-blue-500 text-sm'>See all</Link>
      </div>
      {/* BOTTOM */}
      <div className='flex flex-col gap-4 text-gray-500'>
        <div className='flex items-center gap-2 mt-2'>
          <span className='text-xl text-black'>Loyd fleminng</span>
          <span className='text-sm'>@jonathan</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quidem. Reiciendis tenetur fugit dignissimos odio excepturi </p>
        <div className='flex items-center gap-2'>
          <Image src='/images/map.png' alt='' width={16} height={16}></Image>
          <span>Living in <b>Denver</b></span>
        </div>
        <div className='flex items-center gap-2'>
          <Image src='/images/school.png' alt='' width={16} height={16}></Image>
          <span>Went to <b>Denver High school</b></span>
        </div>
        <div className='flex items-center gap-2'>
          <Image src='/images/work.png' alt='' width={16} height={16}></Image>
          <span>Works at <b>Apple inc.</b></span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-1 items-center'>
            <Image src='/images/link.png' alt='' width={16} height={16}></Image>
            <Link href='/' className='text-blue-500 font-medium'>abhijith.dev </Link>
          </div>
          <div className='flex gap-1 items-center '>
            <Image src='/images/date.png' alt='' width={16} height={16}></Image>
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className='bg-blue-500 rounded-md text-sm p-2 text-white' >Follow</button>
        <span className='text-red-500 self-end text-xs cursor-pointer'>Block User</span>
      </div>
    </div>
  )
}

export default UserInfoCard
