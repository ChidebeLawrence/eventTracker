import React from 'react'
import logo from '../assets/images/logo.png'
import profile_img from '../assets/images/profile_img.png'
import { BiChevronDown } from 'react-icons/bi'

const Header = () => {
  return (
    <div className="bg-seagreen px-3 py-2 border-none flex justify-between">
      <div className="flex justify-between items-center gap-5">
        <img src={logo} alt="logo" className="h-10 w-10 object-cover" />
        <h1>Zazu Events</h1>
      </div>
      <div className="flex justify-between items-center gap-10">
        <p className="flex items-center gap-2 text-xs cursor-pointer hover:underline">
          Help <BiChevronDown />
        </p>
        <img
          src={profile_img}
          alt="profile_img"
          className="h-10 w-10 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Header
