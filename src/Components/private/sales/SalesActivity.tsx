import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgSortAz } from 'react-icons/cg'
import SalesActivityTab from './SalesActivityTab'
import SalesBudget from '@/Components/private/sales/SalesBudget'

const SalesActivity: React.FC = () => {
  return (
    <div className="w-full flex gap-5">
      <div className="bg-white w-3/4 h-fit rounded-md p-5">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center gap-3 cussor-pointer">
            <div className="font-semibold text-xl">Sales Activity</div> <BiSearch className="text-gray text-base" />
          </div>
          <div className="flex justify-between items-center gap-2 text-gray cussor-pointer">
            Sort
            <CgSortAz />
          </div>
        </div>

        <div>
          <SalesActivityTab date="12/04/20" name="Dustin Steward" quantity={5} amount="$ 7 500" details="DETAILS" />
          <SalesActivityTab date="10/04/20" name="Victoria Simmmons" quantity={6} amount="$ 9 000" details="DETAILS" />
          <SalesActivityTab date="08/04/20" name="Nathan Mckinney" quantity={3} amount="$ 4 500" details="DETAILS" />
          <SalesActivityTab date="06/04/20" name="Eleanor Steward" quantity={1} amount="$ 1 500" details="DETAILS" />
          <SalesActivityTab date="06/04/20" name="Shane Russell" quantity={3} amount="$ 4 500" details="DETAILS" />
          <SalesActivityTab date="03/04/20" name="Aubrey Fisher" quantity={2} amount="$ 3 000" details="DETAILS" />
          <SalesActivityTab date="27/12/19" name="Zack Lane" quantity={1} amount="$ 1 500" details="DETAILS" />
          <SalesActivityTab date="25/12/19" name="Jorge Alexander" quantity={4} amount="$ 6 000" details="DETAILS" />
          <SalesActivityTab date="25/12/19" name="Debra Miles" quantity={2} amount="$ 3 000" details="DETAILS" />
          <SalesActivityTab date="22/12/19" name="Robert Watson" quantity={2} amount="$ 3 000" details="DETAILS" />
        </div>
      </div>
      <div className="w-1/4">
        <SalesBudget name="Total Sales Goal" amount="$ 165 000" />
        <SalesBudget name="Payed" amount="$ 33 50" />
        <SalesBudget name="In process" amount="$ 11 250" />
        <SalesBudget name="Left to sell" amount="$ 120 000" />
      </div>
    </div>
  )
}

export default SalesActivity
