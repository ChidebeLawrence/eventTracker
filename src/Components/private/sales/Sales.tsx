import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsCreditCard } from 'react-icons/bs'
import SalesActivity from '@/Components/private/sales/SalesActivity'
import { GrMoney } from 'react-icons/gr'
import SalesTab from '@/Components/private/sales/SalesTab'

const Sales: React.FC = () => {
  return (
    <div>
      <div className="text-2xl font-semibold">Event Sales</div>

      <div className="flex flex-row gap-5 py-5">
        <SalesTab icon={<AiOutlineGlobal />} head="Public" edit="EDIT" note="Your event is listed and searchable" />
        <SalesTab
          icon={<BsCreditCard />}
          head="Card"
          edit="CHANGE"
          note="You selected payment options, may change it anytime"
        />
        {/* <SalesTab head='Tickets Sold' edit='30 /110' note=''/> */}

        {/* editing the Tickes Sold due to it has a different style from others  */}
        <div className="w-1/3 bg-white py-3 px-5 rounded-md">
          <div className="flex justify-between items-center text-xs font-semibold">
            <div className="text-base">
              <div className="flex items-center gap-3">
                <GrMoney />
                Tickets Sold
              </div>
            </div>
            <div className="">
              <div className="text-blue">30 /110</div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-lightLemon"></div>
              <span>Paid</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 border-2 border-lighterGreen bg-lighterGreen"></div>
              <span>Free</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-5">
        <SalesActivity />
      </div>
    </div>
  )
}

export default Sales
