import React from "react";
import { ImHome } from "react-icons/im";
import { PiPencilFill } from "react-icons/pi";

const Address: React.FC = () => {
  return (
    <div className="px-5 font-inter lg:px-24">
      <h1 className="text-4xl lg:text-5xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
        Set Address
      </h1>
      {/* Shipping Address */}
      <div className="flex w-full flex-col gap-5">
        <h3 className="text-lg lg:text-xl font-semibold">Shipping Address</h3>
        <div className="flex gap-4 shadow-custom rounded-2xl px-3 lg:px-12 py-3 w-full">
          <div className=" flex bg-[#DEF9FF] p-7 rounded-full">
            <ImHome className="text-[#025195] text-2xl" />
          </div>
          <div className="flex flex-col justify-center w-full">
            <div className="flex  justify-between w-full">
              <p className="text-lg lg:text-xl font-bold">Home</p>
              <PiPencilFill className="text-[#025195] text-xl" />
            </div>
            <p className="text-[#546879] text-xs lg:text-base">
              1234 Elm Street, Springfield, IL 62704, USA
            </p>
          </div>
        </div>
      </div>
      {/* Alterations center */}
      <div className="flex w-full flex-col gap-5 mt-10">
        <h3 className="text-lg lg:text-xl font-semibold">Alterations center</h3>
        <div className="flex gap-4 shadow-custom rounded-2xl px-3 lg:px-12 py-3 w-full">
          <div className=" flex bg-[#DEF9FF] p-7 rounded-full">
            <ImHome className="text-[#025195] text-2xl" />
          </div>
          <div className="flex flex-col justify-center w-full">
            <div className="flex  justify-between w-full">
              <p className="text-lg lg:text-xl font-bold">Office</p>
              <PiPencilFill className="text-[#025195] text-xl" />
            </div>
            <p className="text-[#546879] text-xs lg:text-base">
              123467 Elm Street, Springfield, IL 62704, USA
            </p>
          </div>
        </div>
        <div className="flex gap-4 shadow-custom rounded-2xl px-3 lg:px-12 py-3 w-full">
          <div className=" flex bg-[#DEF9FF] p-7 rounded-full">
            <ImHome className="text-[#025195] text-2xl" />
          </div>
          <div className="flex flex-col justify-center w-full">
            <div className="flex  justify-between w-full">
              <p className="text-lg lg:text-xl font-bold">College</p>
              <PiPencilFill className="text-[#025195] text-xl" />
            </div>
            <p className="text-[#546879] text-xs lg:text-base">
              12 Elm Street, Springfield, IL 62704, USA
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button className="my-10 lg:w-1/2 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 flex">
          <p>Apply</p>
        </button>
      </div>
    </div>
  );
};

export default Address;
