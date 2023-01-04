import React from 'react'
import SalesTab from './SalesTab'

const Sales = () => {
  return (
    <div>
      <div className="text-2xl font-semibold">Event Sales</div>
      <div className="flex flex-row gap-5">
        <SalesTab head="Public" edit="EDIT" note="Your event is listed and searchable" />
        <SalesTab head="Card" edit="CHANGE" note="You selected payment options, may change it anytime" />
        {/* <SalesTab head='Tickets Sold' edit='30 /110' note=''/> */}

        {/* editing the Tickes Sold due to it has a different style from others  */}
        <div className="w-1/3 bg-white py-3 px-5 rounded-md">
          <div className="flex justify-between items-center text-xs font-semibold">
            <div className="text-base">
              <div>Tickets Sold</div>
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
    </div>
  )
}

export default Sales
