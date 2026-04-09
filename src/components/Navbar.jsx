import { Link } from 'react-router-dom'
import logo from '../assets/house-hand.svg'

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="NestFind" className="w-8 h-8" />
          <span className="text-xl font-black text-slate-800">NestFind</span>
        </Link>

        <div className="flex items-center gap-4">
          <button className="text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors cursor-pointer">
            Buy
          </button>
          <button className="text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors cursor-pointer">
            Rent
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer">
            List Property
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar