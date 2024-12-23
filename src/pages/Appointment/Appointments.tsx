import React, { useState } from "react";
import Upcoming from "./Upcoming";
import Past from "./Past";

const Appointments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div className="p-5 md:p-24 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-10 text-3xl md:text-5xl">
        Appointments
      </h1>
      <div className="flex font-semibold text-xl lg:text-2xl w-full">
        <button
          className={`border-b flex justify-center p-3 w-1/2 mb-8 lg:mb-20 ${
            activeTab === "upcoming"
              ? "text-[#025195] border-[#025195] border-b-4"
              : "text-[#546879] border-[#546879]"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`border-b flex justify-center p-3 w-1/2  mb-8 lg:mb-20 ${
            activeTab === "past"
              ? "text-[#025195] border-[#025195] border-b-4"
              : "text-[#546879] border-[#546879]"
          }`}
          onClick={() => setActiveTab("past")}
        >
          Past
        </button>
      </div>
      {activeTab === "upcoming" ? <Upcoming /> : <Past />}
    </div>
  );
};

export default Appointments;
