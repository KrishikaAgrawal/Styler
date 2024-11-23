import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useFormData } from "@/context/FormDataContext";

const AddMeasurements: React.FC = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBackButton = () => {
    navigate("/Booking");
  };

  const handleContinueButton = () => {
    navigate("/Booking");
  };

  return (
    <div className="px-5 font-inter lg:px-48 mb-20 mt-10 gap-9">
      <h1 className=" text-4xl lg:text-5xl text-[#025195] font-Gloock mt-5">
        Add Measurements
      </h1>
      <form className="flex flex-col py-5 justify-center items-center gap-3 lg:gap-5">
        <input
          type="text"
          name="bust"
          value={formData.bust}
          onChange={handleChange}
          className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
          placeholder="Bust"
        />
        <input
          type="text"
          name="waist"
          value={formData.waist}
          onChange={handleChange}
          className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
          placeholder="Waist"
        />
        <input
          type="text"
          name="hips"
          value={formData.hips}
          onChange={handleChange}
          className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
          placeholder="Hips"
        />
        <input
          type="text"
          name="shoulderWidth"
          value={formData.shoulderWidth}
          onChange={handleChange}
          className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
          placeholder="Shoulder width"
        />
        <input
          type="text"
          name="armLength"
          value={formData.armLength}
          onChange={handleChange}
          className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
          placeholder="Arm length"
        />
        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
          className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
          placeholder="Height"
        />
        <textarea
          name="customRequirements"
          value={formData.customRequirements}
          onChange={handleChange}
          placeholder="Custom Requirements"
          className="rounded-2xl bg-[#FCFCFC] p-4 h-48 w-full border-2 border-[#EFEEEE] align-text-top"
        />
      </form>
      <div className="flex my-10 w-full flex-col items-center gap-9  mb-8 lg:mb-12">
        <button
          onClick={handleContinueButton}
          className="rounded-[50px] lg:w-2/5 justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex"
        >
          <p className="">Continue</p>
        </button>
        <button
          onClick={handleBackButton}
          className="rounded-[50px] lg:w-2/5 justify-center items-center text-[#025195] border border-[#025195] lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex"
        >
          <FaArrowRightLong className=" transform rotate-180" />
          <p className="">Back</p>
        </button>
      </div>
    </div>
  );
};

export default AddMeasurements;
