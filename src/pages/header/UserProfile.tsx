import React from "react";
import avatar from "../../assets/Navbar/avatar.png";
import { IoIosArrowForward } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { LiaTapeSolid } from "react-icons/lia";
import { GrCube } from "react-icons/gr";
import { RiShakeHandsLine } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";

const UserProfile: React.FC = () => {
  return (
    <div className="p-5 md:p-12 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-10 text-3xl md:text-5xl">
        Your Profile
      </h1>

      {/* profile */}
      <div className="flex justify-between text-white bg-[#025195] rounded-lg p-4  ">
        <div className="flex gap-4">
          <img
            src={avatar}
            alt=""
            className="rounded-full border-2 border-white w-14 h-14"
          />
          <div className="flex flex-col">
            <p className="font-bold text-lg lg:text-3xl">Neha Singh</p>
            <p className=" text-xs lg:text-base">+91 9876543210</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="text-sm flex text-[#FF9933] items-center">
            <p className="">Edit</p>
            <IoIosArrowForward />
          </div>
          <p className="text-xs">neha.singh@gmail.com</p>
        </div>
      </div>

      {/* other settings */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between p-2 lg:p-6 border-b ">
          <div className="flex gap-7 items-center">
            <div className="flex p-3 h-fit rounded-full bg-[#025195]">
              <BsPersonFill className="text-[#DEF9FF] text-lg " />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm lg:text-base font-medium">
                Profile Information
              </h2>
              <ul className="text-[11px] text-[#025195] lg:text-xs">
                <a>
                  <li>Profile Details</li>
                </a>
                <a>
                  <li>Profile Picture</li>
                </a>
                <a>
                  <li>Phone Number</li>
                </a>
                <a>
                  <li>Shipping Address</li>
                </a>
              </ul>
            </div>
          </div>
          <IoIosArrowForward className="text-[#ABABAB]" />
        </div>
        {/* Measurement Details */}
        <div className="flex items-center justify-between p-2 lg:p-6 border-b ">
          <div className="flex gap-7 items-center">
            <div className="flex p-3 h-fit rounded-full bg-[#025195]">
              <LiaTapeSolid className="text-[#DEF9FF] text-lg " />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm lg:text-base font-medium">
                Measurement Details
              </h2>
              <ul className="text-[11px] text-[#025195] lg:text-xs">
                <a>
                  <li>Saved Measurements</li>
                </a>
                <a>
                  <li>Update Measurements</li>
                </a>
              </ul>
            </div>
          </div>
          <IoIosArrowForward className="text-[#ABABAB]" />
        </div>
        {/* Order History */}
        <div className="flex items-center justify-between p-2 lg:p-6 border-b ">
          <div className="flex gap-7 items-center">
            <div className="flex p-3 h-fit rounded-full bg-[#025195]">
              <GrCube className="text-[#DEF9FF] text-lg " />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm lg:text-base font-medium">
                Order History
              </h2>
              <ul className="text-[11px] text-[#025195] lg:text-xs">
                <a>
                  <li>Past Orders</li>
                </a>
                <a>
                  <li>Current Orders</li>
                </a>
                <a>
                  <li>Order Details</li>
                </a>
              </ul>
            </div>
          </div>
          <IoIosArrowForward className="text-[#ABABAB]" />
        </div>
        {/*Register as partner  */}
        <div className="flex items-center justify-between p-2 lg:p-6 border-b ">
          <div className="flex gap-7 items-center">
            <div className="flex p-3 h-fit rounded-full bg-[#025195]">
              <RiShakeHandsLine className="text-[#DEF9FF] text-lg " />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm lg:text-base font-medium">
                Register as partner
              </h2>
              <ul className="text-[11px] text-[#025195] lg:text-xs">
                <a>
                  <li>Deatils</li>
                </a>
              </ul>
            </div>
          </div>
          <IoIosArrowForward className="text-[#ABABAB]" />
        </div>
        {/* Account Settings */}
        <div className="flex items-center justify-between p-2 lg:p-6 border-b ">
          <div className="flex gap-7 items-center">
            <div className="flex p-3 h-fit rounded-full bg-[#025195]">
              <FiInfo className="text-[#DEF9FF] text-lg " />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm lg:text-base font-medium">
                Account Settings
              </h2>
              <ul className="text-[11px] text-[#025195] lg:text-xs">
                <a>
                  <li>Password & Security</li>
                </a>
                <a>
                  <li>Notification Preferences</li>
                </a>
                <a>
                  <li>Delete Account</li>
                </a>
                <a>
                  <li>Logout</li>
                </a>
              </ul>
            </div>
          </div>
          <IoIosArrowForward className="text-[#ABABAB]" />
        </div>
        {/* About us */}
        <div className="flex items-center justify-between p-2 lg:p-6 border-b ">
          <div className="flex gap-7 items-center">
            <div className="flex p-3 h-fit rounded-full bg-[#025195]">
              <IoMdLock className="text-[#DEF9FF] text-lg " />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm lg:text-base font-medium">About us</h2>
              <ul className="text-[11px] text-[#025195] lg:text-xs">
                <a>
                  <li>Privacy Policy</li>
                </a>
                <a>
                  <li>Terms of Services</li>
                </a>
                <a>
                  <li>Licenses</li>
                </a>
              </ul>
            </div>
          </div>
          <IoIosArrowForward className="text-[#ABABAB]" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
