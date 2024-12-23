import React, { useState } from "react";
import silk from "../../assets/Shop/silk.png";

import { IoIosStar } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineCreditCard } from "react-icons/hi";

const MaterialCheckout: React.FC = () => {
  // no. of item
  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="p-5 w-full md:p-12 lg:px-36 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-10 text-3xl md:text-5xl">
        Checkout Details
      </h1>
      {/* material details */}
      <div className="flex items-center gap-4 lg:gap-12">
        <img src={silk} alt="" className="w-36 h-36 rounded-2xl" />
        <div className="flex flex-col  gap-1 lg:gap-3">
          <h2 className="text-[#025195] lg:text-2xl font-bold">Velvet</h2>
          <h3 className="font-extrabold text-[#025195] text-[8px] lg:text-base">
            LUXE FABRICS BOUTIQUE
          </h3>
          <div className="flex lg:flex-col-reverse gap-4 lg:gap-2 items-center lg:items-start">
            <div className="flex flex-col">
              <p className="text-[#025195] text-2xl font-bold lg:text-4xl">
                $ 60
              </p>
              <p className="text-[#546879] font-medium text-[10px] lg:text-base">
                Per Metres
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-3 ">
              <div className="flex gap-1">
                <IoIosStar className="lg:w-5 lg:h-5 w-3 h-3 text-[#025195]" />
                <IoIosStar className="lg:w-5 lg:h-5 w-3 h-3 text-[#025195]" />
                <IoIosStar className="lg:w-5 lg:h-5 w-3 h-3 text-[#025195]" />
                <IoIosStar className="lg:w-5 lg:h-5 w-3 h-3 text-[#025195]" />
                <IoIosStar className="lg:w-5 lg:h-5 w-3 h-3 text-[#025195]" />
              </div>
              <p className=" font-semibold text-[10px] lg:text-base ">
                (4.9/5)
              </p>
              <p className="text-[#EE3030] font-semibold text-[10px] lg:text-base">
                (75 Reviews)
              </p>
            </div>
          </div>
          {/* choose no. of item */}
          <div className="flex items-center gap-5">
            <div className="flex items-center rounded-lg border w-fit text-[#025195]">
              <button
                onClick={increment}
                className="w-5 lg:w-7 lg:text-xl text-lg"
              >
                +
              </button>
              <span className=" text-sm lg:text-base font-bold border-x lg:px-3 px-2 lg:py-1">
                {count}
              </span>
              <button
                onClick={decrement}
                className="w-5 lg:w-7 lg:text-xl text-lg"
              >
                -
              </button>
            </div>
            <div className="bg-[#071C6D] rounded-md h-5 w-5"></div>
          </div>
        </div>
      </div>

      {/* Luxe Fabrics Boutique */}
      <div className="flex flex-col mt-14 gap-6">
        <div className=" border border-dashed "></div>
        <h2 className=" text-[#1C1C28] font-bold text-xl">
          Luxe Fabrics Boutique
        </h2>
        <div className="flex gap-3">
          <FaShop className="text-2xl" />
          <p className="font-semibold">Shop Service</p>
        </div>
        <div className=" border border-dashed "></div>
        {/* Velvet Fabrics */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="font-bold text-[#1C1C28]">Velvet Fabrics</p>
            <p className=" text-[#1C1C28]">5 metres</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center rounded-lg border w-fit text-[#025195]">
              <button
                onClick={increment}
                className="w-5 lg:w-7 lg:text-xl text-lg"
              >
                +
              </button>
              <span className=" text-black text-sm lg:text-base lg:px-3 px-2 lg:py-1">
                {count}
              </span>
              <button
                onClick={decrement}
                className="w-5 lg:w-7 lg:text-xl text-lg"
              >
                -
              </button>
            </div>
            <p className="text-[#1C1C28]">$160</p>
          </div>
        </div>
        {/* Silk Chiffon */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="font-bold text-[#1C1C28]">Silk Chiffon</p>
            <p className=" text-[#1C1C28]">3 metres</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center rounded-lg border w-fit text-[#025195]">
              <button
                onClick={increment}
                className="w-5 lg:w-7 lg:text-xl text-lg"
              >
                +
              </button>
              <span className=" text-black text-sm lg:text-base lg:px-3 px-2 lg:py-1">
                {count}
              </span>
              <button
                onClick={decrement}
                className="w-5 lg:w-7 lg:text-xl text-lg"
              >
                -
              </button>
            </div>
            <p className="text-[#1C1C28]">$160</p>
          </div>
        </div>
      </div>

      {/* Delivery and payment */}
      <div className="mt-10 gap-6 flex flex-col">
        <div className="bg-[#F7F7F7] h-3"></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <HiOutlineLocationMarker className="text-[#025195] text-2xl" />
            <p className="font-bold text-[#1C1C28]">Delivery Methods</p>
          </div>
          <div className="text-[#025195] items-center flex">
            <p className=" font-bold text-xs">View offers</p>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="bg-[#F7F7F7] h-3"></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <HiOutlineCreditCard className="text-[#025195] text-2xl" />
            <p className="font-bold text-[#1C1C28]">Payment Methods</p>
          </div>
          <div className="text-[#025195] items-center flex">
            <p className=" font-bold text-xs">View offers</p>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="bg-[#F7F7F7] h-3"></div>
      </div>

      {/* amt */}
      <div className="mt-14 my-6 gap-4 flex flex-col text-[#1C1C28] lg:text-xl">
        <div className="flex justify-between">
          <p>Item total</p>
          <p className="font-bold">$112</p>
        </div>
        <div className="flex justify-between">
          <p>Coupon Discount</p>
          <p className="font-bold text-[#05A660]">-$10</p>
        </div>
        <div className="border"></div>
        <div className="flex font-bold justify-between">
          <p>Amount Payable</p>
          <p className="lg:text-4xl">$3000</p>
        </div>
      </div>

      {/* buttons */}
      <div className="flex justify-center w-full gap-4">
        <button className="my-10 w-1/2 rounded-[50px] justify-center items-center border border-[#025195] text-[#025195] lg:py-4 py-3 lg:text-xl text-lg gap-2 flex">
          <p className="">Cancel</p>
        </button>
        <button className="my-10 w-1/2 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 flex">
          <p className="">Book Now</p>
        </button>
      </div>
    </div>
  );
};

export default MaterialCheckout;
