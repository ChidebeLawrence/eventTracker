interface LeftNavTabProps {
  name: string
  icon: React.ReactElement
  active: boolean
}

const LeftNavTab: React.FC<LeftNavTabProps> = ({ icon, name, active }) => {
  return (
    <>
      <div
        className={`m-4 h-18 rounded-lg cursor-pointer ${active ? 'bg-[#42a74a]' : 'bg-lightGreen hover:bg-[#42a74a]'}`}
      >
        <div className="flex items-center flex-col justify-center py-4">
          {icon}
          {name}
        </div>
      </div>
    </>
  )
}

export default LeftNavTab
