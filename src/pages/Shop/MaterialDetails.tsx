import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

import MaterialDetail from "../../assets/Shop/MaterialDetail.png";
import Review from "../../assets/Services/Review1.png";
import Review2 from "../../assets/Services/Review2.png";
import reviewImg1 from "../../assets/Services/reviewImg1.png";
import reviewImg2 from "../../assets/Services/reviewImg2.png";

import { IoIosStar } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

const MaterialDetails: React.FC = () => {
  // const location = useLocation();
  // const { Material } = location.state ;
  // console.log("Location state:", location.state);
  // console.log("Material:", Material);
  // no. of item
  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="px-5 font-inter lg:px-24">
      <div className="">
        <img
          className="py-7 h-1/2 lg:h-fit object-cover  rounded-xl"
          src={MaterialDetail}
          alt=""
        />

        <div className="font-inter">
          <div>
            {/* About the Material */}
            <div>
              <div className="flex justify-between  gap-4 lg:gap-0">
                <h1 className=" text-3xl lg:text-4xl text-[#025195] font-Gloock ">
                  Silk Satin
                </h1>
                <p className="flex justify-center text-xs lg:text-base items-center border-2 rounded-lg py-2 px-2 font-semibold text-[#016228] bg-[#F2FFF7] border-[#016228]">
                  Instock
                </p>
              </div>

              <p className="text-[#025195] font-extrabold text-xl lg:text-2xl py-4">
                LUXE FABRICS BOUTIQUES
              </p>
              <div className="flex items-end">
                <p className="text-2xl text-[#182135] font-[900] lg:text-4xl whitespace-nowrap">
                  $ 45
                </p>
                <p className="text-[#546879] font-medium text-xs whitespace-nowrap">
                  Per Metres
                </p>
              </div>
              <p className="text-[#141416] text-justify pt-2 italic ">
                Luxurious, smooth, and lightweight, silk satin is perfect for
                evening gowns, wedding dresses, and high-end fashion. This
                fabric has a glossy finish on one side and a matte finish on the
                other.
              </p>

              <div className="flex flex-wrap gap-1 lg:gap-1">
                {[
                  "#025195",
                  "#FDD805",
                  "#000000",
                  "#071C6D",
                  "#0B8AA0",
                  "#F0618A",
                  "#07E098",
                  "#FF9C00",
                  "#FFFFFF",
                ].map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className="h-7 lg:w-14 w-6 my-3 mx-1 rounded-sm"
                  ></div>
                ))}
              </div>

              <div className="flex gap-1 mr-14">
                <IoIosStar className="w-5 h-5 text-[#025195]" />
                <IoIosStar className="w-5 h-5 text-[#025195]" />
                <IoIosStar className="w-5 h-5 text-[#025195]" />
                <IoIosStar className="w-5 h-5 text-[#025195]" />
                <IoIosStar className="w-5 h-5 text-[#025195]" />

                <p className="text-[#EE3030] font-semibold text-xs lg:text-base pl-2">
                  <span className="text-black">(4.9/5) </span>(75 Reviews)
                </p>
              </div>
            </div>
          </div>

          {/* choose no. of item */}
          <div className="flex items-center rounded-lg my-3 border w-fit text-[#025195]">
            <button onClick={increment} className="w-10 text-2xl ">
              +
            </button>
            <span className="text-lg font-bold border-x px-4 py-2">
              {count}
            </span>
            <button onClick={decrement} className="w-10 text-2xl ">
              -
            </button>
          </div>

          {/* buttons */}
          <button className="mt-10 mb-5 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex">
            <p className="">Add to Cart</p>
          </button>
          <a href="/MaterialCheckout" className="w-full">
            <button className="mb-10 mt-5 rounded-[50px] justify-center items-center border font-semibold border-[#025195] text-[#025195] lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex">
              <p className="">Order Now</p>
            </button>
          </a>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              metus sed justo fermentum faucibus. Mauris a magna nec nulla
              placerat imperdiet. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae;
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              metus sed justo fermentum faucibus. Mauris a magna nec nulla
              placerat imperdiet. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae;
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
                We apologize for any inconvenience caused. Our team strives to
                meet every customer's expectations, and we regret falling short
                in your case. Please allow us the opportunity to make it right.
                We're committed to ensuring your satisfaction on your next
                visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetails;
