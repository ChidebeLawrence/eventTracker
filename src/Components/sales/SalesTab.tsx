import React from 'react'

interface SalesTabProps {
  head: string
  edit: string
  note: string
}

const SalesTab: React.FC<SalesTabProps> = ({ head, edit, note }) => {
  return (
    <div className="w-1/3 bg-white py-3 px-5 rounded-md">
      <div className="flex justify-between items-center text-xs font-semibold">
        <div className="text-base">
          <div>{head}</div>
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
