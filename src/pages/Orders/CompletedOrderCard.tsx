import React from "react";

import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

interface CompletedOrder {
  id: string;
  status: string;
  appointmentDate: string;
  appointmentTime: string;
  img: string;
  name: string;
  topic: string;
  placeOrderDate: string;
  price: string;
  transactionID: string;
  paymentStatus: string;
  paymentDate: string;
}

const CompletedOrderCard: React.FC<{ CompletedOrderData: CompletedOrder }> = ({
  CompletedOrderData,
}) => {
  return (
    <div className="font-inter rounded-lg border flex flex-col gap-3 p-4 shadow-custom-shadow mb-6 ">
      {/* order id and status */}
      <div className="flex items-center justify-between">
        <h3 className="text-[#7214FF] font-semibold">
          {CompletedOrderData.id}
        </h3>
        <div className="border rounded-lg text-[#1AB900] border-[#1AB900] bg-[#EAFFE6] p-2 font-semibold">
          {CompletedOrderData.status}
        </div>
      </div>
      {/* appointment date and time */}
      <div className="flex justify-between font-semibold text-[#546879]">
        <p className="text-xs">
          Appointment Date: {CompletedOrderData.appointmentDate}
        </p>
        <p className="text-[10px]">{CompletedOrderData.appointmentTime}</p>
      </div>
      <div className="border-b -mt-2 text-[#546879]"></div>

      {/* Order Details */}
      <div className="flex gap-4 items-center">
        <img
          src={CompletedOrderData.img}
          alt=""
          className="rounded-3xl w-[80px] h-[80px]"
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-Gloock text-[#025195] ">
            {CompletedOrderData.name}
          </h2>
          <p className="text-[#546879] font-medium text-xs">
            {CompletedOrderData.topic}
          </p>
          <p className="text-[#546879] font-bold text-xs capitalize">
            Place Order Date: {CompletedOrderData.placeOrderDate}
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
          {CompletedOrderData.price}
        </p>
      </div>
      {/* Payment */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between ">
          <p className="text-[#7214FF] text-[9px] lg:text-[10px] font-semibold">
            Transaction ID: {CompletedOrderData.transactionID}
          </p>
          <p className="text-[9px] font-semibold text-[#546879] lg:text-[10px]">
            Payment Status:
            <span className="text-[#1AB900]">
              {" "}
              {CompletedOrderData.paymentStatus}
            </span>
          </p>
        </div>
        <p className="text-xs text-[#546879] font-semibold">
          Payment Date: {CompletedOrderData.paymentDate}
        </p>
      </div>
      <div className="border-b -mt-2 text-[#546879]"></div>
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
      {/* details button */}
      <div className="flex rounded-full bg-[#025195] gap-5 text-white font-semibold text-xs w-full items-center p-4 justify-center">
        <p>View Details</p>
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default CompletedOrderCard;
