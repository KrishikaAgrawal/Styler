import React from "react";
import { useNavigate } from "react-router-dom";

import mostPopular from "../../assets/Services/MostPopular.png";

import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const MostPopular: React.FC = () => {
  const navigate = useNavigate();
  const navigateToDesigner = () => {
    navigate("/DesignerDetails");
  };
  interface MostPopular {
    img: string;
    // heart: string;
    name: string;
    designer: string;
    loc: string;

    dist: string;
    specH: string;
    spec: string;
    servicesH: string;
    services: string;
    discriptionH: string;
    discription: string;
    orders: string;
    appointment: string;
    rating: string;
  }

  // MostPopular Data
  const data2: MostPopular[] = [
    {
      img: mostPopular,
      name: "Aria Couture",
      designer: "Designer",
      loc: "NEW YORK, USA",
      dist: "5 km",
      specH: "Specialization:",
      spec: " High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      servicesH: "Services:",
      services: " Custom design consultations, garment creation, alterations.",
      discriptionH: "Description:",
      discription:
        " Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      orders: "2,341 orders completed",
      appointment: "Set appointment",
    },
    {
      img: mostPopular,
      name: "Aria Couture",
      designer: "Designer",
      loc: "NEW YORK, USA",
      dist: "5 km",
      specH: "Specialization:",
      spec: " High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      servicesH: "Services:",
      services: " Custom design consultations, garment creation, alterations.",
      discriptionH: "Description:",
      discription:
        " Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      orders: "2,341 orders completed",
      appointment: "Set appointment",
    },
    {
      img: mostPopular,
      name: "Aria Couture",
      designer: "Designer",
      loc: "NEW YORK, USA",
      dist: "5 km",
      specH: "Specialization:",
      spec: " High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      servicesH: "Services:",
      services: " Custom design consultations, garment creation, alterations.",
      discriptionH: "Description:",
      discription:
        " Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      orders: "2,341 orders completed",
      appointment: "Set appointment",
    },
    {
      img: mostPopular,
      name: "Aria Couture",
      designer: "Designer",
      loc: "NEW YORK, USA",
      dist: "5 km",
      specH: "Specialization:",
      spec: " High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      servicesH: "Services:",
      services: " Custom design consultations, garment creation, alterations.",
      discriptionH: "Description:",
      discription:
        " Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      orders: "2,341 orders completed",
      appointment: "Set appointment",
    },
    {
      img: mostPopular,
      name: "Aria Couture",
      designer: "Designer",
      loc: "NEW YORK, USA",
      dist: "5 km",
      specH: "Specialization:",
      spec: " High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      servicesH: "Services:",
      services: " Custom design consultations, garment creation, alterations.",
      discriptionH: "Description:",
      discription:
        " Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      orders: "2,341 orders completed",
      appointment: "Set appointment",
    },
    {
      img: mostPopular,
      name: "Aria Couture",
      designer: "Designer",
      loc: "NEW YORK, USA",
      dist: "5 km",
      specH: "Specialization:",
      spec: " High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      servicesH: "Services:",
      services: " Custom design consultations, garment creation, alterations.",
      discriptionH: "Description:",
      discription:
        " Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      orders: "2,341 orders completed",
      appointment: "Set appointment",
    },
  ];

  return (
    <div className="p-5 md:p-12 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-10 text-3xl md:text-5xl">
        MOST POPULAR
      </h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {data2.map((MostPopular, index) => (
          <div
            onClick={navigateToDesigner}
            key={index}
            className=" cursor-pointer p-3 rounded-2xl border border-black"
          >
            <img
              src={MostPopular.img}
              alt=""
              className="rounded-2xl h-52 bg-cover w-full "
            />
            <div className="flex  mt-4 items-center justify-between">
              <a href="/DesignerDetails">
                <h1 className=" leading-none text-3xl lg:text-4xl text-[#025195] font-Gloock  ">
                  {MostPopular.name}
                </h1>
              </a>
              <p className=" border-2 rounded-lg py-2 px-2 font-semibold text-[#0B1957] bg-[#D9E0FF] border-[#0B1957]">
                {MostPopular.designer}
              </p>
            </div>
            <div className="flex items-center my-3 justify-between">
              <p className="   px-8 py-2 rounded-lg text-[#025195] border border-[#025195] bg-[#FCEBE0] font-bold">
                {MostPopular.loc}
              </p>
              <div className="flex items-center gap-1">
                <IoLocationOutline className="w-7" />
                <div className="font-bold text-[#025195] text-lg">
                  {MostPopular.dist}
                </div>
              </div>
            </div>
            <p className="font-bold leading-4 text-sm text-[#025195]">
              {MostPopular.specH}
              <span className="font-normal text-[#7C7C7C]">
                {MostPopular.spec}
              </span>
            </p>
            <p className="font-bold text-sm leading-4 my-3 text-[#025195]">
              {MostPopular.servicesH}
              <span className="font-normal text-[#7C7C7C]">
                {MostPopular.services}
              </span>
            </p>
            <p className="font-bold text-sm leading-4 text-[#025195]">
              {MostPopular.discriptionH}
              <span className="font-normal text-[#7C7C7C]">
                {MostPopular.discription}
              </span>
            </p>
            <div className="flex gap-3 my-5">
              <div className="flex justify-center w-1/2 py-3 text-sm text-[#75C44C] italic border border-[#75C44C] rounded-xl">
                2,341 orders completed
              </div>
              <div className="flex justify-center w-1/2 py-3 text-[#F21F61] border border-[#F21F61] rounded-xl">
                Set appointment
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <p className=" font-bold leading-none">{MostPopular.rating}</p>
                <div className="flex gap-1 mr-14">
                  <IoIosStar className="w-5 h-5 text-[#025195]" />
                  <IoIosStar className="w-5 h-5 text-[#025195]" />
                  <IoIosStar className="w-5 h-5 text-[#025195]" />
                  <IoIosStarHalf className="w-5 text-[#025195] h-5" />
                </div>
              </div>
              <div className="border border-[#025195] bg-white p-[2px] rounded-full inline-flex items-center justify-center">
                <FaArrowRightLong className="bg-[#025195] text-white rounded-full p-2 h-8 w-8 md:h-10 md:w-10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
