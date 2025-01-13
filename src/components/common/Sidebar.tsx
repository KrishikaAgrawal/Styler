import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { BiBell, BiHeart } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbHelp } from "react-icons/tb";
import { MdShoppingCart } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { TbNotebook } from "react-icons/tb";
import { BsPersonFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoWalletSharp } from "react-icons/io5";

import STImageWithLoading from "./STImageWithLoading";
import avatar from "../../assets/Navbar/avatar.png";

const Sidebar: React.FC = () => {
  // toggle sidebar
  const [activeLink, setActiveLink] = useState<string>("/Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsSidebarOpen(false);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // to handle scroll when nav is fixed at top
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`flex justify-between items-center w-full bg-white py-5 shadow-xl px-8  ${
          isScrolled ? "fixed top-0  z-50" : "relative"
        }`}
      >
        {/* Logo */}
        <div
          className="flex font-Gloock items-center gap-2 cursor-pointer"
          onClick={toggleSidebar}
        >
          <p className="bg-[#025195] text-white w-10   h-10 flex justify-center items-center rounded-full text-xl lg:text-3xl">
            S
          </p>
          <p className="text-xl lg:text-3xl">Styler.</p>
        </div>

        {/* search */}
        <div className="flex items-center p-3 border border-[#EFEEEE] bg-[#FCFCFC] rounded-2xl w-1/2 ">
          <label htmlFor="designer" className="flex items-center">
            <LuSearch className="lg:mr-4 mr-2  text-[#025195] " />
          </label>
          <input
            type="text"
            id="designer"
            placeholder="Search"
            className="focus:outline-none w-full font-semibold bg-[#FCFCFC]"
          />
        </div>

        {/* User Button Stack */}
        <div className="gap-4 hidden lg:flex">
          <div className="bg-[#DEF9FF] text-[#025195]  w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#025195] hover:text-white cursor-pointer active:scale-90 transition-all">
            <NavLink to="/Wishlist">
              <BiHeart size={20} />
            </NavLink>
          </div>
          <div className="bg-[#DEF9FF] text-[#025195] w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#025195] hover:text-white cursor-pointer active:scale-90 transition-all">
            <NavLink to="/Notification">
              <BiBell size={20} />
            </NavLink>
          </div>
          <div className="bg-[#DEF9FF] text-[#025195] w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#025195] hover:text-white cursor-pointer active:scale-90 transition-all">
            <NavLink to="/SpecialOffer">
              <RiDiscountPercentFill size={20} />
            </NavLink>
          </div>

          {/* Profile */}
          <div className="flex gap-4 items-center ml-4 ">
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <NavLink to="/Profile">
                <STImageWithLoading alt="profile" src={avatar} />
              </NavLink>
            </div>
            <div className="hidden lg:flex flex-col ">
              <p className="text-xs font-semibold text-[#A0A2A2] text-nowrap">
                Mumbai, Maharashtra
              </p>
              <p className="text-sm font-semibold text-nowrap">
                Lisa Reo Designer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-[90px] z-50 left-0 h-full w-[250px] bg-white shadow-lg transform flex flex-col justify-between ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* navlinks */}
        <div className="flex flex-col p-4 font-inter gap-0">
          <NavLink
            className={` flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/Dashboard"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/Dashboard"
            onClick={() => handleLinkClick("/Dashboard")}
          >
            <MdDashboard className="text-2xl" />
            Dashboard
          </NavLink>
          <NavLink
            className={` flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/Orders"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/MyOrders"
            onClick={() => handleLinkClick("/Orders")}
          >
            <MdShoppingCart className="text-2xl" />
            Orders
          </NavLink>
          <NavLink
            className={` flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/Quotation"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/Quotation"
            onClick={() => handleLinkClick("/Quotation")}
          >
            <CgNotes className="text-2xl" />
            Quotation
          </NavLink>
          <NavLink
            className={` flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/Appointments"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/Appointments"
            onClick={() => handleLinkClick("/Appointments")}
          >
            <TbNotebook className="text-2xl" />
            Appointments
          </NavLink>
          <NavLink
            className={` flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/Consultation"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/Consultation"
            onClick={() => handleLinkClick("/Consultation")}
          >
            <BsPersonFill className="text-2xl" />
            Consultation
          </NavLink>
          <NavLink
            className={` flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/Track"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/Track"
            onClick={() => handleLinkClick("/Track")}
          >
            <FaLocationDot className="text-2xl" />
            Track
          </NavLink>
          <NavLink
            className={` flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/Payment"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/Payment"
            onClick={() => handleLinkClick("/Payment")}
          >
            <IoWalletSharp className="text-2xl" />
            Payment
          </NavLink>
          {/* <NavLink
            className={` flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/shop"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/shop"
            onClick={() => handleLinkClick("/shop")}
          >
            Shop
          </NavLink>
          <NavLink
            className={`  flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/mostpopular"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/mostpopular"
            onClick={() => handleLinkClick("/mostpopular")}
          >
            Services
          </NavLink>
          <NavLink
            className={`  flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/orders"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/orders"
            onClick={() => handleLinkClick("/orders")}
          >
            Orders
          </NavLink>
          <NavLink
            className={`  flex gap-3 items-center p-4 font-semibold text-[#025195] ${
              activeLink === "/Appointments"
                ? " rounded-r-full bg-[#025195] text-white"
                : ""
            }`}
            to="/Appointments"
            onClick={() => handleLinkClick("/consultations")}
          >
            Consultations
          </NavLink> */}
        </div>

        {/* profile and help */}
        <div className="flex flex-col pb-28 p-4 gap-5">
          <div className="flex gap-4 items-center ">
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <NavLink to="/Profile">
                <STImageWithLoading alt="profile" src={avatar} />
              </NavLink>
            </div>
            <div className="hidden lg:flex flex-col ">
              <p className="text-xs font-semibold text-[#A0A2A2] text-nowrap">
                Mumbai, Maharashtra
              </p>
              <p className="text-sm font-semibold text-nowrap">
                Lisa Reo Designer
              </p>
            </div>
          </div>
          <div className="py-2 rounded-xl px-6 items-center w-fit flex gap-2 bg-[#025195] text-white">
            <TbHelp />
            Help
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          // className="fixed inset-0 bg-black opacity-50"
          className="fixed shadow-xl"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
