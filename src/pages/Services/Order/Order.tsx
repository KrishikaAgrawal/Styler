import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import CalendarModal from "../Booking/Consultation/Calendar";
import { useFormData } from "@/context/FormDataContext";

import { PiPencilFill } from "react-icons/pi";

const Order: React.FC = () => {
  const navigate = useNavigate();
  // measurement
  const { formData } = useFormData();
  console.log(formData);

  // Calendar
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );
  const [displayDates, setDisplayDates] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const generateDates = (centerDate: string, count: number) => {
    const dates = [];
    const center = dayjs(centerDate);
    const half = Math.floor(count / 2);
    for (let i = -half; i <= half; i++) {
      dates.push(center.add(i, "day").format("YYYY-MM-DD"));
    }
    return dates;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setDisplayDates(generateDates(selectedDate, isMobile ? 6 : 15));
  }, [selectedDate, isMobile]);

  const openCalendar = () => setIsCalendarOpen(true);
  const closeCalendar = () => setIsCalendarOpen(false);

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
    closeCalendar();
  };

  // Location
  const handleLocation = () => {
    navigate("/");
  };

  return (
    <div className="px-5 font-inter lg:px-24">
      <h1 className="text-4xl lg:text-5xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
        Order Details
      </h1>

      {/* Measurements Details */}
      <h2 className="text-xl lg:text-2xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
        Measurements Details
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(formData).map(([key, value]) => (
          <div
            key={key}
            className={`flex flex-col border border-[#025195] rounded-lg lg:p-4 p-2 justify-center ${
              key === "customRequirements" ? "col-span-2" : ""
            }`}
          >
            <p className="text-sm lg:text-xl border-[#025195] text-[#025195]">
              {key}
            </p>
            <p className="text-xs lg:text-base">{value}</p>
          </div>
        ))}
      </div>

      {/* Ideal Delivery Date */}
      <h2 className="text-xl lg:text-2xl text-[#025195] font-Gloock  mt-10">
        Ideal Delivery Date
      </h2>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4 lg:py-4 py-2 ">
        {displayDates.map((date) => (
          <div
            key={date}
            onClick={openCalendar}
            className={`p-2 w-10 lg:w-14 text-center cursor-pointer rounded-lg ${
              date === selectedDate ? "bg-[#025195] text-white" : "bg-gray-200"
            }`}
          >
            <div className="text-[10px] lg:text-xs lg:font-bold">
              {dayjs(date).format("ddd")}
            </div>
            <div className="text-sm lg:text-lg lg:font-semibold">
              {dayjs(date).format("DD")}
            </div>
          </div>
        ))}
      </div>
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={closeCalendar}
        onSelectDate={handleSelectDate}
      />

      {/* Location */}
      <div className="flex justify-between mt-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#025195] font-Gloock text-lg lg:text-2xl ">
            Location{" "}
          </h1>
          <p className=" text-sm lg:text-lg">
            Address: 123 Business Lane, Suite 456, Cityville, ST, 12345
          </p>
          <p className=" text-sm lg:text-lg">Landmark: Near City Center Mall</p>
        </div>
        <PiPencilFill
          className="text-[#025195] text-xl"
          onClick={handleLocation}
        />
      </div>
      {/* buttons */}
      <div className="flex justify-center w-full gap-4">
        <button className="my-10 w-1/2 rounded-[50px] justify-center items-center border border-[#025195] text-[#025195] lg:py-4 py-3 lg:text-xl text-lg gap-2 flex">
          <p>Cancel</p>
        </button>
        <button className="my-10 w-1/2 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 flex">
          <p>Confirm</p>
        </button>
      </div>
    </div>
  );
};

export default Order;
