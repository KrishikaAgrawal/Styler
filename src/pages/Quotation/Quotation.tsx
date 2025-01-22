import React, { useState } from "react";
import Pending from "./Pending";
// import Paid from "./Paid";

const Quotation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Pending" | "Paid">("Pending");

  return (
    <div className="p-5 md:px-24 md:py-16 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-8 text-3xl md:text-[44px]">
        View Quotation Details
      </h1>
      <div className="flex font-semibold text-xl w-full">
        <button
          className={`border-b flex justify-center p-3 w-1/2 mb-8 lg:mb-10 ${
            activeTab === "Pending"
              ? "text-[#025195] border-[#025195] border-b-4"
              : "text-[#546879] border-[#546879]"
          }`}
          onClick={() => setActiveTab("Pending")}
        >
          Pending
        </button>
        <button
          className={`border-b flex justify-center p-3 w-1/2  mb-8 lg:mb-10 ${
            activeTab === "Paid"
              ? "text-[#025195] border-[#025195] border-b-4"
              : "text-[#546879] border-[#546879]"
          }`}
          onClick={() => setActiveTab("Paid")}
        >
          Paid
        </button>
      </div>
      {activeTab === "Pending" ? <Pending /> : <Pending />}
    </div>
  );
};

export default Quotation;
