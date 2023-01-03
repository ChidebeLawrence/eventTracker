import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'

const LeftSideNav = () => {
  return (
    <nav className="bg-seagreen w-1/5 h-screen p-3 text-xs">
      <div className="flex items-center gap-2 cursor-pointer hover:underline">
        <IoChevronBackOutline />
        Back to list
      </div>
    </nav>
  )
}

export default LeftSideNav
