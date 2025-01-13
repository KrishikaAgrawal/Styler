import React from "react";
import { useLocation } from "react-router-dom";

import { MdOutlineStarPurple500 } from "react-icons/md";
// import appointment1 from "../../assets /Appointment/appointment1.png";

const GiveFeedback: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="p-5 md:p-24 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-10 text-3xl md:text-5xl">
        Give Feedback
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

      {/* Rating */}
      <div className="flex flex-col border gap-2 border-[#546879] rounded-md p-4">
        <h2 className="text-[#025195] lg:text-xl font-semibold">
          Your Ratings
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex">
            <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
            <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
            <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
            <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
          </div>
          <p className="border border-[#546879] rounded-md px-3 font-semibold">
            4.4
          </p>
        </div>
      </div>

      {/* Comment */}
      <h2 className="text-[#025195] lg:text-xl font-semibold mt-8">
        Your Comment
      </h2>
      <textarea
        name=""
        placeholder="add your comment"
        className="rounded-2xl bg-[#FCFCFC] p-4 h-48 w-full border-2 mb-10 border-[#EFEEEE] align-text-top"
      />
      <button
        className="flex justify-center rounded-lg lg:text-xl font-semibold p-4 border w-full"
        style={{ borderColor: "#546879", color: "#546879" }}
      >
        Rescheduled Booking
      </button>
    </div>
  );
};

export default GiveFeedback;
