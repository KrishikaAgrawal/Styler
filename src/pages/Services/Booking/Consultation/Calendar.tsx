// import React, { useState } from "react";
// import dayjs from "dayjs";
// import "dayjs/locale/en";

// const Calendar: React.FC = () => {
//   const [currentDate, setCurrentDate] = useState(dayjs());

//   const startOfMonth = currentDate.startOf("month");
//   const endOfMonth = currentDate.endOf("month");
//   const startOfWeek = startOfMonth.startOf("week");
//   const endOfWeek = endOfMonth.endOf("week");

//   const generateDates = () => {
//     const dates = [];
//     let date = startOfWeek;

//     while (date.isBefore(endOfWeek, "day")) {
//       dates.push(date);
//       date = date.add(1, "day");
//     }
//     return dates;
//   };

//   const dates = generateDates();

//   const handlePrevMonth = () => {
//     setCurrentDate(currentDate.subtract(1, "month"));
//   };

//   const handleNextMonth = () => {
//     setCurrentDate(currentDate.add(1, "month"));
//   };

//   const today = dayjs();

//   return (
//     <div className="p-4">
//       <div className="flex justify-between mb-4">
//         <button onClick={handlePrevMonth} className="p-2 bg-gray-200 rounded">
//           Previous
//         </button>
//         <h2 className="text-lg font-semibold">
//           {currentDate.format("MMMM YYYY")}
//         </h2>
//         <button onClick={handleNextMonth} className="p-2 bg-gray-200 rounded">
//           Next
//         </button>
//       </div>
//       <div className="grid grid-cols-7 gap-2">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
//           <div key={index} className="text-center font-bold">
//             {day}
//           </div>
//         ))}
//         {dates.map((date, index) => (
//           <div
//             key={index}
//             className={`text-center p-2 ${
//               date.isSame(today, "day")
//                 ? "bg-[#025195] text-white rounded-full"
//                 : ""
//             } ${date.isSame(currentDate, "month") ? "" : "text-gray-400"}`}
//           >
//             {date.date()}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calendar;
import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/en";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDate: (date: string) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  onSelectDate,
}) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startOfWeek = startOfMonth.startOf("week");
  const endOfWeek = endOfMonth.endOf("week");

  const generateDates = () => {
    const dates = [];
    let date = startOfWeek;

    while (date.isBefore(endOfWeek, "day")) {
      dates.push(date);
      date = date.add(1, "day");
    }
    return dates;
  };

  const dates = generateDates();

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const handleReset = () => {
    const today = dayjs().format("YYYY-MM-DD");
    setSelectedDate(today);
    setCurrentDate(dayjs());
  };

  const handleDone = () => {
    if (selectedDate) {
      onSelectDate(selectedDate);
    }
    onClose();
  };

  const today = dayjs();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="font-inter relative bg-white w-fit p-6 rounded shadow-lg ">
        <div className="flex justify-center items-center gap-4 mb-4">
          <FaAngleLeft
            onClick={handlePrevMonth}
            className="text-[#94A3B8] text-sm cursor-pointer"
          />
          <h2 className="text-lg font-semibold">
            {currentDate.format("MMMM YYYY")}
          </h2>
          <FaAngleRight
            onClick={handleNextMonth}
            className="text-[#94A3B8] text-sm cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <div
                key={index}
                className="text-center font-bold text-[#94A3B8]  text-xs"
              >
                {day}
              </div>
            )
          )}
          {dates.map((date, index) => (
            <div
              key={index}
              className={`text-center py-1 px-6 cursor-pointer text-sm rounded-lg flex items-center justify-center ${
                date.isSame(today, "day") ? "border-2 border-[#025195]" : ""
              } ${
                date.format("YYYY-MM-DD") === selectedDate
                  ? "bg-[#025195] text-white"
                  : ""
              } ${date.isSame(currentDate, "month") ? "" : "text-gray-400"}`}
              onClick={() => handleDateClick(date.format("YYYY-MM-DD"))}
            >
              {date.date()}
            </div>
          ))}
        </div>
        <div className="flex mt-4 gap-4">
          <button
            onClick={handleReset}
            className="p-2 bg-gray-200 text-sm w-1/2 text-gray-700 rounded"
          >
            Reset
          </button>
          <button
            onClick={handleDone}
            className="p-2 bg-[#025195] text-sm w-1/2 text-white rounded"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
