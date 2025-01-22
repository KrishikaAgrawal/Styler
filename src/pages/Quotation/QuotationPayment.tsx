import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import StylerQuotation from "./StylerQuotation";
import SuccessCard from "./SuccessCard";

import { RiDiscountPercentFill } from "react-icons/ri";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const QuotationPayment: React.FC = () => {
  const location = useLocation();
  const { appointment, order } = location.state || {};

  // success card
  const [isCardOpen, setIsCardOpen] = useState(false);
  return (
    <div className="p-5 md:px-24 md:py-16 font-inter">
      <div className="shadow-custom-shadow p-4  flex flex-col gap-6 rounded-lg mb-6">
        {/* appointment container */}
        <div className="flex w-full flex-col gap-4 lg:gap-0">
          <div className="flex justify-between items-center">
            <p className=" lg:text-2xl font-semibold text-[#546879]">
              {appointment.id}
            </p>
            <button className="border rounded-lg px-4 py-[6px] text-xs lg:text-base font-semibold text-[#546879] bg-[#F4F2F2] border-[#546879]">
              {appointment.status}
            </button>
          </div>
          <div className="flex items-center gap-6">
            <img
              src={appointment.img}
              alt=""
              className="w-[100px] lg:w-[130px]"
            />
            <div className="flex w-full flex-col">
              <h2 className="font-Gloock text-[#025195] lg:text-2xl">
                {appointment.name}
              </h2>
              <p className="text-[#546879] my-1 text-xs lg:text-base font-medium">
                {appointment.topic}
              </p>
              <p className="text-[#546879] lg:text-base font-bold text-xs ">
                {appointment.date}
              </p>
              <div className="border-b my-2 w-full border-[#DCDCDC]"></div>
              <div className="flex">
                <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
              </div>
              <p className="mt-2 font-medium text-xs text-[#546879] lg:text-base">
                {appointment.loc}
              </p>
            </div>
          </div>
        </div>
        {/* order container */}
        <div className="rounded-lg border border-[#025195] flex flex-col gap-3 p-4 mb-6">
          {/* order id and status */}
          <div className="flex items-center justify-between">
            <h3 className="text-[#7214FF] font-semibold">{order.id}</h3>
            <div className="border rounded-lg text-[#F86624] border-[#F86624] text-xs lg:text-base bg-[#FFF4EF] p-2 font-semibold">
              {order.status}
            </div>
          </div>
          {/* appointment date and time */}
          <div className="flex justify-between font-semibold text-[#546879]">
            <p className="text-xs">Appointment Date: {order.appointmentDate}</p>
            <p className="text-[10px]">{order.appointmentTime}</p>
          </div>
          <div className="border-b -mt-2 text-[#546879]"></div>
          {/* Order Details */}
          <div className="flex gap-4 items-center">
            <img
              src={order.img}
              alt=""
              className="rounded-3xl w-[80px] h-[80px]"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-Gloock text-[#025195] ">{order.name}</h2>
              <p className="text-[#546879] font-medium text-xs">
                {order.topic}
              </p>
              <p className="text-[#546879] font-bold text-xs capitalize">
                Place Order Date: {order.placeOrderDate}
              </p>
              <p className="text-[#025195] text-[10px] font-semibold italic">
                Delivered to Address
              </p>
              <div className="flex">
                <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
              </div>
            </div>
          </div>
          <div className="border-b -mt-2 text-[#546879]"></div>
          {/* Price */}
          <div className="flex items-center">
            <p className="w-1/2 text-[#546879] font-semibold text-xs">
              Price:{" "}
            </p>
            <p className="w-1/2 text-[#025195] font-extrabold text-xl lg:text-right">
              {order.price}
            </p>
          </div>
          {/* Payment */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between ">
              <p className="text-[#546879] font-semibold  text-xs lg:text-base">
                Payment Status:{" "}
                <span className="text-[#7214FF]">{order.paymentStatus}</span>
              </p>
            </div>
          </div>
          {/* Quotation */}
          <div className="flex justify-between">
            <p className="text-[#546879] font-semibold text-xs lg:text-base">
              Quotation Sent:{" "}
              <span className="text-[#E53636] italic">Accepted</span>
            </p>
          </div>
          {/* due date */}
          <div className="border-b -mt-2 text-[#546879]"></div>
          <div className="flex justify-between  text-xs lg:text-base">
            <p className="text-[#546879] font-semibold">Due Date</p>
            <p className="text-[#025195] font-semibold">December 10, 2023</p>
          </div>
        </div>
      </div>
      <StylerQuotation />

      {/* offers */}
      <div className="grid grid-cols-2 gap-4 my-10">
        <div className="flex flex-col border border-[#025195] rounded-lg lg:p-4 p-2 justify-center ">
          <div className="flex gap-3 items-center text-2xl">
            <RiDiscountPercentFill className="text-[#025195]" />
            <p className="font-bold text-sm lg:text-xl">50% off</p>
          </div>
          <p className="text-xs lg:text-base">use code FREE50</p>
        </div>
        <div className="flex flex-col border border-[#025195] rounded-lg lg:p-4 p-2 justify-center ">
          <div className="flex gap-3 items-center text-2xl">
            <RiDiscountPercentFill className="text-[#025195]" />
            <p className="font-bold text-sm lg:text-xl">
              60% off on Debit Card
            </p>
          </div>
          <p className="text-xs lg:text-base">No coupon required</p>
        </div>
        <div className="flex flex-col border border-[#025195] rounded-lg lg:p-4 p-2 justify-center ">
          <div className="flex gap-3 items-center text-2xl">
            <RiDiscountPercentFill className="text-[#025195]" />
            <p className="font-bold text-sm lg:text-xl">50% off</p>
          </div>
          <p className="text-xs lg:text-base">use code FREE50</p>
        </div>
        <div className="flex flex-col border border-[#025195] rounded-lg lg:p-4 p-2 justify-center ">
          <div className="flex gap-3 items-center text-2xl">
            <RiDiscountPercentFill className="text-[#025195]" />
            <p className="font-bold text-sm lg:text-xl">
              60% off on Debit Card
            </p>
          </div>
          <p className="text-xs lg:text-base">No coupon required</p>
        </div>
      </div>
      {/* button */}
      <button
        onClick={() => setIsCardOpen(true)}
        className="flex rounded-lg  gap-5 text-white font-semibold w-full items-center p-4 justify-center bg-[#025195] cursor-pointer"
      >
        <p>Pay for Order</p>
        <FaArrowRightLong />
      </button>
      {/* Success Card */}
      {isCardOpen && <SuccessCard onClose={() => setIsCardOpen(false)} />}
    </div>
  );
};

export default QuotationPayment;
