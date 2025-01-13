import React from "react";

import wishlist from "../../../assets/header/wishlist.png";

import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const Wishlist: React.FC = () => {
  interface wish_list {
    img: string;
    name: string;
    description: string;
    descriptionH: string;
    designation: string;
    specH: string;
    spec: string;
    serviceH: string;
    service: string;
    rating: string;
  }
  const data: wish_list[] = [
    {
      img: wishlist,
      name: "Aria Couture",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      descriptionH: "Description: ",
      description:
        "Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      designation: "Designer",
    },
    {
      img: wishlist,
      name: "Aria Couture",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      descriptionH: "Description: ",
      description:
        "Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      designation: "Designer",
    },
    {
      img: wishlist,
      name: "Aria Couture",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      descriptionH: "Description: ",
      description:
        "Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      designation: "Designer",
    },
    {
      img: wishlist,
      name: "Aria Couture",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      descriptionH: "Description: ",
      description:
        "Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      designation: "Designer",
    },
    {
      img: wishlist,
      name: "Aria Couture",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      descriptionH: "Description: ",
      description:
        "Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      designation: "Designer",
    },
    {
      img: wishlist,
      name: "Aria Couture",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      descriptionH: "Description: ",
      description:
        "Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      designation: "Designer",
    },
  ];
  return (
    <div className="p-5 md:p-12 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-10 text-3xl md:text-5xl">
        MY WISHLIST
      </h1>
      {data.map((designer, index) => (
        <div
          key={index}
          className="my-5 flex flex-col items-center md:flex-row p-6 gap-6 rounded-2xl shadow-custom "
        >
          <img
            src={designer.img}
            alt=""
            className="rounded-2xl  object-cover w-48 h-48"
          />
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="mb-2 mt-4 leading-none text-2xl text-[#025195] font-Gloock ">
                {designer.name}
              </h1>
              <p className="border px-3 flex items-center rounded-2xl border-[#0B1957] text-[#0B1957] bg-[#D9E0FF] text-lg font-semibold">
                {designer.designation}
              </p>
            </div>

            <p className="font-bold leading-4 py-2 text-sm text-[#025195]">
              {designer.specH}
              <span className="font-normal text-[#7C7C7C]">
                {designer.spec}
              </span>
            </p>
            <p className="font-bold text-sm  leading-4 text-[#025195]">
              {designer.serviceH}
              <span className="font-normal text-[#7C7C7C]">
                {designer.service}
              </span>
            </p>
            <p className="font-bold text-sm  py-2 leading-4 text-[#025195]">
              {designer.descriptionH}
              <span className="font-normal text-[#7C7C7C]">
                {designer.description}
              </span>
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-5">
                <p className=" font-bold leading-none">{designer.rating}</p>
                <div className="flex gap-1 mr-14 text-[#025195]">
                  <IoIosStar className="w-4 h-4" />
                  <IoIosStar className="w-4 h-4" />
                  <IoIosStar className="w-4 h-4" />
                  <IoIosStarHalf className="w-4 h-4" />
                </div>
              </div>
              <div className="border border-[#025195] bg-white p-[2px] rounded-full inline-flex items-center justify-center">
                <FaArrowRightLong className="bg-[#025195] text-white rounded-full p-2 h-8 w-8" />
              </div>
            </div>
          </div>
          <p className="font-bold text-3xl lg:text-5xl">$500+</p>
          <RiDeleteBin6Line className="text-red-700 text-3xl lg:text-5xl" />
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
