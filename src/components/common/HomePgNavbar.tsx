import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const HomePgNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("/");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the menu when a link is clicked in mobile view
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:px-24 px-4 h-[60px] bg-white shadow-md relative">
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
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
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
              activeLink === "/AboutUs"
                ? "border-b-2 border-[#025195] pb-2"
                : ""
            }
            to="/AboutUs"
            onClick={() => handleLinkClick("/AboutUs")}
          >
            About Us
          </NavLink>

          <NavLink
            className={
              activeLink === "/Blog" ? "border-b-2 border-[#025195] pb-2" : ""
            }
            to="/Blog"
            onClick={() => handleLinkClick("/Blog")}
          >
            Blog
          </NavLink>
          <NavLink
            className={
              activeLink === "/Contact_Us"
                ? "border-b-2 border-[#025195] pb-2"
                : ""
            }
            to="/ContactUs"
            onClick={() => handleLinkClick("/Contact_Us")}
          >
            ContactUs
          </NavLink>
        </div>

        {/* Action Buttons for Large Screens */}
        <div className="hidden lg:flex gap-3">
          <NavLink to="/Login">
            <button className="py-2 font-bold px-8 rounded-full border border-[#025195] text-[#025195]">
              Login
            </button>
          </NavLink>
          <NavLink to="/Signup">
            <button className="py-2 px-8 font-bold rounded-full bg-[#025195] text-white">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-8 pb-10 font-Gloock bg-white shadow-md p-4 rounded-b-md absolute top-full left-0 right-0 z-50">
          <NavLink
            to="/"
            onClick={() => handleLinkClick("/")}
            className="block"
          >
            Home
          </NavLink>
          <NavLink
            to="/AboutUs"
            onClick={() => handleLinkClick("/AboutUs")}
            className="block"
          >
            About
          </NavLink>
          <NavLink
            to="/Blog"
            onClick={() => handleLinkClick("/Blog")}
            className="block"
          >
            Blog
          </NavLink>
          <NavLink
            to="/ContactUs"
            onClick={() => handleLinkClick("/ContactUs")}
            className="block"
          >
            Contact Us
          </NavLink>

          <NavLink to="/Login" onClick={() => handleLinkClick("/Login")}>
            <button className="py-2 font-bold px-8 rounded-full border border-[#025195] text-[#025195]">
              Login
            </button>
          </NavLink>
          <NavLink to="/Signup" onClick={() => handleLinkClick("/Signup")}>
            <button className="py-2 px-8  rounded-full bg-[#025195] text-white">
              Sign Up
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default HomePgNavbar;
