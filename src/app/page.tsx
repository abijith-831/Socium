import AddPosts from '@/components/AddPosts'
import Feed from '@/components/feed/Feed'
import LeftMenu from '@/components/leftMenu/LeftMenu'
import Navbar from '@/components/Navbar'
import RightMenu from '@/components/rightMenu/RightMenu'
import Stories from '@/components/Stories'
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32 shadow-xl">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="flex gap-6 w-full pt-6 px-2 sm:px-4  md:px-8 lg:px-10 xl:px-10 2xl:px-20">
        {/* Left Menu */}
        <div className="hidden xl:block w-[20%] ">
          <LeftMenu type="home" />
        </div>

        <div className="w-full lg:w-[70%] xl:w-[60%] ">
          <div className="flex flex-col gap-6">
            <Stories />
            <AddPosts />
            <Feed />
          </div>
        </div>

        {/* Right Menu */}
        <div className="hidden lg:block w-[30%]">
          <RightMenu />
        </div>
      </div>
    </div>
  )
}

export default HomePage
