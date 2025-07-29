import React, { useState } from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

// import image
import heroArrow from "../../../assets/homePage/heroArrow.png";
import homeImage from "../../../assets/homePage/homeImage.png";
// import Luca from "../assets/homePage/Luca.png";
// import Vivienne from "../assets/homePage/Vivienne.png";
// import Isabella from "../assets/homePage/Isabella.png";
// import Sofia from "../assets/homePage/Sofia.png";
// import Rafeal from "../assets/homePage/Rafeal.png";
import Journey1 from "../../../assets/homePage/Journey1.png";
import Journey2 from "../../../assets/homePage/Journey2.png";
import Journey3 from "../../../assets/homePage/Journey3.png";
import experiencing from "../../../assets/homePage/experiencing.png";
import Designer1 from "../../../assets/homePage/Designer1.png";
import Designer2 from "../../../assets/homePage/Designer2.png";
import Designer3 from "../../../assets/homePage/Designer3.png";
import Designer4 from "../../../assets/homePage/Designer4.png";
import Designer5 from "../../../assets/homePage/Designer5.png";
import Designer6 from "../../../assets/homePage/Designer6.png";
import gateways from "../../../assets/homePage/gateways.png";
import one from "../../../assets/homePage/one.png";
import two from "../../../assets/homePage/two.png";
import three from "../../../assets/homePage/three.png";
import four from "../../../assets/homePage/four.png";
import feature1 from "../../../assets/homePage/feature1.png";
import feature2 from "../../../assets/homePage/feature2.png";
import feature3 from "../../../assets/homePage/feature3.png";
import feature4 from "../../../assets/homePage/feature4.png";
import Coaching1 from "../../../assets/homePage/Coaching1.png";
import Coaching2 from "../../../assets/homePage/coaching2.png";
import Coaching3 from "../../../assets/homePage/coaching3.png";
import Coaching4 from "../../../assets/homePage/coaching4.png";
import Coaching5 from "../../../assets/homePage/coaching5.png";
import Coaching6 from "../../../assets/homePage/coaching6.png";
import quote from "../../../assets/homePage/quote.png";
import testimonial1 from "../../../assets/homePage/testimonial1.png";
import testimonial2 from "../../../assets/homePage/testimonial2.png";
import testimonial3 from "../../../assets/homePage/testimonial3.png";
import blog1 from "../../../assets/homePage/blog1.png";
import blog2 from "../../../assets/homePage/blog2.png";
import blog3 from "../../../assets/homePage/blog3.png";
import calender from "../../../assets/LandingPage/calender.png";
import user from "../../../assets/LandingPage/user.png";
import ready from "../../../assets/homePage/ready.png";

const HomePage: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showMoreCoaching, setShowMoreCoaching] = useState<boolean>(false);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };
  const handleToggleCoaching = () => {
    setShowMoreCoaching(!showMoreCoaching);
  };
  return (
    <div className="overflow-x-hidden">
      {/* <HomePgNavbar /> */}

      <div className="min-h-screen flex flex-col">
        {/* hero section */}
        <div className="flex-grow bg-[#F3FDFF] flex p-5 gap-5 md:gap-10 md:p-20 lg:gap-40 lg:p-24 px-5">
          <div className="flex flex-col w-1/2 justify-center">
            <div className="flex items-center md:gap-3 justify-start">
              <p className="text-[10px] font-semibold md:text-lg text-[#025195] font-inter">
                EXPLORE STYLER.
              </p>
              <img src={heroArrow} alt="" className="md:h-3 h-2" />
            </div>
            <div className="lg:text-7xl md:text-6xl text-2xl leading-7 font-bold text-[#025195]">
              Style In The Comfort Of Your Very Own Couch
            </div>
            <button className="flex font-semibold mt-3 md:mt-6 w-fit rounded-full items-center justify-center text-xs px-2 py-1 md:px-8 md:py-4 border-[#025195] text-[#025195] border gap-1">
              <p>Explore</p>
              <FaArrowRightLong className="w-2 h-2 md:w-3 md:h-3 text-[#025195]" />
            </button>
          </div>
          <div className="flex items-center justify-center w-1/2 lg:w-5/12 overflow-hidden lg:h-[600px] border-4 rounded-2xl border-[#025195]">
            <img src={homeImage} alt="" className="" />
          </div>
        </div>

        {/* ABOUT US */}
        <div className="flex lg:py-16 md:py-12 py-8 md:mx-16 lg:mx-24 flex-col-reverse md:flex-row m-5 md:m-0 gap-12 lg:gap-32 md:items-center">
          <div className="md:w-1/2">
            <div className="flex flex-col gap-3">
              <div className="flex items-end gap-3">
                <img className="w-1/2 h-fit min-w-0.5" src={Journey1} alt="" />
                <img className="w-1/2 h-fit" src={Journey2} alt="" />
              </div>
              <div className="flex  items-start gap-3">
                <div className="flex flex-col gap-3 w-full items-center justify-around py-5 text-white rounded-xl bg-[#025195]">
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
            <p className="text-sm text-[#025195] mb-3 font-semibold">
              ABOUT US
            </p>
            <p className="text-3xl md:text-4xl font-bold overflow">
              You can replicate fashion,{" "}
              <span className="text-[#025195]"> BUT NOT STYLE</span>
            </p>
            <p className="text-[#727272] my-5">
              Our mission is to assist you in discovering your style through
              individual consultations. Tailor with a smooth online sewing
              experience while lounging on the sofa.
            </p>

            <button className="flex mt-6 w-fit rounded-full items-center justify-center px-4 md:px-8 py-4 text-white bg-[#025195] border gap-3">
              <p>Read More</p>
              <FaArrowRightLong className="w-4 h-3" />
            </button>
          </div>
        </div>

        {/* WHY CHOOSE US*/}
        <div className="flex md:px-16 lg:px-24 lg:py-16 md:py-12 py-8 flex-col-reverse md:flex-row px-5 md:m-0 gap-12 md:items-center bg-[#F3FDFF]">
          <div className="md:w-1/2">
            <div className="flex gap-3">
              <img
                src={experiencing}
                alt=""
                className=" border border-[#025195] rounded-2xl lg:w-[450px] lg:h-[450px] object-cover"
              />
            </div>
          </div>

          <div className="flex md:w-1/2 flex-col font-inter">
            <div className="flex items-center md:gap-2 gap-1 pb-2 justify-start">
              <p className="text-[10px] text-sm font-semibold  text-[#025195] font-inter">
                WHY CHOOSE US
              </p>
              <img src={heroArrow} alt="" className="md:h-2 h-2" />
            </div>
            <p className="text-3xl text-[#025195] md:text-4xl font-bold overflow mb-6">
              Style never falls out of fashion!
            </p>

            <div className="flex flex-col gap-5 lg:pr-20">
              <div className="flex flex-col">
                <div className=" flex items-center gap-3  mb-2">
                  <IoIosCheckmarkCircle className="h-4 w-4 text-[#025195] " />
                  <p className="text-[#025195] font-semibold">
                    Ideal Customization
                  </p>
                </div>
                <p className="text-[#727272]">
                  Our team helps you find your unique style, ensuring your
                  outfits showcase your personality with the best fabrics and
                  tailored fits.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3  mb-2">
                  <IoIosCheckmarkCircle className="h-4 w-4 text-[#025195] " />
                  <p className="text-[#025195] font-semibold">
                    Leading Designers
                  </p>
                </div>
                <p className="text-[#727272]">
                  Our finest tailors guarantee that each piece fits you
                  flawlessly and elevates your style.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3  mb-2">
                  <IoIosCheckmarkCircle className="h-4 w-4 text-[#025195] " />
                  <p className="text-[#025195] font-semibold">Client Comfort</p>
                </div>
                <p className="text-[#727272]">
                  Our experts prioritize customer satisfaction and cater to your
                  needs.
                </p>
              </div>
            </div>

            <button className="flex mt-6 w-fit rounded-full items-center justify-center px-4 md:px-8 py-4 text-white bg-[#025195] border gap-3">
              <p>Read More</p>
              <FaArrowRightLong className="w-4 h-3" />
            </button>
          </div>
        </div>

        {/*  ABOUT THE DESIGNERS */}
        <div className="flex md:mx-16 lg:mx-20 lg:py-16 md:py-12 px-5 py-8 flex-col font-inter items-center">
          <p className="text-[10px] text-sm font-semibold text-[#025195] font-inter">
            ABOUT OUR DESIGNERS
          </p>

          <p className="text-3xl md:text-4xl font-bold overflow text-center text-[#025195]">
            Enhance your wardrobe with Styler.
          </p>
          <p className="text-[#727272]  text-center md:mt-10 mt-6 md:mb-4 mb-2 lg:px-20">
            Our amazing design staff across the nation is very committed to
            making your clothing ideas come to life. They're on a quest to
            create custom designs that are stunning with an eye for all the
            little details and a real love of style. Whether you prefer classic
            vibes or up-to-date flare, our designers are here to help you find
            the look that best complements your personality and way of life.
            Let's get you stylish!
          </p>

          <button className="flex mt-6 w-fit text-xs rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3">
            <p>EXPLORE NOW</p>
            <FaArrowRightLong className="w-4 h-3 text-[#025195]" />
          </button>
        </div>
        <div className="mx-5 md:mx-16 lg:mx-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {/* First three cards */}
          <div className="rounded-2xl shadow-custom-shadow overflow-hidden">
            <img src={Designer1} alt="" className="h-56 w-full object-cover" />
            <div className="p-6">
              <div className="flex mt-5 mb-3 justify-between items-center">
                <h2 className="font-bold text-2xl text-[#025195]">
                  Bangladesh
                </h2>
                <button className="px-4 py-2 rounded-lg leading-none text-[#025195] font-inter font-semibold text-xs border border-[#E3DBD8]">
                  Dubai, UAE
                </button>
              </div>
              <div className="text-[#727272]">
                Discover the vibrant fusion of traditional Bangladeshi designs
                with a modern touch. Perfect for cultural events and everyday
                elegance.
              </div>
              <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3">
                <p>Apply Now</p>
                <FaArrowRightLong className="w-4 h-3 text-[#025195]" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl shadow-custom-shadow overflow-hidden">
            <img src={Designer2} alt="" className="h-56 w-full object-cover" />
            <div className="p-6">
              <div className="flex mt-5 mb-3 justify-between items-center">
                <h2 className="font-bold text-2xl text-[#025195]">
                  South Korea
                </h2>
                <button className="px-4 py-2 rounded-lg leading-none text-[#025195] font-inter font-semibold text-xs border border-[#E3DBD8]">
                  Milan, Italy
                </button>
              </div>
              <div className="text-[#727272]">
                Dive into the world of South Korean fashion, where sleek modern
                lines meet playful, cutting-edge trends. A perfect blend of
                style and innovation.
              </div>
              <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3">
                <p>Apply Now</p>
                <FaArrowRightLong className="w-4 h-3 text-[#025195]" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl shadow-custom-shadow overflow-hidden">
            <img src={Designer3} alt="" className="w-full h-56 object-cover" />
            <div className="p-6">
              <div className="flex mt-5 mb-3 justify-between items-center">
                <h2 className="font-bold text-2xl text-[#025195]">
                  South Africa
                </h2>
                <button className="px-4 py-2 rounded-lg leading-none text-[#025195] font-inter font-semibold text-xs border border-[#E3DBD8]">
                  Barcelona, Spain
                </button>
              </div>
              <div className="text-[#727272]">
                Experience the bold and colorful artistry of South African
                designers, blending heritage with contemporary fashion for a
                unique wardrobe.
              </div>
              <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3">
                <p>Apply Now</p>
                <FaArrowRightLong className="w-4 h-3 text-[#025195]" />
              </button>
            </div>
          </div>

          {/* Additional cards, visible only when showMore is true */}

          <div className={`${showMore ? "block" : "hidden"} md:block`}>
            <div className="rounded-2xl shadow-custom-shadow overflow-hidden">
              <img
                src={Designer4}
                alt=""
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex mt-5 mb-3 justify-between items-center">
                  <h2 className="font-bold text-2xl text-[#025195]">
                    Bangladesh
                  </h2>
                  <button className="px-4 py-2 rounded-lg leading-none text-[#025195] font-inter font-semibold text-xs border border-[#E3DBD8]">
                    Dubai, UAE
                  </button>
                </div>
                <div className="text-[#727272]">
                  Unique craftsmanship from Bangladesh, combining delicate
                  handwork with fashion-forward aesthetics for all occasions.
                </div>
                <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3">
                  <p>Apply Now</p>
                  <FaArrowRightLong className="w-4 h-3 text-[#025195]" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${showMore ? "block" : "hidden"} md:block`}>
            <div className="rounded-2xl shadow-custom-shadow overflow-hidden">
              <img
                src={Designer5}
                alt=""
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex mt-5 mb-3 justify-between items-center">
                  <h2 className="font-bold text-2xl text-[#025195]">
                    South Korea
                  </h2>
                  <button className="px-4 py-2 rounded-lg leading-none text-[#025195] font-inter font-semibold text-xs border border-[#E3DBD8]">
                    Milan, Italy
                  </button>
                </div>
                <div className="text-[#727272]">
                  Highlighting the latest South Korean trends, from street-style
                  chic to high-fashion sophistication.
                </div>
                <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3">
                  <p>Apply Now</p>
                  <FaArrowRightLong className="w-4 h-3 text-[#025195]" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${showMore ? "block" : "hidden"} md:block`}>
            <div className="rounded-2xl shadow-custom-shadow overflow-hidden">
              <img
                src={Designer6}
                alt=""
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex mt-5 mb-3 justify-between items-center">
                  <h2 className="font-bold text-2xl text-[#025195]">
                    South Africa
                  </h2>
                  <button className="px-4 py-2 rounded-lg leading-none text-[#025195] font-inter font-semibold text-xs border border-[#E3DBD8]">
                    Barcelona, Spain
                  </button>
                </div>
                <div className="text-[#727272]">
                  Bold South African aesthetics meet global trends, ensuring
                  every piece tells a story of culture and style.
                </div>
                <button className="flex mt-6 w-fit text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3">
                  <p>Apply Now</p>
                  <FaArrowRightLong className="w-4 h-3 text-[#025195]" />
                </button>
              </div>
            </div>
          </div>
          {/* View More button */}
          <button
            className="flex mt-6 md:hidden bg-white text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3"
            onClick={handleToggle}
          >
            <p>{showMore ? "View Less" : "View More"}</p>
            <FaArrowRightLong className="w-4 h-3 text-[#025195]" />
          </button>
        </div>

        {/*  HOW DO WE WORK? */}
        <div className="bg-[#025195] px-5 lg:px-14 lg:py-28 py-8 my-14">
          <div
            className="bg-[#F3FDFF] rounded-3xl flex  lg:py-16 md:py-12 px-5 py-8 flex-col font-inter items-center"
            style={{
              backgroundImage: `url(${gateways})`,
            }}
          >
            <p className="font-semibold text-sm text-[#025195] font-inter mb-3">
              HOW DO WE WORK?
            </p>

            <p className="lg:w-1/2 font-inter text-2xl md:text-5xl font-bold overflow text-center text-[#025195]">
              Launch your style journey with us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              <div className="flex flex-col bg-white rounded-2xl p-7 gap-2 lg:mb-10 shadow-custom-shadow">
                <img src={one} alt="" className="w-8" />
                <p className="text-[#025195] font-inter font-bold text-lg">
                  Book a consultation
                </p>
                <p className="text-[#025195] font-inter text-sm">
                  Schedule a call with our stylists and get ready to tailor your
                  look.
                </p>
              </div>
              <div className="flex flex-col bg-white rounded-2xl p-7 gap-2 lg:mt-10 shadow-custom-shadow">
                <img src={two} alt="" className="w-10" />
                <p className="text-[#025195] font-inter font-bold text-lg">
                  Request Custom Design
                </p>
                <p className="text-[#025195] font-inter text-sm">
                  Choose your style or let our talented designers help you
                  discover your unique charm.
                </p>
              </div>
              <div className="flex flex-col bg-white rounded-2xl shadow-custom-shadow p-7 gap-2 lg:mb-10">
                <img src={three} alt="" className="w-10" />
                <p className="text-[#025195] font-inter font-bold text-lg">
                  Stylists take charge{" "}
                </p>
                <p className="text-[#025195] font-inter text-sm ">
                  Our skilled tailors will pour their hearts into crafting your
                  fabric with pure passion.
                </p>
              </div>
              <div className="flex flex-col bg-white rounded-2xl p-7 gap-2 lg:mt-10 shadow-custom-shadow">
                <img src={four} alt="" className="w-10" />
                <p className="text-[#025195] font-inter font-bold text-lg">
                  Receive your garment{" "}
                </p>
                <p className="text-[#025195] font-inter text-sm">
                  Receive your customized garment in no time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  OUR PLATFORM FEATURES */}
        <div className="flex md:mx-16 lg:mx-20 lg:pb-16 md:pb-12 pb-5 py-8 flex-col font-inter items-center">
          <p className="font-semibold  text-sm text-[#025195] font-inter mb-3">
            OUR PLATFORM FEATURES
          </p>

          <p className=" font-inter text-2xl md:text-5xl font-bold overflow text-center text-[#025195]">
            Establish a trend with our team.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16">
            <div className="flex gap-7 p-4 border rounded-2xl font-inter items-center">
              <img
                src={feature1}
                alt=""
                className="lg:w-64 min-w-36 lg:min-w-64 h-fit"
              />
              <div className="flex flex-col gap-5 justify-center">
                <p className="font-bold text-2xl text-[#025195]">
                  Customized Brands
                </p>
                <p className="font text-[#727272]">
                  Select your favorite branded fabrics, color, design elements,
                  and fit to create a unique piece that reflects your style.
                </p>
                <div className="flex justify-end md:justify-start ">
                  <button className="border w-fit p-3 rounded-lg border-[#025195]">
                    <FaArrowRightLong className="transform -rotate-45 w-5 text-[#025195]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-7 p-4 border rounded-2xl font-inter items-center">
              <img
                src={feature2}
                alt=""
                className="lg:w-64 min-w-36 lg:min-w-64 h-fit"
              />
              <div className="flex flex-col gap-5 justify-center">
                <p className="font-bold text-2xl text-[#025195]">
                  Smooth Consultation
                </p>
                <p className="font text-[#727272]">
                  Consultation can be conducted either online or in person,
                  based on your convenience.
                </p>
                <div className="flex justify-end md:justify-start ">
                  <button className="border w-fit p-3 rounded-lg border-[#025195]">
                    <FaArrowRightLong className="transform -rotate-45 w-5 text-[#025195]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-7 p-4 border rounded-2xl font-inter items-center">
              <img
                src={feature3}
                alt=""
                className="lg:w-64 min-w-36 lg:min-w-64 h-fit"
              />
              <div className="flex flex-col gap-5 justify-center">
                <p className="font-bold text-2xl text-[#025195]">
                  Specialize your design
                </p>
                <p className="font text-[#727272]">
                  Choose your tailors based on ratings, location, and service
                  policies. Share your reference, and we’ll replicate it for
                  your fit.
                </p>
                <div className="flex justify-end md:justify-start ">
                  <button className="border w-fit p-3 rounded-lg border-[#025195]">
                    <FaArrowRightLong className="transform -rotate-45 w-5 text-[#025195]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-7 p-4 border rounded-2xl font-inter items-center">
              <img
                src={feature4}
                alt=""
                className="lg:w-64 min-w-36 lg:min-w-64 h-fit"
              />
              <div className="flex flex-col gap-5 justify-between">
                <p className="font-bold text-2xl text-[#025195]">
                  Monitor your order
                </p>
                <p className="font text-[#727272]">
                  You can monitor and receive updates regarding the status of
                  your order.
                </p>
                <div className="flex justify-end md:justify-start ">
                  <button className="border w-fit p-3 rounded-lg border-[#025195]">
                    <FaArrowRightLong className="transform -rotate-45 w-5 text-[#025195]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Maximize your tailoring potential today. */}
        <div className="flex md:px-16 lg:px-20 lg:py-16 md:py-12 px-5 py-8 flex-col font-inter items-center bg-[#F3FDFF]">
          <p className="text-3xl md:text-4xl font-bold overflow text-center text-[#025195]">
            Maximize your tailoring potential today.
          </p>
          <p className="text-[#727272] text-center md:mt-6 mt-4 md:mb-10 mb-6 ">
            Our design coaching program offers practical assistance from
            qualified designers, enabling you to enhance your tailoring skill
            sets and display your inventiveness. Join us to learn new techniques
            to add your designs to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex bg-white rounded-2xl w-full h-fit ">
              <img src={Coaching1} alt="" className=" w-5/12" />
              <div className="flex flex-col lg:gap-4 p-5 gap-2">
                <h3 className=" text-[#025195] font-semibold text-lg">
                  Blouse
                </h3>
                <p className="text-[#727272] pb-2 ">
                  Team of traditional and modern blouses that complement various
                  saree collections.
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-[#025195]">
                    Read More
                  </p>
                  <FaArrowRightLong className="transform -rotate-45 h-3 text-[#025195]" />
                </div>
              </div>
            </div>
            <div className="flex bg-white rounded-2xl w-full h-fit ">
              <img src={Coaching2} alt="" className=" w-5/12" />
              <div className="flex flex-col lg:gap-4 p-5 gap-2">
                <h3 className=" text-[#025195] font-semibold text-lg">Suits</h3>
                <p className="text-[#727272] pb-2 ">
                  Several suit stitching courses convey professionalism.
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-[#025195]">
                    Read More
                  </p>
                  <FaArrowRightLong className="transform -rotate-45 h-3 text-[#025195]" />
                </div>
              </div>
            </div>
            <div className="flex bg-white rounded-2xl w-full h-fit ">
              <img src={Coaching3} alt="" className=" w-5/12" />
              <div className="flex flex-col lg:gap-4 p-5 gap-2">
                <h3 className=" text-[#025195] font-semibold text-lg">
                  Jumpsuits
                </h3>
                <p className="text-[#727272] pb-2 ">
                  Master designing one-piece outfits for all occasions.
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-[#025195]">
                    Read More
                  </p>
                  <FaArrowRightLong className="transform -rotate-45 h-3 text-[#025195]" />
                </div>
              </div>
            </div>
            <div
              className={`${showMoreCoaching ? "block" : "hidden"} md:block`}
            >
              <div className="flex bg-white rounded-2xl w-full h-fit ">
                <img src={Coaching4} alt="" className=" w-5/12" />
                <div className="flex flex-col lg:gap-4 p-5 gap-2">
                  <h3 className=" text-[#025195] font-semibold text-lg">
                    Lehenga
                  </h3>
                  <p className="text-[#727272] pb-2 ">
                    Trendy and traditional outfits that scream luxury and
                    elegance.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#025195]">
                      Read More
                    </p>
                    <FaArrowRightLong className="transform -rotate-45 h-3 text-[#025195]" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${showMoreCoaching ? "block" : "hidden"} md:block`}
            >
              <div className="flex bg-white rounded-2xl w-full h-fit ">
                <img src={Coaching5} alt="" className=" w-5/12" />
                <div className="flex flex-col lg:gap-4 p-5 gap-2">
                  <h3 className=" text-[#025195] font-semibold text-lg">
                    Jackets
                  </h3>
                  <p className="text-[#727272] pb-2 ">
                    A mix of style and comfort, an indispensable attire for
                    cooler days.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#025195]">
                      Read More
                    </p>

                    <FaArrowRightLong className="transform -rotate-45 h-3 text-[#025195]" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${showMoreCoaching ? "block" : "hidden"} md:block`}
            >
              <div className="flex bg-white rounded-2xl w-full h-fit ">
                <img src={Coaching6} alt="" className=" w-5/12" />
                <div className="flex flex-col lg:gap-4 p-5 gap-2">
                  <h3 className=" text-[#025195] font-semibold text-lg">
                    Skirts/Trousers
                  </h3>
                  <p className="text-[#727272] pb-2 ">
                    Trendy and versatile apparel alternatives that exude
                    perfection.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#025195]">
                      Read More
                    </p>
                    <FaArrowRightLong className="transform -rotate-45 h-3 text-[#025195]" />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="flex mt-6 md:hidden bg-white text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3"
              onClick={handleToggleCoaching}
            >
              <p>{showMoreCoaching ? "View Less" : "View More"}</p>
              <FaArrowRightLong className="w-4 h-3 text-[#025195]" />
            </button>
          </div>
        </div>

        {/* Let us hear from our promising customers. */}
        <div className="flex md:px-16 lg:px-20 lg:py-16 md:py-12 px-5 py-8 flex-col font-inter items-center bg-[#025195]">
          <p className="text-3xl md:text-4xl font-bold overflow text-center text-white">
            Let us hear from our promising customers.
          </p>
          <p className=" text-center md:mt-6 mt-4 md:mb-10 mb-6 text-white lg:w-1/2">
            The customer testimonials reflect how committed we are to keeping
            our customers happy. Below are some reviews of how clients value our
            craftsmanship and services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
              <img src={quote} alt="" className="w-10" />
              <p className="text-[#727272] text-lg leading-8">
                We have been operating for over an go providin top-notch
                services to our is a clients and build strong track record in
                the industry.We have been operating in for over a decad providi
                ina
              </p>
              <div className="flex gap-3 my-4 items-center">
                <img
                  src={testimonial1}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col text-[#025195]">
                  <h1 className="text-lg font-bold ">Neha Singh</h1>
                  <p className="text-sm opacity-70">Araia Coture</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
              <img src={quote} alt="" className="w-10" />
              <p className="text-[#727272] text-lg leading-8">
                We have been operating for over an go providin top-notch
                services to our is a clients and build strong track record in
                the industry.We have been operating in for over a decad providi
                ina
              </p>
              <div className="flex gap-3 my-4 items-center">
                <img
                  src={testimonial2}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col text-[#025195]">
                  <h1 className="text-lg font-bold ">Annaya Gupta </h1>
                  <p className="text-sm opacity-70">Avia Stores</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
              <img src={quote} alt="" className="w-10" />
              <p className="text-[#727272] text-lg leading-8">
                We have been operating for over an go providin top-notch
                services to our is a clients and build strong track record in
                the industry.We have been operating in for over a decad providi
                ina
              </p>
              <div className="flex gap-3 my-4 items-center">
                <img
                  src={testimonial3}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col text-[#025195]">
                  <h1 className="text-lg font-bold ">Vikas Das</h1>
                  <p className="text-sm opacity-70">Vikas Stiches</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
              <img src={quote} alt="" className="w-10" />
              <p className="text-[#727272] text-lg leading-8">
                We have been operating for over an go providin top-notch
                services to our is a clients and build strong track record in
                the industry.We have been operating in for over a decad providi
                ina
              </p>
              <div className="flex gap-3 my-4 items-center">
                <img
                  src={testimonial2}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col text-[#025195]">
                  <h1 className="text-lg font-bold ">Lily Shah</h1>
                  <p className="text-sm opacity-70">Lily Coture</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
              <img src={quote} alt="" className="w-10" />
              <p className="text-[#727272] text-lg leading-8">
                We have been operating for over an go providin top-notch
                services to our is a clients and build strong track record in
                the industry.We have been operating in for over a decad providi
                ina
              </p>
              <div className="flex gap-3 my-4 items-center">
                <img
                  src={testimonial3}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col text-[#025195]">
                  <h1 className="text-lg font-bold ">Isha Joshi</h1>
                  <p className="text-sm opacity-70">Mamstores</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
              <img src={quote} alt="" className="w-10" />
              <p className="text-[#727272] text-lg leading-8">
                We have been operating for over an go providin top-notch
                services to our is a clients and build strong track record in
                the industry.We have been operating in for over a decad providi
                ina
              </p>
              <div className="flex gap-3 my-4 items-center">
                <img
                  src={testimonial1}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col text-[#025195]">
                  <h1 className="text-lg font-bold ">Priya Sharma</h1>
                  <p className="text-sm opacity-70">Avvia Stores</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RECENT BLOGS */}
        <div className="lg:w-2/3 mx-5 my-14 md:mx-16 lg:mx-24 text-[#025195] ">
          <p className="text-sm mb-3 font-semibold">RECENT BLOGS</p>
          <p className="text-3xl md:text-5xl font-inter font-bold overflow">
            Here are some quick reads for you.
          </p>
        </div>
        <div className="mx-5 md:mx-40 lg:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <div className="rounded-2xl border overflow-hidden">
            <img src={blog1} alt="" className="h-64 object-cover w-full" />
            <div className="p-6 ">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center justify-between">
                  <img src={calender} alt="" className="h-4 " />
                  <div className="text-[#727272]">October 19, 2022</div>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={user} alt="" className="h-4" />
                  <div className="text-[#727272]">By admin</div>
                </div>
              </div>
              <h2 className=" mt-5 mb-3 font-bold text-2xl text-[#025195]">
                Transforming Style: Exploring the Future of Fashion Design
                Platforms
              </h2>
              <div className="text-[#727272]">
                Lorem Ipsum is simply dummy text the printing and typese Lorem
                Ipsum
              </div>
              <div className="flex items-center font-semibold mt-6 text-[#025195] gap-3">
                <p>Read More</p>
                <FaArrowRightLong className="w-3 h-3 text-[#025195]" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border overflow-hidden">
            <img src={blog2} alt="" className="h-64 object-cover w-full" />
            <div className="p-6 ">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center justify-between">
                  <img src={calender} alt="" className="h-4 " />
                  <div className="text-[#727272]">October 19, 2022</div>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={user} alt="" className="h-4" />
                  <div className="text-[#727272]">By admin</div>
                </div>
              </div>
              <h2 className=" mt-5 mb-3 font-bold text-2xl text-[#025195]">
                Innovative Fashion Design Platforms: Shaping the Next Generation
                of Trends
              </h2>
              <div className="text-[#727272]">
                Lorem Ipsum is simply dummy text the printing and typese Lorem
                Ipsum
              </div>
              <div className="flex items-center font-semibold mt-6 text-[#025195] gap-3">
                <p>Read More</p>

                <FaArrowRightLong className="w-3 h-3 text-[#025195]" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border overflow-hidden">
            <img src={blog3} alt="" className="h-64 object-cover w-full" />
            <div className="p-6 ">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center justify-between">
                  <img src={calender} alt="" className="h-4 " />
                  <div className="text-[#727272]">October 19, 2022</div>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={user} alt="" className="h-4" />
                  <div className="text-[#727272]">By admin</div>
                </div>
              </div>
              <h2 className=" mt-5 mb-3 font-bold text-2xl text-[#025195]">
                Crafting Your Fashion Vision: Top Platforms for Designers in
                2024
              </h2>
              <div className="text-[#727272]">
                Lorem Ipsum is simply dummy text the printing and typese Lorem
                Ipsum
              </div>
              <div className="flex items-center font-semibold mt-6 text-[#025195] gap-3">
                <p>Read More</p>
                <FaArrowRightLong className="w-3 h-3 text-[#025195]" />
              </div>
            </div>
          </div>
        </div>

        {/* Are you ready to start ? */}
        <div className="flex flex-col lg:flex-row md:m-16 my-16  md:gap-10  p-5 lg:px-8 lg:py-10 items-center bg-[#025195]  md:rounded-2xl">
          <div className="lg:w-2/3 flex flex-col gap-5 md:gap-8 py-10">
            <h1 className="font-bold lg:text-6xl md:text-4xl text-3xl text-white">
              Join our Styler community today!
            </h1>

            <div className="flex w-full md:gap-8 gap-3">
              <input
                className="border w-2/3 bg-[#025195] text-white  md:p-4 px-4 py-2 rounded-3xl md:rounded-full"
                placeholder="Enter Email"
              />
              <button className="bg-white text-[#025195] font-semibold text-sm wrap w-1/3 md:p-4 px-4 py-2 rounded-3xl md:rounded-full">
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <img src={ready} alt="" className="" />
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <STFooter /> */}
    </div>
  );
};

export default HomePage;
