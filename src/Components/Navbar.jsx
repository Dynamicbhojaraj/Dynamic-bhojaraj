import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5'; // Close icon
import { AiOutlineMenu } from 'react-icons/ai'; // Menu icon
import { Link } from 'react-scroll'; // For smooth scrolling
import pic from '../../public/my image.png'; // Replace with your image path

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", href: 'Home' },
    { id: 2, text: "About", href: 'about' },
    { id: 3, text: "Resume", href: 'resume' },
    { id: 4, text: "Projects", href: 'projects' },
    { id: 5, text: "Skills", href: 'skills' },
    { id: 6, text: "Contact", href: 'contact' },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Profile Section */}
          <div className="flex space-x-2 items-center">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Dynamic Bhojara
              <span className="text-green-500 text-2xl">j</span>
              <p className="text-sm">Web-Developer</p>
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, href }) => (
                <li key={id} className="group relative cursor-pointer">
                  <Link
                    activeClass="text-green-500"
                    to={href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer text-gray-700 hover:text-green-500 transition duration-300 ease-in-out"
                  >
                    {text}
                  </Link>
                  {/* Active underline effect */}
                  <span className="block h-0.5 bg-green-500 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menu ? 'translate-x-0' : 'translate-x-full'
          } fixed top-0 right-0 w-64 h-screen bg-white shadow-md transition-transform duration-300 z-40 md:hidden`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-6 text-xl">
            {navItems.map(({ id, text, href }) => (
              <li key={id}>
                <Link
                  to={href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                  className="text-gray-700 hover:text-green-500 transition duration-300 ease-in-out"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
