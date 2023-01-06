import React from 'react'

interface SalesTab {
  head: string
  edit: string
  note: string
  icon: React.ReactElement
}

const SalesTab: React.FC<SalesTab> = ({ head, edit, note, icon }) => {
  return (
    <div className="w-1/3 bg-white p-5 rounded-md">
      <div className="flex justify-between items-center text-xs font-semibold">
        <div className="text-base">
          <div className="flex items-center gap-3">
            {icon}
            {head}
          </div>
        </div>
        <div className="">
          <div className="text-blue hover:underline cursor-pointer">{edit}</div>
        </div>
      </div>
      <div className="text-sm text-gray">{note}</div>
    </div>
  )
}

export default SalesTab
