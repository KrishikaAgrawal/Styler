import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const HomePgNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu Toggled:", isMenuOpen);
  };

  return (
    <nav className="lg:px-32 px-4 h-[60px] bg-white shadow-md relative">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex font-Gloock items-center gap-2">
          <p className="bg-st-accent-brown text-white w-7 h-7 flex justify-center items-center rounded-full text-xl"></p>
          <p className="text-lg">Styler.</p>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            <BiMenu />
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex xl:gap-12 gap-6 font-medium font-Gloock xl:ml-32 text-sm">
          <NavLink className="border-b-2 border-st-accent-brown" to="/">
            Home
          </NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Services">Services</NavLink>
          <NavLink to="/Blog">Blog</NavLink>
          <NavLink to="/Contact_Us">Contact Us</NavLink>
        </div>

        {/* Action Buttons for Large Screens */}
        <div className="hidden lg:flex gap-3">
          <NavLink to="/Login">
            <button className="py-2 font-bold px-8 rounded-full border border-[#531A02] text-[#531A02]">
              Login
            </button>
          </NavLink>
          <NavLink to="/Signup">
            <button className="py-2 px-8 font-bold rounded-full bg-[#531A02] text-white">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4  font-Gloock bg-white shadow-md p-4 rounded-b-md absolute top-full left-0 right-0 z-50">
          <NavLink to="/" className="block">
            Home
          </NavLink>
          <NavLink to="/About" className="block">
            About
          </NavLink>
          <NavLink to="/Services" className="block">
            Services
          </NavLink>
          <NavLink to="/Blog" className="block">
            Blog
          </NavLink>
          <NavLink to="/Contact_Us" className="block">
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default HomePgNavbar;
