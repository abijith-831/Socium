'use client';

import React from 'react'
import Image from 'next/image'

const ProfileCard = () => {
  
  const handleSaveProfile = async () => {
    const res = await fetch('/api/save-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Abhijithppp',
        email: 'abhijith@example.com11',
        password:'sdkfnjsgmksnfn',
      }),
    });
  
    const data = await res.json();
    if (data.success) {
      alert('Profile saved to MySQL with ID: ' + data.id);
    } else {
      alert('Failed to save profile');
    }
  };
  
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
      <div className='h-20 relative'>
        <Image src='/images2/bg1.jpg' alt='' fill className='rounded-md object-cover'></Image>
        <Image src='/images2/bg2.jpeg' alt='' width={48} height={48} className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'></Image>
      </div>
      <div className='h-20 flex flex-col items-center '>
        <span className='font-semibold pt-2'>Abhijith</span>
        <div className='flex items-center gap-4'>
            <div className='flex '>
                <Image src='/images2/bg2.jpeg' alt='' width={12} height={12} className='rounded-full object-cover w-3 h-3'></Image>
                <Image src='/images2/bg2.jpeg' alt='' width={12} height={12} className='rounded-full object-cover w-3 h-3'></Image>
                <Image src='/images2/bg2.jpeg' alt='' width={12} height={12} className='rounded-full object-cover w-3 h-3'></Image>
            </div>
            <span className='text-xs text-gray-500'> 500 Followers</span>
        </div>
            <button onClick={handleSaveProfile} className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard
