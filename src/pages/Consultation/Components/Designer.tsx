import React, { useState, useEffect } from "react";
import useFetch from "@/Hooks/useFetch";
import Loading from "@/pages/Loading/Loading";
// import Loading from "../Loading/Loading";

import designerDetails from "../../../assets/Services/designerDetails.png";

import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";
import { FaRegShareSquare } from "react-icons/fa";

interface ComponentProps {
  id: string | undefined;
}
interface Designer {
  _id: string;
  fullname: string;
  city: string;
  country: string;
  role: string;
  address1: string;
  address2: string;
  phone: string;
  websiteLink: string;
  location?: {
    type: string;
    coordinates: [number | null, number | null]; // Longitude, Latitude
  };
}

const Designer: React.FC<ComponentProps> = ({ id }) => {
  const [designerData, setDesignerData] = useState<Designer | null>(null);

  // Fetch designer data from API
  const { data, loading, error } = useFetch<{ partner: Designer }>(
    `/get-partner-details-by-id/${id}`
  );

  // Effect to update state when API data is available
  useEffect(() => {
    if (data?.partner) {
      const {
        _id,
        fullname,
        city,
        country,
        role,
        address1,
        address2,
        phone,
        websiteLink,
        location,
      } = data.partner;

      const coordinates = location?.coordinates || [null, null]; // Ensure it doesn't break if undefined
      const [longitude, latitude] = coordinates; // Extracting values

      setDesignerData({
        _id,
        fullname,
        city,
        country,
        role,
        address1,
        address2,
        phone,
        websiteLink,
        location: { type: "Point", coordinates: [longitude, latitude] }, // Store properly
      });
    }
  }, [data]);

  console.log(designerData);

  // Display loading state
  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="">
      <img
        className="py-7 h-1/2 lg:h-fit object-cover  rounded-xl"
        src={designerDetails}
        alt=""
      />

      <div className="font-inter">
        <div>
          {/* About the designer */}
          <div>
            <div className="flex justify-between flex-col-reverse lg:flex-row gap-4 lg:gap-0">
              <h1 className=" text-3xl lg:text-4xl text-[#025195] font-Gloock ">
                {designerData?.fullname}
              </h1>
              <div className="flex lg:grid grid-cols-3 gap-2 ">
                <p className="flex justify-center text-xs lg:text-base items-center border-2 rounded-lg py-2 px-2 font-semibold text-[#025195] bg-[#DEF9FF] border-[#025195]">
                  {designerData?.city}, {designerData?.country}
                </p>
                <p className="flex justify-center text-xs lg:text-base items-center border-2 rounded-lg py-2 px-2 font-semibold text-[#0B1957] bg-[#D9E0FF] border-[#0B1957]">
                  {designerData?.role.toUpperCase()}
                </p>
                <p className="flex justify-center text-xs lg:text-base items-center rounded-2xl lg:rounded-lg py-2 px-8 lg:px-2 font-semibold text-white bg-[#75C44C]">
                  OPEN
                </p>
              </div>
            </div>

            <p className="text-[#777777] text-sm lg:text-lg py-4">
              {designerData?.address1}, {designerData?.address2}
            </p>

            <div className="flex gap-1 mr-14">
              <IoIosStar className="w-5 h-5 text-[#025195]" />
              <IoIosStar className="w-5 h-5 text-[#025195]" />
              <IoIosStar className="w-5 h-5 text-[#025195]" />
              <IoIosStarHalf className="w-5 text-[#025195] h-5" />

              <p className="text-[#EE3030] font-semibold text-xs lg:text-base pl-10">
                (75) Reviews
              </p>
            </div>
          </div>
          {/* Links */}
          <div className="flex justify-around my-6">
            <a
              href={designerData?.websiteLink}
              className="flex flex-col items-center gap-2 "
            >
              <FiGlobe className="text-[#025195] text-2xl lg:text-5xl" />
              <p className="lg:font-bold text-[10px] lg:text-xl text-[#025195]">
                Website
              </p>
            </a>
            <div className="flex flex-col items-center gap-2">
              <MdCall className="text-[#025195] text-2xl lg:text-5xl" />
              <p className="lg:font-bold text-[10px] lg:text-xl text-[#025195]">
                Call
              </p>
            </div>
            <div
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => {
                if (designerData?.location?.coordinates) {
                  const [longitude, latitude] =
                    designerData.location.coordinates;
                  window.open(
                    `https://www.google.com/maps?q=${latitude},${longitude}`,
                    "_blank"
                  );
                } else {
                  alert("Location coordinates not available.");
                }
              }}
            >
              <MdOutlineLocationOn className="text-[#025195] text-2xl lg:text-5xl" />
              <p className="lg:font-bold text-[10px] lg:text-xl text-[#025195]">
                Direction
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <IoIosChatboxes className="text-[#025195] text-2xl lg:text-5xl" />
              <p className="lg:font-bold text-[10px] lg:text-xl text-[#025195]">
                Chat
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaRegShareSquare className="text-[#025195] text-2xl lg:text-5xl" />
              <p className="lg:font-bold text-[10px] lg:text-xl text-[#025195]">
                Share
              </p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Designer;
