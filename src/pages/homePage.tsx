import React, { useState } from "react";
import { STNavbar } from "@/components/common";
import STFooter from "@/components/common/STFooter";

// import image
import heroArrow from "../assets/homePage/heroArrow.png";
import brownArrow from "../assets/homePage/brownArrow.png";
import homeImage from "../assets/homePage/homeImage.png";
// import Luca from "../assets/homePage/Luca.png";
// import Vivienne from "../assets/homePage/Vivienne.png";
// import Isabella from "../assets/homePage/Isabella.png";
// import Sofia from "../assets/homePage/Sofia.png";
// import Rafeal from "../assets/homePage/Rafeal.png";
import Journey1 from "../assets/homePage/Journey1.png";
import Journey2 from "../assets/homePage/Journey2.png";
import Journey3 from "../assets/homePage/Journey3.png";
import whiteArrow from "../assets/homePage/whiteArrow.png";
import checkbox from "../assets/homePage/checkbox.png";
import experiencing from "../assets/homePage/experiencing.png";
import point from "../assets/homePage/point.png";
import Wanderlust1 from "../assets/homePage/Wanderlust1.png";
import Wanderlust2 from "../assets/homePage/Wanderlust2.png";
import Wanderlust3 from "../assets/homePage/Wanderlust3.png";
import gateways from "../assets/homePage/gateways.png";
import one from "../assets/homePage/one.png";
import two from "../assets/homePage/two.png";
import three from "../assets/homePage/three.png";
import four from "../assets/homePage/four.png";
import feature1 from "../assets/homePage/feature1.png";
import feature2 from "../assets/homePage/feature2.png";
import feature3 from "../assets/homePage/feature3.png";
import feature4 from "../assets/homePage/feature4.png";

const HomePage: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <div className="overflow-x-hidden">
      <STNavbar />

      <div className="min-h-screen flex flex-col">
        {/* hero section */}
        <div className="flex-grow bg-[#F4F0F0] flex p-5 gap-5 md:gap-10 md:p-20 lg:gap-40 lg:p-20">
          <div className="flex flex-col w-1/2 justify-center">
            <div className="flex items-center md:gap-3 justify-start">
              <p className="text-[10px] font-semibold md:text-lg text-[#531A02] font-inter">
                EXPLORE STYLER.
              </p>
              <img src={heroArrow} alt="" className="md:h-3 h-2" />
            </div>
            <div className="lg:text-7xl md:text-6xl text-2xl leading-7 font-bold text-[#531A02]">
              Unleash Your Unique Style with Styler
            </div>
            <button className="flex font-semibold mt-3 md:mt-6 w-fit rounded-full items-center justify-center text-xs px-2 py-1 md:px-8 md:py-4 border-[#531A02] text-[#531A02] border gap-1">
              <p>Contact Us</p>
              <img className="w-2 h-2 md:w-3 md:h-3" src={brownArrow} alt="" />
            </button>
          </div>
          <div className="flex items-center justify-center w-1/2 h-full">
            <img src={homeImage} alt="" className="h-5/6 lg:h-full" />
          </div>
        </div>

        {/* Unknown Wanderlust Your Journey into */}
        <div className="flex lg:py-16 md:py-12 py-8 md:mx-16 lg:mx-20 flex-col-reverse md:flex-row m-5 md:m-0 gap-12 md:items-center">
          <div className="md:w-1/2">
            <div className="flex flex-col gap-3">
              <div className="flex items-end gap-3">
                <img className="w-1/2 h-fit min-w-0.5" src={Journey1} alt="" />
                <img className="w-1/2 h-fit" src={Journey2} alt="" />
              </div>
              <div className="flex  items-start gap-3">
                <div className="flex flex-col gap-3 w-full items-center justify-around py-5 text-white rounded-xl bg-[#5A3F2C]">
                  <span className="font-bold text-2xl md:text-4xl">10+</span>
                  <span className="text-center leading-5">
                    Years of <br /> Experiences
                  </span>
                </div>
                <img className="h-fit min-w-0.5" src={Journey3} alt="" />
              </div>
            </div>
          </div>

          <div className="flex md:w-1/2 flex-col font-inter">
            <p className="text-sm text-[#531A02] mb-3">ABOUT US</p>
            <p className="text-3xl md:text-4xl font-bold overflow">
              Unknown Wanderlust{" "}
              <span className="text-[#531A02]">Your Journey into</span>
            </p>
            <p className="text-[#727272] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet rcus nunc. Duis egestas ac ante sed tincidunt.
            </p>
            <div className="flex md:flex-row flex-col gap-5">
              <div className="flex flex-col">
                <div className=" flex items-center gap-3">
                  <img src={checkbox} alt="" className="h-3" />
                  <p className="text-[#531A02] font-semibold">Safety Guides</p>
                </div>
                <p className="text-[#727272]">
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <img src={checkbox} alt="" className="h-3" />
                  <p className="text-[#531A02] font-semibold">
                    Passport Assistance
                  </p>
                </div>
                <p className="text-[#727272]">
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit
                </p>
              </div>
            </div>

            <button className="flex mt-6 w-fit rounded-full items-center justify-center px-4 md:px-8 py-4 text-white bg-[#531A02] border gap-3">
              <p>Read More</p>
              <img className="w-4 h-3" src={whiteArrow} alt="" />
            </button>
          </div>
        </div>

        {/* Experiencing Traditions Cultural Immersion */}
        <div className="flex md:px-16 lg:px-20 lg:py-16 md:py-12 py-8 flex-col-reverse md:flex-row px-5 md:m-0 gap-12 md:items-center bg-[#F4F0F0]">
          <div className="md:w-1/2">
            <div className="flex gap-3">
              <img src={experiencing} alt="" className="lg:w-2/3" />
            </div>
          </div>

          <div className="flex md:w-1/2 flex-col font-inter">
            <div className="flex items-center md:gap-3 gap-2 justify-start">
              <p className="text-[10px] md:text-lg text-[#531A02] font-inter">
                WHY CHOOSE US
              </p>
              <img src={heroArrow} alt="" className="md:h-3 h-2" />
            </div>
            <p className="text-3xl text-[#531A02] md:text-4xl font-bold overflow mb-6">
              Experiencing Traditions Cultural Immersion
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <div className=" flex items-center gap-3  mb-2">
                  <img src={point} alt="" className="h-3" />
                  <p className="text-[#531A02] font-semibold">
                    Marketing Services
                  </p>
                </div>
                <p className="text-[#727272]">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis venenatis cras sed eu massa loren ipsum
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3  mb-2">
                  <img src={point} alt="" className="h-3" />
                  <p className="text-[#531A02] font-semibold">IT Maintenance</p>
                </div>
                <p className="text-[#727272]">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis venenatis cras sed eu massa loren ipsum
                </p>
              </div>
            </div>

            <button className="flex mt-6 w-fit rounded-full items-center justify-center px-4 md:px-8 py-4 text-white bg-[#531A02] border gap-3">
              <p>Read More</p>
              <img className="w-4 h-3" src={whiteArrow} alt="" />
            </button>
          </div>
        </div>

        {/* Where Wanderlust Meets Dream DESIGNS */}
        <div className="flex md:mx-16 lg:mx-20 lg:py-16 md:py-12 px-5 py-8 flex-col font-inter items-center">
          <p className="text-[10px] text-lg text-[#531A02] font-inter">
            ABOUT THE DESIGNERS
          </p>

          <p className="text-3xl md:text-4xl font-bold overflow text-center">
            Where Wanderlust Meets
            <span className="text-[#531A02]">Dream DESIGNS</span>
          </p>
          <p className="text-[#727272]  text-center md:mt-10 mt-6 md:mb-4 mb-2">
            Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
            venenatis cras sed eu massa Et purus duis sollicitudin dignissim
            habitant. Egestas nulla quis venenatis cras sed eu massa Et purus
            duis sollicitudin dignissim habitant. Egestas nulla
          </p>

          <button className="flex mt-6 w-fit text-xs rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#531A02] border-[#531A02] border gap-3">
            <p>EXPLORE NOW</p>
            <img className="w-4 h-3" src={brownArrow} alt="" />
          </button>
        </div>
        <div className="mx-5 md:mx-16 lg:mx-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {/* First three cards */}
          <div className="rounded-2xl shadow-custom-shadow">
            <img src={Wanderlust1} alt="" className="w-full" />
            <div className="p-6">
              <div className="flex mt-5 mb-3 justify-between items-center">
                <h2 className="font-bold text-2xl text-[#531A02]">
                  Bangladesh
                </h2>
                <button className="px-4 py-2 rounded-lg leading-none text-[#531A02] font-inter font-semibold text-xs border border-[#E3DBD8]">
                  Dubai, UAE
                </button>
              </div>
              <div className="text-[#727272]">
                Lorem Ipsum is simply dummy text the printing and provide best
                visa ever
              </div>
              <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#531A02] border-[#531A02] border gap-3">
                <p>Apply Now</p>
                <img className="w-4 h-3" src={brownArrow} alt="" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl shadow-custom-shadow">
            <img src={Wanderlust3} alt="" className="w-full" />
            <div className="p-6">
              <div className="flex mt-5 mb-3 justify-between items-center">
                <h2 className="font-bold text-2xl text-[#531A02]">
                  South Korea
                </h2>
                <button className="px-4 py-2 rounded-lg leading-none text-[#531A02] font-inter font-semibold text-xs border border-[#E3DBD8]">
                  Milan, Italy
                </button>
              </div>
              <div className="text-[#727272]">
                Lorem Ipsum is simply dummy text the printing and provide best
                visa ever
              </div>
              <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#531A02] border-[#531A02] border gap-3">
                <p>Apply Now</p>
                <img className="w-4 h-3" src={brownArrow} alt="" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl shadow-custom-shadow">
            <img src={Wanderlust2} alt="" className="w-full" />
            <div className="p-6">
              <div className="flex mt-5 mb-3 justify-between items-center">
                <h2 className="font-bold text-2xl text-[#531A02]">
                  South Africa
                </h2>
                <button className="px-4 py-2 rounded-lg leading-none text-[#531A02] font-inter font-semibold text-xs border border-[#E3DBD8]">
                  Barcelona, Spain
                </button>
              </div>
              <div className="text-[#727272]">
                Lorem Ipsum is simply dummy text the printing and provide best
                visa ever
              </div>
              <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#531A02] border-[#531A02] border gap-3">
                <p>Apply Now</p>
                <img className="w-4 h-3" src={brownArrow} alt="" />
              </button>
            </div>
          </div>

          {/* Additional cards, visible only when showMore is true */}

          <div className={`${showMore ? "block" : "hidden"} md:block`}>
            <div className="rounded-2xl shadow-custom-shadow">
              <img src={Wanderlust1} alt="" className="w-full" />
              <div className="p-6">
                <div className="flex mt-5 mb-3 justify-between items-center">
                  <h2 className="font-bold text-2xl text-[#531A02]">
                    Bangladesh
                  </h2>
                  <button className="px-4 py-2 rounded-lg leading-none text-[#531A02] font-inter font-semibold text-xs border border-[#E3DBD8]">
                    Dubai, UAE
                  </button>
                </div>
                <div className="text-[#727272]">
                  Lorem Ipsum is simply dummy text the printing and provide best
                  visa ever
                </div>
                <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#531A02] border-[#531A02] border gap-3">
                  <p>Apply Now</p>
                  <img className="w-4 h-3" src={brownArrow} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${showMore ? "block" : "hidden"} md:block`}>
            <div className="rounded-2xl shadow-custom-shadow">
              <img src={Wanderlust3} alt="" className="w-full" />
              <div className="p-6">
                <div className="flex mt-5 mb-3 justify-between items-center">
                  <h2 className="font-bold text-2xl text-[#531A02]">
                    South Korea
                  </h2>
                  <button className="px-4 py-2 rounded-lg leading-none text-[#531A02] font-inter font-semibold text-xs border border-[#E3DBD8]">
                    Milan, Italy
                  </button>
                </div>
                <div className="text-[#727272]">
                  Lorem Ipsum is simply dummy text the printing and provide best
                  visa ever
                </div>
                <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#531A02] border-[#531A02] border gap-3">
                  <p>Apply Now</p>
                  <img className="w-4 h-3" src={brownArrow} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${showMore ? "block" : "hidden"} md:block`}>
            <div className="rounded-2xl shadow-custom-shadow">
              <img src={Wanderlust2} alt="" className="w-full" />
              <div className="p-6">
                <div className="flex mt-5 mb-3 justify-between items-center">
                  <h2 className="font-bold text-2xl text-[#531A02]">
                    South Africa
                  </h2>
                  <button className="px-4 py-2 rounded-lg leading-none text-[#531A02] font-inter font-semibold text-xs border border-[#E3DBD8]">
                    Barcelona, Spain
                  </button>
                </div>
                <div className="text-[#727272]">
                  Lorem Ipsum is simply dummy text the printing and provide best
                  visa ever
                </div>
                <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#531A02] border-[#531A02] border gap-3">
                  <p>Apply Now</p>
                  <img className="w-4 h-3" src={brownArrow} alt="" />
                </button>
              </div>
            </div>
          </div>
          {/* View More button */}
          <button
            className="flex mt-6 md:hidden bg-white text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#531A02] border-[#531A02] border gap-3"
            onClick={handleToggle}
          >
            <p>{showMore ? "View Less" : "View More"}</p>
            <img className="w-4 h-3" src={brownArrow} alt="" />
          </button>
        </div>

        {/* Unforgettable Getaways Escaping Routine */}
        <div className="bg-[#531A02] px-5 lg:px-14 lg:py-28 py-8 my-14">
          <div
            className="bg-[#F4F0F0] rounded-3xl flex  lg:py-16 md:py-12 px-5 py-8 flex-col font-inter items-center"
            style={{
              backgroundImage: `url(${gateways})`,
            }}
          >
            <p className="font-semibold md:text-lg text-sm text-[#531A02] font-inter mb-3">
              HOW IT WORKS
            </p>

            <p className="lg:w-1/2 font-inter text-2xl md:text-5xl font-bold overflow text-center text-[#531A02]">
              Unforgettable Getaways Escaping Routine
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              <div className="flex flex-col bg-white rounded-2xl p-7 gap-2 lg:mb-10 shadow-custom-shadow">
                <img src={one} alt="" className="w-8" />
                <p className="text-[#531A02] font-inter font-bold text-lg">
                  Discover Designers
                </p>
                <p className="text-[#531A02] font-inter text-sm">
                  Lorem Ipsum is simply dummy text the printing and typeser
                </p>
              </div>
              <div className="flex flex-col bg-white rounded-2xl p-7 gap-2 lg:mt-10 shadow-custom-shadow">
                <img src={two} alt="" className="w-10" />
                <p className="text-[#531A02] font-inter font-bold text-lg">
                  Request Custom Design
                </p>
                <p className="text-[#531A02] font-inter text-sm">
                  Lorem Ipsum is simply dummy text the printing and typeser
                </p>
              </div>
              <div className="flex flex-col bg-white rounded-2xl shadow-custom-shadow p-7 gap-2 lg:mb-10">
                <img src={three} alt="" className="w-10" />
                <p className="text-[#531A02] font-inter font-bold text-lg">
                  Consult & Collaborate
                </p>
                <p className="text-[#531A02] font-inter text-sm ">
                  Lorem Ipsum is simply dummy text the printing and typeser
                </p>
              </div>
              <div className="flex flex-col bg-white rounded-2xl p-7 gap-2 lg:mt-10 shadow-custom-shadow">
                <img src={four} alt="" className="w-10" />
                <p className="text-[#531A02] font-inter font-bold text-lg">
                  Receive & Review
                </p>
                <p className="text-[#531A02] font-inter text-sm">
                  Lorem Ipsum is simply dummy text the printing and typeser
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seeking Adventure Thrills and Excitement Await */}
        <div className="flex md:mx-16 lg:mx-20 lg:pb-16 md:pb-12 pb-5 py-8 flex-col font-inter items-center">
          <p className="font-semibold md:text-lg text-sm text-[#531A02] font-inter mb-3">
            OUR PLATFORM FEATURES
          </p>

          <p className=" font-inter text-2xl md:text-5xl font-bold overflow text-center text-[#531A02]">
            Seeking Adventure Thrills and Excitement Await
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16">
            <div className="flex gap-7 p-4 border rounded-2xl font-inter items-center">
              <img
                src={feature1}
                alt=""
                className="lg:w-64 min-w-36 lg:min-w-64 h-fit"
              />
              <div className="flex flex-col gap-5 justify-center">
                <p className="font-bold text-2xl text-[#531A02]">
                  Custom Gown Design
                </p>
                <p className="font text-[#727272]">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis the venenatis cras sed eu
                </p>
                <div className="flex justify-end md:justify-start ">
                  <button className="border w-fit p-3 rounded-lg border-[#531A02]">
                    <img
                      src={brownArrow}
                      alt=""
                      className="transform -rotate-45 w-5"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-7 p-4 border rounded-2xl font-inter items-center">
              <img
                src={feature1}
                alt=""
                className="lg:w-64 min-w-36 lg:min-w-64 h-fit"
              />
              <div className="flex flex-col gap-5 justify-center">
                <p className="font-bold text-2xl text-[#531A02]">
                  Custom Gown Design
                </p>
                <p className="font text-[#727272]">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis the venenatis cras sed eu
                </p>
                <div className="flex justify-end md:justify-start ">
                  <button className="border w-fit p-3 rounded-lg border-[#531A02]">
                    <img
                      src={brownArrow}
                      alt=""
                      className="transform -rotate-45 w-5"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-7 p-4 border rounded-2xl font-inter items-center">
              <img
                src={feature1}
                alt=""
                className="lg:w-64 min-w-36 lg:min-w-64 h-fit"
              />
              <div className="flex flex-col gap-5 justify-center">
                <p className="font-bold text-2xl text-[#531A02]">
                  Custom Gown Design
                </p>
                <p className="font text-[#727272]">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis the venenatis cras sed eu
                </p>
                <div className="flex justify-end md:justify-start ">
                  <button className="border w-fit p-3 rounded-lg border-[#531A02]">
                    <img
                      src={brownArrow}
                      alt=""
                      className="transform -rotate-45 w-5"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-7 p-4 border rounded-2xl font-inter items-center">
              <img
                src={feature1}
                alt=""
                className="lg:w-64 min-w-36 lg:min-w-64 h-fit"
              />
              <div className="flex flex-col gap-5 justify-center">
                <p className="font-bold text-2xl text-[#531A02]">
                  Custom Gown Design
                </p>
                <p className="font text-[#727272]">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis the venenatis cras sed eu
                </p>
                <div className="flex justify-end md:justify-start ">
                  <button className="border w-fit p-3 rounded-lg border-[#531A02]">
                    <img
                      src={brownArrow}
                      alt=""
                      className="transform -rotate-45 w-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <STFooter />
    </div>
  );
};

export default HomePage;
