import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // install react-icons if not installed

const Navbar = () => {
  const [line, setLine] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="w-full bg-[#04071D] text-white fixed top-0 left-0 shadow-lg z-50">
      <nav className="flex h-[80px] justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#CBACF9]">A.N</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex bg-[#0C0E23] border border-[#17192e] rounded gap-5 px-4">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => setLine(link.id)}
              className={`px-2 py-2 cursor-pointer hover:text-[#CBACF9] ${
                line === link.id ? "border-b-2 border-[#CBACF9]" : ""
              }`}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#161A31] to-[#06091F] border border-[#262c71] rounded hover:opacity-80">
          Hire Me
        </button>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0C0E23] border-t border-[#17192e]">
          <ul className="flex flex-col items-center gap-4 py-6">
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => {
                  setLine(link.id);
                  setMenuOpen(false);
                }}
                className={`px-4 py-2 w-full text-center cursor-pointer hover:bg-[#161A31] hover:text-[#CBACF9] ${
                  line === link.id ? "text-[#CBACF9]" : ""
                }`}
              >
                {link.label}
              </li>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-[#161A31] to-[#06091F] border border-[#262c71] rounded hover:opacity-80">
              Hire Me
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
