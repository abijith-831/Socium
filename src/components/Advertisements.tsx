import React from 'react'
import Image from 'next/image'

const Advertisements = ({size}: {size : "sm"|"md"|"lg"}) => {
  return (
    <div className='p-4 bg-white  rounded-lg shadow-md text-sm gap-4'>
      {/* TOP */}
      <div className='flex items-center justify-between text-gray-500 font-medium'>
        <span>Sponsored Ads</span>
        <Image src='/images/more.png' width={16} height={16} alt='more'></Image>
      </div>
      {/* BOT */}
      <div className={`flex flex-col mt-4 ${size === 'sm'?'gap-2':'gap-4'}`}>
        <div className={`relative w-full ${size==='sm'?"h-24":size==='md'?"h-36":"h-48"}`}>
          <Image src='/images2/89045.jpg' fill alt='more' className='rounded-lg object-cover' />
        </div>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Image src='/images2/89045.jpg' width={24} height={24} alt='more' className='rounded-full object-cover w-6 h-6' />
        <span className='text-blue-600 font-medium'>Bigchef lounge</span>
      </div>
      <p className={size === 'sm'?"text-xs":"text-sm"}>
        loremksdfnsnasdjmcjbsjnfb s kjcnsjkfn
        loremksdfnsnasdjmcjbsjnfb s kjcnsjkfn
        loremksdfnsnasdjmcjbsjnfb s kjcnsjkfn
        loremksdfnsnasdjmcjbsjnfb s kjcnsjkfn
      </p>
      <button className='bg-gray-200 w-full my-4 text-gray-500 p-2 text-xs rounded-lg'>learn more</button>
    </div>
  )
}

export default Advertisements
