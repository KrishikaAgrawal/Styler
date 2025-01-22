import React from "react";
import { useLocation } from "react-router-dom";

import { MdOutlineStarPurple500 } from "react-icons/md";

const OrderViewDetails: React.FC = () => {
  const location = useLocation();
  const { order } = location.state || {};

  return (
    <div className="p-5 md:px-24 md:py-16 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-8 text-3xl md:text-[44px]">
        View Order Details
      </h1>
      {/* order card */}
      <div className=" rounded-lg border flex flex-col gap-3 p-4 border-[#025195] mb-6 ">
        {/* order id and status */}
        <div className="flex items-center justify-between">
          <h3 className="text-[#7214FF] font-semibold">{order.id}</h3>
          <div className="border rounded-lg text-[#1AB900] border-[#1AB900] bg-[#EAFFE6] p-2 font-semibold">
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
            <p className="text-[#546879] font-medium text-xs">{order.topic}</p>
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
          <p className="w-1/2 text-[#546879] font-semibold text-xs">Price: </p>
          <p className="w-1/2 text-[#025195] font-extrabold text-xl lg:text-right">
            {order.price}
          </p>
        </div>
        {/* Rating */}
        <div className="flex justify-between">
          <h3 className="text-[#546879] font-semibold">Ratings</h3>
          <div className="flex">
            <MdOutlineStarPurple500 className="text-[#FFCE31] text-xl " />
            <MdOutlineStarPurple500 className="text-[#FFCE31] text-xl " />
            <MdOutlineStarPurple500 className="text-[#FFCE31] text-xl " />
            <MdOutlineStarPurple500 className="text-[#FFCE31] text-xl " />
          </div>
        </div>
      </div>

      {/* Payment Info */}
      <div className=" rounded-lg border flex flex-col gap-3 p-4 border-[#025195] mb-6 font-semibold text-[#546879]">
        <h3 className="font-semibold text-xl text-[#232321]">Payment Info</h3>
        <p className="text-[#7214FF] ">Transaction ID: TXN897654321</p>
        <p className="">
          Payment Status:{" "}
          <span className=" italic text-[#1AB900]">Successful(100%)</span>
        </p>
        <p className="">Master Card **** **** 6557</p>
        <p className="">Phone: +91 904 231 1212</p>
        <p className="">
          Advance Payment Status:{" "}
          <span className="text-[#FF7A00] italic font-extrabold">100%</span>
        </p>
        <p className="">Payment Date: Oct 15, 2025</p>
      </div>

      {/* Actions */}
      <div className=" rounded-lg border flex flex-col gap-3 p-4 border-[#025195] mb-6 ">
        <h3 className="text-[#025195] font-semibold text-xl">Actions</h3>
        <li className="font-semibold">
          Download Invoice:
          <span className=" italic text-[#025195] font-medium">
            {" "}
            [Download PDF]
          </span>
        </li>
      </div>
    </div>
  );
};

export default OrderViewDetails;
