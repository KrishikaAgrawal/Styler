import React, { useState } from "react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const STFooter: React.FC = () => {
  // State to handle toggling dropdown for small screens
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    company: false,
    customerService: false,
    explore: false,
    account: false,
    social: false,
    legal: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="bg-st-mild-brown lg:px-32 px-4 py-16">
      {/* Logo and Newsletter */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        {/* Logo */}
        <div className="flex font-Gloock items-center gap-3">
          <p className="bg-st-accent-brown text-white w-16 h-16 flex justify-center items-center rounded-full text-4xl">
            S
          </p>
          <p className="text-3xl lg:text-4xl">Styler.</p>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-st-mid-brown/20 text-st-mid-brown p-3 flex flex-col lg:flex-row gap-4 lg:gap-8 rounded-lg items-center">
          <p className="text-lg lg:text-xl font-medium">Newsletter Sign Up</p>
          <div className="border border-st-mid-brown p-2 bg-white rounded-lg flex gap-2 lg:gap-4 font-medium w-full lg:w-auto">
            <input
              className=" text-st-mid-brown w-full lg:w-auto"
              type="text"
              placeholder="Your Email"
            />
            <button className="bg-st-accent-brown text-white p-2 rounded-lg px-6 text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Link Stacks - Dropdown on small screens */}
      <div className="lg:grid lg:grid-cols-6 gap-8 mt-16">
        {/* Company Section */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-st-mid-brown font-bold lg:cursor-default"
            onClick={() => toggleSection("company")}
          >
            Company
          </button>
          <div className={`flex-col items-center gap-1 ${openSections.company ? 'flex' : 'hidden'} lg:flex`}>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Sustainability</Link>
            <Link to="/">Partner With Us</Link>
          </div>
        </div>

        {/* Customer Service Section */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-st-mid-brown font-bold lg:cursor-default"
            onClick={() => toggleSection("customerService")}
          >
            Customer Service
          </button>
          <div className={`flex-col items-center gap-1 ${openSections.customerService ? 'flex' : 'hidden'} lg:flex`}>
            <Link to="/">Help & Support</Link>
            <Link to="/">FAQs</Link>
            <Link to="/">Returns & Refunds</Link>
            <Link to="/">Shipping & Delivery</Link>
            <Link to="/">Contact Us</Link>
          </div>
        </div>

        {/* Explore Section */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-st-mid-brown font-bold lg:cursor-default"
            onClick={() => toggleSection("explore")}
          >
            Explore
          </button>
          <div className={`flex-col items-center gap-1 ${openSections.explore ? 'flex' : 'hidden'} lg:flex`}>
            <Link to="/">Designers & Tailors</Link>
            <Link to="/">Branded Clothing</Link>
            <Link to="/">Consultations</Link>
            <Link to="/">Custom Services</Link>
            <Link to="/">Gift Cards</Link>
          </div>
        </div>

        {/* Account Section */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-st-mid-brown font-bold lg:cursor-default"
            onClick={() => toggleSection("account")}
          >
            Account
          </button>
          <div className={`flex-col items-center gap-1 ${openSections.account ? 'flex' : 'hidden'} lg:flex`}>
            <Link to="/">My Profile</Link>
            <Link to="/">My Orders</Link>
            <Link to="/">Wishlist</Link>
            <Link to="/">Manage Addresses</Link>
            <Link to="/">Settings</Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-st-mid-brown font-bold lg:cursor-default"
            onClick={() => toggleSection("social")}
          >
            Social Media
          </button>
          <div className={`flex-col items-center gap-1 ${openSections.social ? 'flex' : 'hidden'} lg:flex`}>
            <Link to="/">Facebook</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">YouTube</Link>
          </div>
        </div>

        {/* Legal Section */}
        <div className="lg:flex flex-col items-center gap-1">
          <button
            className="text-st-mid-brown font-bold lg:cursor-default"
            onClick={() => toggleSection("legal")}
          >
            Legal
          </button>
          <div className={`flex-col items-center gap-1 ${openSections.legal ? 'flex' : 'hidden'} lg:flex`}>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookie Policy</Link>
            <Link to="/">Accessibility</Link>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 py-10 my-10 border-y border-black">
        <div className="bg-st-dark-brown text-white p-4 md:p-5 rounded-full">
          <FaFacebook />
        </div>
        <div className="bg-st-dark-brown text-white p-4 md:p-5 rounded-full">
          <FaLinkedin />
        </div>
        <div className="bg-st-dark-brown text-white p-4 md:p-5 rounded-full">
          <FaSquareXTwitter />
        </div>
        <div className="bg-st-dark-brown text-white p-4 md:p-5 rounded-full">
          <BsSpotify />
        </div>
        <div className="bg-st-dark-brown text-white p-4 md:p-5 rounded-full">
          <BsYoutube />
        </div>
      </div>

      {/* Footer Text */}
      <p className="flex justify-center text-st-mid-brown font-medium">
        2024 Styler - All Rights Reserved
      </p>
    </div>
  );
};

export default STFooter;
