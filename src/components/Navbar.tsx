import React from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { Home, Users, BookOpen,MessageSquare, Bell ,LogIn , Search} from 'lucide-react'; 
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/nextjs';


const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      <div className='left md:hidden lg:block w-[20%]'>
        <Link href='/' className='font-bold text-xl text-blue-500'>LOGO</Link>
      </div>
      <div className='center hidden md:flex w-[50%] items-center justify-between'>
        <div className='flex  gap-6 text-gray-600'>
        <Link href="/" className="flex items-center gap-2">
            <Home className="w-5 h-5 " />
            <span>Home</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
            <Users className="w-5 h-5 " />
            <span>Friends</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 " />
            <span>Stories</span>
        </Link>
       </div>
       <div className='hidden xl:flex p-2 bg-slate-300 items-center rounded-xl'>
        <Search size={24} strokeWidth={2} className="text-gray-500" />
        <input type="text" placeholder='search ...' className='bg-transparent outline-none' />
       </div>
      </div>
      <div className='right w-[30%] flex  gap-4 xl:gap-8 justify-end'>
                <div className="cursor-pointer">
                    <Users className="w-6 h-6" />
                </div>
                <div className="cursor-pointer">
                    <MessageSquare className="w-6 h-6" />
                </div>
                <div className="cursor-pointer">
                    <Bell className="w-6 h-6" />
                </div>
        <MobileMenu/>
      </div>
    </div>
  )
}

export default Navbar
