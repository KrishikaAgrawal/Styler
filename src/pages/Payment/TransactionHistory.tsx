import React from "react";

interface Transaction {
  id: string;
  date: string;
  shop: string;
  by: string;
  price: string;
  paymentStatus: string;
  // statusColor: string;
}

const History: Transaction[] = [
  {
    id: "#1239QU678",
    date: " December 10, 2023",
    shop: "Formal Suit Alteration",
    by: "Alexander Ward",
    price: "₹16,000",
    paymentStatus: "Successful(100%)",
    // statusColor: "",
  },
  {
    id: "#1239QU674",
    date: " December 10, 2023",
    shop: "Formal Suit Alteration",
    by: "Alexander Ward",
    price: "₹16,000",
    paymentStatus: "Pending(50%)",
    // statusColor: "",
  },
  {
    id: "#1239QU671",
    date: " December 10, 2023",
    shop: "Formal Suit Alteration",
    by: "Alexander Ward",
    price: "₹16,000",
    paymentStatus: "Successful(100%)",
    // statusColor: "",
  },
];
const TransactionHistory: React.FC = () => {
  return (
    <div className="p-5 md:px-24 md:py-8 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-8 text-3xl lg:text-5xl">
        Transaction History
      </h1>
      {/* transaction detail */}
      <div className="flex flex-col p-2 lg:p-3 gap-6">
        {History.map((trans) => (
          <div
            className="border border-[#546879] rounded-lg p-4 gap-4 flex flex-col"
            key={trans.id}
          >
            {/* id and date */}
            <div className="flex p-2 items-center justify-between border-b border-slate-400">
              <p className="text-[#7214FF] font-semibold">{trans.id}</p>
              <p className="text-xs font-semibold text-[#546879]">
                {trans.date}
              </p>
            </div>
            {/* info */}
            <div className="flex justify-between items-center ">
              <div className="flex flex-col  ">
                <p className="font-semibold">{trans.shop}</p>
                <p className="text-xs font-medium italic">to {trans.by}</p>
              </div>
              <p className="text-[#025195] text-xl font-bold">{trans.price}</p>
            </div>
            <div className="border-b border-slate-400"></div>
            {/* status */}
            <p className="text-[#546879] font-semibold">
              Payment Status:{" "}
              <span className="text-[#1AB900] italic">
                {trans.paymentStatus}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
