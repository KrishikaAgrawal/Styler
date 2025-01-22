import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { MdOutlineStarPurple500 } from "react-icons/md";

const CancelledOrderPage: React.FC = () => {
  const location = useLocation();
  const { order } = location.state || {};

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/CancelledOrderViewPage", {
      state: { order: order },
    });
  };

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
          <div className="border rounded-lg text-[#7214FF] border-[#7214FF] bg-[#FAF1FF] p-2 font-semibold">
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
        <div className="border-b -mt-2 text-[#546879]"></div>
        {/* Payment */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between ">
            <p className="text-[#546879] text-[9px] lg:text-[10px] font-semibold">
              Payment Status:{" "}
              <span className="text-[#009500]">{order.paymentStatus}</span>
              {/* Transaction ID: {order.transactionID} */}
            </p>
            <p className="text-[9px] font-semibold text-[#546879] lg:text-[10px]">
              Payment Date: {order.paymentDate}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs text-[#546879] font-semibold">
              Payment Status:{" "}
              <span className="text-[#7214FF] italic">
                {order.paymentStatusPending}
              </span>
            </p>
            <p className=" italic underline text-[#F86624] font-semibold text-xs">
              View Payment
            </p>
          </div>
        </div>
        <div className="border-b -mt-2 text-[#546879]"></div>
        {/* Quotation Sent */}
        <div className="flex justify-between">
          <p className="text-[#546879] font-semibold">
            Quotation Sent:{" "}
            <span className="text-[#1AB900] italic">Accepted</span>
          </p>
        </div>
        <div className="border-b -mt-2 text-[#546879]"></div>
        <div className="flex justify-between">
          <p className="text-[#546879] font-semibold">Due Date</p>
          <p className="text-[#025195] font-semibold">December 10, 2023</p>
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

      {/* Cancellation Policy */}
      <div className="flex flex-col p-4 border border-dashed border-[#f00] bg-[#FFDEDE] rounded-2xl mb-6">
        <h3 className="text-[#1C1C28] font-bold">Cancellation Policy</h3>
        <p className="text-[#FF0000] text-[15px]">
          A full refund will be provided for cancellations made prior to
          confirming the order, with no cancellation fees applied.
        </p>
      </div>

      {/* Reason for cancellation */}
      <div className="flex flex-col gap-4 mb-6">
        <h3 className="font-Gloock text-[#025195] text-xl">
          Reason for Cancellation
        </h3>
        <div className="flex items-center gap-4">
          <input
            id="OrderedByMistake"
            type="checkbox"
            className="custom-checkbox-cancellation"
          />
          <label
            htmlFor="OrderedByMistake"
            className="font-semibold capitalize"
          >
            Ordered by Mistake
          </label>
        </div>
        <div className="flex items-center gap-4">
          <input
            id="Price"
            type="checkbox"
            className="custom-checkbox-cancellation"
          />
          <label htmlFor="Price" className="font-semibold capitalize">
            Found a Better Price Elsewhere
          </label>
        </div>
        <div className="flex items-center gap-4">
          <input
            id="Date"
            type="checkbox"
            className="custom-checkbox-cancellation"
          />
          <label htmlFor="Date" className="font-semibold capitalize">
            Delivery Date is Too Late
          </label>
        </div>
        <div className="flex items-center gap-4">
          <input
            id="Mind"
            type="checkbox"
            className="custom-checkbox-cancellation"
          />
          <label htmlFor="Mind" className="font-semibold capitalize">
            Changed My Mind
          </label>
        </div>
        <div className="flex items-center gap-4">
          <input
            id="Incorrect"
            type="checkbox"
            className="custom-checkbox-cancellation"
          />
          <label htmlFor="Incorrect" className="font-semibold capitalize">
            Product Details are Incorrect
          </label>
        </div>
        <div className="flex items-center gap-4">
          <input
            id="Duplicate"
            type="checkbox"
            className="custom-checkbox-cancellation"
          />
          <label htmlFor="Duplicate" className="font-semibold capitalize">
            Duplicate Order Placed
          </label>
        </div>
      </div>

      {/* Order Summary */}
      <div className="flex flex-col  mb-6">
        <h3 className="font-Gloock text-[#025195] text-xl">Order Summary</h3>
        <div className="flex flex-col gap-2 p-3 text-[#1C1C28] text-[15px]">
          <div className="flex justify-between">
            <p>Total</p>
            <p className="">₹15,000</p>
          </div>
          <div className="flex justify-between">
            <p>Cancellation fee</p>
            <p className="text-[#05A660]">-$0</p>
          </div>
          <div className="border-t"></div>
          <div className="flex justify-between text-lg font-bold">
            <p>Amount Payable</p>
            <p>₹15,000</p>
          </div>
        </div>
      </div>

      {/* button */}
      <button
        onClick={handleCancel}
        className="w-full lg:p-4 p-3 border border-[#FE4B4B] text-[#FE4B4B] font-semibold lg:text-xl text-base rounded-lg text-center lg:mt-5"
      >
        Cancel Order
      </button>
    </div>
  );
};

export default CancelledOrderPage;
