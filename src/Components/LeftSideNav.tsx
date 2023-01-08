import { IoChevronBackOutline } from 'react-icons/io5'
import { BsInfoCircle, BsGrid1X2, BsCreditCard, BsTag } from 'react-icons/bs'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { DiGoogleAnalytics } from 'react-icons/di'
import LeftNavTab from '@/Components/LeftNavTab'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const LeftSideNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('basic_info')

  const handleClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <nav className="bg-seagreen w-1/5 fixed top-14 bottom-0 p-3 overflow-auto">
      <div className="flex items-center gap-2 text-xs cursor-pointer hover:underline">
        <IoChevronBackOutline />
        Back to list
      </div>

      <NavLink to="/basic_info" onClick={() => handleClick('basic_info')}>
        <LeftNavTab name="Basic Info" icon={<BsInfoCircle />} active={activeTab === 'basic_info'} />
      </NavLink>

      <NavLink to="/sales" onClick={() => handleClick('sales')}>
        <LeftNavTab name="Sales" icon={<BsGrid1X2 />} active={activeTab === 'sales'} />
      </NavLink>

      <NavLink to="/payment" onClick={() => handleClick('payment')}>
        <LeftNavTab name="Payment" icon={<BsCreditCard />} active={activeTab === 'payment'} />
      </NavLink>

      <NavLink to="/options" onClick={() => handleClick('options')}>
        <LeftNavTab name="Options" icon={<BsTag />} active={activeTab === 'options'} />
      </NavLink>

      <NavLink to="/invite_n_promote" onClick={() => handleClick('invite_n_promote')}>
        <LeftNavTab
          name="Invite & Promote"
          icon={<HiOutlineSpeakerphone />}
          active={activeTab === 'invite_n_promote'}
        />
      </NavLink>

      <NavLink to="/analyse" onClick={() => handleClick('analyse')}>
        <LeftNavTab name="Analyse" icon={<DiGoogleAnalytics />} active={activeTab === 'analyse'} />
      </NavLink>
    </nav>
  )
}

export default LeftSideNav
