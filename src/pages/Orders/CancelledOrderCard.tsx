import React from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

interface CancelledOrder {
  id: string;
  status: string;
  appointmentDate: string;
  appointmentTime: string;
  img: string;
  name: string;
  topic: string;
  placeOrderDate: string;
  price: string;
  QuotationSent: string;
}

const CancelledOrderCard: React.FC<{ CancelledOrderData: CancelledOrder }> = ({
  CancelledOrderData,
}) => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate("/OrderViewDetails", {
      state: { order: CancelledOrderData },
    });
  };
  return (
    <div className="font-inter rounded-lg border flex flex-col gap-3 p-4 shadow-custom-shadow mb-6">
      {/* order id and status */}
      <div className="flex items-center justify-between">
        <h3 className="text-[#7214FF] font-semibold">
          {CancelledOrderData.id}
        </h3>
        <div className="border rounded-lg text-[#E53636] border-[#E53636] bg-[#FFEAEA] p-2 font-semibold">
          {CancelledOrderData.status}
        </div>
      </div>
      {/* appointment date and time */}
      <div className="flex justify-between font-semibold text-[#546879]">
        <p className="text-xs">
          Appointment Date: {CancelledOrderData.appointmentDate}
        </p>
        <p className="text-[10px]">{CancelledOrderData.appointmentTime}</p>
      </div>
      <div className="border-b -mt-2 text-[#546879]"></div>

      {/* Order Details */}
      <div className="flex gap-4 items-center">
        <img
          src={CancelledOrderData.img}
          alt=""
          className="rounded-3xl w-[80px] h-[80px]"
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-Gloock text-[#025195] ">
            {CancelledOrderData.name}
          </h2>
          <p className="text-[#546879] font-medium text-xs">
            {CancelledOrderData.topic}
          </p>
          <p className="text-[#546879] font-bold text-xs capitalize">
            Place Order Date: {CancelledOrderData.placeOrderDate}
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
          {CancelledOrderData.price}
        </p>
      </div>

      <div className="border-b -mt-2 text-[#546879]"></div>
      {/* Quotation Sent */}
      <div className="flex justify-between">
        <p className="text-[#546879] font-semibold">
          Quotation Sent:{" "}
          <span className="text-[#E53636] italic">Accepted</span>
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

export default CancelledOrderCard;
