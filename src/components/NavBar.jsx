import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav className="bg-[#F6F4F0] text-black shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <img className="w-11 h-9" src={logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-xl font-medium">
          <li>
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
          </li>

          <li>
            <Link to="/reels" className="hover:text-gray-500">
              Reels
            </Link>
          </li>

          <li>
            <Link to="/project" className="hover:text-gray-500">
              Photo
            </Link>
          </li>
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <RiCloseLine /> : <RiMenuLine />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="md:hidden bg-[#F6F4F0] flex flex-col items-center gap-4 pb-5 text-lg font-medium shadow">
          
          <li>
            <Link to="/" onClick={closeMenu} className="hover:text-gray-500">
              Home
            </Link>
          </li>

          <li>
            <Link to="/reels" onClick={closeMenu} className="hover:text-gray-500">
              Reels
            </Link>
          </li>

          <li>
            <Link to="/project" onClick={closeMenu} className="hover:text-gray-500">
              Photo
            </Link>
          </li>

        </ul>
      )}
    </nav>
  );
};

export default NavBar;