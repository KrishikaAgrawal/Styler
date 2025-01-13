import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";

import mostPopular from "../../assets/Services/MostPopular.png";

import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
// import { IoFilterSharp } from "react-icons/io5";
import ItemNotFound from "./ItemNotFound";

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
    spec: string;
    services: string;
    discription: string;
    orders: string;
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
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      services: "Custom design consultations, garment creation, alterations.",
      discription:
        "Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      orders: "2,341 orders completed",
    },
    {
      img: mostPopular,
      name: "Bella Moda",
      designer: "Designer",
      loc: "PARIS, FRANCE",
      dist: "8 km",
      spec: "Modern casual wear, stylish office attire, and bespoke fashion.",
      services:
        "Style consultation, custom garment creation, wardrobe planning.",
      discription:
        "Bella Moda specializes in creating modern and chic designs for everyday wear. Perfect for fashion-forward individuals looking to enhance their wardrobe.",
      rating: "(4.7/5)",
      orders: "1,800 orders completed",
    },
    {
      img: mostPopular,
      name: "Elegance Atelier",
      designer: "Designer",
      loc: "MILAN, ITALY",
      dist: "10 km",
      spec: "Luxury evening wear, bespoke suits, and high-end bridal gowns.",
      services:
        "Bespoke tailoring, fabric selection consultation, fitting services.",
      discription:
        "Elegance Atelier is known for its luxurious designs and exceptional tailoring. Ideal for clients who desire sophistication and elegance in their attire.",
      rating: "(4.8/5)",
      orders: "2,000 orders completed",
    },
    {
      img: mostPopular,
      name: "Urban Chic",
      designer: "Designer",
      loc: "TOKYO, JAPAN",
      dist: "6 km",
      spec: "Contemporary streetwear, unique fashion statements, and urban apparel.",
      services:
        "Custom streetwear design, limited edition collections, style advice.",
      discription:
        "Urban Chic offers cutting-edge streetwear and urban fashion. Perfect for those who want to make a bold fashion statement.",
      rating: "(4.6/5)",
      orders: "1,500 orders completed",
    },
    {
      img: mostPopular,
      name: "Royal Garb",
      designer: "Designer",
      loc: "LONDON, UK",
      dist: "3 km",
      spec: "Classic British tailoring, royal-themed costumes, and formal wear.",
      services: "Tailoring services, costume design, alteration services.",
      discription:
        "Royal Garb provides high-quality British tailoring and formal wear. Ideal for clients seeking classic and timeless fashion.",
      rating: "(4.9/5)",
      orders: "2,500 orders completed",
    },
    {
      img: mostPopular,
      name: "Vogue Virtuoso",
      designer: "Designer",
      loc: "LOS ANGELES, USA",
      dist: "12 km",
      spec: "Red carpet dresses, luxury casual wear, and innovative fashion design.",
      services: "Red carpet styling, fashion design, personal shopping.",
      discription:
        "Vogue Virtuoso is famous for its red carpet and luxury casual wear. Ideal for those who want to stand out with innovative and trendy designs.",
      rating: "(4.8/5)",
      orders: "2,200 orders completed",
    },
  ];

  // search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<MostPopular[]>(data2);

  // Initialize Fuse.js
  const fuse = new Fuse(data2, {
    keys: ["spec"],
  });

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = fuse.search(searchTerm);
      setFilteredData(results.map((result) => result.item));
    } else {
      setFilteredData(data2);
    }
  }, [searchTerm]);

  return (
    <div className="p-5 md:p-12 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-10 text-3xl md:text-5xl">
        MOST POPULAR
      </h1>
      {/* search */}
      <div className="flex items-center p-4 w-full border border-[#C7C5C5] bg-[#FCFCFC] rounded-2xl mb-4 lg:mb-10 ">
        <label htmlFor="service" className="flex items-center">
          <LuSearch className="lg:mr-8 mr-2 text-[#546879] " />
        </label>
        <input
          type="text"
          id="service"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="focus:outline-none w-full bg-[#FCFCFC]"
        />
        {/* filter */}
        {/* <IoFilterSharp className="lg:ml-2 mr-1 text-[#546879]" /> */}
      </div>

      {/* cards */}
      {filteredData.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-4">
          {filteredData.map((MostPopular, index) => (
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
                <p className="   px-8 py-2 rounded-lg text-[#025195] border border-[#025195] bg-[#DEF9FF] font-bold">
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
                Specialization:
                <span className="font-normal text-[#7C7C7C]">
                  {MostPopular.spec}
                </span>
              </p>
              <p className="font-bold text-sm leading-4 my-3 text-[#025195]">
                Services:
                <span className="font-normal text-[#7C7C7C]">
                  {MostPopular.services}
                </span>
              </p>
              <p className="font-bold text-sm leading-4 text-[#025195]">
                Description:
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
                  <p className=" font-bold leading-none">
                    {MostPopular.rating}
                  </p>
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
      ) : (
        <ItemNotFound />
      )}
    </div>
  );
};

export default MostPopular;
