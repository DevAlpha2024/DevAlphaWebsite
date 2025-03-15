import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        
        <div className="flex items-center gap-2">
          <img src="/Images/logo.png" alt="Dev Alpha" className="w-12" />
          <p className="text-2xl font-bold text-[#012970]">Dev Alpha</p>
        </div>
        
        {/* Toggle Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        
        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row items-center md:space-x-10 text-lg font-semibold transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex`}
        >
          {['home', 'aboutus', 'services', 'Projects', 'team', 'contact'].map((item, index) => (
            <li key={index} className="py-3 md:py-0 text-[#013289] hover:text-blue-500">
              <Link to={item} smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}