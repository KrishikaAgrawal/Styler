import React from "react";
import "../../index.css";

import { FaCheckCircle } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { GiDress } from "react-icons/gi";

const Notification: React.FC = () => {
  return (
    <>
      <div className="p-5 md:p-12 font-inter ">
        <div className="mb-6 md:mb-10">
          <h1 className="font-semibold text-xl md:text-3xl mb-4">Today</h1>
          <div className="flex flex-col gap-4">
            <div className="flex p-3 gap-4 items-center shadow-custom rounded-2xl">
              <div className="bg-[#FFF2ED] rounded-full h-fit">
                <FaCheckCircle className="w-6 h-6  text-[#5A3F2C] rounded-full m-4" />
              </div>
              <div className="flex flex-col ">
                <p className="font-bold text-lg md:text-xl">
                  Your Order is Ready!
                </p>
                <p className="text-[#7C7C7C] text-xs md:text-base">
                  Your custom suit is now complete and ready for pickup.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-10">
          <h1 className="font-semibold text-xl md:text-3xl mb-4">Tomorrow</h1>
          <div className="flex flex-col gap-4">
            <div className="flex p-3 gap-4 items-center shadow-custom rounded-2xl">
              <div className="bg-[#FFF2ED] rounded-full h-fit">
                <FaCalendarDay className="w-6 h-6  text-[#5A3F2C]  m-4" />
              </div>
              <div className="flex flex-col ">
                <p className="font-bold text-lg md:text-xl">
                  Appointment Reminder
                </p>
                <p className="text-[#7C7C7C] text-xs md:text-base">
                  Your fitting appointment with Luxe Tailor is tomorrow at 3 PM
                </p>
              </div>
            </div>
            <div className="flex p-3 gap-4 items-center shadow-custom rounded-2xl">
              <div className="bg-[#FFF2ED] rounded-full h-fit">
                <RiDiscountPercentFill className="w-6 h-6  text-[#5A3F2C] m-4" />
              </div>
              <div className="flex flex-col  ">
                <p className="font-bold text-lg md:text-xl">
                  Exclusive Discount
                </p>
                <p className="text-[#7C7C7C] text-xs md:text-base">
                  Enjoy 20% off your next alteration service for a limited time!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-10">
          <h1 className="font-semibold text-xl md:text-3xl mb-4">
            September 05, 2024
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex p-3 gap-4 items-center shadow-custom rounded-2xl">
              <div className="bg-[#FFF2ED] rounded-full h-fit">
                <GiDress className="w-6 h-6  text-[#5A3F2C]  m-4" />
              </div>
              <div className="flex flex-col ">
                <p className="font-bold text-lg md:text-xl">
                  New Collection Alert{" "}
                </p>
                <p className="text-[#7C7C7C] text-xs md:text-base">
                  Bella Designs just launched a new summer collection, check it
                  out!
                </p>
              </div>
            </div>
            <div className="flex p-3 gap-4 items-center shadow-custom rounded-2xl">
              <div className="bg-[#FFF2ED] rounded-full h-fit">
                <MdLocalShipping className="w-6 h-6  text-[#5A3F2C] m-4" />
              </div>
              <div className="flex flex-col  ">
                <p className="font-bold text-lg md:text-xl">Order Shipped</p>
                <p className="text-[#7C7C7C] text-xs md:text-base">
                  Your order #7894 has been shipped and is on its way to you.
                </p>
              </div>
            </div>
            <div className="flex p-3 gap-4 items-center shadow-custom rounded-2xl">
              <div className="bg-[#FFF2ED] rounded-full h-fit">
                <IoPerson className="w-6 h-6  text-[#5A3F2C] m-4" />
              </div>
              <div className="flex flex-col  ">
                <p className="font-bold text-lg md:text-xl">Profile Updated</p>
                <p className="text-[#7C7C7C] text-xs md:text-base">
                  Your profile and measurements have been successfully updated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
