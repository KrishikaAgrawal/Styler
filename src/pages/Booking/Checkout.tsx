import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import CalendarModal from "./Consultation/Calendar";

import { FaShop } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { PiSealPercent } from "react-icons/pi";

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  // coupon
  const location = useLocation();
  const { state } = location; // Access passed state
  const couponCode = state?.couponCode; // Extract couponCode from state if available
  const handleCoupon = () => {
    navigate("/AddCoupon");
  };

  // Calendar
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );
  const [displayDates, setDisplayDates] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const generateDates = (centerDate: string, count: number) => {
    const dates = [];
    const center = dayjs(centerDate);
    const half = Math.floor(count / 2);
    for (let i = -half; i <= half; i++) {
      dates.push(center.add(i, "day").format("YYYY-MM-DD"));
    }
    return dates;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setDisplayDates(generateDates(selectedDate, isMobile ? 6 : 15));
  }, [selectedDate, isMobile]);

  const openCalendar = () => setIsCalendarOpen(true);
  const closeCalendar = () => setIsCalendarOpen(false);

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
    closeCalendar();
  };

  return (
    <div className="px-5 font-inter lg:px-24">
      <h1 className=" text-4xl lg:text-5xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
        Checkout Details
      </h1>

      {/* Shop details */}
      <div className="flex flex-col py-8 px-6">
        <div className="flex items-center gap-3">
          <FaShop />
          <h3 className="text-[15px] lg:text-2xl font-semibold text-[#1C1C28]">
            Shop Service
          </h3>
        </div>
        <div className="border-t border-[#025195] border-dashed my-4 lg:my-6"></div>
        <div className="flex flex-col gap-2 border-b text-[#DCDCDC] p-1">
          <h2 className="font-Gloock text-2xl text-[#025195]">Arjun Verma</h2>
          <p className="text-[#546879] font-medium">
            Custom Tailoring Consultation
          </p>
          <p className=" font-medium text-[#F86624]">Virtual Consultation</p>
          <p className="text-[#546879] font-bold">October 5, 2024, 3:00 PM</p>
        </div>
      </div>

      {/* Coupon */}
      <div className="flex flex-col">
        <div className="h-4 w-full bg-[#F7F7F7]"></div>

        {/* Conditionally render Add Coupon or Apply Coupon */}
        {!couponCode ? (
          // Add Coupon
          <div
            className="flex py-4 px-6 gap-2 items-center cursor-pointer"
            onClick={handleCoupon}
          >
            <RiDiscountPercentFill className="text-[#025195] text-2xl" />
            <div className="w-full">
              <h3 className="text-[15px] font-semibold">Add Coupon</h3>
              <p className="text-[#8F90A6] text-[10px]">View Details</p>
            </div>
            <IoIosArrowForward className=" text-2xl" />
          </div>
        ) : (
          // Apply Coupon
          <div className="flex py-4 px-6 gap-2 items-center">
            <FiCheckCircle className="text-[#05A660] text-2xl" />
            <div className="flex flex-col w-full">
              <h3 className="text-[#1C1C28] text-[15px] font-bold">
                Code {couponCode} Applied!
              </h3>
              <p className="text-[#8F90A6] text-[10px]">
                Coupon Applied Successfully
              </p>
            </div>
            <div className="flex flex-col items-end">
              <h3 className="text-[#05A660] text-xs font-bold">-$40</h3>
              <p className="text-xs font-bold text-[#025195] cursor-pointer">
                Remove
              </p>
            </div>
          </div>
        )}

        <div className="h-4 w-full bg-[#F7F7F7]"></div>
      </div>

      {/* Ideal Delivery Date */}
      <div className="flex flex-col p-6 mb-8">
        <h2 className="text-xl lg:text-2xl text-[#025195] font-Gloock ">
          Ideal Delivery Date
        </h2>
        <div className="flex flex-wrap justify-center gap-2 lg:gap-4 lg:py-4 py-2 ">
          {displayDates.map((date) => (
            <div
              key={date}
              onClick={openCalendar}
              className={`p-1 lg:py-2 w-8 lg:w-14 text-center cursor-pointer rounded-lg ${
                date === selectedDate
                  ? "bg-[#025195] text-white"
                  : "bg-gray-200"
              }`}
            >
              <div className="text-[10px] lg:text-xs lg:font-bold">
                {dayjs(date).format("dd")}
              </div>
              <div className="text-xs lg:text-lg font-semibold">
                {dayjs(date).format("DD")}
              </div>
            </div>
          ))}
        </div>
        <CalendarModal
          isOpen={isCalendarOpen}
          onClose={closeCalendar}
          onSelectDate={handleSelectDate}
        />
      </div>

      {/* Payment Methods */}
      <div className="flex flex-col">
        <div className="h-4 w-full bg-[#F7F7F7]"></div>
        <div className="flex py-4 px-6 gap-2 items-center cursor-pointer">
          <PiSealPercent className="text-[#025195] text-2xl" />
          <h3 className="text-[15px] w-full font-semibold">Payment Methods</h3>
          <div className="text-[#025195] gap-1 whitespace-nowrap flex">
            <p className=" text-xs font-bold ">View offers</p>
            <IoIosArrowForward className="" />
          </div>
        </div>

        <div className="h-4 w-full bg-[#F7F7F7]"></div>
      </div>

      {/* Payment */}
      <div className="flex flex-col p-6 text-[#1C1C28]">
        <div className="flex justify-between text-[15px]">
          <p className="">Meeting total</p>
          <p className="">3000</p>
        </div>
        <div className="border-t border-[#025195] my-4 "></div>
        <div className="flex justify-between text-lg font-bold">
          <p className="">Amount Payable</p>
          <p className="">3000</p>
        </div>
      </div>

      {/* Checkout button */}
      <div className="bg-[#025195] w-full rounded-full font-bold py-4 text-white text-center text-xl my-10">
        Checkout
      </div>
    </div>
  );
};

export default Checkout;
