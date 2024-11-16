import React from "react";

import designerDetails from "../../../assets/Services/designerDetails.png";

import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";
import { FaRegShareSquare } from "react-icons/fa";

const Designer: React.FC = () => {
  return (
    <div className="">
      <img
        className="py-7 h-1/2 lg:h-fit object-cover  rounded-xl"
        src={designerDetails}
        alt=""
      />

      <div className="font-inter">
        <div>
          {/* About the designer */}
          <div>
            <div className="flex justify-between flex-col-reverse lg:flex-row gap-4 lg:gap-0">
              <h1 className=" text-3xl lg:text-4xl text-[#025195] font-Gloock ">
                Aria Couture
              </h1>
              <div className="flex lg:grid grid-cols-3 gap-2 ">
                <p className="flex justify-center text-xs lg:text-base items-center border-2 rounded-lg py-2 px-2 font-semibold text-[#025195] bg-[#DEF9FF] border-[#025195]">
                  NEW YORK, USA
                </p>
                <p className="flex justify-center text-xs lg:text-base items-center border-2 rounded-lg py-2 px-2 font-semibold text-[#0B1957] bg-[#D9E0FF] border-[#0B1957]">
                  DESIGNER
                </p>
                <p className="flex justify-center text-xs lg:text-base items-center rounded-2xl lg:rounded-lg py-2 px-8 lg:px-2 font-semibold text-white bg-[#75C44C]">
                  OPEN
                </p>
              </div>
            </div>

            <p className="text-[#777777] text-sm lg:text-lg py-4">
              456 Oak Street, Cityville, CA 90210
            </p>

            <div className="flex gap-1 mr-14">
              <IoIosStar className="w-5 h-5 text-[#025195]" />
              <IoIosStar className="w-5 h-5 text-[#025195]" />
              <IoIosStar className="w-5 h-5 text-[#025195]" />
              <IoIosStarHalf className="w-5 text-[#025195] h-5" />

              <p className="text-[#EE3030] font-semibold text-xs lg:text-base pl-10">
                (75) Reviews
              </p>
            </div>
          </div>
          {/* Links */}
          <div className="flex justify-around my-6">
            <div className="flex flex-col items-center gap-2 ">
              <FiGlobe className="text-[#025195] text-2xl lg:text-5xl" />
              <p className="lg:font-bold text-[10px] lg:text-xl text-[#025195]">
                Website
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MdCall className="text-[#025195] text-2xl lg:text-5xl" />
              <p className="lg:font-bold text-[10px] lg:text-xl text-[#025195]">
                Call
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MdOutlineLocationOn className="text-[#025195] text-2xl lg:text-5xl" />
              <p className="lg:font-bold text-[10px] lg:text-xl text-[#025195]">
                Direction
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IoIosChatboxes className="text-[#025195] text-2xl lg:text-5xl" />
              <p className="lg:font-bold text-[10px] lg:text-xl text-[#025195]">
                Chat
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaRegShareSquare className="text-[#025195] text-2xl lg:text-5xl" />
              <p className="lg:font-bold text-[10px] lg:text-xl text-[#025195]">
                Share
              </p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Designer;
