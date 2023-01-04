import { IoChevronBackOutline } from 'react-icons/io5'
import { BsInfoCircle, BsGrid1X2, BsCreditCard, BsTag } from 'react-icons/bs'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { DiGoogleAnalytics } from 'react-icons/di'
import LeftNavTab from './LeftNavTab'
import { NavLink } from 'react-router-dom'

const LeftSideNav = () => {
  return (
    <nav className="bg-seagreen w-1/5 h-screen p-3">
      <div className="flex items-center gap-2 text-xs cursor-pointer hover:underline">
        <IoChevronBackOutline />
        Back to list
      </div>
      <NavLink to="/basic_info">
        <LeftNavTab name="Basic Info" icon={<BsInfoCircle />} />
      </NavLink>
      <NavLink to="/sales">
        <LeftNavTab name="Sales" icon={<BsGrid1X2 />} />
      </NavLink>
      <NavLink to="/payment">
        <LeftNavTab name="Payment" icon={<BsCreditCard />} />
      </NavLink>
      <NavLink to="/options">
        <LeftNavTab name="Options" icon={<BsTag />} />
      </NavLink>
      <NavLink to="/invite_n_promote">
        <LeftNavTab name="Invite & Promote" icon={<HiOutlineSpeakerphone />} />
      </NavLink>
      <NavLink to="/analyse">
        <LeftNavTab name="Analyse" icon={<DiGoogleAnalytics />} />
      </NavLink>
    </nav>
  )
}

export default LeftSideNav
