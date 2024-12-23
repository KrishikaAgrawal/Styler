import React from "react";
import appointment1 from "../../assets/Appointment/appointment1.png";
import AppointmentCard from "./AppointmentCard";
import NoAppointments from "./NoAppointments";

const Upcoming: React.FC = () => {
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
  // const data: Appointment[] = [];
  const data: Appointment[] = [
    {
      id: "#56787",
      status: "Accepted",
      statusColor: "#51A4FE",
      statusBg: "#D9EBFE",
      name: "Arjun Verma",
      img: appointment1,
      topic: "Custom Tailoring Consultation",
      date: "October 5, 2024, 3:00 PM",
      loc: "312, Fashion Street, Mumbai",
      booking: "Cancel Booking",
      bookingColor: "#FE4B4B",
      bookingLink: "AppointmentCancellation",
    },
    {
      id: "#56786",
      status: "Submitted",
      statusColor: "#48D56E",
      statusBg: "#F3FFF6",
      name: "Arjun Verma",
      img: appointment1,
      topic: "Custom Tailoring Consultation",
      date: "October 5, 2024, 3:00 PM",
      loc: "312, Fashion Street, Mumbai",
      booking: "Cancel Booking",
      bookingColor: "#FE4B4B",
      bookingLink: "AppointmentCancellation",
    },
    {
      id: "#56785",
      status: "Rejected ",
      statusColor: "#FE4B4B",
      statusBg: "#FFE9E9",
      name: "Arjun Verma",
      img: appointment1,
      topic: "Custom Tailoring Consultation",
      date: "October 5, 2024, 3:00 PM",
      loc: "312, Fashion Street, Mumbai",
      booking: "Cancel Booking",
      bookingColor: "#FE4B4B",
      bookingLink: "AppointmentCancellation",
    },
    {
      id: "#56784",
      status: "Ongoing",
      statusColor: "#FFB24D",
      statusBg: "#FFF3E3",
      name: "Arjun Verma",
      img: appointment1,
      topic: "Custom Tailoring Consultation",
      date: "October 5, 2024, 3:00 PM",
      loc: "312, Fashion Street, Mumbai",
      booking: "Cancel Booking",
      bookingColor: "#FE4B4B",
      bookingLink: "AppointmentCancellation",
    },
  ];
  return (
    <div>
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

export default Upcoming;
