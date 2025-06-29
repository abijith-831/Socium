"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { Home, Users, BookOpen,MessageSquare, Bell ,LogIn , Search} from 'lucide-react'; 
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '@/store/userSlice';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';



const Navbar = () => {

  const [showLogoutModal , setShowLogoutModal] = useState(false)
  const user = useSelector((state: RootState) => state.user.currentUser)

  console.log('User from Redux:', user)


  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = async () => {
    localStorage.removeItem('token')
  
    await fetch('/api/auth/logout', {
      method: 'POST',
    })
  
    dispatch(clearUser())
  
    alert('Logged out!')
  }
  
  
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
                <button onClick={()=> setShowLogoutModal(true)}>logout</button>
        <MobileMenu/>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to log out?</h2>
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setShowLogoutModal(false)} 
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                No
              </button>
              <button 
                onClick={async () => {
                  localStorage.removeItem('token')
                  await fetch('/api/auth/logout', { method: 'POST' })
                  dispatch(clearUser())
                  setShowLogoutModal(false)
                  alert('Logged out!')
                }} 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>

    
  )
}

export default Navbar
