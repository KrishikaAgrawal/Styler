import React from "react";

import address from "../../../assets/Services/address.png";
import Review from "../../../assets/Services/Review1.png";
import Review2 from "../../../assets/Services/Review2.png";
import reviewImg1 from "../../../assets/Services/reviewImg1.png";
import reviewImg2 from "../../../assets/Services/reviewImg2.png";

import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";

const AboutUs: React.FC = () => {
  return (
    <div className="font-inter">
      {/* contact */}
      <div className="flex justify-between mt-6 mb-4 lg:mt-8">
        <h2 className="font-bold text-xl lg:text-3xl">Contact</h2>
        <p className="font-bold text-xl lg:text-3xl text-[#025195]">
          9876543210
        </p>
      </div>
      {/* Address */}
      <div className="flex flex-col">
        <h2 className="font-bold text-xl lg:text-3xl">Address</h2>
        <p className="font-medium lg:text-lg text-[#025195]">
          456 Oak Street, Cityville, CA 90210
        </p>
        <img
          src={address}
          alt=""
          className="rounded-2xl h-[250px] object-cover mt-4 lg:h-[400px]"
        />
      </div>

      {/* Review */}
      <h1 className="font-bold text-xl lg:text-3xl text-[#025195] mt-8 mb-5 lg:mt-10">
        Reviews
      </h1>
      {/* Sarah Review */}
      <div className="flex flex-col w-full gap-2  mb-5">
        <div className="flex w-full items-center justify-between ">
          <div className="flex gap-2 lg:gap-6 ">
            <img src={Review} alt="" className="w-14 lg:w-28" />
            <div className="flex flex-col justify-center">
              <h3 className="font-bold lg:text-xl text-xs">Sarah Shaoeb</h3>
              <div className="flex">
                <IoMdStar className="text-yellow-400 lg:text-lg  " />
                <IoMdStar className="text-yellow-400 lg:text-lg" />
                <IoMdStarHalf className="text-yellow-400 lg:text-lg" />
              </div>
            </div>
          </div>
          <p className="text-xs lg:text-xl font-semibold text-[#025195]">
            3 Days Ago
          </p>
        </div>
        <p className="text-[#8F959E] text-xs lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus
          sed justo fermentum faucibus. Mauris a magna nec nulla placerat
          imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae;
        </p>
      </div>
      {/* Lily Root Review */}
      <div className="flex flex-col w-full gap-2">
        <div className="flex w-full items-center justify-between ">
          <div className="flex gap-2 lg:gap-6 ">
            <img src={Review2} alt="" className="w-14 lg:w-28" />
            <div className="flex flex-col justify-center">
              <h3 className="font-bold lg:text-xl text-xs">Lily Root</h3>
              <div className="flex">
                <IoMdStar className="text-yellow-400 lg:text-lg  " />
                <IoMdStarHalf className="text-yellow-400 lg:text-lg" />
              </div>
            </div>
          </div>
          <p className="text-xs lg:text-xl font-semibold text-[#025195]">
            1 Days Ago
          </p>
        </div>
        <p className="text-[#8F959E] text-xs lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus
          sed justo fermentum faucibus. Mauris a magna nec nulla placerat
          imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae;
        </p>
        <div className="flex gap-2 lg:gap-3">
          <img src={reviewImg1} alt="" className="w-12 lg:w-auto" />
          <img src={reviewImg2} alt="" className="w-12 lg:w-auto" />
        </div>
        <div className="flex flex-col text-[#025195] bg-[#EEEDED] rounded-2xl p-4 gap-2 lg:gap-3">
          <div className="flex justify-between">
            <p className="font-semibold text-[10px] lg:text-base">
              {" "}
              Aria Couture
            </p>
            <p className="text-xs lg:text-base">1 day ago</p>
          </div>
          <p className="lg:text-base text-[10px] leading-1">
            We apologize for any inconvenience caused. Our team strives to meet
            every customer's expectations, and we regret falling short in your
            case. Please allow us the opportunity to make it right. We're
            committed to ensuring your satisfaction on your next visit.
          </p>
        </div>
      </div>
      <button className="my-10 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex">
        <IoPaperPlaneOutline />
        <p className="">Get Directions - 4 km</p>
      </button>
    </div>
  );
};

export default AboutUs;
