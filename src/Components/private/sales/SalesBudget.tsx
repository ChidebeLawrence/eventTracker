import React from 'react'

interface SalesBudget {
  name: string
  amount: number | string
}

const SalesBudget: React.FC<SalesBudget> = ({ name, amount }) => {
  return (
    <div className="bg-white p-6 rounded-md mb-4 last:mb-0">
      <div className="text-gray text-sm">{name}</div>
      <div className="text-blue font-semibold text-xl">{amount}</div>
    </div>
  )
}

export default SalesBudget
