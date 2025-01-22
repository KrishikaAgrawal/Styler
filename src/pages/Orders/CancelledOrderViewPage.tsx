import React from "react";
import { useLocation } from "react-router-dom";

import { MdOutlineStarPurple500 } from "react-icons/md";

const CancelledOrderViewPage: React.FC = () => {
  const location = useLocation();
  const { order } = location.state || {};

  return (
    <div className="p-5 md:px-24 md:py-16 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-8 text-3xl md:text-[44px]">
        Cancelled Orders
      </h1>

      {/* Order card */}
      <div className="rounded-lg border flex flex-col gap-3 p-4 border-[#025195] mb-6 ">
        {/* order id and status */}
        <div className="flex items-center justify-between">
          <h3 className="text-[#7214FF] font-semibold">{order.id}</h3>
          <div className="border rounded-lg text-[#F00] border-[#F00] bg-[#FFEAEA] p-2 font-semibold">
            Cancelled orders
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
        <div className="border-b -mt-2 text-[#546879]"></div>
        {/* Payment */}
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#546879] font-semibold">
            Payment Status:{" "}
            <span className="text-[#7214FF] italic">Pending</span>
          </p>

          <p className="text-xs text-[#546879] font-semibold">
            Advance Payment Status:{" "}
            <span className="text-[#FF7A00] italic">50%</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#546879] font-semibold text-xs">
            Quotation Sent:{" "}
            <span className="text-[#E53636] italic"> Not Accepted</span>
          </p>
        </div>
        <div className="border-b -mt-2 text-[#546879]"></div>
        <div className="flex justify-between">
          <p className="text-[#546879] font-semibold">Due Date</p>
          <p className="text-[#025195] font-semibold">December 10, 2023</p>
        </div>
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

export default CancelledOrderViewPage;
