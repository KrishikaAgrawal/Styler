import React from "react";
import { useLocation } from "react-router-dom";

import { MdOutlineStarPurple500 } from "react-icons/md";
// import appointment1 from "../../assets/Appointment/appointment1.png";

const AppointmentCancellation: React.FC = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="p-5 md:p-24 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-10 text-3xl md:text-5xl">
        Cancel Booking
      </h1>

      {/* Appointment card */}
      <div className="mb-6 lg:mb-9 flex w-full flex-col shadow-custom-shadow p-4 rounded-lg gap-4">
        <div className="flex justify-between items-center">
          <p
            className=" lg:text-2xl font-semibold"
            style={{
              color: state.appointment.statusColor,
            }}
          >
            {state.appointment.id}
          </p>
          <button
            className={`border rounded-lg px-6 py-2 text-xs lg:text-base font-semibold `}
            style={{
              borderColor: state.appointment.statusColor,
              color: state.appointment.statusColor,
            }}
          >
            {state.appointment.status}
          </button>
        </div>
        <div className="flex items-center gap-6">
          <img
            src={state.appointment.img}
            alt=""
            className="w-[100px] lg:w-[150px]"
          />
          <div className="flex w-full flex-col">
            <h2 className="font-Gloock text-[#025195] lg:text-2xl">
              {state.appointment.name}
            </h2>
            <p className="text-[#546879] my-2 text-xs lg:text-base font-medium">
              {state.appointment.topic}
            </p>
            <p className="text-[#546879] lg:text-base font-bold text-xs ">
              {state.appointment.date}
            </p>
            <div className="border-b my-2 w-full border-[#DCDCDC]"></div>
            <div className="flex">
              <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
              <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
              <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
              <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
            </div>
            <p className="mt-4 font-medium text-xs text-[#546879] lg:text-base">
              {state.appointment.loc}
            </p>
          </div>
        </div>
        {/* <a href={`/${state.appointment.bookingLink}`} className="w-full"> */}
        <button
          // onClick={handleClick}
          className="flex justify-center rounded-lg lg:text-xl font-semibold p-4 border w-full"
          style={{
            borderColor: state.appointment.bookingColor,
            color: state.appointment.bookingColor,
          }}
        >
          {state.appointment.booking}
        </button>
        {/* </a> */}
      </div>
      {/* Policies */}
      <div className="flex flex-col lg:flex-row lg:gap-12 gap-6 px-3 py-2">
        <div className="flex flex-col text-[15px] bg-[#FFDEDE] border border-dashed border-[#F00] lg:w-1/2 p-4 rounded-xl">
          <h3 className=" font-bold lg:text-xl">Cancellation Policy</h3>
          <p className="text-[#546879] lg:p-2 lg:text-base">
            If you cancel less than 24 hours before your booking, you may be
            charged a cancellation fee up to the full amount of the services
            booked.
          </p>
        </div>
        <div className="flex flex-col text-[15px] bg-[#E9E5FD] border border-dashed border-[#6D5BE4] lg:w-1/2 p-4 rounded-xl">
          <h3 className=" font-bold lg:text-xl">Refund Policy</h3>
          <p className="text-[#546879] lg:p-2 lg:text-base">
            If you cancel less than 24 hours before your booking, you may be
            charged a cancellation fee up to the full amount of the services
            booked.
          </p>
        </div>
      </div>
      {/* Order Summary */}
      <div className="flex flex-col my-8">
        <h2 className="text-base lg:text-2xl font-bold">Order Summary</h2>
        <div className="flex flex-col p-6">
          <div className="flex justify-between items-center">
            <p className="">Item total</p>
            <p className=" font-bold lg:text-2xl">$3010</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="">Coupon Discount</p>
            <p className=" font-bold lg:text-2xl text-[#05A660]">-$10</p>
          </div>
          <hr className="lg:my-4 my-2" />
          <div className="flex justify-between items-center">
            <p className=" font-bold">Amount Payable</p>
            <p className=" font-bold lg:text-2xl">$3000</p>
          </div>
        </div>
      </div>

      <button
        className="flex justify-center rounded-lg lg:text-xl font-semibold p-4 border w-full"
        style={{ borderColor: "#FE4B4B", color: "#FE4B4B" }}
      >
        Cancel booking
      </button>
    </div>
  );
};

export default AppointmentCancellation;
