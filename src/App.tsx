import logo from './assets/images/logo.png'
import profile_img from './assets/images/profile_img.png'
import { BiChevronDown } from 'react-icons/bi'
import { IoChevronBackOutline } from 'react-icons/io5'

function App() {
  return (
    <div className="text-white">
      <header className="bg-seagreen px-3 py-2 border-none flex justify-between">
        <div className="flex justify-between items-center gap-5">
          <img src={logo} alt="logo" className="h-10 w-10 object-cover" />
          <h1>Zazu Events</h1>
        </div>
        <div className="flex justify-between items-center gap-10">
          <p className="flex items-center gap-2 text-xs">
            Help <BiChevronDown />
          </p>
          <img
            src={profile_img}
            alt="profile_img"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </header>

      <div className="flex items-center">
        <nav className="bg-seagreen w-1/5 h-screen p-3 text-xs">
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <IoChevronBackOutline />
            Back to list
          </div>
        </nav>
        <section className="bg-feece8 h-screen w-full"></section>
      </div>
    </div>
  )
}

export default App
