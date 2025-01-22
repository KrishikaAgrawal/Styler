import React from "react";
import { useNavigate } from "react-router-dom";

import appointment1 from "../../assets/Appointment/appointment1.png";
import DuePayment1 from "../../assets/Orders/DuePayment1.png";

import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

interface Appointment {
  id: string;
  status: string;

  img: string;
  name: string;
  topic: string;
  date: string;
  loc: string;
}

const appointmentData: Appointment[] = [
  {
    id: "#56781",
    status: "Completed",

    name: "Arjun Verma",
    img: appointment1,
    topic: "Custom Tailoring Consultation",
    date: "October 5, 2024, 3:00 PM",
    loc: "312, Fashion Street, Mumbai",
  },
  {
    id: "#56784",
    status: "Cmpleted",
    name: "Arjun Verma",
    img: appointment1,
    topic: "Custom Tailoring Consultation",
    date: "October 5, 2024, 3:00 PM",
    loc: "312, Fashion Street, Mumbai",
  },
];

interface Order {
  id: string;
  status: string;
  appointmentDate: string;
  appointmentTime: string;
  name: string;
  img: string;
  topic: string;
  placeOrderDate: string;
  price: string;
  paymentStatus: string;
  quotationSent: string;
}

const OrderData: Order[] = [
  {
    id: "#ORD10345",
    status: "Payment Pending",
    appointmentDate: "Nov 8th,2023",
    appointmentTime: "01:00 PM- 02:00PM",
    name: "Arjun Verma",
    img: DuePayment1,
    topic: "Custom Tailoring Consultation",
    placeOrderDate: "October 5, 2024",
    price: "₹15,000",
    paymentStatus: "Pending",
    quotationSent: "Not Accepted",
  },
];

const Pending: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  //   const handleNavigate = () => {
  //     navigate("/QuotationPayment");
  //   };
  const handleNavigate = (
    appointment: Appointment,
    order: Order | undefined
  ) => {
    navigate("/QuotationPayment", { state: { appointment, order } });
  };
  return (
    <div>
      {appointmentData.map((appointment) => {
        // Find the matching order by name
        const matchingOrder = OrderData.find(
          (order) => order.name === appointment.name
        );

        return (
          <div key={appointment.id}>
            <div className="shadow-custom-shadow p-4 font-inter flex flex-col gap-6 rounded-lg mb-6">
              {/* appointment container */}
              <div className="flex w-full flex-col gap-4 lg:gap-0">
                <div className="flex justify-between items-center">
                  <p className=" lg:text-2xl font-semibold text-[#546879]">
                    {appointment.id}
                  </p>
                  <button className="border rounded-lg px-4 py-[6px] text-xs lg:text-base font-semibold text-[#546879] bg-[#F4F2F2] border-[#546879]">
                    {appointment.status}
                  </button>
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src={appointment.img}
                    alt=""
                    className="w-[100px] lg:w-[130px]"
                  />
                  <div className="flex w-full flex-col">
                    <h2 className="font-Gloock text-[#025195] lg:text-2xl">
                      {appointment.name}
                    </h2>
                    <p className="text-[#546879] my-1 text-xs lg:text-base font-medium">
                      {appointment.topic}
                    </p>
                    <p className="text-[#546879] lg:text-base font-bold text-xs ">
                      {appointment.date}
                    </p>
                    <div className="border-b my-2 w-full border-[#DCDCDC]"></div>
                    <div className="flex">
                      <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                      <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                      <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                      <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                    </div>
                    <p className="mt-2 font-medium text-xs text-[#546879] lg:text-base">
                      {appointment.loc}
                    </p>
                  </div>
                </div>
              </div>
              {/* order container */}
              {appointment.status === "Completed" && matchingOrder && (
                <div className="rounded-lg border border-[#025195] flex flex-col gap-3 p-4 mb-6">
                  {/* order id and status */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-[#7214FF] font-semibold">
                      {matchingOrder.id}
                    </h3>
                    <div className="border rounded-lg text-[#F86624] border-[#F86624] text-xs lg:text-base bg-[#FFF4EF] p-2 font-semibold">
                      {matchingOrder.status}
                    </div>
                  </div>
                  {/* appointment date and time */}
                  <div className="flex justify-between font-semibold text-[#546879]">
                    <p className="text-xs">
                      Appointment Date: {matchingOrder.appointmentDate}
                    </p>
                    <p className="text-[10px]">
                      {matchingOrder.appointmentTime}
                    </p>
                  </div>
                  <div className="border-b -mt-2 text-[#546879]"></div>
                  {/* Order Details */}
                  <div className="flex gap-4 items-center">
                    <img
                      src={matchingOrder.img}
                      alt=""
                      className="rounded-3xl w-[80px] h-[80px]"
                    />
                    <div className="flex flex-col gap-2">
                      <h2 className="font-Gloock text-[#025195] ">
                        {matchingOrder.name}
                      </h2>
                      <p className="text-[#546879] font-medium text-xs">
                        {matchingOrder.topic}
                      </p>
                      <p className="text-[#546879] font-bold text-xs capitalize">
                        Place Order Date: {matchingOrder.placeOrderDate}
                      </p>
                      <p className="text-[#025195] text-[10px] font-semibold italic">
                        Delivered to Address
                      </p>
                      <div className="flex">
                        <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                        <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                        <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                        <MdOutlineStarPurple500 className="text-[#025195] lg:text-xl text-lg " />
                      </div>
                    </div>
                  </div>
                  <div className="border-b -mt-2 text-[#546879]"></div>
                  {/* Price */}
                  <div className="flex items-center">
                    <p className="w-1/2 text-[#546879] font-semibold text-xs">
                      Price:{" "}
                    </p>
                    <p className="w-1/2 text-[#025195] font-extrabold text-xl lg:text-right">
                      {matchingOrder.price}
                    </p>
                  </div>
                  {/* Payment */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between ">
                      <p className="text-[#546879] font-semibold  text-xs lg:text-base">
                        Payment Status:{" "}
                        <span className="text-[#7214FF]">
                          {matchingOrder.paymentStatus}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* Quotation */}
                  <div className="flex justify-between">
                    <p className="text-[#546879] font-semibold text-xs lg:text-base">
                      Quotation Sent:{" "}
                      <span className="text-[#E53636] italic">Accepted</span>
                    </p>
                  </div>
                  {/* due date */}
                  <div className="border-b -mt-2 text-[#546879]"></div>
                  <div className="flex justify-between  text-xs lg:text-base">
                    <p className="text-[#546879] font-semibold">Due Date</p>
                    <p className="text-[#025195] font-semibold">
                      December 10, 2023
                    </p>
                  </div>
                </div>
              )}
              {appointment.status == "Completed" ? (
                <button
                  onClick={() => handleNavigate(appointment, matchingOrder)}
                  className="flex rounded-lg  gap-5 text-white font-semibold w-full items-center p-4 justify-center bg-[#025195] cursor-pointer"
                >
                  <p>View Quotation</p>
                  <FaArrowRightLong />
                </button>
              ) : (
                <button className="flex rounded-lg  gap-5 text-white font-semibold w-full items-center p-4 justify-center bg-[#4970B6] cursor-default">
                  <p>View Quotation</p>
                  <FaArrowRightLong />
                </button>
              )}
              {/* <button
                onClick={handleNavigate}
                className={`flex rounded-lg  gap-5 text-white font-semibold w-full items-center p-4 justify-center ${
                  appointment.status == "Completed"
                    ? "bg-[#025195] cursor-pointer"
                    : "bg-[#4970B6] cursor-default"
                }`}
              >
                <p>View Quotation</p>
                <FaArrowRightLong />
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pending;
