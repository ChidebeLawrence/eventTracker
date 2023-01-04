import React from 'react'

interface LeftNavTabProps {
  name: string
  icon: React.ReactElement
}

const LeftNavTab: React.FC<LeftNavTabProps> = ({ icon, name }) => {
  return (
    <>
      <div className="m-4 bg-lightGreen h-18 rounded-lg hover:bg-lightLemon cursor-pointer">
        <div className="flex items-center flex-col justify-center py-4 text-c6d1cf ">
          {icon}
          {name}
        </div>
      </div>
    </>
  )
}

export default LeftNavTab
