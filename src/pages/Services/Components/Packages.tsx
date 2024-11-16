import React from "react";
import packages from "../../../assets/Services/package.png";

const Packages: React.FC = () => {
  return (
    <div>
      <h1 className="text-[#025195] font-Gloock text-2xl lg:text-4xl my-4 lg:my-8">
        Our Packages
      </h1>
      <div className="flex flex-col gap-6">
        <div className="w-full flex flex-col lg:flex-row border border-[#025195] rounded-2xl p-4 gap-4 lg:gap-16 items-center">
          <img src={packages} alt="" />
          <div className="flex flex-col">
            <h3 className="font-Gloock text-[#025195] text-sm lg:text-2xl">
              Signature Couture Package
            </h3>
            <ul className="list-disc pl-5 mt-2 text-[#807E7E] text-xs lg:text-base">
              <li>
                Personalized consultation for a custom evening gown or cocktail
                dress.
              </li>
              <li>
                Access to exclusive luxury fabrics like silk, satin, and velvet.
              </li>
              <li>Hand-embellishments such as beadwork and lace appliqué.</li>
              <li>3 fitting sessions for a perfect fit.</li>
              <li>Complimentary delivery in luxury packaging.</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row border border-[#025195] rounded-2xl p-4 gap-4 lg:gap-16 items-center">
          <img src={packages} alt="" />
          <div className="flex flex-col">
            <h3 className="font-Gloock text-[#025195] text-sm lg:text-2xl">
              Signature Couture Package
            </h3>
            <ul className="list-disc pl-5 mt-2 text-[#807E7E] text-xs lg:text-base">
              <li>
                Personalized consultation for a custom evening gown or cocktail
                dress.
              </li>
              <li>
                Access to exclusive luxury fabrics like silk, satin, and velvet.
              </li>
              <li>Hand-embellishments such as beadwork and lace appliqué.</li>
              <li>3 fitting sessions for a perfect fit.</li>
              <li>Complimentary delivery in luxury packaging.</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row border border-[#025195] rounded-2xl p-4 gap-4 lg:gap-16 items-center">
          <img src={packages} alt="" />
          <div className="flex flex-col">
            <h3 className="font-Gloock text-[#025195] text-sm lg:text-2xl">
              Signature Couture Package
            </h3>
            <ul className="list-disc pl-5 mt-2 text-[#807E7E] text-xs lg:text-base">
              <li>
                Personalized consultation for a custom evening gown or cocktail
                dress.
              </li>
              <li>
                Access to exclusive luxury fabrics like silk, satin, and velvet.
              </li>
              <li>Hand-embellishments such as beadwork and lace appliqué.</li>
              <li>3 fitting sessions for a perfect fit.</li>
              <li>Complimentary delivery in luxury packaging.</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row border border-[#025195] rounded-2xl p-4 gap-4 lg:gap-16 items-center">
          <img src={packages} alt="" />
          <div className="flex flex-col">
            <h3 className="font-Gloock text-[#025195] text-sm lg:text-2xl">
              Signature Couture Package
            </h3>
            <ul className="list-disc pl-5 mt-2 text-[#807E7E] text-xs lg:text-base">
              <li>
                Personalized consultation for a custom evening gown or cocktail
                dress.
              </li>
              <li>
                Access to exclusive luxury fabrics like silk, satin, and velvet.
              </li>
              <li>Hand-embellishments such as beadwork and lace appliqué.</li>
              <li>3 fitting sessions for a perfect fit.</li>
              <li>Complimentary delivery in luxury packaging.</li>
            </ul>
          </div>
        </div>
      </div>
      <button className="my-10 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex">
        <p className="">Book Now</p>
      </button>
    </div>
  );
};

export default Packages;
