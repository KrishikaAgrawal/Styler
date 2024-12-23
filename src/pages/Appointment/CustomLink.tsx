import React from "react";
import { Link, LinkProps } from "react-router-dom";

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

interface LinkState {
  appointment: Appointment;
}

interface CustomLinkProps extends Omit<LinkProps, "to"> {
  to: {
    pathname: string;
    state?: LinkState;
  };
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...props }) => {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
