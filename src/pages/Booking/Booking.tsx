import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import otherServices from "../../assets/Services/Booking/otherServices.png";

import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

type ServiceName = "Tailoring" | "Alterations" | "Custom Designs";
type MeasurementsName = "N/A" | "Add Measurements" | null;
type ConsultationName = "In-Person" | "Virtual" | null;

const Booking: React.FC = () => {
  const navigate = useNavigate();

  // Measurement
  const [selectedMeasurements, setSelectedMeasurements] =
    useState<MeasurementsName>(null);
  const handleMeasurements = () => {
    setSelectedMeasurements("Add Measurements");
    navigate("/AddMeasurements");
  };

  // Services
  const [selectedService, setSelectedService] =
    useState<ServiceName>("Tailoring");

  // Consultation
  const [selectedConsultation, setSelectedConsultation] =
    useState<ConsultationName>(null);

  const handleInPerson = () => {
    setSelectedConsultation("In-Person");
    navigate("/InPerson");
  };
  const handleVirtual = () => {
    setSelectedConsultation("Virtual");
    navigate("/Virtual");
  };
  return (
    <div className="px-5 font-inter lg:px-24">
      <h1 className=" text-4xl lg:text-5xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
        Booking
      </h1>

      {/* Designer details */}
      <div>
        <div className="flex justify-between flex-col-reverse lg:flex-row gap-4 lg:gap-0">
          <h1 className=" text-3xl lg:text-4xl text-[#025195] font-Gloock ">
            Aria Couture
          </h1>
        </div>

        <p className="text-[#777777] text-sm lg:text-lg py-3">
          456 Oak Street, Cityville, CA 90210
        </p>

        <div className="flex gap-1 mr-14">
          <IoIosStar className="w-5 h-5 text-[#025195]" />
          <IoIosStar className="w-5 h-5 text-[#025195]" />
          <IoIosStar className="w-5 h-5 text-[#025195]" />
          <IoIosStarHalf className="w-5 text-[#025195] h-5" />

          <p className="text-[#EE3030] font-semibold text-xs lg:text-base pl-10">
            (75) Reviews
          </p>
        </div>
      </div>

      {/* Service Selection */}
      <h1 className=" text-base lg:text-xl text-[#025195] font-Gloock mt-4 lg:mt-6 mb-2">
        Service Selection
      </h1>
      <div className="flex justify-center w-full">
        <div className="lg:w-2/3 grid lg:grid-cols-3 grid-cols-2 gap-3 lg:gap-5  ">
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195] ${
              selectedService === "Tailoring"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={() => setSelectedService("Tailoring")}
          >
            Tailoring
          </button>
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195] ${
              selectedService === "Alterations"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={() => setSelectedService("Alterations")}
          >
            Alterations
          </button>
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195]  ${
              selectedService === "Custom Designs"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={() => setSelectedService("Custom Designs")}
          >
            Custom Designs
          </button>
        </div>
      </div>

      {/* Our Services */}
      <h1 className="text-[#025195] font-Gloock text-2xl lg:text-4xl mt-10 lg:mt-12">
        Our Services
      </h1>
      {/*  Luxury Custom Apparel */}
      <p className="font-semibold lg:text-xl text-lg mt-5 mb-2">
        Luxury Custom Apparel
      </p>
      <textarea
        name=""
        placeholder="Custom Requirements"
        className="rounded-2xl bg-[#FCFCFC] p-4 h-48 w-full border-2 border-[#EFEEEE] align-text-top"
      />
      {/* Measurements */}
      <p className="font-semibold lg:text-xl text-lg mt-8 mb-2">
        Measurements{" "}
      </p>
      <div className="flex justify-center w-full">
        <div className="lg:w-1/2 grid grid-cols-2 gap-3 lg:gap-5  ">
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195] ${
              selectedMeasurements === "N/A"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={() => setSelectedMeasurements("N/A")}
          >
            N/A
          </button>
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195] ${
              selectedMeasurements === "Add Measurements"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={handleMeasurements}
          >
            Add Measurements
          </button>
        </div>
      </div>
      {/* Consultation */}
      <p className="font-semibold lg:text-xl text-lg mt-8 mb-2">
        Consultation{" "}
      </p>
      <div className="flex justify-center w-full">
        <div className="lg:w-1/2 grid grid-cols-2 gap-3 lg:gap-5  ">
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195] ${
              selectedConsultation === "In-Person"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={handleInPerson}
          >
            In-Person
          </button>
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195] ${
              selectedConsultation === "Virtual"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={handleVirtual}
          >
            Virtual
          </button>
        </div>
      </div>

      {/* Try These Services */}
      <p className="font-semibold lg:text-xl text-lg mt-8 mb-3">
        Try These Services{" "}
      </p>
      <div className="grid grid-cols-3 lg:grid-cols-10 gap-1">
        <div className="flex flex-col items-center gap-2">
          <img src={otherServices} alt="" className="lg:w-fit w-20" />
          <p className="text-[10px] lg:text-xs text-center">
            Custom Design Services
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={otherServices} alt="" className="lg:w-fit w-20" />
          <p className="text-[10px] lg:text-xs text-center">
            Custom Design Services
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={otherServices} alt="" className="lg:w-fit w-20" />
          <p className="text-[10px] lg:text-xs text-center">
            Custom Design Services
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="my-10 lg:w-2/5 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex">
          <p className="">Appointment</p>
        </button>
      </div>
    </div>
  );
};

export default Booking;
