import React, { useState } from 'react'
import logo from '@/assets/images/logo.png'
import profile_img from '@/assets/images/profile_img.png'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const Header: React.FC = () => {
  const [sale, setSale] = useState(false)
  const [more, setMore] = useState(false)

  const toggleSale = () => {
    setSale(!sale)
  }

  const toggleMore = () => {
    setMore(!more)
  }

  return (
    <div className="bg-seagreen px-3 py-2 border-none flex justify-between sticky top-0 z-10">
      <div className="flex justify-between items-center gap-5">
        <img src={logo} alt="logo" className="h-10 w-10 object-cover" />
        <h1>Zazu Events</h1>
      </div>
      <div className="flex justify-between items-center gap-10">
        <div className="flex items-center gap-2 text-xs cursor-pointer hover:underline" onClick={toggleSale}>
          <div className="w-1 h-1 border-2"></div>
          On Sale {sale ? <BiChevronUp /> : <BiChevronDown />}
        </div>
        <div className="flex items-center gap-2 text-xs cursor-pointer hover:underline" onClick={toggleMore}>
          More {more ? <BiChevronUp /> : <BiChevronDown />}
        </div>
        <img src={profile_img} alt="profile_img" className="h-10 w-10 rounded-full object-cover cursor-pointer" />
      </div>
    </div>
  )
}

export default Header
