import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { User } from '@prisma/client'


const UserInfoCard = ({user}:{user?:User}) => {

  if (!user) return <div className="text-sm text-red-500">No user data found</div>

  const createdAt = new Date(user.createdAt)

  const formatted = createdAt.toLocaleDateString("en-US",{
    year:'numeric',
    month:'long',
    day:"numeric"
  })
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      {/* TOP */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500 '>User informations</span>
        <Link href=''  className='font-bold text-sm'>See all</Link>
      </div>
      {/* BOTTOM */}
      <div className='flex flex-col gap-4 text-gray-500'>
        <div className='flex items-center gap-2 mt-2'>
          <span className='text-xl text-black'>{user?.username}</span>
          <span className='text-sm'>@jonathan</span>
        </div>
        {user?.description && 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quidem. Reiciendis tenetur fugit dignissimos odio excepturi </p>
        } 
        { user?.city && <div className='flex items-center gap-2'>
          <Image src='/images/map.png' alt='' width={16} height={16}></Image>
          <span>Living in <b>{user.city}</b></span>
        </div>}

        { user?.school && <div className='flex items-center gap-2'>
          <Image src='/images/school.png' alt='' width={16} height={16}></Image>
          <span>Went to <b>{user.school}</b></span>
        </div>}
        {user?.work && <div className='flex items-center gap-2'>
          <Image src='/images/work.png' alt='' width={16} height={16}></Image>
          <span>Works at <b>{user.work}</b></span>
        </div>}
        <div className='flex items-center justify-between'>
          {user?.website && <div className='flex gap-1 items-center'>
            <Image src='/images/link.png' alt='' width={16} height={16}></Image>
            <Link href='/' className='text-green-500 font-medium'>{user.website}</Link>
          </div>}
          <div className='flex gap-1 items-center '>
            <Image src='/images/date.png' alt='' width={16} height={16}></Image>
            <span>{formatted}</span>
          </div>
        </div>
        <button className='bg-[#d2f8ab] rounded-md text-sm p-2 text-black'>Follow</button>
        <span className='text-red-500 self-end text-xs cursor-pointer'>Block User</span>
      </div>
    </div>
  )
}

export default UserInfoCard