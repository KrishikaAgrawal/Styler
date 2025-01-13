import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import CalendarModal from "./Calendar";
// import MapSelector from "./MapSelector";
// import otherServices from "../../../assets/Services/Booking/otherServices.png";
import consultLocation from "../../../assets/Services/order/consultLocation.png";
// import yourDesigner from "../../../assets/Services/order/yourDesigner.png";
// import { PiPencilFill } from "react-icons/pi";

const InPersonConsultation: React.FC = () => {
  const navigate = useNavigate();
  // Book button
  // const handleBookButton = () => {
  //   navigate("/Checkout");
  // };
  // // Cancel button
  // const handleCancelButton = () => {
  //   navigate("/Booking");
  // };

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

  const navigateToConfirm = () => {
    navigate("/InPersonConsultationConfirm", {
      state: {
        selectedDate,
        selectedTime,
      },
    });
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

      {/* Schedules */}
      <div className="flex flex-col pt-6">
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
      <div className="flex flex-col">
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

      {/* Shop Location */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold mb-4">Shop Location</h1>
        <a href="https://www.google.com/maps/place/California,+USA/@37.3781139,-120.2938023,9z/data=!4m6!3m5!1s0x808fb9fe5f285e3d:0x8b5109a227086f55!8m2!3d36.778261!4d-119.4179324!16zL20vMDFuN3E?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
          <img
            src={consultLocation}
            alt=""
            className="w-full h-80 object-cover rounded-2xl"
          />
        </a>
      </div>

      {/* confirm button */}
      <div className="flex justify-center w-full my-5">
        <button
          onClick={navigateToConfirm}
          className="cursor-pointer text-white rounded-md bg-[#025195] font-semibold flex items-center lg:px-10 lg:py-4 px-5 py-2 "
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default InPersonConsultation;
