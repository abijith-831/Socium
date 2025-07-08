import Feed from '@/components/feed/Feed'
import LeftMenu from '@/components/leftMenu/LeftMenu'
import RightMenu from '@/components/rightMenu/RightMenu'
import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { prisma } from '@/lib/client'

const ProfilePage = async({ params }: { params: { username: string } }) => {
  
  const {username} = params

  const user = await prisma.user.findUnique({
    where:{username},
    include:{
      posts:true,
      followers:true,
      following:true,
      stories:true
    }
  })

  console.log('user from profile',user);
  

  return (
    <div className='w-full'>
      <div   className="bg-slate-200 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32">
        <Navbar />
      </div>
    <div className='flex gap-6 w-full pt-6 px-2 sm:px-4  md:px-8 lg:px-10 xl:px-10 2xl:px-20'>

      <div className='hidden xl:block w-[20%]'><LeftMenu type='profile' /></div>

      <div className='w-full lg:w-[70%] xl:w-[60%]'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center justify-between'>
            <div className='w-full h-48 relative '>
              <Image src={user?.cover || '/images2/bg3.jpg'} alt='' fill  className='object-cover rounded-md'></Image>
              <Image src={user?.avatar ||'/images2/luffy.jpeg'} alt='' width={128} height={128}   className='w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover'></Image>
            </div>
            <h1 className='mt-20 mb-4 text-2xl font-medium'>{user?.username}</h1>
            <div className='flex items-center justify-center gap-12 mb-4'>
              <div className='flex flex-col items-center'>
                  <span className='font-medium'>{user?.posts.length}</span>
                  <span className='text-sm'>Posts </span>
              </div>
              <div className='flex flex-col items-center'>
                  <span className='font-medium'>{user?.followers.length}</span>
                  <span className='text-sm'>Followers </span>
              </div>
              <div className='flex flex-col items-center'>
                  <span className='font-medium'>{user?.following.length}</span>
                  <span className='text-sm '>Following </span>
              </div>
            </div>
          </div>


          <Feed />
        </div>
      </div>

      <div className='hidden lg:block w-[30%]'>
        <RightMenu  user={user}/>
      </div>
    </div>
    </div>
  )
}

export default ProfilePage
