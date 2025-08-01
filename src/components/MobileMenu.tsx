"use client" 
import React, { useState } from 'react'
import Link from 'next/link'
import EditProfileModal from './rightMenu/EditProfileModal'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store';

const MobileMenu = () => {
    const [isOpen , setIsOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const user = useSelector((state: RootState) => state.user.currentUser)

    const handleEditProfile = () => {
      setIsModalOpen(true)
    }

    const handleCloseModal = () => {
      setIsModalOpen(false)
    }

  return (
    <div className='md:hidden' >
        <div className='flex flex-col gap-[4.5px] cursor-pointer' onClick={() => setIsOpen(prev => !prev)}>
        <div className={`w-6 h-1 bg-blue-600 rounded-sm  ${isOpen ? 'rotate-45 origin-left ease-in-out duration-500' : ''}`}></div>
        <div className={`w-6 h-1 bg-blue-600 rounded-sm ${isOpen ? 'opacity-0' : ''} ease-in-out duration-500`}></div>
        <div className={`w-6 h-1 bg-blue-600 rounded-sm  ${isOpen ? '-rotate-45  origin-left ease-in-out duration-500' : ''}`}></div>
        </div>

      {isOpen && (
        <div className='absolute  left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10 '>
            <Link href='/'>Home</Link>
            <Link href='/'>Friends</Link>
            <Link href='/'>Groups</Link>
            <Link href='/'>Stories</Link>
            <Link href='/' onClick={() => user && handleEditProfile()}>Edit Profile</Link>

            <Link href='/'>Login</Link>
        </div>
      )}
{isModalOpen && user && (
  <EditProfileModal 
    user={user}
    onClose={handleCloseModal}
  />
)}
    </div>

  )
}

export default MobileMenu
