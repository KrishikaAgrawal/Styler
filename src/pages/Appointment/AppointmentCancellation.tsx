import React from "react";
// import AppointmentCard from "./AppointmentCard";
// import { useLocation, Navigate } from "react-router-dom";

// interface Appointment {
//   id: string;
//   status: string;
//   statusColor: string;
//   statusBg: string;
//   name: string;
//   img: string;
//   topic: string;
//   date: string;
//   loc: string;
//   booking: string;
//   bookingColor: string;
//   bookingLink: string;
// }

// interface LinkState {
//   appointment: Appointment;
// }

const AppointmentCancellation: React.FC = () => {
  // const location = useLocation();
  // const state = location.state as LinkState | null;

  // if (!state || !state.appointment) {
  //   // Navigate to a fallback page if no state is found
  //   return <Navigate to="/" replace />;
  // }

  // const { appointment } = state;

  return (
    <div className="p-5 md:p-24 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-10 text-3xl md:text-5xl">
        Cancel Booking
      </h1>
      {/* <AppointmentCard data={appointment} /> */}
    </div>
  );
};

export default AppointmentCancellation;
