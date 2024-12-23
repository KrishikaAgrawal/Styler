import React, { useState } from "react";

import { MdArrowOutward } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

import PartnerHero1 from "../../assets/Footer/PartnerHero1.png";
import PartnerHero2 from "../../assets/Footer/PartnerHero2.png";
import Profile1 from "../../assets/Footer/Profile1.png";
import Profile2 from "../../assets/Footer/Profile2.png";
import Profile3 from "../../assets/Footer/Profile3.png";
import Profile4 from "../../assets/Footer/Profile4.png";
import Profile5 from "../../assets/Footer/Profile5.png";
import Profile6 from "../../assets/Footer/Profile6.png";
import Profile7 from "../../assets/Footer/Profile7.png";
import Unique from "../../assets/Footer/Unique.png";
import Partner1 from "../../assets/Footer/Partner1.png";
import Partner2 from "../../assets/Footer/Partner2.png";
import Partner3 from "../../assets/Footer/Partner3.png";
import Works from "../../assets/Footer/Works.png";
import Story from "../../assets/Footer/Story.png";
import logo1 from "../../assets/Footer/logo1.png";
import logo2 from "../../assets/Footer/logo2.png";
import logo3 from "../../assets/Footer/logo3.png";
import logo4 from "../../assets/Footer/logo4.png";
import logo5 from "../../assets/Footer/logo5.png";
import ExploreArrow from "../../assets/Footer/ExploreArrow.png";
import explore1 from "../../assets/Footer/explore1.png";
import explore2 from "../../assets/Footer/explore2.png";
import explore3 from "../../assets/Footer/explore3.png";
import explore4 from "../../assets/Footer/explore4.png";

interface Item {
  id: number;
  question: string;
  content: string;
}

const items: Item[] = [
  {
    id: 1,
    question: "How does the partnership business work?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 2,
    question: " Is it easy to take numerous orders at once?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 3,
    question: "What sorts of customers will I work with?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 4,
    question: "What are the financial terms and conditions for a partnership?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
];
const items2: Item[] = [
  {
    id: 5,
    question: "Is there any investment required for a partnership with Styler?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 6,
    question: "How would collaborating with Styler help our business?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 7,
    question: "How do I get my payments?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 8,
    question: "How does Styler handle safety and anonymity?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 9,
    question: "How can Styler support our long-term vision?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 10,
    question: "How would Styler help me market my business?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 11,
    question: "What happens if a client is not satisfied with their order?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
];

const PartnerWithUs: React.FC = () => {
  const profileImages = [
    Profile1,
    Profile2,
    Profile3,
    Profile4,
    Profile5,
    Profile6,
    Profile7,
  ];

  const [showMoreGrow, setShowMoreGrow] = useState<boolean>(false);
  const handleToggleGrow = () => {
    setShowMoreGrow((prev) => !prev);
  };

  const [activeId, setActiveId] = useState<number | null>(null);
  const [showMoreFAQ, setShowMoreFAQ] = useState<boolean>(false);
  const handleMouseEnter = (id: number) => {
    if (window.innerWidth >= 768) {
      setActiveId(id);
    }
  };
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveId(null);
    }
  };
  const handleClick = (id: number) => {
    if (window.innerWidth < 768) {
      setActiveId((prevId) => (prevId === id ? null : id));
    }
  };
  const handleToggleFAQ = () => {
    setShowMoreFAQ((prev) => !prev);
  };
  const isActive = (id: number) => activeId === id;

  return (
    <div>
      {/* Hero section */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 py-10 px-5 md:px-5 lg:py-16 lg:px-14 bg-[#F3FDFF] w-full">
        <div className="flex flex-col lg:w-1/2 gap-8 lg:gap-14  justify-center">
          <p className="font-Gloock text-[#025195] text-xl md:text-3xl lg:text-5xl">
            Partner with Styler – Elevate Your Brand, Reach Exclusive Clients,
            and Showcase Your Craft
          </p>
          <p className="text-[#546879] font-medium text-xs md:text-base font-inter">
            At Styler, we connect talented designers and tailors with a global
            audience seeking custom, high-quality fashion. As a partner, you’ll
            have the opportunity to showcase your unique designs, grow your
            brand, and collaborate with exclusive clients. Our platform provides
            the tools you need to manage orders, consultations, and custom
            requests seamlessly. Join us and take your fashion business to the
            next level.
          </p>{" "}
          <button className="flex w-fit rounded-full items-center justify-center px-8 md:px-16 md:py-4 py-3 text-white bg-[#025195] text-sm md:text-lg font-semibold border gap-3">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 relative flex flex-col items-start ">
          <div className="relative">
            <img
              src={PartnerHero1}
              alt=""
              className="relative md:w-3/4 w-1/2 z-20"
            />
            <div className="absolute md:w-3/4 w-3/5 right-5 -bottom-52 md:-right-28 md:-bottom-72">
              <div className="relative">
                <img
                  src={PartnerHero2}
                  alt=""
                  className=" relative h-auto  z-10"
                />
                <div className="absolute right-2 bottom-2 md:-right-32 md:bottom-20 z-40 flex bg-[#025195] font-inter w-fit rounded-2xl text-white py-3 px-2 md:py-6 md:px-4 gap-2">
                  <h1 className="text-xs md:text-2xl font-bold">100 +</h1>
                  <p className="md:text-lg text-xs "> Partners</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white mt-40 md:ml-10 z-50 gap-3 md:gap-6 font-inter items-center p-4 md:p-6 rounded-2xl">
            <div className="flex -space-x-5 md:-space-x-6">
              {profileImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Profile ${index + 1}`}
                  className="md:w-12 w-8 md:h-12 h-8  rounded-full"
                />
              ))}
              <div className="md:w-12 w-8 md:h-12 h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center border-2 border-white ml-2">
                <span className="font-bold md:text-sm text-xs">1k+</span>
              </div>
            </div>
            <h1 className="font-extrabold text-4xl md:text-6xl text-[#025195]">
              1k+
            </h1>
            <p className="text-[#025195] text-xs md:text-base">
              Visiters per month
            </p>
          </div>
        </div>
      </div>

      {/* Create, Customize, and Elevate */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 py-10 px-5 md:px-10 lg:py-16 lg:px-14">
        <div className="flex flex-col lg:w-2/3 justify-center gap-5">
          <h1 className="font-Gloock text-[#025195] text-2xl md:text-4xl lg:text-6xl">
            Fashion as Unique as You Are – Create, Customize, and Elevate Your
            Style with Styler.
          </h1>
          <p className="font-inter text-[#546879] text-xs md:text-xl">
            Cast with us for our promise to quality, detail, support, and shared
            success.
          </p>
        </div>
        <img src={Unique} alt="" className="" />
      </div>

      {/* Partner with Us */}
      <div className="flex flex-col gap-10 py-10 px-5 md:px-10 lg:py-16 lg:px-14 bg-[#F4F0F0]">
        <h1 className="font-Gloock text-[#025195] text-2xl md:text-3xl text-center lg:text-left lg:text-5xl">
          Partner with Us
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
          <div>
            <div className="rounded-2xl ">
              <img src={Partner1} alt="" className=" w-full z-10 cover " />
            </div>
            <div className="flex flex-col -mt-28  ml-10  z-20  ">
              <h1 className="bg-white pt-5 px-4 rounded-tl-2xl text-[#025195] font-Gloock md:text-xl ">
                Demonstrate Your Portfolio{" "}
              </h1>
              <div className="flex bg-white p-4 pb-5 gap-5 rounded-b-2xl">
                <p className="text text-[#546879] font-inter text-xs md:text-sm">
                  Your portfolio represents your voice and skills. organize some
                  of your best work and highlight your expertise.
                </p>
                <MdArrowOutward className="w-20 h-fit p-3 border rounded-2xl" />
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl ">
              <img src={Partner2} alt="" className=" w-full z-10 cover " />
            </div>
            <div className="flex flex-col -mt-28  ml-10  z-20  ">
              <h1 className="bg-white pt-5 px-4 rounded-tl-2xl text-[#025195] font-Gloock md:text-xl ">
                Simple Sales Management{" "}
              </h1>
              <div className="flex bg-white p-4 pb-5 gap-5 rounded-b-2xl">
                <p className="text text-[#546879] font-inter text-xs md:text-sm">
                  Our complete order handling system provides real-time
                  tracking, easy client detail management, quick work
                  organizing, and rich reports to improve your tailoring
                  operations.
                </p>
                <MdArrowOutward className="w-20 h-fit p-3 border rounded-2xl" />
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl ">
              <img src={Partner3} alt="" className=" w-full z-10 cover " />
            </div>
            <div className="flex flex-col -mt-28  ml-10  z-20  ">
              <h1 className="bg-white pt-5 px-4 rounded-tl-2xl text-[#025195] font-Gloock md:text-xl ">
                Performances Analytics
              </h1>
              <div className="flex bg-white p-4 pb-5 gap-5 rounded-b-2xl">
                <p className="text text-[#546879] font-inter text-xs md:text-sm">
                  Assess productivity by analyzing sales patterns, reviewing
                  performance indicators, and pinpointing potential for
                  improvement.
                </p>
                <MdArrowOutward className="w-20 h-fit p-3 border rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grow your brand */}
      <div className="flex flex-col gap-10 py-10 px-5 md:px-10 lg:py-16 lg:px-14 lg:mx-28 lg:my-16 bg-[#DEF9FF] lg:rounded-[50px]">
        <h1 className="text-[#025195] font-Gloock text-2xl lg:text-[32px]">
          Grow your brand and reach new heights with Styler’s global platform!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          <div className="flex font-inter bg-white rounded-2xl w-full h-fit flex-col gap-3 p-6">
            <BsPersonFill className="bg-[#025195] text-white w-14 h-14 rounded-2xl p-4" />
            <h2 className="text-[#025195] text-lg font-extrabold">
              Promotional Aid{" "}
            </h2>
            <p className="text-[#546879] text-xs">
              Soak up while we showcase your portfolio on our web page.
            </p>
            <div className="flex gap-2 items-center text-[#025195] ">
              <p className="text-sm font-semibold">Learn More</p>
              <FaArrowRightLong />
            </div>
          </div>
          <div className="flex font-inter bg-white rounded-2xl w-full h-fit flex-col gap-3 p-6">
            <BsPersonFill className="bg-[#025195] text-white w-14 h-14 rounded-2xl p-4" />
            <h2 className="text-[#025195] text-lg font-extrabold">
              The scaling and compliance
            </h2>
            <p className="text-[#546879] text-xs">
              Let us support your efforts to expand your business and inflate
              your overall creative area.
            </p>
            <div className="flex gap-2 items-center text-[#025195] ">
              <p className="text-sm font-semibold">Learn More</p>
              <FaArrowRightLong />
            </div>
          </div>
          <div className="flex font-inter bg-white rounded-2xl w-full h-fit flex-col gap-3 p-6">
            <BsPersonFill className="bg-[#025195] text-white w-14 h-14 rounded-2xl p-4" />
            <h2 className="text-[#025195] text-lg font-extrabold">
              Effective price setting{" "}
            </h2>
            <p className="text-[#546879] text-xs">
              We provide quality at an economical price while simultaneously
              guaranteeing that it is advantageous to our partners.
            </p>
            <div className="flex gap-2 items-center text-[#025195] ">
              <p className="text-sm font-semibold">Learn More</p>
              <FaArrowRightLong />
            </div>
          </div>

          <div className={`${showMoreGrow ? "block" : "hidden"} md:block`}>
            <div className="flex font-inter bg-white rounded-2xl w-full h-fit flex-col gap-3 p-6">
              <BsPersonFill className="bg-[#025195] text-white w-14 h-14 rounded-2xl p-4" />
              <h2 className="text-[#025195] text-lg font-extrabold">
                Explicit urge to operate
              </h2>
              <p className="text-[#546879] text-xs">
                We will make certain, you receive a healthy count of client
                orders.
              </p>
              <div className="flex gap-2 items-center text-[#025195] ">
                <p className="text-sm font-semibold">Learn More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
          <div className={`${showMoreGrow ? "block" : "hidden"} md:block`}>
            <div className="flex font-inter bg-white rounded-2xl w-full h-fit flex-col gap-3 p-6">
              <BsPersonFill className="bg-[#025195] text-white w-14 h-14 rounded-2xl p-4" />
              <h2 className="text-[#025195] text-lg font-extrabold">
                Forefront innovation
              </h2>
              <p className="text-[#546879] text-xs">
                We use the most cutting-edge technologies to create distinctive,
                intuitive web pages.
              </p>
              <div className="flex gap-2 items-center text-[#025195] ">
                <p className="text-sm font-semibold">Learn More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
          <div className={`${showMoreGrow ? "block" : "hidden"} md:block`}>
            <div className="flex font-inter bg-white rounded-2xl w-full h-fit flex-col gap-3 p-6">
              <BsPersonFill className="bg-[#025195] text-white w-14 h-14 rounded-2xl p-4" />
              <h2 className="text-[#025195] text-lg font-extrabold">
                Resilient collaboration
              </h2>
              <p className="text-[#546879] text-xs">
                {" "}
                We adhere to knowing your company's purpose and goal and
                assisting you in achieving your targets.
              </p>
              <div className="flex gap-2 items-center text-[#025195] ">
                <p className="text-sm font-semibold">Learn More</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
        <button
          className="flex mt-6 md:hidden bg-white text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3"
          onClick={handleToggleGrow}
        >
          <p>{showMoreGrow ? "View Less" : "View More"}</p>
          {/* <img className="w-4 h-3" src={brownArrow} alt="" /> */}
        </button>
      </div>

      {/* How It Works */}
      <div className="flex flex-col gap-10 py-10 px-5 md:px-10 lg:py-16 lg:px-24 bg-[#F3FDFF] ">
        <h1 className="font-Gloock text-[#025195] text-4xl lg:text-7xl text-center">
          How It Works
        </h1>
        <div className="flex w-full items-center flex-col lg:flex-row font-inter gap-10 lg:gap-20 ">
          <div className="flex flex-col lg:w-1/2 gap-6">
            <div className="flex  md:flex-row flex-col gap-3 bg-white rounded-2xl p-4 md:p-6 ">
              <div className="flex items-center justify-center ">
                <p className="rounded-full text-white flex bg-[#025195] font-extrabold text-4xl p-3 w-fit h-fit">
                  01
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[#025195] text-xl font-bold mb-3">
                  Sign Up & Create Your Account
                </h3>
                <p className="text-[#546879] ">
                  Simply fill out your basic information to join our stitching
                  community.
                </p>
              </div>
            </div>
            <div className="flex  md:flex-row flex-col gap-3 bg-white rounded-2xl p-4 md:p-6 ">
              <div className="flex items-center justify-center ">
                <p className="rounded-full text-white flex bg-[#025195] font-extrabold text-4xl p-3 w-fit h-fit">
                  02
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[#025195] text-xl font-bold mb-3">
                  Set Up Your Profile{" "}
                </h3>
                <p className="text-[#546879] ">
                  Customize your profile to draw attention to your unique
                  stitching style and attract new customers.
                </p>
              </div>
            </div>
            <div className="flex  md:flex-row flex-col gap-3 bg-white rounded-2xl p-4 md:p-6 ">
              <div className="flex items-center justify-center ">
                <p className="rounded-full text-white flex bg-[#025195] font-extrabold text-4xl p-3 w-fit h-fit">
                  03
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[#025195] text-xl font-bold mb-3">
                  Receive Custom Requests{" "}
                </h3>
                <p className="text-[#546879] ">
                  Customers seeking certain expertise send us tailored stitching
                  demands.
                </p>
              </div>
            </div>
            <div className="flex  md:flex-row flex-col gap-3 bg-white rounded-2xl p-4 md:p-6 ">
              <div className="flex items-center justify-center ">
                <p className="rounded-full text-white flex bg-[#025195] font-extrabold text-4xl p-3 w-fit h-fit">
                  04
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[#025195] text-xl font-bold mb-3">
                  Manage Orders & Consultations
                </h3>
                <p className="text-[#546879] ">
                  Maintain records of your orders and discuss with clients to
                  guarantee that what they want comes to fact.
                </p>
              </div>
            </div>
            <div className="flex  md:flex-row flex-col gap-3 bg-white rounded-2xl p-4 md:p-6 ">
              <div className="flex items-center justify-center ">
                <p className="rounded-full text-white flex bg-[#025195] font-extrabold text-4xl p-3 w-fit h-fit">
                  05
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[#025195] text-xl font-bold mb-3">
                  Deliver & Get Paid
                </h3>
                <p className="text-[#546879] ">
                  Finish your stitching assignments and easily be rewarded for
                  your labor.
                </p>
              </div>
            </div>
          </div>
          <img src={Works} alt="" className="h-fit lg:w-1/2" />
        </div>
      </div>

      {/* Our support to Entrepreneurs in expanding their businesses and their heartfelt reviews*/}
      <div className="flex flex-col gap-10 md:gap-20 lg:gap-28 py-10 px-5 md:px-16 lg:py-16 lg:px-40 items-center bg-[#025195] ">
        <h1 className="font-Gloock text-white text-2xl lg:text-4xl lg:w-5/6 text-center ">
          Our support to Entrepreneurs in expanding their businesses and their
          heartfelt reviews
        </h1>
        <div className="flex w-full items-center flex-col  md:flex-row font-inter -space-y-10 md:-space-x-14">
          <div className="flex flex-col text-[#025195] z-20 md:mr-0 mr-10 font-inter shadow-2xl bg-white lg:w-2/3 lg:p-12 p-5 rounded-2xl lg:gap-12 gap-5">
            <p className="lg:text-2xl text-lg">
              Leverage agile frameworks to provide a robust syns is for strategy
              foster Leverage agile frameworks to provide a robust synopsis for
              go for strategy foster
            </p>
            <div className="flex flex-col md:flex-row gap-5 md:justify-between">
              <div className="flex gap-3">
                <img src={Profile1} alt="" className="w-14 h-14" />
                <div className="flex flex-col ">
                  <p className="md:text-[22px] text-lg font-bold">
                    Ava Thompson
                  </p>
                  <p className="text-[#546879] text-sm md:text-base whitespace-nowrap">
                    Lead Designer at Luxe Couture
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <FaArrowLeftLong className="text-[#025195] bg-[#DEF9FF] w-10 h-10 rounded-full p-3" />
                <FaArrowRightLong className="text-[#DEF9FF] bg-[#025195] w-10 h-10 rounded-full p-3" />
              </div>
            </div>
          </div>
          <img
            src={Story}
            alt=""
            className=" md:w-[300px] lg:w-[500px] z-10 pl-10 md:pl-0 "
          />
        </div>
      </div>

      {/* FAQs */}
      <div className="flex flex-col gap-10 md:gap-20 lg:gap-28 py-10 px-5 md:px-16 lg:py-16 lg:px-24 items-center bg-[#F3FDFF] ">
        <h1 className="font-Gloock text-[#025195] text-2xl lg:text-4xl lg:w-1/2 text-center ">
          Addressing the Queries You Have – FAQs
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {items.map((item: Item) => (
            <div
              key={item.id}
              className={`h-fit ${
                isActive(item.id) ? "bg-[#F8EEE7] py-6" : "bg-white py-6"
              } rounded-2xl px-4 md:px-6 transition-all duration-300`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[#025195] text-sm md:text-lg font-semibold">
                  {item.question}
                </h3>
                <IoIosArrowForward
                  className={`w-10 h-10 p-3 ${
                    isActive(item.id)
                      ? "bg-[#025195] text-[#DEF9FF] -rotate-90"
                      : "bg-[#DEF9FF] text-[#025195]"
                  } rounded-full transition-transform duration-300`}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(item.id)}
                />
              </div>
              {isActive(item.id) && (
                <p className="text-[#546879] text-xs md:text-base w-4/5 transition-opacity duration-300">
                  {item.content}
                </p>
              )}
            </div>
          ))}

          {items2.map((item2: Item) => (
            <div
              key={item2.id}
              className={`grid grid-cols-1 lg:grid-cols-2 w-full gap-4 ${
                showMoreFAQ ? "block" : "hidden"
              } md:block`}
            >
              <div
                className={`div1 ${
                  isActive(item2.id) ? "bg-[#F8EEE7] py-6" : "bg-white py-6"
                } rounded-2xl px-4 md:px-6 transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[#025195] text-sm md:text-lg font-semibold">
                    {item2.question}
                  </h3>
                  <IoIosArrowForward
                    className={`w-10 h-10 p-3 ${
                      isActive(item2.id)
                        ? "bg-[#025195] text-[#DEF9FF] -rotate-90"
                        : "bg-[#DEF9FF] text-[#025195]"
                    } rounded-full transition-transform duration-300`}
                    onMouseEnter={() => handleMouseEnter(item2.id)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(item2.id)}
                  />
                </div>
                {isActive(item2.id) && (
                  <p className="text-[#546879] text-xs md:text-base w-4/5 transition-opacity duration-300">
                    {item2.content}
                  </p>
                )}
              </div>
            </div>
          ))}

          <button
            className="flex mt-6 md:hidden bg-white text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#025195] border-[#025195] border gap-3"
            onClick={handleToggleFAQ}
          >
            <p>{showMoreFAQ ? "View Less" : "View More"}</p>
          </button>
        </div>
      </div>

      {/* Logos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 px-10 md:px-16 lg:py-16 lg:px-60 ">
        <img src={logo1} alt="" className="h-8 lg:h-10 flex  " />
        <img src={logo2} alt="" className="h-8 lg:h-10 flex  " />
        <img src={logo3} alt="" className="h-8 lg:h-10 flex  " />
        <img src={logo4} alt="" className="h-8 lg:h-10 flex  " />
        <img src={logo5} alt="" className="h-8 lg:h-10 flex  " />
      </div>

      {/* Explore partners */}
      <div className="flex flex-col w-full bg-[#025195] text-white lg:flex-row gap-10 md:gap-16 py-10 px-10 lg:py-16 lg:px-14 font-inter">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <h3 className=" text-sm ">EXPLORE PARTNERS</h3>
            <img src={ExploreArrow} alt="" className="h-3 w-14" />
          </div>
          <h1 className="text-center font-bold md:text-start text-2xl md:text-5xl mt-3 mb-6 md:mb-7">
            Ready to Elevate Your Fashion Business?
          </h1>
          <p className="text-xs text-center md:text-start md:text-base">
            Join Styler today and connect with clients looking for exclusive,
            custom designs. Take control of your brand, showcase your talent,
            and grow your business with our innovative platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:w-1/2 w-full">
          <div className="flex  border border-white items-center py-8 rounded-2xl gap-4 justify-center">
            <img src={explore1} alt="" className="rounded-full bg-white p-3" />
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold">200+</h1>
              <p className="">Team Member</p>
            </div>
          </div>
          <div className="flex  border border-white items-center py-8 rounded-2xl gap-4 justify-center">
            <img src={explore2} alt="" className="rounded-full bg-white p-3" />
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold">20+</h1>
              <p className="">Winning award</p>
            </div>
          </div>
          <div className="flex  border border-white items-center py-8 rounded-2xl gap-4 justify-center">
            <img src={explore3} alt="" className="rounded-full bg-white p-3" />
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold">10k+</h1>
              <p className="">Complete project</p>
            </div>
          </div>
          <div className="flex  border border-white items-center py-8 rounded-2xl gap-4 justify-center">
            <img src={explore4} alt="" className="rounded-full bg-white p-3" />
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold">900+</h1>
              <p className="">Client review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
