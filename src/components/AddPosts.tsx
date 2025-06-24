import React from 'react'
import Image from 'next/image'

const AddPosts = () => {
  return (
    <div className='p-4 bg-white rounded-lg flex gap-4 justify-between text-sm'>
      <div className='w-12 h-12 relative rounded-full overflow-hidden'>
        <Image src='/images2/89045.jpg' alt='Profile' fill className='object-cover' />
      </div>

      <div className='post flex-1'>
        <div className='flex gap-4'>
          <textarea placeholder="What's on your mind?" className='bg-slate-300 rounded-lg flex-1 p-2 ring-2'></textarea>
          <Image  src='/images/emoji.png'  alt='emoji'  width={20}  height={20}  className='w-7 h-7 border-2 cursor-pointer self-end'   />
        </div>
        <div className='flex items-center gap-4 mt-4 text-gray-600 flex-wrap'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <Image src='/images/addimage.png' width={20} height={20} alt=''/>Photo
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <Image src='/images/addvideo.png' width={20} height={20} alt=''/>Video
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <Image src='/images/addevent.png' width={20} height={20} alt=''/>Event
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <Image src='/images/poll.png' width={20} height={20} alt=''/>Poll
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddPosts
