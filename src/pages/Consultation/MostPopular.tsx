import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import useFetch from "@/Hooks/useFetch";

import mostPopular from "../../assets/Services/MostPopular.png";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
// import { IoFilterSharp } from "react-icons/io5";
import ItemNotFound from "./ItemNotFound";
import Loading from "../Loading/Loading";

interface Service {
  serviceName: string;
  _id: string;
  subService: unknown[];
}

interface Designer {
  _id: string;
  fullname: string;
  country: string;
  city: string;
  role: string;
  specialization: string[];
  description: string;
  services: Service[];
}

const MostPopular: React.FC = () => {
  const navigate = useNavigate();
  const navigateToDesigner = (id: string) => {
    navigate(`/DesignerDetails/${id}`);
  };

  const [designerData, setDesignerData] = useState<Designer[]>([]);
  const [filteredData, setFilteredData] = useState<Designer[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [liked, setLiked] = useState(false);
  const { data, loading, error } = useFetch<{ partners: Designer[] }>(
    "get/partners"
  );

  useEffect(() => {
    if (data?.partners) {
      const designers = data.partners.map((partner) => ({
        _id: partner._id,
        fullname: partner.fullname,
        country: partner.country,
        city: partner.city,
        role: partner.role,
        specialization: partner.specialization || [],
        description: partner.description,
        services: partner.services || [],
      }));
      setDesignerData(designers);
      setFilteredData(designers);
    }
  }, [data]);

  // Initialize Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(designerData, {
      keys: ["specialization", "fullname", "role", "services.serviceName"],
      threshold: 0.3, // Adjust for sensitivity
    });
  }, [designerData]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = fuse.search(searchTerm);
      setFilteredData(results.map((result) => result.item));
    } else {
      setFilteredData(designerData);
    }
  }, [searchTerm, designerData, fuse]);

  // if (loading) return <p>Loading...</p>;
  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

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
          {filteredData.map((Partner) => (
            <div
              key={Partner._id}
              className=" cursor-pointer p-3 rounded-2xl border border-black"
            >
              <div className="relative">
                <img
                  src={mostPopular}
                  alt=""
                  className="rounded-2xl h-52  w-full object-cover "
                />
                <button
                  onClick={() => setLiked(!liked)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                  {liked ? (
                    <FaHeart className="w-6 h-6 text-[#025195]" />
                  ) : (
                    <FaRegHeart className="w-6 h-6 text-[#025195]" />
                  )}
                </button>
              </div>
              <div className="flex  mt-4 items-center justify-between">
                <a href="/DesignerDetails">
                  <h1 className=" leading-none text-3xl lg:text-4xl text-[#025195] font-Gloock  ">
                    {Partner.fullname}
                  </h1>
                </a>
                <p className=" border-2 rounded-lg py-2 px-2 font-semibold text-[#0B1957] bg-[#D9E0FF] border-[#0B1957]">
                  {Partner.role}
                </p>
              </div>
              <div className="flex items-center my-3 justify-between">
                <p className="   px-8 py-2 rounded-lg text-[#025195] border border-[#025195] bg-[#DEF9FF] font-bold">
                  {Partner.city}, {Partner.country}
                </p>
                <div className="flex  text-[#025195] items-center gap-1">
                  <IoLocationOutline className="text-xl" />
                  <div className="font-bold text-lg">
                    {/* {Partner.dist} */}5 Km
                  </div>
                </div>
              </div>
              <p className="font-bold leading-4 text-sm text-[#025195]">
                Specialization:{" "}
                <span className="font-normal text-[#7C7C7C]">
                  {/* {Partner.spec} */}
                  {Partner.specialization.join(", ") || "N/A"}
                </span>
              </p>
              <p className="font-bold text-sm leading-4 my-3 text-[#025195]">
                Services:{" "}
                <span className="font-normal text-[#7C7C7C]">
                  {/* {Partner.services} */}
                  {Partner.services
                    .map((service) => service.serviceName)
                    .join(", ") || "N/A"}
                </span>
              </p>
              <p className="font-bold text-sm leading-4 text-[#025195]">
                Description:{" "}
                <span className="font-normal text-[#7C7C7C]">
                  {Partner.description}
                </span>
              </p>
              <div className="flex gap-3 my-5">
                <div className="flex justify-center text-center w-1/2 py-3 text-sm text-[#75C44C] italic border border-[#75C44C] rounded-xl">
                  2,341 orders completed
                </div>
                <div className="flex justify-center items-center w-1/2 py-3 text-[#F21F61] border border-[#F21F61] rounded-xl">
                  Set appointment
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <p className=" font-bold leading-none">
                    {/* {Partner.rating} */}(4.5/5)
                  </p>
                  <div className="flex gap-1 mr-14">
                    <IoIosStar className="w-5 h-5 text-[#025195]" />
                    <IoIosStar className="w-5 h-5 text-[#025195]" />
                    <IoIosStar className="w-5 h-5 text-[#025195]" />
                    <IoIosStarHalf className="w-5 text-[#025195] h-5" />
                  </div>
                </div>
                <div
                  onClick={() => navigateToDesigner(Partner._id)}
                  className="border border-[#025195] bg-white p-[2px] rounded-full inline-flex items-center justify-center"
                >
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
