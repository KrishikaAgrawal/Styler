import React from "react";

import CompletedOrderCard from "./CompletedOrderCard";
import CompletedOrder1 from "../../assets/Orders/CompletedOrder1.png";
import DuePaymentCard from "./DuePaymentCard";
import DuePayment1 from "../../assets/Orders/DuePayment1.png";
import CancelledOrderCard from "./CancelledOrderCard";
import CancelledOrder1 from "../../assets/Orders/CancelledOrder1.png";

interface CompletedOrder {
  id: string;
  status: string;
  appointmentDate: string;
  appointmentTime: string;
  img: string;
  name: string;
  topic: string;
  placeOrderDate: string;
  price: string;
  transactionID: string;
  paymentStatus: string;
  paymentDate: string;
}

const CompletedOrderData: CompletedOrder[] = [
  {
    id: "#ORD10345",
    status: "Completed Order",
    appointmentDate: "Nov 8th,2023",
    appointmentTime: "01:00 PM- 02:00PM",
    img: CompletedOrder1,
    name: "Sophia Martinez",
    topic: "Custom Tailoring Consultation",
    placeOrderDate: "October 5, 2024",
    price: "₹15,000",
    transactionID: "TXN897654321",
    paymentStatus: " Successful(100%)",
    paymentDate: "Oct 15, 2025",
  },
];

interface DuePayment {
  id: string;
  status: string;
  appointmentDate: string;
  appointmentTime: string;
  img: string;
  name: string;
  topic: string;
  placeOrderDate: string;
  price: string;
  paymentStatus: string;
  paymentDate: string;
  paymentStatusPending: string;
  QuotationSent: string;
}

const DuePaymentData: DuePayment[] = [
  {
    id: "#ORD10345",
    status: "Due Payment",
    appointmentDate: "Nov 8th,2023",
    appointmentTime: "01:00 PM- 02:00PM",
    img: DuePayment1,
    name: "Harper Nelson",
    topic: "Custom Tailoring Consultation",
    placeOrderDate: "October 5, 2024",
    price: "₹15,000",
    paymentStatus: "Half Payment(50%)",
    paymentDate: "Nov 25, 2024",
    paymentStatusPending: "Pending(50%)",
    QuotationSent: "Accepted",
  },
];
interface CancelledOrder {
  id: string;
  status: string;
  appointmentDate: string;
  appointmentTime: string;
  img: string;
  name: string;
  topic: string;
  placeOrderDate: string;
  price: string;
  QuotationSent: string;
}

const CancelledOrderData: CancelledOrder[] = [
  {
    id: "#ORD10345",
    status: "Cancelled Orders",
    appointmentDate: "Nov 8th,2023",
    appointmentTime: "01:00 PM- 02:00PM",
    img: CancelledOrder1,
    name: "Alexander Ward",
    topic: "Custom Tailoring Consultation",
    placeOrderDate: "October 5, 2024",
    price: "₹15,000",
    QuotationSent: "Not Accepted",
  },
];

const MyOrders: React.FC = () => {
  return (
    <div className="p-5 md:px-24 md:py-16 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-8 text-3xl md:text-[44px]">
        My Orders
      </h1>
      <div className="flex flex-col">
        <div>
          {CompletedOrderData.map((CompletedOrder) => (
            <CompletedOrderCard
              key={CompletedOrder.id}
              CompletedOrderData={CompletedOrder}
            />
          ))}
        </div>
        <div>
          {DuePaymentData.map((DuePayment) => (
            <DuePaymentCard key={DuePayment.id} DuePaymentData={DuePayment} />
          ))}
        </div>
        <div>
          {CancelledOrderData.map((CancelledOrder) => (
            <CancelledOrderCard
              key={CancelledOrder.id}
              CancelledOrderData={CancelledOrder}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
