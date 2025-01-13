// import React from "react";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { PiPencilFill } from "react-icons/pi";

interface DisplayLoc {
  address: string;
  landmark: string;
}

import yourDesigner from "../../../assets/Services/order/yourDesigner.png";
const InPersonConsultationConfirm: React.FC = () => {
  const location = useLocation();
  const { selectedDate, selectedTime } = location.state || {};
  const { chosenAddress } = location.state || {};

  const [loc, setLoc] = useState<DisplayLoc>({
    address: "1234 Elm Street, Springfield, IL 62704, USA",
    landmark: "Near Central Park",
  });
  console.log(chosenAddress);

  useEffect(() => {
    if (chosenAddress) {
      setLoc({
        address: chosenAddress.address,
        landmark: chosenAddress.landmark,
      });
    }
  }, [chosenAddress]);

  console.log(loc);
  const navigate = useNavigate();
  // Book button
  const handleBookButton = () => {
    navigate("/Checkout");
  };

  // Cancel button
  const handleCancelButton = () => {
    navigate("/Booking");
  };

  // Change location button
  const handleLocation = () => {
    navigate("/Address");
  };
  return (
    <div className="px-5 font-inter lg:px-24">
      {/* In-Person Consultation */}
      <h1 className=" text-4xl lg:text-5xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
        In-Person Consultation
      </h1>

      {/* Details */}
      <div className="flex flex-col gap-6">
        <p className="text-base lg:text-xl font-medium">
          <span className="text-[#025195] font-Gloock">Duration: </span>
          Typically 45-60 minutes
        </p>
        <div className="text-base lg:text-xl ">
          <h1 className="text-[#025195] font-Gloock text-lg lg:text-2xl ">
            Benefits:{" "}
          </h1>
          <ul className="list-disc pl-5 font-medium">
            <li>
              Face-to-face interaction for more personal and direct
              communication.
            </li>
            <li>Hands-on assistance and immediate feedback.</li>
            <li>
              Access to in-person tools, equipment, or physical products (if
              applicable).
            </li>
          </ul>
        </div>
        <div className="text-base lg:text-xl ">
          <h1 className="text-[#025195] font-Gloock text-lg lg:text-2xl ">
            Ideal For:
          </h1>
          <ul className="list-disc pl-5 font-medium">
            <li>
              Those who prefer personal interaction and a more detailed,
              hands-on consultation.
            </li>
            <li>
              Clients looking for a more immersive experience or needing
              physical presence.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        {/* Date and Time */}
        <div className="flex flex-col gap-1">
          <h1 className="text-[#025195] font-Gloock text-lg lg:text-2xl ">
            Date & Time
          </h1>
          <p className="font-semibold text-sm lg:text-lg">
            Date: {selectedDate}
          </p>
          <p className="font-semibold text-sm lg:text-lg">
            Time: {selectedTime}
          </p>
          <p className="font-semibold text-sm lg:text-lg">
            Duration: 45 minutes
          </p>
        </div>

        {/* Price */}
        <div className="flex justify-between text-[#025195] items-center">
          <h1 className=" font-Gloock text-lg lg:text-2xl ">Price</h1>
          <p className="font-bold text-xl lg:text-3xl">$ 200</p>
        </div>

        {/* Location */}
        <div className="flex justify-between mt-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#025195] font-Gloock text-lg lg:text-2xl ">
              Location
            </h1>
            <p className=" font-semibold text-sm lg:text-lg">
              Address: {loc.address}
            </p>
            <p className=" font-semibold text-sm lg:text-lg">
              Landmark: {loc.landmark}
            </p>
            <p className="font-semibold text-[#025195] text-sm lg:text-lg">
              Instructions:{" "}
              <span className="text-[#A40101] italic">
                Please arrive 10 minutes early to complete any necessary
                paperwork and check-in at the reception.
              </span>
            </p>
          </div>
          <PiPencilFill
            className="text-[#025195] font-semibold text-xl"
            onClick={handleLocation}
          />
        </div>

        {/* your designer */}
        <div className="flex flex-col items-center w-full text-[#025195]">
          <h1 className="font-bold text-2xl lg:text-4xl mt-3">
            Your meeting is confirmed!!
          </h1>
          <h1 className="mt-7 mb-6 font-bold text-2xl lg:text-3xl">
            MEET YOUR DESIGNER
          </h1>
          <img src={yourDesigner} alt="" className="w-1/2 lg:w-fit" />
          <p className=" text-black font-semibold mt-4 mb-2 lg:text-2xl">
            You are meeting with Khushi Singh
          </p>
          <p className="font-[900] text-2xl">Lily Singh</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center w-full gap-4">
        <button
          onClick={handleCancelButton}
          className="my-10 w-1/2 rounded-[50px] justify-center items-center border border-[#025195] text-[#025195] lg:py-4 py-3 lg:text-xl text-lg gap-2 flex"
        >
          <p className="">Cancel</p>
        </button>
        <button
          onClick={handleBookButton}
          className="my-10 w-1/2 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 flex"
        >
          <p className="">Book Now</p>
        </button>
      </div>
    </div>
  );
};

export default InPersonConsultationConfirm;
