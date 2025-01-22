import React from "react";

interface Transaction {
  id: string;
  date: string;
  shop: string;
  to: string;
  price: string;
}

const Recent: Transaction[] = [
  {
    id: "#1239QU678",
    date: " December 10, 2023",
    shop: "Formal Suit Alteration",
    to: "Alexander Ward",
    price: "₹16,000",
  },
  {
    id: "#1239QU674",
    date: " December 10, 2023",
    shop: "Formal Suit Alteration",
    to: "Alexander Ward",
    price: "₹16,000",
  },
  {
    id: "#1239QU673",
    date: " December 10, 2023",
    shop: "Formal Suit Alteration",
    to: "Alexander Ward",
    price: "₹16,000",
  },
  {
    id: "#1239QU672",
    date: " December 10, 2023",
    shop: "Formal Suit Alteration",
    to: "Alexander Ward",
    price: "₹16,000",
  },
  {
    id: "#1239QU671",
    date: " December 10, 2023",
    shop: "Formal Suit Alteration",
    to: "Alexander Ward",
    price: "₹16,000",
  },
];

const PaymentOverview: React.FC = () => {
  return (
    <div className="p-5 md:px-24 md:py-8 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-8 text-3xl lg:text-5xl">
        Payment Overview
      </h1>
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold">Recent Transaction</h2>
        <p className=" underline italic text-[#546879] text-xs font-bold">
          View all
        </p>
      </div>
      {/* transaction detail */}
      <div className="flex flex-col p-2 lg:p-3 gap-6">
        {Recent.map((trans) => (
          <div
            className="border border-[#546879] rounded-lg p-4 gap-4 flex flex-col"
            key={trans.id}
          >
            {/* id and date */}
            <div className="flex p-2 items-center justify-between border-b border-b-slate-400">
              <p className="text-[#7214FF] font-semibold">{trans.id}</p>
              <p className="text-xs font-semibold text-[#546879]">
                {trans.date}
              </p>
            </div>
            {/* info */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col  ">
                <p className="font-semibold">{trans.shop}</p>
                <p className="text-xs font-medium italic">to {trans.to}</p>
              </div>
              <p className="text-[#025195] text-xl font-bold">{trans.price}</p>
            </div>
            {/* button */}
            <a
              href="/TransactionHistory"
              className="w-full border rounded-full p-3 text-white bg-[#025195] items-center text-center font-medium text-sm "
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentOverview;
