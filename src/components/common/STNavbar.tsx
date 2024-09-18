import React, { useState } from "react";
import { BiBell, BiCart, BiHeart, BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import STImageWithLoading from "./STImageWithLoading";

const STNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="lg:px-32 px-6 py-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex font-Gloock items-center gap-2">
          <p className="bg-st-accent-brown text-white w-8 h-8 flex justify-center items-center rounded-full text-2xl">
            S
          </p>
          <p className="text-xl">Styler.</p>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            <BiMenu />
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex gap-12 font-medium font-Gloock ml-32">
          <NavLink className={`border-b-4 border-st-accent-brown pb-2`} to="/">Home</NavLink>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/">Services</NavLink>
          <NavLink to="/">Orders</NavLink>
          <NavLink to="/">Consultations</NavLink>
        </div>

        {/* User Button Stack */}
        <div className="gap-4 hidden lg:flex">
          <div className="bg-st-light-brown w-10 h-10 flex justify-center items-center rounded-full hover:bg-st-accent-brown hover:text-white cursor-pointer active:scale-90 transition-all">
            <BiBell size={20} />
          </div>
          <div className="bg-st-light-brown w-10 h-10 flex justify-center items-center rounded-full hover:bg-st-accent-brown hover:text-white cursor-pointer active:scale-90 transition-all">
            <BiHeart size={20} />
          </div>
          <div className="bg-st-light-brown w-10 h-10 flex justify-center items-center rounded-full hover:bg-st-accent-brown hover:text-white cursor-pointer active:scale-90 transition-all">
            <BiCart size={20} />
          </div>

          {/* Profile */}
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <STImageWithLoading
                alt="profile"
                src="https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710854361/gje3vo4nceqb9gfpedtj.png"
              />
            </div>
            <div className="hidden lg:flex flex-col items-end">
              <p className="text-xs font-semibold text-[#A0A2A2]">Jhansi, Uttar Pradesh</p>
              <p className="text-sm font-semibold">Madhuresh Verma</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 font-Gloock">
          <NavLink to="/" className="block">Home</NavLink>
          <NavLink to="/" className="block">Shop</NavLink>
          <NavLink to="/" className="block">Services</NavLink>
          <NavLink to="/" className="block">Orders</NavLink>
          <NavLink to="/" className="block">Consultations</NavLink>
        </div>
      )}
    </nav>
  );
};

export default STNavbar;
