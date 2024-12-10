import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={Logo} alt="Vriddhi" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-blue-600">Newsletter</a>
            <a href="#" className="text-gray-900 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-900 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Book a Session
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Newsletter</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Services</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:text-blue-600">Contact</a>
            <button className="w-full text-left px-3 py-2 text-blue-600">
              Book a Session
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}