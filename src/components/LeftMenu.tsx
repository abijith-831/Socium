import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import Image from 'next/image'
import Advertisements from './Advertisements'

const LeftMenu = ({type}:{type:'home'|'profile'}) => {
  return (
    <div className='flex flex-col gap-6'>
      {type==='home' && <ProfileCard/> }
      <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2'>
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
          <Image src='/images/posts.png' alt='posts' width={20} height={20}></Image>
          <span>My Posts</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
          <Image src='/images/activity.png' alt='posts' width={20} height={20}></Image>
          <span>Activity</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
          <Image src='/images/market.png' alt='posts' width={20} height={20}></Image>
          <span>Market Place</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
          <Image src='/images/events.png' alt='posts' width={20} height={20}></Image>
          <span>Events</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
          <Image src='/images/albums.png' alt='posts' width={20} height={20}></Image>
          <span>Albums</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
          <Image src='/images/videos.png' alt='posts' width={20} height={20}></Image>
          <span>Videos</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
          <Image src='/images/news.png' alt='posts' width={20} height={20}></Image>
          <span>News</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
          <Image src='/images/courses.png' alt='posts' width={20} height={20}></Image>
          <span>Courses</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
          <Image src='/images/lists.png' alt='posts' width={20} height={20}></Image>
          <span>Lists</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
        <Link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-200'>
          <Image src='/images/settings.png' alt='posts' width={20} height={20}></Image>
          <span>Settings</span>
        </Link>
      </div>
      <Advertisements size="sm"/>
    </div>
  )
}

export default LeftMenu
