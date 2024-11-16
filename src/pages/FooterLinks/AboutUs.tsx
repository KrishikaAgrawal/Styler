import React, { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong, FaArrowLeftLong, FaPlay } from "react-icons/fa6";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

import Story from "../../assets/Footer/Story.png";
import logo1 from "../../assets/Footer/logo1.png";
import logo2 from "../../assets/Footer/logo2.png";
import logo3 from "../../assets/Footer/logo3.png";
import logo4 from "../../assets/Footer/logo4.png";
import logo5 from "../../assets/Footer/logo5.png";
import Profile1 from "../../assets/Footer/Profile1.png";
import About from "../../assets/Footer/About.png";
import Watch from "../../assets/Footer/Watch.png";
import Milestone1 from "../../assets/Footer/Milestone1.png";
import Milestone2 from "../../assets/Footer/Milestone2.png";
import Milestone3 from "../../assets/Footer/Milestone3.png";
import Milestone4 from "../../assets/Footer/Milestone4.png";
import MilestoneImg from "../../assets/Footer/MilestoneImg.png";
import Mission from "../../assets/Footer/Mission.png";
import Vision from "../../assets/Footer/Vision.png";
import Who from "../../assets/Footer/Who.png";
import Team1 from "../../assets/Footer/Team1.png";

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
      {/* Hero section */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 py-10 px-5 md:px-5 lg:py-16 lg:px-14 bg-[#F4F0F0] w-full">
        <img src={About} alt="" className="lg:w-1/2 p-10" />
        <div className="flex flex-col lg:w-1/2 gap-5 lg:gap-7  justify-center">
          <p className="font-Gloock text-[#025195] text-xl md:text-3xl lg:text-5xl">
            Give your Aura, the design it seeks.
          </p>
          <p className="text-[#807E7E] font-medium text-xs md:text-base font-inter">
            Wouldn’t it be amazing to give design to your personality? Yes, and
            that’s what Styler is for. The styling needs more than just an
            article of perfect clothing, it reflects who you are most of the
            time. Shine away with style in every way possible.
          </p>
          <button className="flex w-fit rounded-full items-center justify-center px-8 md:px-16 md:py-4 py-3 text-white bg-[#025195] text-sm md:text-lg font-semibold border gap-3">
            Explore More
          </button>
        </div>
      </div>

      {/* Watch how our designers/ stylists make your dream a reality. */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 mx-5 my-5 lg:my-16 md:my-10 md:mx-10 bg-[#025195] lg:mx-16 justify-center  rounded-2xl lg:rounded-[50px] p-5 lg:pb-0 ">
        <div className="flex flex-col lg:w-1/2 justify-center lg:gap-20 gap-5 lg:items-end items-center ">
          <h1 className="font-Gloock text-xl md:text-4xl lg:text-5xl  text-white lg:w-4/5 text-center lg:text-left md:w-2/3 ">
            Watch how our designers/ stylists make your dream a reality.
          </h1>
          <div className="flex gap-5 items-center lg:pr-14">
            <button className="flex font-semibold gap-2 w-fit rounded-full items-center justify-center text-xs px-4 py-2 md:px-8 md:py-4 border-white text-white border">
              <p>Read More</p>
              <FaArrowRightLong className="w-2 h-2 md:w-3 md:h-3 " />
            </button>
            <div className="md:gap-2 gap-1 flex flex-row items-center">
              <FaPlay className="text-white w-8 h-8 p-2 md:w-10 md:h-10 rounded-full md:p-3 bg-[#1b629f ]" />
              <p className="text-white font-inter md:text-lg text-base">
                Watch Our Videos
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-end">
          <img src={Watch} alt="" className="lg:w-4/5 lg:pt-20" />
        </div>
      </div>

      {/* Who we are */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#025195]"></div>
        <div className="relative flex flex-col z-10 lg:flex-row gap-10 md:gap-16 mx-5 mt-5 lg:mt-16 md:mt-10 md:mx-10 bg-[#fff] lg:mx-20 justify-center  p-5 lg:p-14 md:p-10 ">
          <div className="flex md:w-1/2 flex-col font-inter">
            <p className="text-sm text-[#025195] mb-3 ">WHO WE ARE</p>
            <p className="text-2xl md:text-3xl font-bold overflow">
              Striving to make people look confident and charismatic
            </p>
            <div className="flex flex-col gap-3 text-sm my-5">
              <p className=" font-medium text-xs md:text-sm font-inter ">
                Styler is your one-stop shop for all tailoring and alterations
                demands. Though we are just starting to take our business
                online, we have already fulfilled most of our client’s
                expectations with our offline service. Now, we are just thinking
                about reaching more customers and making them feel confident
                with their outfits. So, using our service online is like icing
                on the cake.
              </p>
              <p className=" font-medium text-xs md:text-sm font-inter">
                {" "}
                We're a fun-loving organization of expert craftspeople committed
                to creating clothing that fits like a fantasy and accentuates
                one's tone. Our quest is to work a little magic on your garments
                and make you feel magnificent. We think every attire must not
                just solely fit precisely, but also boost your self-esteem and
                sparkle. Our tailors have refined their craft over the years
                with all kinds of clothing. We rely on superior fabrics and
                cutting-edge processes to render each piece as a class by
                itself. We would be happy to assist you, whether you demand a
                custom wardrobe for some specific occasion or maybe a minor
                alteration to your favorite outfit.
              </p>
              <p className=" font-medium text-xs md:text-sm font-inter">
                At Styler, we are all about providing outstanding customer
                service. We'll work carefully with you to fully understand what
                you desire and guarantee that your attire is just what you want.
                Our objective is to form a lasting relationship with our clients
                via faith, quality, and contentment.
              </p>{" "}
            </div>
            <button className=" w-fit rounded-full px-4 md:px-8 py-2 md:py-4 text-white bg-[#025195] gap-3">
              <p>Read More</p>
            </button>
          </div>
          <div className="lg:w-1/2">
            <img src={Who} alt="" className="h-fit lg:w-5/6" />
          </div>
        </div>
      </div>

      {/* Become one of us! */}
      <div className="flex flex-col gap-0  px-5 py-16 lg:px-16 bg-[#025195] text-white font-inter">
        <div className="flex md:mx-16 lg:mx-20 lg:py-16 md:py-12 px-5 py-8 flex-col font-inter items-center">
          <p className="text-[10px] text-sm font-inter">BECOME ONE OF US!</p>

          <p className="text-3xl md:text-4xl font-bold overflow text-center ">
            Get your membership today
          </p>
          <p className=" text-center mt-6 md:mb-4 mb-2 lg:px-20">
            Join us, have a seamless experience, and further develop your sense
            of style.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:gap-14">
          <div className="flex  gap-3 ">
            <p className="text-[#848eac] text-[100px] font-bold">1</p>
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl lg:text-3xl font-semibold">
                Worldwide Scope
              </h1>
              <p className="text-xs lg:text-base ">
                Connect with a global network of fashion-conscious clients
                seeking custom, high-quality designs. Styler gives you exposure
                to individuals who value craftsmanship and are ready to invest
                in personalized fashion.
              </p>
            </div>
          </div>
          <div className="flex  gap-3 ">
            <p className="text-[#848eac] text-[100px] font-bold">2</p>
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl lg:text-3xl font-semibold">
                Showcase Your Expertise
              </h1>
              <p className="text-xs lg:text-base ">
                Build a professional portfolio to display your unique designs
                and skills. Styler offers you a platform to highlight your
                creative talent, helping you stand out in the competitive
                fashion industry.
              </p>
            </div>
          </div>
          <div className="flex gap-3 ">
            <p className="text-[#848eac] text-[100px] font-bold">3</p>
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl lg:text-3xl font-semibold">
                Streamlined Business Tools
              </h1>
              <p className="text-xs lg:text-base ">
                Manage orders, schedule consultations, and communicate with
                clients seamlessly through our platform. Styler provides the
                tools to help you focus on your craft while efficiently handling
                the business side of things.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones of Excellence */}
      <div className="flex items-center flex-col gap-10 py-10 px-5 md:px-10 lg:py-16 lg:px-44 bg-[#F4F0F0] ">
        <h1 className="font-inter font-bold w-4/5 text-[#025195] text-xl md:text-2xl lg:text-4xl text-center">
          Milestones of Excellence – Celebrating Our Journey and Impact in the
          Fashion World!
        </h1>
        <div className="flex w-full items-center flex-col lg:flex-row font-inter gap-10 lg:gap-20 text-[#025195] ">
          {/* <div className="flex flex-col lg:w-1/2 gap-6"></div> */}
          <img src={MilestoneImg} alt="" className="h-fit lg:w-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:w-1/2 w-full">
            <div className="flex  bg-white items-center py-8 rounded-2xl gap-4 justify-center px-5">
              <img
                src={Milestone1}
                alt=""
                className="rounded-full bg-[#025195] p-3"
              />
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold">200+</h1>
                <p className="">Team Member</p>
              </div>
            </div>
            <div className="flex  bg-white items-center py-8 rounded-2xl gap-4 justify-center px-5">
              <img
                src={Milestone2}
                alt=""
                className="rounded-full bg-[#025195] p-3"
              />
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold">20+</h1>
                <p className="">Winning award</p>
              </div>
            </div>
            <div className="flex  bg-white items-center py-8 rounded-2xl gap-4 justify-center px-5">
              <img
                src={Milestone3}
                alt=""
                className="rounded-full bg-[#025195] p-3"
              />
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold">10k+</h1>
                <p className="">Complete project</p>
              </div>
            </div>
            <div className="flex  bg-white items-center py-8 rounded-2xl gap-4 justify-center px-5">
              <img
                src={Milestone4}
                alt=""
                className="rounded-full bg-[#025195] p-3"
              />
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold">900+</h1>
                <p className="">Client review</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR TEAM */}
      <div className="flex flex-col gap-0  px-5 py-16 lg:px-16 font-inter items-center">
        <div className="flex md:mb-8 lg:mx-20  md:pb-12 pb-5 py-8 flex-col font-inter items-center lg:w-2/3">
          <p className="text-[10px] text-sm font-semibold font-inter">
            OUR TEAM
          </p>

          <p className="text-3xl md:text-5xl font-bold  overflow text-center ">
            Meet the Styler team{" "}
          </p>
          <p className=" text-center mt-6  lg:px-20 text-[#5F6980] ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-7">
          <div className="flex flex-col gap-3 border">
            <img src={Team1} alt="" className="" />
            <div className="flex flex-col p-4 gap-2">
              <h3 className="font-semibold text-lg">Jocelyn Schleifer</h3>
              <p className="text-[#3E3E59] text-sm">Software Engineer</p>
              <p className="text-[#3E3E59] text-sm">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <div className="flex gap-2 pt-2">
                <FiFacebook className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiInstagram className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiTwitter className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border">
            <img src={Team1} alt="" className="" />
            <div className="flex flex-col p-4 gap-2">
              <h3 className="font-semibold text-lg">Jocelyn Schleifer</h3>
              <p className="text-[#3E3E59] text-sm">Software Engineer</p>
              <p className="text-[#3E3E59] text-sm">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <div className="flex gap-2 pt-2">
                <FiFacebook className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiInstagram className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiTwitter className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border">
            <img src={Team1} alt="" className="" />
            <div className="flex flex-col p-4 gap-2">
              <h3 className="font-semibold text-lg">Jocelyn Schleifer</h3>
              <p className="text-[#3E3E59] text-sm">Software Engineer</p>
              <p className="text-[#3E3E59] text-sm">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <div className="flex gap-2 pt-2">
                <FiFacebook className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiInstagram className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiTwitter className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border">
            <img src={Team1} alt="" className="" />
            <div className="flex flex-col p-4 gap-2">
              <h3 className="font-semibold text-lg">Jocelyn Schleifer</h3>
              <p className="text-[#3E3E59] text-sm">Software Engineer</p>
              <p className="text-[#3E3E59] text-sm">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <div className="flex gap-2 pt-2">
                <FiFacebook className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiInstagram className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiTwitter className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border">
            <img src={Team1} alt="" className="" />
            <div className="flex flex-col p-4 gap-2">
              <h3 className="font-semibold text-lg">Jocelyn Schleifer</h3>
              <p className="text-[#3E3E59] text-sm">Software Engineer</p>
              <p className="text-[#3E3E59] text-sm">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <div className="flex gap-2 pt-2">
                <FiFacebook className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiInstagram className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiTwitter className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border">
            <img src={Team1} alt="" className="" />
            <div className="flex flex-col p-4 gap-2">
              <h3 className="font-semibold text-lg">Jocelyn Schleifer</h3>
              <p className="text-[#3E3E59] text-sm">Software Engineer</p>
              <p className="text-[#3E3E59] text-sm">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <div className="flex gap-2 pt-2">
                <FiFacebook className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiInstagram className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
                <FiTwitter className="w-10 h-10 p-3 text-white bg-[#025195] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Vision */}
      <div className="flex flex-col  gap-10 md:gap-14 py-10 px-5 md:px-5 lg:py-16 lg:px-28 bg-[#F3FDFF] w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <img src={Mission} alt="" className="lg:w-1/2" />
          <div className="flex flex-col lg:w-1/2 gap-5 lg:gap-7  justify-center">
            <p className="text-center font-Gloock text-[#025195] text-xl md:text-3xl lg:text-5xl">
              Our mission
            </p>
            <div className="flex flex-col gap-3 ">
              <p className=" font-medium text-xs md:text-base font-inter">
                To foster creativity through the art of stitching, we are
                dedicated to delivering creative and adaptable stitching designs
                that excite craft enthusiasts, guide novice stitchers, and
                challenge fashion design students.{" "}
              </p>
              <p className=" font-medium text-xs md:text-base font-inter">
                {" "}
                Our objective is to create a thriving community in which each
                stitch tells a unique tale and each pattern opens up novel
                opportunities in textile art.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:w-full">
          <div className="flex flex-col lg:w-1/2 gap-5 lg:gap-7 justify-center">
            <p className="text-center font-Gloock text-[#025195] text-xl md:text-3xl lg:text-5xl">
              Our Vision
            </p>
            <div className="flex flex-col gap-3 ">
              <p className=" font-medium text-xs md:text-base font-inter">
                Welcome to the National Hookah Community Association "NHCA". We
                are a diverse alliance of businesses from all ends of the Hookah
                experience, from manufacturers and importers of molasses, pipes
                and accessories to distributors, Hookah lounges and
                Hookah/shisha retail stores.{" "}
              </p>
              <p className=" font-medium text-xs md:text-base font-inter">
                {" "}
                If you are a Hookah business, please join us and help us defend
                and protect your business, our culture and community.
              </p>
              <p className=" font-medium text-xs md:text-base font-inter">
                {" "}
                We foresee a world in which stitching transcends traditional
                frontiers, becoming a universal medium of imagination and
                artistic expression. Our digital presence can act as a catalyst
                for craft enthusiasts to acquire fresh abilities and transform
                the fashion business. To inspire a new generation of creative
                minds and transform the fashion industry, we want to link
                stitchers all over the world and give them access to the tools
                and knowledge they need.
              </p>{" "}
            </div>
          </div>
          <div className="flex lg:w-1/2 gap-3">
            <img
              src={Vision}
              alt=""
              className="w-1/2 lg:rounded-tr-[80px] rounded-tr-[50px] lg:rounded-bl-[80px] rounded-bl-[50px]"
            />
            <div className="flex flex-col gap-3">
              <img
                src={Vision}
                alt=""
                className="h-1/2 lg:rounded-tl-[80px] rounded-tl-[50px] lg:rounded-br-[80px] rounded-br-[50px]"
              />
              <img
                src={Vision}
                alt=""
                className="h-1/2 lg:rounded-tr-[80px] rounded-tr-[50px] lg:rounded-bl-[80px] rounded-bl-[50px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="flex flex-col gap-10 md:gap-20 lg:gap-28 py-10 px-5 md:px-16 lg:py-16 lg:px-60 items-center bg-[#025195] ">
        <h1 className="font-Gloock text-white text-2xl lg:text-4xl lg:w-2/3 text-center ">
          Designer Success Stories – How Styler Transformed Their Business
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
                  <p className="text-[#727272] text-sm md:text-base whitespace-nowrap">
                    Lead Designer at Luxe Couture
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <FaArrowLeftLong className="text-[#025195] bg-[#F1F5EB] w-10 h-10 rounded-full p-3" />
                <FaArrowRightLong className="text-[#F1F5EB] bg-[#025195] w-10 h-10 rounded-full p-3" />
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
        <img src={logo1} alt="" className="h-8 lg:h-10 " />
        <img src={logo2} alt="" className="h-8 lg:h-10 " />
        <img src={logo3} alt="" className="h-8 lg:h-10 " />
        <img src={logo4} alt="" className="h-8 lg:h-10 " />
        <img src={logo5} alt="" className="h-8 lg:h-10 " />
      </div>

      {/* Join Our Community*/}
      <div className="flex flex-col w-full bg-[#025195] text-white lg:flex-row gap-10 md:gap-16 py-10 px-10 lg:py-16 lg:px-14 font-inter">
        <div className="lg:w-2/3 flex flex-col justify-center">
          <h1 className="text-center font-bold md:text-start text-3xl md:text-6xl mb-8 md:mb-12">
            Join Our Community
          </h1>
          <p className="text-xs text-center md:text-start md:text-xl">
            Invite visitors to join the platform, whether as clients or
            designers, highlighting the benefits of becoming part of the
            community.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center items-center">
          <button className="flex w-4/5 h-fit rounded-[50px] items-center justify-center px-8 md:px-16 md:py-4 py-3 text-white  text-xl md:text-lg  border">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
