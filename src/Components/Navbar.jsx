import React from 'react';
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <section className="">
      <div className="grid grid-cols-12 items-center py-3 px-10 w-[100%]">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-2 col-span-2">
          <img src="/Images/logo.png" alt="DevAlpha" className="w-12" />
          <p className="Nunito text-2xl font-bold text-[#012970]">Dev Alpha</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex col-end-13 col-span-6 gap-10 text-lg font-semibold">
          <li className="text-[#013289] hover:text-blue-500">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
          </li>
          <li className="text-[#013289] hover:text-blue-500">
            <Link to="aboutus" smooth={true} duration={500} className="cursor-pointer">About us</Link>
          </li>
          <li className="text-[#013289] hover:text-blue-500">
            <Link to="services" smooth={true} duration={500} className="cursor-pointer">Services</Link>
          </li>
          <li className="text-[#013289] hover:text-blue-500">
            <Link to="Projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
          </li>
          <li className="text-[#013289] hover:text-blue-500">
            <Link to="team" smooth={true} duration={500} className="cursor-pointer">Team</Link>
          </li>
          <li className="text-[#013289] hover:text-blue-500">
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
          </li>
          
        </ul>
      </div>
    </section>
  );
}
