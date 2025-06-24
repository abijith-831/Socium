import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import React from 'react'
import Image from 'next/image'

const ProfilePage = ({ params }: { params: { id: string } }) => {
  const userId = params.id

  return (
    <div className='flex gap-6 w-full pt-6'>
      <div className='hidden xl:block w-[20%]'><LeftMenu type='profile' /></div>

      <div className='w-full lg:w-[70%] xl:w-[60%]'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center justify-between'>
            <div className='w-full h-64 relative '>
              <Image src='/images2/bg3.jpg' alt='' fill  className='object-cover rounded-md'></Image>
              <Image src='/images2/luffy.jpeg' alt='' width={128} height={128}   className='w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover'></Image>
            </div>
            <h1 className='mt-20 mb-4 text-2xl font-medium'>Abhijith Asokan</h1>
            <div className='flex items-center justify-center gap-12 mb-4'>
              <div className='flex flex-col items-center'>
                  <span className='font-medium'> 123</span>
                  <span className='text-sm'>Posts </span>
              </div>
              <div className='flex flex-col items-center'>
                  <span className='font-medium'> 12.K</span>
                  <span className='text-sm'>Followers </span>
              </div>
              <div className='flex flex-col items-center'>
                  <span className='font-medium'> 1.6 K </span>
                  <span className='text-sm '>Following </span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>

      <div className='hidden lg:block w-[30%]'>
        <RightMenu userId={userId} />
      </div>
    </div>
  )
}

export default ProfilePage
