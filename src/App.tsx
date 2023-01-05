import Header from '@/Components/Header'
import LeftSideNav from '@/Components/LeftSideNav'
import Section from '@/Components/Section'

function App() {
  return (
    <div className="text-white  w-full">
      <Header />
      <div className="flex h-full w-full">
        <LeftSideNav />
        <Section />
      </div>
    </div>
  )
}

export default App
