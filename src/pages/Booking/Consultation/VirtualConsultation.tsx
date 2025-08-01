import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import CalendarModal from "./Calendar";

// import otherServices from "../../../assets/Services/Booking/otherServices.png";
import yourDesigner from "../../../assets/Services/order/yourDesigner.png";
import { RiDiscountPercentFill } from "react-icons/ri";

const VirtualConsultation: React.FC = () => {
  const navigate = useNavigate();
  // Book button
  const handleBookButton = () => {
    navigate("/Checkout");
  };
  // Cancel button
  const handleCancelButton = () => {
    navigate("/Booking");
  };

  // Available time
  const times = ["1:00 pm", "3:00 pm", "12:00 pm"];
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

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

  // confirm button
  const [isConfirmView, setIsConfirmView] = useState(false);
  const handleConfirm = () => setIsConfirmView(true);

  return (
    <div className="px-5 font-inter lg:px-24">
      {/* Virtual Consultation */}
      <h1 className=" text-4xl lg:text-5xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
        Virtual Consultation
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

      {/* Schedules */}
      <div className={`${isConfirmView ? "hidden" : "flex flex-col pt-6"}`}>
        <div className="text-[#025195] font-Gloock text-lg lg:text-2xl">
          Schedules
        </div>
        <div className="flex flex-wrap justify-center gap-2 lg:gap-4 lg:py-4 py-2 ">
          {displayDates.map((date) => (
            <div
              key={date}
              onClick={openCalendar}
              className={`p-2 w-10 lg:w-14 text-center cursor-pointer rounded-lg ${
                date === selectedDate
                  ? "bg-[#025195] text-white"
                  : "bg-gray-200"
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
      </div>

      {/* Available Time */}
      <div className={`${isConfirmView ? "hidden" : "flex flex-col"}`}>
        <h1 className="text-xl font-bold mb-4">Available Time</h1>
        <div className="mt-4 mb-6 flex flex-wrap gap-4">
          {times.map((time, index) => (
            <div
              key={index}
              onClick={() => handleTimeClick(time)}
              className={` cursor-pointer text-[#2A2A2A] border rounded-md border-[#d7d7d7] flex items-center px-4 py-2  ${
                selectedTime === time
                  ? "bg-[#025195] text-slate-50 font-semibold "
                  : "bg-white"
              } `}
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      {/* confirm button */}
      <div
        className={`${
          isConfirmView ? "hidden" : "flex justify-center w-full my-5"
        }`}
      >
        <button
          onClick={handleConfirm}
          className="cursor-pointer text-white rounded-md bg-[#025195] font-semibold flex items-center lg:px-10 lg:py-4 px-5 py-2 "
        >
          Confirm
        </button>
      </div>

      {/* confirm */}
      <div
        className={`${isConfirmView ? "flex flex-col gap-4 mt-11" : "hidden"}`}
      >
        {/* date and time */}
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

      {/* offers */}
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="flex flex-col border border-[#025195] rounded-lg lg:p-4 p-2 justify-center ">
          <div className="flex gap-3 items-center text-2xl">
            <RiDiscountPercentFill className="text-[#025195]" />
            <p className="font-bold text-sm lg:text-xl">50% off</p>
          </div>
          <p className="text-xs lg:text-base">use code FREE50</p>
        </div>
        <div className="flex flex-col border border-[#025195] rounded-lg lg:p-4 p-2 justify-center ">
          <div className="flex gap-3 items-center text-2xl">
            <RiDiscountPercentFill className="text-[#025195]" />
            <p className="font-bold text-sm lg:text-xl">
              60% off on Debit Card
            </p>
          </div>
          <p className="text-xs lg:text-base">No coupon required</p>
        </div>
        <div className="flex flex-col border border-[#025195] rounded-lg lg:p-4 p-2 justify-center ">
          <div className="flex gap-3 items-center text-2xl">
            <RiDiscountPercentFill className="text-[#025195]" />
            <p className="font-bold text-sm lg:text-xl">50% off</p>
          </div>
          <p className="text-xs lg:text-base">use code FREE50</p>
        </div>
        <div className="flex flex-col border border-[#025195] rounded-lg lg:p-4 p-2 justify-center ">
          <div className="flex gap-3 items-center text-2xl">
            <RiDiscountPercentFill className="text-[#025195]" />
            <p className="font-bold text-sm lg:text-xl">
              60% off on Debit Card
            </p>
          </div>
          <p className="text-xs lg:text-base">No coupon required</p>
        </div>
      </div>

      {/* Try These Services */}
      {/* <h2 className="font-semibold lg:text-xl text-lg mt-8 mb-3">
        Try These Services
      </h2>
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
      </div> */}

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

export default VirtualConsultation;
