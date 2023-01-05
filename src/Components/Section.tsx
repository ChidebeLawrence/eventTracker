import { Route, Routes } from 'react-router'
import Analyse from '@/Components/private/analyse/Analyse'
import BasicInfo from '@/Components/private/basicInfo/BasicInfo'
import Invite_n_Promote from '@/Components/private/invite_n_promote/Invite_n_Promote'
import Options from '@/Components/private/options/Options'
import Payment from '@/Components/private/payment/Payment'
import Sales from '@/Components/private/sales/Sales'

const Section: React.FC = () => {
  return (
    <section className="bg-feece8 h-fit p-5 w-4/5 overflow-hidden text-black relative left-[270px]">
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
