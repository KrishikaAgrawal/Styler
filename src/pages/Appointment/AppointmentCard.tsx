import React from "react";
// import appointment1 from "../../assets/Appointment/appointment1.png";

// import { Link } from "react-router-dom";

import { MdOutlineStarPurple500 } from "react-icons/md";
// import CustomLink from "./CustomLink";

interface Appointment {
  id: string;
  status: string;
  statusColor: string;
  statusBg: string;
  img: string;
  name: string;
  topic: string;
  date: string;
  loc: string;
  booking: string;
  bookingColor: string;
  bookingLink: string;
}
const AppointmentCard: React.FC<{ data: Appointment }> = ({ data }) => {
  return (
    <div>
      <div className="mb-6 lg:mb-9 flex w-full flex-col shadow-custom-shadow p-4 rounded-lg gap-4">
        <div className="flex justify-between items-center">
          <p
            className=" lg:text-2xl font-semibold"
            style={{
              color: data.statusColor,
            }}
          >
            {data.id}
          </p>
          <button
            className={`border rounded-lg px-6 py-2 text-xs lg:text-base font-semibold `}
            style={{
              borderColor: data.statusColor,
              color: data.statusColor,
            }}
          >
            {data.status}
          </button>
        </div>
        <div className="flex items-center gap-6">
          <img src={data.img} alt="" className="w-[100px] lg:w-[150px]" />
          <div className="flex w-full flex-col">
            <h2 className="font-Gloock text-[#025195] lg:text-2xl">
              {data.name}
            </h2>
            <p className="text-[#546879] my-2 text-xs lg:text-base font-medium">
              {data.topic}
            </p>
            <p className="text-[#546879] lg:text-base font-bold text-xs ">
              {data.date}
            </p>
            <div className="border-b my-2 w-full border-[#DCDCDC]"></div>
            <div className="flex">
              <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
              <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
              <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
              <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
            </div>
            <p className="mt-4 font-medium text-xs text-[#546879] lg:text-base">
              {data.loc}
            </p>
          </div>
        </div>
        <a href={`/${data.bookingLink}`} className="w-full">
          <button
            className="flex justify-center rounded-lg lg:text-xl font-semibold p-4 border w-full"
            style={{ borderColor: data.bookingColor, color: data.bookingColor }}
          >
            {data.booking}
          </button>
        </a>
        {/* <CustomLink
          to={{
            pathname: `/AppointmentCancellation`,
            state: { appointment: data },
          }}
          className="w-full"
        >
          <button
            className="flex justify-center rounded-lg lg:text-xl font-semibold p-4 border w-full"
            style={{ borderColor: data.bookingColor, color: data.bookingColor }}
          >
            {data.booking}
          </button>
        </CustomLink> */}
        {/* <Link
          to={{
            pathname: `/${data.bookingLink}`,
            state: { appointment: data },
          }}
          className="w-full"
        >
          <button
            className="flex justify-center rounded-lg lg:text-xl font-semibold p-4 border w-full"
            style={{ borderColor: data.bookingColor, color: data.bookingColor }}
          >
            {data.booking}
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default AppointmentCard;
