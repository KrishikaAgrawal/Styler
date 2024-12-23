import React from "react";
import notFound from "../../assets/Services/notFound.png";

const NoAppointments: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-5 md:px-12 font-inter pb-60 ">
      <img src={notFound} alt="" className="" />
      <p className=" text-[#025195] font-bold text-3xl text-center lg:text-4xl mt-10 mb-4">
        You don't have an appointment yet!
      </p>
      <p className="text-[#546879] font-medium  lg:text-2xl text-center text-sm">
        {" "}
        You don't have an active orders at this time
      </p>
    </div>
  );
};

export default NoAppointments;
