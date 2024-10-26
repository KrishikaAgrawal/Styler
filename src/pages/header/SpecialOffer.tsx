import React from "react";

import SpecialOffer1 from "../../assets/header/Specialoffer1.png";
import SpecialOffer2 from "../../assets/header/Specialoffer2.png";
import SpecialOffer3 from "../../assets/header/Specialoffer3.png";
import SpecialOffer4 from "../../assets/header/Specialoffer4.png";

const SpecialOffer: React.FC = () => {
  return (
    <div className="p-5 md:p-12 font-inter">
      <h1 className="font-Gloock text-[#531A02] mb-5 md:mb-10 text-3xl md:text-5xl">
        SPECIAL OFFERS
      </h1>
      <div className="flex flex-col gap-8 md:gap-10 ">
        <div
          className="w-full bg-cover bg-center py-6 px-2 rounded-2xl"
          style={{ backgroundImage: `url(${SpecialOffer1})` }}
        >
          <div className="flex flex-col gap-1 md:gap-2 w-3/5">
            <p className="text-3xl md:text-7xl font-bold">20%</p>
            <p className="text-sm font-bold md:text-4xl">
              Bella Designs-Off Evening Dresses
            </p>
            <p className="text-[10px] md:text-xl">
              First-time customers get free alterations on their first clothing
              piece. Perfect for suits, dresses, and more.
            </p>
          </div>
        </div>
        <div
          className="w-full bg-cover bg-center py-6 px-2 rounded-2xl"
          style={{ backgroundImage: `url(${SpecialOffer2})` }}
        >
          <div className="flex flex-col gap-1 md:gap-2 w-3/5">
            <p className="text-3xl md:text-7xl font-bold">20%</p>
            <p className="text-sm font-bold md:text-4xl">
              Bella Designs-Off Evening Dresses
            </p>
            <p className="text-[10px] md:text-xl">
              First-time customers get free alterations on their first clothing
              piece. Perfect for suits, dresses, and more.
            </p>
          </div>
        </div>
        <div
          className="w-full bg-cover bg-center py-6 px-2 rounded-2xl"
          style={{ backgroundImage: `url(${SpecialOffer3})` }}
        >
          <div className="flex flex-col gap-1 md:gap-2 w-3/5">
            <p className="text-3xl md:text-7xl font-bold">20%</p>
            <p className="text-sm font-bold md:text-4xl">
              Bella Designs-Off Evening Dresses
            </p>
            <p className="text-[10px] md:text-xl">
              First-time customers get free alterations on their first clothing
              piece. Perfect for suits, dresses, and more.
            </p>
          </div>
        </div>
        <div
          className="w-full bg-cover bg-center py-6 px-2 rounded-2xl"
          style={{ backgroundImage: `url(${SpecialOffer4})` }}
        >
          <div className="flex flex-col gap-1 md:gap-2 w-3/5">
            <p className="text-3xl md:text-7xl font-bold">20%</p>
            <p className="text-sm font-bold md:text-4xl">
              Bella Designs-Off Evening Dresses
            </p>
            <p className="text-[10px] md:text-xl">
              First-time customers get free alterations on their first clothing
              piece. Perfect for suits, dresses, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
