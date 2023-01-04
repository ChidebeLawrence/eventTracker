import { Route, Routes } from 'react-router'
import Analyse from './analyse/Analyse'
import BasicInfo from './basicInfo/BasicInfo'
import Invite_n_Promote from './invite_n_promote/Invite_n_Promote'
import Options from './options/Options'
import Payment from './payment/Payment'
import Sales from './sales/Sales'

const Section: React.FC = () => {
  return (
    <section className="bg-feece8 h-fit p-5 w-4/5 overflow-hidden text-black">
      <Routes>
        <Route path="/basic_info" element={<BasicInfo />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/options" element={<Options />} />
        <Route path="/invite_n_promote" element={<Invite_n_Promote />} />
        <Route path="/analyse" element={<Analyse />} />
      </Routes>
    </section>
  )
}

export default Section
