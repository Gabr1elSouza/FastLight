import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo-cogecom.png" alt="Fast Light" className="h-12" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Início</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contato</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600">Início</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Sobre</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Serviços</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contato</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header