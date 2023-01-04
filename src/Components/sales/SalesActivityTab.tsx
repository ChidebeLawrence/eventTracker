import React from 'react'

interface SalesActivityTab {
  date: string | number
  name: string
  quantity: number
  amount: number | string
}

const SalesActivityTab: React.FC<SalesActivityTab> = ({ date, name, quantity, amount }) => {
  return (
    <div className="flex items-center justify-between p-6.5 m-1 text-14 font-semibold text-darkslategray cursor-pointer hover:translate-y-1 hover:scale-105 transition ease-in-out delay-100 ">
      <div>{date}</div>
      <div className="w-1/4">{name}</div>
      <div>{quantity}</div>
      <div>{amount}</div>
    </div>
  )
}

export default SalesActivityTab
