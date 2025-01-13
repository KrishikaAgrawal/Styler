import React from "react";
import appointment1 from "../../assets/Appointment/appointment1.png";
import AppointmentCard from "./AppointmentCard";
import NoAppointments from "./NoAppointments";

const Past: React.FC = () => {
  interface Appointment {
    id: string;
    status: string;
    statusColor: string;
    statusBg: string;
    img: string;
    name: string;
    topic: string;
    date: string;
    loc: string;
    booking: string;
    bookingColor: string;
    bookingLink: string;
  }
  const data: Appointment[] = [
    {
      id: "#56781",
      status: "Accepted",
      statusColor: "#546879",
      statusBg: "#546879",
      name: "Arjun Verma",
      img: appointment1,
      topic: "Custom Tailoring Consultation",
      date: "October 5, 2024, 3:00 PM",
      loc: "312, Fashion Street, Mumbai",
      booking: "Rescheduled Booking",
      bookingColor: "#546879",
      bookingLink: "GiveFeedback",
    },
    {
      id: "#56783",
      status: "Accepted",
      statusColor: "#546879",
      statusBg: "#546879",
      name: "Arjun Verma",
      img: appointment1,
      topic: "Custom Tailoring Consultation",
      date: "October 5, 2024, 3:00 PM",
      loc: "312, Fashion Street, Mumbai",
      booking: "Rescheduled Booking",
      bookingColor: "#546879",
      bookingLink: "GiveFeedback",
    },
    {
      id: "#56782",
      status: "Accepted",
      statusColor: "#546879",
      statusBg: "#546879",
      name: "Arjun Verma",
      img: appointment1,
      topic: "Custom Tailoring Consultation",
      date: "October 5, 2024, 3:00 PM",
      loc: "312, Fashion Street, Mumbai",
      booking: "Rescheduled Booking",
      bookingColor: "#546879",
      bookingLink: "GiveFeedback",
    },
  ];
  return (
    <div className="">
      {data.length > 0 ? (
        <div>
          {data.map((appointment) => (
            <AppointmentCard key={appointment.id} data={appointment} />
          ))}
        </div>
      ) : (
        <NoAppointments />
      )}
    </div>
  );
};

export default Past;
