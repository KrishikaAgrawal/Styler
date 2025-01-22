import React from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

interface DuePayment {
  id: string;
  status: string;
  appointmentDate: string;
  appointmentTime: string;
  img: string;
  name: string;
  topic: string;
  placeOrderDate: string;
  price: string;
  paymentStatus: string;
  paymentDate: string;
  paymentStatusPending: string;
  QuotationSent: string;
}

const DuePaymentCard: React.FC<{ DuePaymentData: DuePayment }> = ({
  DuePaymentData,
}) => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate("/DuePaymentOrderViewDetails", {
      state: { order: DuePaymentData },
    });
  };
  return (
    <div className="font-inter rounded-lg border flex flex-col gap-3 p-4 shadow-custom-shadow mb-6">
      {/* order id and status */}
      <div className="flex items-center justify-between">
        <h3 className="text-[#7214FF] font-semibold">{DuePaymentData.id}</h3>
        <div className="border rounded-lg text-[#7214FF] border-[#7214FF] bg-[#FAF1FF] p-2 font-semibold">
          {DuePaymentData.status}
        </div>
      </div>
      {/* appointment date and time */}
      <div className="flex justify-between font-semibold text-[#546879]">
        <p className="text-xs">
          Appointment Date: {DuePaymentData.appointmentDate}
        </p>
        <p className="text-[10px]">{DuePaymentData.appointmentTime}</p>
      </div>
      <div className="border-b -mt-2 text-[#546879]"></div>

      {/* Order Details */}
      <div className="flex gap-4 items-center">
        <img
          src={DuePaymentData.img}
          alt=""
          className="rounded-3xl w-[80px] h-[80px]"
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-Gloock text-[#025195] ">{DuePaymentData.name}</h2>
          <p className="text-[#546879] font-medium text-xs">
            {DuePaymentData.topic}
          </p>
          <p className="text-[#546879] font-bold text-xs capitalize">
            Place Order Date: {DuePaymentData.placeOrderDate}
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
          {DuePaymentData.price}
        </p>
      </div>
      <div className="border-b -mt-2 text-[#546879]"></div>
      {/* Payment */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between ">
          <p className="text-[#546879] text-[9px] lg:text-[10px] font-semibold">
            Payment Status:{" "}
            <span className="text-[#009500]">
              {DuePaymentData.paymentStatus}
            </span>
            {/* Transaction ID: {DuePaymentData.transactionID} */}
          </p>
          <p className="text-[9px] font-semibold text-[#546879] lg:text-[10px]">
            Payment Date: {DuePaymentData.paymentDate}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs text-[#546879] font-semibold">
            Payment Status:{" "}
            <span className="text-[#7214FF] italic">
              {DuePaymentData.paymentStatusPending}
            </span>
          </p>
          <p className=" italic underline text-[#F86624] font-semibold text-xs">
            View Payment
          </p>
        </div>
      </div>
      <div className="border-b -mt-2 text-[#546879]"></div>
      {/* Rating */}
      <div className="flex justify-between">
        <p className="text-[#546879] font-semibold">
          Quotation Sent:{" "}
          <span className="text-[#1AB900] italic">Accepted</span>
        </p>
      </div>
      {/* details button */}
      <button
        onClick={handleDetails}
        className="flex rounded-full bg-[#025195] gap-5 text-white font-semibold text-xs w-full items-center p-4 justify-center"
      >
        <p>View Details</p>
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default DuePaymentCard;
