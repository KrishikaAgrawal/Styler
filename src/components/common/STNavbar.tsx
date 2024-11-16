import React, { useState } from "react";
import { BiBell, BiCart, BiHeart, BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import STImageWithLoading from "./STImageWithLoading";

const STNavbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("/");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="lg:px-32 px-4 h-[60px]">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex font-Gloock items-center gap-2">
          <p className="bg-[#025195] text-white w-7 h-7 flex justify-center items-center rounded-full text-xl">
            S
          </p>
          <p className="text-lg">Styler.</p>
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
        <div className="hidden lg:flex xl:gap-12 gap-6 font-medium font-Gloock xl:ml-32 text-sm">
          <NavLink
            className={
              activeLink === "/" ? "border-b-2 border-[#025195] pb-2" : ""
            }
            to="/"
            onClick={() => handleLinkClick("/")}
          >
            Home
          </NavLink>
          <NavLink
            className={
              activeLink === "/shop" ? "border-b-2 border-[#025195] pb-2" : ""
            }
            to="/shop"
            onClick={() => handleLinkClick("/shop")}
          >
            Shop
          </NavLink>
          <NavLink
            className={
              activeLink === "/mostpopular"
                ? "border-b-2 border-[#025195] pb-2"
                : ""
            }
            to="/mostpopular"
            onClick={() => handleLinkClick("/mostpopular")}
          >
            Services
          </NavLink>
          <NavLink
            className={
              activeLink === "/orders" ? "border-b-2 border-[#025195] pb-2" : ""
            }
            to="/orders"
            onClick={() => handleLinkClick("/orders")}
          >
            Orders
          </NavLink>
          <NavLink
            className={
              activeLink === "/consultations"
                ? "border-b-2 border-[#025195] pb-2"
                : ""
            }
            to="/consultations"
            onClick={() => handleLinkClick("/consultations")}
          >
            Consultations
          </NavLink>
        </div>

        {/* User Button Stack */}
        <div className="gap-4 hidden lg:flex">
          <div className="bg-[#DEF9FF] text-[#025195] w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#025195] hover:text-white cursor-pointer active:scale-90 transition-all">
            <NavLink to="/Notification">
              <BiBell size={20} />
            </NavLink>
          </div>
          <div className="bg-[#DEF9FF] text-[#025195]  w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#025195] hover:text-white cursor-pointer active:scale-90 transition-all">
            <NavLink to="/Wishlist">
              <BiHeart size={20} />
            </NavLink>
          </div>
          <div className="bg-[#DEF9FF] text-[#025195]  w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#025195] hover:text-white cursor-pointer active:scale-90 transition-all">
            <BiCart size={20} />
          </div>

          {/* Profile */}
          <div className="flex gap-4 items-center">
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <STImageWithLoading
                alt="profile"
                src="https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710854361/gje3vo4nceqb9gfpedtj.png"
              />
            </div>
            <div className="hidden lg:flex flex-col items-end">
              <p className="text-xs font-semibold text-[#A0A2A2]">California</p>
              <p className="text-sm font-semibold text-nowrap">James Smith</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 font-Gloock">
          <NavLink to="/" className="block">
            Home
          </NavLink>
          <NavLink to="/" className="block">
            Shop
          </NavLink>
          <NavLink to="/" className="block">
            Services
          </NavLink>
          <NavLink to="/" className="block">
            Orders
          </NavLink>
          <NavLink to="/" className="block">
            Consultations
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default STNavbar;
