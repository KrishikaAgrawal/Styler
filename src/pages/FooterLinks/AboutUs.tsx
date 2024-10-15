import React, { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import Story from "../../assets/Footer/Story.png";
import logo1 from "../../assets/Footer/logo1.png";
import logo2 from "../../assets/Footer/logo2.png";
import logo3 from "../../assets/Footer/logo3.png";
import logo4 from "../../assets/Footer/logo4.png";
import logo5 from "../../assets/Footer/logo5.png";
import Profile1 from "../../assets/Footer/Profile1.png";

interface Item {
  id: number;
  question: string;
  content: string;
}

const items: Item[] = [
  {
    id: 1,
    question: "How do I join Styler as a designer?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 2,
    question: "How do I receive payments?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 3,
    question: "Is there a fee to partner with Styler?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 4,
    question: "What support is available to me as a partner?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
];

const items2: Item[] = [
  {
    id: 5,
    question: "Can I set my own prices for custom designs?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 6,
    question: "Can I offer both virtual and in-person consultations?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 7,
    question: "How does the platform help me manage orders?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 8,
    question: "How does Styler help promote my services?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 9,
    question: "What kind of clients will I be working with?",
    content:
      "To join, simply sign up on our platform, fill in your details, and submit your portfolio for review. Once approved, you can start showcasing your designs and managing orders.",
  },
  {
    id: 10,
    question: "Can I manage multiple orders at once?",
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

const AboutUs: React.FC = () => {
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
      {/* Success Stories */}
      <div className="flex flex-col gap-10 md:gap-20 lg:gap-28 py-10 px-5 md:px-16 lg:py-16 lg:px-60 items-center bg-[#5A3F2C] ">
        <h1 className="font-Gloock text-white text-2xl lg:text-4xl lg:w-2/3 text-center ">
          Designer Success Stories – How Styler Transformed Their Business
        </h1>
        <div className="flex w-full items-center flex-col  md:flex-row font-inter -space-y-10 md:-space-x-14">
          <div className="flex flex-col text-[#5A3F2C] z-20 md:mr-0 mr-10 font-inter shadow-2xl bg-white lg:w-2/3 lg:p-12 p-5 rounded-2xl lg:gap-12 gap-5">
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
                  <p className="text-[#727272] text-sm md:text-base whitespace-nowrap">
                    Lead Designer at Luxe Couture
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <FaArrowLeftLong className="text-[#5A3F2C] bg-[#F1F5EB] w-10 h-10 rounded-full p-3" />
                <FaArrowRightLong className="text-[#F1F5EB] bg-[#5A3F2C] w-10 h-10 rounded-full p-3" />
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
      <div className="flex flex-col gap-10 md:gap-20 lg:gap-28 py-10 px-5 md:px-16 lg:py-16 lg:px-24 items-center bg-[#F4F0F0] ">
        <h1 className="font-Gloock text-[#5A3F2C] text-2xl lg:text-4xl lg:w-1/2 text-center ">
          Partner FAQs – Everything You Need to Know
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
                <h3 className="text-[#5A3F2C] text-sm md:text-lg font-semibold">
                  {item.question}
                </h3>
                <IoIosArrowForward
                  className={`w-10 h-10 p-3 ${
                    isActive(item.id)
                      ? "bg-[#5A3F2C] text-[#F1F5EB] -rotate-90"
                      : "bg-[#F1F5EB] text-[#5A3F2C]"
                  } rounded-full transition-transform duration-300`}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(item.id)}
                />
              </div>
              {isActive(item.id) && (
                <p className="text-[#727272] text-xs md:text-base w-4/5 transition-opacity duration-300">
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
                  <h3 className="text-[#5A3F2C] text-sm md:text-lg font-semibold">
                    {item2.question}
                  </h3>
                  <IoIosArrowForward
                    className={`w-10 h-10 p-3 ${
                      isActive(item2.id)
                        ? "bg-[#5A3F2C] text-[#F1F5EB] -rotate-90"
                        : "bg-[#F1F5EB] text-[#5A3F2C]"
                    } rounded-full transition-transform duration-300`}
                    onMouseEnter={() => handleMouseEnter(item2.id)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(item2.id)}
                  />
                </div>
                {isActive(item2.id) && (
                  <p className="text-[#727272] text-xs md:text-base w-4/5 transition-opacity duration-300">
                    {item2.content}
                  </p>
                )}
              </div>
            </div>
          ))}

          <button
            className="flex mt-6 md:hidden bg-white text-sm font-semibold rounded-full items-center justify-center px-4 md:px-8 py-4 text-[#531A02] border-[#531A02] border gap-3"
            onClick={handleToggleFAQ}
          >
            <p>{showMoreFAQ ? "View Less" : "View More"}</p>
          </button>
        </div>
      </div>

      {/* Logos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 px-10 md:px-16 lg:py-16 lg:px-60 ">
        <img src={logo1} alt="" className="h-8 lg:h-10 " />
        <img src={logo2} alt="" className="h-8 lg:h-10 " />
        <img src={logo3} alt="" className="h-8 lg:h-10 " />
        <img src={logo4} alt="" className="h-8 lg:h-10 " />
        <img src={logo5} alt="" className="h-8 lg:h-10 " />
      </div>
    </div>
  );
};

export default AboutUs;
