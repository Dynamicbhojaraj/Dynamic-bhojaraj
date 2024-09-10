import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5'; // For the close icon
import { AiOutlineMenu } from 'react-icons/ai'; // For the menu icon
import pic from '../../public/my image.png'; // Replace with your image path

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", href: "#" }, // Home usually stays on the same page, so it's "#"
    { id: 2, text: "About", href: 'About.jsx' },
    { id: 3, text: "Resume", href: "#resume" },
    { id: 4, text: "Projects", href: "#projects" },
    { id: 5, text: "Skills", href: "#skills" },
    { id: 6, text: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Profile Section */}
          <div className="flex space-x-2 items-center">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Dynamic Bhojara<span className="text-green-500 text-2xl">j</span>
              <p className="text-sm">Web-Developer</p>
            </h1>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, href }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <a href={href}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text, href }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <a href={href} onClick={() => setMenu(!menu)}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
