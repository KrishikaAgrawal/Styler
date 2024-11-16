import React, { useState } from "react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const STFooter: React.FC = () => {
  // State to handle toggling dropdown for small screens
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    company: false,
    products: false,
    customer: false,
    partner: false,
    legal: false,
    services: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-[#DEF9FF] lg:px-16 px-4 py-8">
      {/* Logo and Newsletter */}
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-6 lg:gap-0">
        {/* Logo */}
        <div className="flex font-Gloock items-center lg:w-1/3 gap-3">
          <p className="bg-[#025195] text-white w-16 h-16 flex justify-center items-center rounded-full text-4xl">
            S
          </p>
          <p className="text-3xl lg:text-4xl">Styler.</p>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#025195]/20 text-[#025195] justify-between lg:w-2/3 p-3 lg:px-5 rounded-lg">
          <div className="w-full  flex flex-col lg:flex-row gap-4 lg:gap-8  items-center justify-between">
            <p className="text-lg lg:text-xl font-medium">Newsletter Sign Up</p>
            <div className="border border-[#025195] p-2 bg-white rounded-lg flex gap-2 lg:gap-4 font-medium w-full lg:w-2/3 justify-between pl-5">
              <input
                className=" text-[#025195] w-full lg:w-auto"
                type="text"
                placeholder="Enter your email here..."
              />
              <button className="bg-[#025195] w-fit whitespace-nowrap text-white p-2 rounded-lg px-6 text-sm">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Link Stacks - Dropdown on small screens */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-16 lg:px-8">
        {/* Company Section */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-[#025195] font-bold lg:cursor-default"
            onClick={() => toggleSection("company")}
          >
            Company
          </button>
          <div
            className={`flex-col items-center gap-1 ${
              openSections.company ? "flex" : "hidden"
            } lg:flex`}
          >
            <Link to="/AboutUs" onClick={handleClick}>
              About Us
            </Link>
            <Link to="/" onClick={handleClick}>
              Careers
            </Link>
            <Link to="/" onClick={handleClick}>
              Blog
            </Link>
            <Link to="/" onClick={handleClick}>
              Press
            </Link>
            <Link to="/PartnerWithUs" onClick={handleClick}>
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Products Section */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-[#025195] font-bold lg:cursor-default"
            onClick={() => toggleSection("products")}
          >
            Products
          </button>
          <div
            className={`flex-col items-center gap-1 ${
              openSections.products ? "flex" : "hidden"
            } lg:flex`}
          >
            <Link to="/" onClick={handleClick}>
              Custom Clothing
            </Link>
            <Link to="/" onClick={handleClick}>
              Fabric Selection
            </Link>
            <Link to="/" onClick={handleClick}>
              Bridal Wear
            </Link>
            <Link to="/" onClick={handleClick}>
              Formal Suits
            </Link>
            <Link to="/" onClick={handleClick}>
              Order Tracking
            </Link>
            <Link to="/" onClick={handleClick}>
              Payment Options
            </Link>
          </div>
        </div>
        {/* Customer Service Section */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-[#025195] font-bold lg:cursor-default"
            onClick={() => toggleSection("customer")}
          >
            Customer Support
          </button>
          <div
            className={`flex-col items-center gap-1 ${
              openSections.customer ? "flex" : "hidden"
            } lg:flex`}
          >
            <Link to="/" onClick={handleClick}>
              Help Center
            </Link>
            <Link to="/" onClick={handleClick}>
              FAQs
            </Link>
            <Link to="/" onClick={handleClick}>
              Shipping & Delivery
            </Link>
            <Link to="/" onClick={handleClick}>
              Returns & Refunds
            </Link>
            <Link to="/" onClick={handleClick}>
              Order Tracking
            </Link>
            <Link to="/" onClick={handleClick}>
              Payment Options
            </Link>
          </div>
        </div>

        {/* Partner With Us */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-[#025195] font-bold lg:cursor-default"
            onClick={() => toggleSection("partner")}
          >
            Partner With Us
          </button>
          <div
            className={`flex-col items-center gap-1 ${
              openSections.partner ? "flex" : "hidden"
            } lg:flex`}
          >
            <Link to="/" onClick={handleClick}>
              Designer Partnerships
            </Link>
            <Link to="/" onClick={handleClick}>
              Tailor Collaborations
            </Link>
            <Link to="/" onClick={handleClick}>
              Supplier Opportunities
            </Link>
            <Link to="/" onClick={handleClick}>
              Affiliate Program
            </Link>
            <Link to="/" onClick={handleClick}>
              Join as a Partner
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-[#025195] font-bold lg:cursor-default"
            onClick={() => toggleSection("legal")}
          >
            Legal
          </button>
          <div
            className={`flex-col items-center gap-1 ${
              openSections.legal ? "flex" : "hidden"
            } lg:flex`}
          >
            <Link to="/PrivacyPolicy" onClick={handleClick}>
              Privacy Policy
            </Link>
            <Link to="/TermsAndConditions" onClick={handleClick}>
              Terms & Conditions
            </Link>
            <Link to="/" onClick={handleClick}>
              Cookie Policy
            </Link>
            <Link to="/" onClick={handleClick}>
              Accessibility Statement
            </Link>
            <Link to="/" onClick={handleClick}>
              Intellectual Property
            </Link>
          </div>
        </div>

        {/* Our Services */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-[#025195] font-bold lg:cursor-default"
            onClick={() => toggleSection("services")}
          >
            Our Services
          </button>
          <div
            className={`flex-col items-center gap-1 text-base text-center ${
              openSections.services ? "flex" : "hidden"
            } lg:flex`}
          >
            <Link to="/" onClick={handleClick}>
              Virtual Styling
            </Link>
            <Link to="/" onClick={handleClick}>
              Personal Shopper
            </Link>
            <Link to="/" onClick={handleClick}>
              Bespoke Tailoring
            </Link>
            <Link to="/" onClick={handleClick}>
              Custom Alterations
            </Link>
            <Link to="/" onClick={handleClick}>
              Fabric Dyeing & Printing
            </Link>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 py-10 my-10 border-y border-black">
        <div className="bg-[#025195] text-white p-4 md:p-5 rounded-full">
          <FaFacebook />
        </div>
        <div className="bg-[#025195] text-white p-4 md:p-5 rounded-full">
          <FaLinkedin />
        </div>
        <div className="bg-[#025195] text-white p-4 md:p-5 rounded-full">
          <FaSquareXTwitter />
        </div>
        <div className="bg-[#025195] text-white p-4 md:p-5 rounded-full">
          <BsSpotify />
        </div>
        <div className="bg-[#025195] text-white p-4 md:p-5 rounded-full">
          <BsYoutube />
        </div>
      </div>

      {/* Footer Text */}
      <p className="flex justify-center text-[#025195] font-medium">
        2024 Styler - All Rights Reserved
      </p>
    </div>
  );
};

export default STFooter;
