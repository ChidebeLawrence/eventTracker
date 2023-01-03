import Header from './Components/Header'
import LeftSideNav from './Components/LeftSideNav'
import Section from './Components/Section'

function App() {
  return (
    <div className="text-white">
      <Header />

      <div className="flex items-center">
        <LeftSideNav />
        <Section />
      </div>
    </div>
  )
}

export default App
