import { useState } from 'react'

interface SalesActivityTab {
  date: string | number
  name: string
  quantity: number
  amount: number | string
  details: string
}

const SalesActivityTab: React.FC<SalesActivityTab> = ({ date, name, quantity, amount, details }) => {
  const [isDetails, setIsDetails] = useState<boolean>(false)

  const detailsVisible: () => void = () => {
    setIsDetails(!isDetails)
  }

  const detailsInvisible = () => {
    setIsDetails(false)
  }

  return (
    <div
      onMouseEnter={detailsVisible}
      onMouseLeave={detailsInvisible}
      className="flex items-center justify-between p-6.5 m-1 text-14 font-semibold text-darkslategray cursor-default hover:translate-y-1 hover:scale-105 hover:shadow-md transition ease-in-out delay-100"
    >
      <div>{date}</div>
      <div className="w-2/5">{name}</div>
      <div className="">{quantity}</div>
      <div className="">{amount}</div>

      <div className={`text-blue text-xs hover:underline cursor-pointer ${isDetails ? 'visible' : 'invisible'}`}>
        {details}
      </div>
    </div>
  )
}

export default SalesActivityTab
