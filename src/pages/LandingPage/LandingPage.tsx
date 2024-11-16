import { STImageWithLoading } from "@/components/common";
import React from "react";
import { useNavigate } from "react-router-dom";

import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

// for carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// importing images
import CalendarOutline from "../../assets/LandingPage/CalendarOutline.png";
import truck from "../../assets/LandingPage/truck.png";
import person from "../../assets/LandingPage/person.png";
import dress from "../../assets/LandingPage/dress.png";
import Amelia from "../../assets/LandingPage/Amelia.png";
import star from "../../assets/LandingPage/star.png";
import star_half from "../../assets/LandingPage/star-half.png";
import designer from "../../assets/LandingPage/designer.png";
import ourDesigners from "../../assets/LandingPage/ourDesigners.png";
import ArrowRightOutline from "../../assets/LandingPage/ArrowRightOutline.png";
import blouses from "../../assets/LandingPage/blouses.png";
import Bridal from "../../assets/LandingPage/Bridal.png";
import Casuals from "../../assets/LandingPage/Casuals.png";
import Formals from "../../assets/LandingPage/Formals.png";
import Kids from "../../assets/LandingPage/Kids.png";
import Others from "../../assets/LandingPage/Others.png";
import Party from "../../assets/LandingPage/Party.png";
import Sports from "../../assets/LandingPage/Sports.png";
import Suits from "../../assets/LandingPage/Suits.png";
import Traditional from "../../assets/LandingPage/Traditional.png";
import Services from "../../assets/LandingPage/Services.png";
import location from "../../assets/LandingPage/location.png";
import play from "../../assets/LandingPage/play.png";
import discover from "../../assets/LandingPage/discover.png";
import sketch from "../../assets/LandingPage/sketch.png";
import Guy from "../../assets/LandingPage/Guy.png";
// import journey2 from "../../assets/LandingPage/journey2.png";
import journey1 from "../../assets/LandingPage/journey1.png";
import calender from "../../assets/LandingPage/calender.png";
import user from "../../assets/LandingPage/user.png";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const navigateToSpecialOffer = () => {
    navigate("/SpecialOffer");
  };
  // Designer datatype
  interface Designer {
    img: string;
    name: string;
    loc: string;
    specH: string;
    spec: string;
    serviceH: string;
    service: string;
    rating: string;
    arrow: string;
    star: string;
    star_half: string;
  }

  // Designer data
  const data: Designer[] = [
    {
      img: ourDesigners,
      name: "Aria Couture",
      loc: "New York, USA",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      rating: "(4.9/5)",
      star: star,
      star_half: star_half,
      arrow: ArrowRightOutline,
    },
    {
      img: ourDesigners,
      name: "Aria Couture",
      loc: "New York, USA",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      rating: "(4.9/5)",
      star: star,
      star_half: star_half,
      arrow: ArrowRightOutline,
    },
    {
      img: ourDesigners,
      name: "Aria Couture",
      loc: "New York, USA",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      rating: "(4.9/5)",
      star: star,
      star_half: star_half,
      arrow: ArrowRightOutline,
    },
    {
      img: ourDesigners,
      name: "Aria Couture",
      loc: "New York, USA",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      rating: "(4.9/5)",
      star: star,
      star_half: star_half,
      arrow: ArrowRightOutline,
    },
    {
      img: ourDesigners,
      name: "Aria Couture",
      loc: "New York, USA",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      rating: "(4.9/5)",
      star: star,
      star_half: star_half,
      arrow: ArrowRightOutline,
    },
    {
      img: ourDesigners,
      name: "Aria Couture",
      loc: "New York, USA",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      rating: "(4.9/5)",
      star: star,
      star_half: star_half,
      arrow: ArrowRightOutline,
    },
    {
      img: ourDesigners,
      name: "Aria Couture",
      loc: "New York, USA",
      specH: "Specialization: ",
      spec: "High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      serviceH: "Services: ",
      service: "Custom design consultations, garment creation, alterations.",
      rating: "(4.9/5)",
      star: star,
      star_half: star_half,
      arrow: ArrowRightOutline,
    },
  ];

  // designers carousel settings
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Popular Datatype
  interface Polular {
    img: string;
    name: string;
    discription: string;
    rating: string;
    star: string;
    star_half: string;
  }

  // Popular Data
  const data1: Polular[] = [
    {
      img: ourDesigners,
      name: "Amelia Couture",
      discription:
        "Scalp treatments involve applying specialized products or techniques to the scalp to address various concerns such as dryness, dandruff, or irritation.",
      rating: "5 Reviews",
      star: star,
      star_half: star_half,
    },
    {
      img: ourDesigners,
      name: "Amelia Couture",
      discription:
        "Scalp treatments involve applying specialized products or techniques to the scalp to address various concerns such as dryness, dandruff, or irritation.",
      rating: "5 Reviews",
      star: star,
      star_half: star_half,
    },
    {
      img: ourDesigners,
      name: "Amelia Couture",
      discription:
        "Scalp treatments involve applying specialized products or techniques to the scalp to address various concerns such as dryness, dandruff, or irritation.",
      rating: "5 Reviews",
      star: star,
      star_half: star_half,
    },
    {
      img: ourDesigners,
      name: "Amelia Couture",
      discription:
        "Scalp treatments involve applying specialized products or techniques to the scalp to address various concerns such as dryness, dandruff, or irritation.",
      rating: "5 Reviews",
      star: star,
      star_half: star_half,
    },
    {
      img: ourDesigners,
      name: "Amelia Couture",
      discription:
        "Scalp treatments involve applying specialized products or techniques to the scalp to address various concerns such as dryness, dandruff, or irritation.",
      rating: "5 Reviews",
      star: star,
      star_half: star_half,
    },
    {
      img: ourDesigners,
      name: "Amelia Couture",
      discription:
        "Scalp treatments involve applying specialized products or techniques to the scalp to address various concerns such as dryness, dandruff, or irritation.",
      rating: "5 Reviews",
      star: star,
      star_half: star_half,
    },
    {
      img: ourDesigners,
      name: "Amelia Couture",
      discription:
        "Scalp treatments involve applying specialized products or techniques to the scalp to address various concerns such as dryness, dandruff, or irritation.",
      rating: "5 Reviews",
      star: star,
      star_half: star_half,
    },
  ];

  // popular carousel settings
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Services Datatype
  interface Services {
    img: string;
    // heart: string;
    name: string;
    designer: string;
    loc: string;
    locLogo: string;
    dist: string;
    specH: string;
    spec: string;
    servicesH: string;
    services: string;
    discriptionH: string;
    discription: string;
    orders: string;
    appointment: string;
    rating: string;
    star: string;
    star_half: string;
    arrow: string;
  }

  // Services Data
  const data2: Services[] = [
    {
      img: Services,
      name: "Aria Couture",
      designer: "Designer",
      loc: "NEW YORK, USA",
      locLogo: location,
      dist: "5 km",
      specH: "Specialization:",
      spec: " High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      servicesH: "Services:",
      services: " Custom design consultations, garment creation, alterations.",
      discriptionH: "Description:",
      discription:
        " Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      orders: "2,341 orders completed",
      appointment: "Set appointment",
      star: star,
      star_half: star_half,
      arrow: ArrowRightOutline,
    },
    {
      img: Services,
      name: "Aria Couture",
      designer: "Designer",
      loc: "NEW YORK, USA",
      locLogo: location,
      dist: "5 km",
      specH: "Specialization:",
      spec: " High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      servicesH: "Services:",
      services: " Custom design consultations, garment creation, alterations.",
      discriptionH: "Description:",
      discription:
        " Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      orders: "2,341 orders completed",
      appointment: "Set appointment",
      star: star,
      star_half: star_half,
      arrow: ArrowRightOutline,
    },
    {
      img: Services,
      name: "Aria Couture",
      designer: "Designer",
      loc: "NEW YORK, USA",
      locLogo: location,
      dist: "5 km",
      specH: "Specialization:",
      spec: " High-fashion evening gowns, custom wedding dresses, and luxury bespoke tailoring.",
      servicesH: "Services:",
      services: " Custom design consultations, garment creation, alterations.",
      discriptionH: "Description:",
      discription:
        " Aria Couture brings elegance and sophistication to every custom piece, with a focus on intricate detailing and perfect tailoring. Ideal for clients seeking red-carpet glamour or unforgettable bridal gowns.",
      rating: "(4.9/5)",
      orders: "2,341 orders completed",
      appointment: "Set appointment",
      star: star,
      star_half: star_half,
      arrow: ArrowRightOutline,
    },
  ];

  // Services carousel settings
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1.5,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-x-hidden">
      {/* <STNavbar /> */}

      {/* Hero Section */}
      <div onClick={navigateToSpecialOffer} className="relative">
        {/* Hero Text */}
        {/* <a href="/SpecialOffer">SpecialOffer</a> */}
        <div className="absolute inset-0 bg-black/50 w-full h-full z-10 text-white lg:p-32 py-6 px-4 flex flex-col justify-center">
          <p className="lg:text-9xl text-7xl font-bold text-st-light-brown">
            25%
          </p>
          <p className="lg:text-6xl text-3xl font-bold mt-4 ">
            Today's Special
          </p>
          <p className="lg:text-4xl text-xl lg:max-w-[70%] xl:mt-10 mt-4 font-light">
            Elevate your wardrobe with exclusive designs from anna Deo and enjoy
            a stunning 25% discount on all dresses.
          </p>
        </div>

        {/* Pagination */}
        <div className="absolute inset-0 flex justify-center items-end z-10 py-4 gap-2">
          <div className="bg-st-accent-brown w-3 h-3 rounded-full cursor-pointer hover:scale-150 transition-all active:scale-100"></div>
          <div className="bg-st-light-brown w-3 h-3 rounded-full cursor-pointer hover:scale-150 transition-all active:scale-100"></div>
          <div className="bg-st-light-brown w-3 h-3 rounded-full cursor-pointer hover:scale-150 transition-all active:scale-100"></div>
          <div className="bg-st-light-brown w-3 h-3 rounded-full cursor-pointer hover:scale-150 transition-all active:scale-100"></div>
          <div className="bg-st-light-brown w-3 h-3 rounded-full cursor-pointer hover:scale-150 transition-all active:scale-100"></div>
          <div className="bg-st-light-brown w-3 h-3 rounded-full cursor-pointer hover:scale-150 transition-all active:scale-100"></div>
          <div className="bg-st-light-brown w-3 h-3 rounded-full cursor-pointer hover:scale-150 transition-all active:scale-100"></div>
        </div>

        {/* Hero Image */}
        <STImageWithLoading
          alt="Landing Image"
          src="https://res.cloudinary.com/dlxpf7d8c/image/upload/v1726575653/yy9vsbv09uwhdu0yrz9k.png"
          className="w-full lg:h-full h-[35rem] object-cover"
        />
      </div>

      <div className=" my-16 md:mx-16">
        {/* Appointment Reminder */}
        <div className="my-4 mx-2 md:mx-0 font-Gloock flex justify-between items-center">
          <div className="">Appointment Reminder</div>
          <div className=" text-[#025195] text-xs  ">Today, Morning</div>
        </div>
        <div className="flex text-white bg-[#025195] md:rounded-xl py-6 md:px-14 px-4 font-Gloock justify-between">
          <div className="flex gap-6  ">
            <img className="" src={CalendarOutline} alt="" />
            Bridal, Amelia Couture
          </div>
          <div>10: 23</div>
        </div>

        {/* why Styler */}
        <div className="flex flex-col lg:flex-row  gap-8 md:rounded-2xl bg-[#F4F0F0] mt-16 py-16 items-center justify-center ">
          <div className="w-full px-4 lg:px-16 lg:w-1/2">
            <h1 className="mb-6 font-Gloock text-3xl ">
              Why <span className="text-[#025195] ">Styler.</span>
            </h1>
            <h2 className="mb-6 text-[#025195] font-Gloock text-5xl">
              Book your next Order in 3 easy steps
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex gap-5  justify-center items-center ">
                <div className="bg-[#F0BB1F] rounded-xl min-w-12 min-h-12 justify-center items-center flex">
                  <img className="" src={dress} alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-500">
                    Choose Designers/Tailors
                  </h3>
                  <p className="  text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
              <div className="flex gap-5  justify-center items-center ">
                <div className="bg-[#F15A2B] rounded-xl min-w-12 min-h-12 justify-center items-center flex">
                  <img className="" src={person} alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-500">
                    Book Consultations
                  </h3>
                  <p className="  text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
              <div className="flex gap-5  justify-center items-center ">
                <div className="bg-[#006380] rounded-xl min-w-12 min-h-12 justify-center items-center flex">
                  <img className="" src={truck} alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-500">
                    Order Management & Delivery
                  </h3>
                  <p className="  text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:relative flex md:flex-none gap-5 flex-col items-center w-auto justify-center ">
            <div className=" bg-white p-4 h-fit rounded-2xl w-80 md:mr-32 lg:mr-64  border-white">
              <img
                className="rounded-2xl cover no-repeat"
                src={Amelia}
                alt=""
              />
              <div className=" py-2 px-1">
                <div className="flex justify-between my-2">
                  <p className="font-bold">Amelia Couture</p>
                  <div className="flex gap-1 mr-14 text-[#025195]">
                    <IoIosStar className="w-4 h-4" />
                    <IoIosStar className="w-4 h-4" />
                    <IoIosStar className="w-4 h-4" />
                    <IoIosStarHalf className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex justify-between gap-6 mt-">
                  <p className="font-light text-slate-400 text-xs ">
                    Scalp treatments involve applying specialized products or
                    techniques to the scalp to address various concerns such as
                    dryness, dandruff, or irritation.
                  </p>
                  <p className="text-red-500 font-bold text-sm whitespace-nowrap">
                    5 Reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="md:absolute bottom-32 left-64 w-64 bg-white flex p-4 gap-3 rounded-2xl">
              <img className="h-12 w-12 " src={designer} alt="" />
              <div className="flex flex-col">
                <p className="text-[#84829A] font-medium text-sm">Designer</p>
                <p className="font-medium text-lg my-">Amelia Deo</p>
                <p className="font-medium text-sm my-2">
                  <span className="text-[#025195]">40% &nbsp;</span>completed
                </p>
                <div className="w-36 rounded-full h-1 bg-[#F4F0F0]">
                  <div className="w-2/5 rounded-full h-1 bg-[#025195]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Designers */}
        <h1 className="text-[#025195] lg:text-6xl md:text-5xl text-4xl font-Gloock flex justify-center my-8 md:my-12 lg:my-16">
          OUR DESIGNERS
        </h1>
        <div>
          <Slider {...settings1} className="">
            {data.map((designer) => (
              <div className=" p-3 rounded-2xl border border-black">
                <img
                  src={designer.img}
                  alt=""
                  className="rounded-2xl h-60 bg-cover w-full"
                />
                <h1 className="mb-2 mt-4 leading-none text-2xl text-[#025195] font-Gloock ">
                  {designer.name}
                </h1>
                <p className=" font-medium text-sm text-[#025195]">
                  {designer.loc}
                </p>
                <p className="font-bold leading-4 py-2 text-sm text-[#025195]">
                  {designer.specH}
                  <span className="font-normal text-[#7C7C7C]">
                    {designer.spec}
                  </span>
                </p>
                <p className="font-bold text-sm leading-4 text-[#025195]">
                  {designer.serviceH}
                  <span className="font-normal text-[#7C7C7C]">
                    {designer.service}
                  </span>
                </p>
                <div className="flex items-center justify-between">
                  <p className=" font-bold leading-none">{designer.rating}</p>
                  <div className="flex gap-1 text-[#025195]">
                    <IoIosStar className="w-4 h-4" />
                    <IoIosStar className="w-4 h-4" />
                    <IoIosStar className="w-4 h-4" />
                    <IoIosStarHalf className="w-4 h-4" />
                  </div>
                  <div className="border border-[#025195] bg-white p-[2px] rounded-full inline-flex items-center justify-center">
                    <FaArrowRightLong className="bg-[#025195] text-white rounded-full p-1 h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Our Categories */}
        <h1 className="text-[#025195] lg:text-6xl md:text-5xl text-4xl font-Gloock flex justify-center my-8 md:my-12 lg:my-16">
          OUR CATEGORIES
        </h1>
        <div>
          <div className=" md:flex-row  flex flex-col items-center lg:overflow-hidden  md:h-[412px] ">
            <img
              className="w-full px-7 pb-1 md:p-1 md:w-2/5 h-full"
              src={Formals}
              alt=""
            />
            {/* <h2 className="font-Gloock text-7xl text-center justify-center flex items-center ">
              <p>Formals</p>
            </h2> */}

            <div className="flex w-full md:px-0 md:min-w-[381px] md:h-full px-6 flex-wrap lg:w-3/5 lg:overflow-hidden">
              <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={Casuals}
                  alt="Casuals"
                />
              </div>
              <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={Traditional}
                  alt="Traditional"
                />
              </div>
              <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={Suits}
                  alt="Suits"
                />
              </div>
              <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={Kids}
                  alt="Kids"
                />
              </div>
            </div>
          </div>

          <div className=" md:flex-row  flex flex-col items-center lg:overflow-hidden  md:h-[412px] ">
            <div className="flex w-full md:px-0 md:min-w-[381px] md:h-full px-6 flex-wrap lg:w-3/5 lg:overflow-hidden">
              <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={Sports}
                  alt="Casuals"
                />
              </div>
              <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={Bridal}
                  alt="Traditional"
                />
              </div>
              <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={Party}
                  alt="Suits"
                />
              </div>
              <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={Others}
                  alt="Kids"
                />
              </div>
            </div>
            <img
              className="w-full px-7 pb-1 md:p-1 md:w-2/5 h-full"
              src={blouses}
              alt=""
            />
          </div>
        </div>

        {/* Most Popular */}
        <h1 className="text-[#025195] lg:text-6xl md:text-5xl text-4xl font-Gloock flex justify-center my-8 md:my-12 lg:my-16">
          MOST POPULAR
        </h1>
        <div>
          <Slider {...settings2} className="">
            {data1.map((popular) => (
              <div className=" p-3 rounded-2xl border border-black">
                <img
                  src={popular.img}
                  alt=""
                  className="rounded-2xl h-60 bg-cover w-full"
                />
                <div className="flex items-center mb-2 mt-4 justify-between">
                  <h1 className=" leading-none font-bold ">{popular.name}</h1>
                  <div className="flex gap-1 mr-14 text-[#025195]">
                    <IoIosStar className="w-4 h-4" />
                    <IoIosStar className="w-4 h-4" />
                    <IoIosStar className="w-4 h-4" />
                    <IoIosStarHalf className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex  justify-between">
                  <p className="font-light leading-4 py-1 text-xs text-[#777777] w-3/4">
                    {popular.discription}
                  </p>
                  <p className=" font-bold leading-none text-[#FF0000] text-sm ">
                    {popular.rating}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Our services */}
        <h1 className="text-[#025195] lg:text-6xl md:text-5xl text-4xl font-Gloock flex justify-center my-8 md:my-12 lg:my-16">
          OUR SERVICES
        </h1>
        <div>
          <Slider {...settings3} className="">
            {data2.map((service) => (
              <div className=" p-3 rounded-2xl border border-black">
                <img
                  src={service.img}
                  alt=""
                  className="rounded-2xl h-52 bg-cover w-full "
                />
                <div className="flex  mt-4 items-center justify-between">
                  <h1 className=" leading-none text-3xl lg:text-4xl text-[#025195] font-Gloock  ">
                    {service.name}
                  </h1>
                  <p className=" border-2 rounded-lg py-2 px-2 font-semibold text-[#0B1957] bg-[#D9E0FF] border-[#0B1957]">
                    {service.designer}
                  </p>
                </div>
                <div className="flex items-center my-3 justify-between">
                  <p className="   px-8 py-2 rounded-lg text-[#025195] border border-[#025195] bg-[#DEF9FF] font-bold">
                    {service.loc}
                  </p>
                  <div className="flex items-center gap-1">
                    <img src={service.locLogo} alt="" className="w-7" />
                    <div className="font-bold text-[#025195] text-lg">
                      {service.dist}
                    </div>
                  </div>
                </div>
                <p className="font-bold leading-4 text-sm text-[#025195]">
                  {service.specH}
                  <span className="font-normal text-[#7C7C7C]">
                    {service.spec}
                  </span>
                </p>
                <p className="font-bold text-sm leading-4 my-3 text-[#025195]">
                  {service.servicesH}
                  <span className="font-normal text-[#7C7C7C]">
                    {service.services}
                  </span>
                </p>
                <p className="font-bold text-sm leading-4 text-[#025195]">
                  {service.discriptionH}
                  <span className="font-normal text-[#7C7C7C]">
                    {service.discription}
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
                    <p className=" font-bold leading-none">{service.rating}</p>
                    <div className="flex gap-1 mr-14 text-[#025195]">
                      <IoIosStar className="w-4 h-4" />
                      <IoIosStar className="w-4 h-4" />
                      <IoIosStar className="w-4 h-4" />
                      <IoIosStarHalf className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="border border-[#025195] bg-white p-[2px] rounded-full inline-flex items-center justify-center">
                    <img
                      className="bg-[#025195] rounded-full p-2 h-8 w-8 md:h-10 md:w-10"
                      src={service.arrow}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Discover bespoke elegance tailored just for you. */}
        <div className="flex flex-col md:flex-row bg-[#025195]  px-10 pt-10 md:px-14 md:pt-14 text-white  gap-10 md:rounded-[30px] my-12">
          <div className=" md:w-1/2 gap-7">
            <div className="font-semibold  text-4xl md:text-4xl lg:text-6xl">
              Discover bespoke elegance tailored just for you.
            </div>
            <div className="flex lg:flex-row flex-col gap-5 md:gap-10 my-10">
              <div className="inline-flex w-fit rounded-full items-center justify-center px-4 md:px-6 py-4 border gap-3">
                <p>Get Appointment</p>
                <img className="w-5 h-5" src={ArrowRightOutline} alt="" />
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-8 h-8 " src={play} alt="" />
                <p className="text-lg leading-5 font-medium">
                  Watch Our <br /> Videos
                </p>
              </div>
            </div>
          </div>
          <div className=" md:w-1/2 object-contain flex items-center md:items-end">
            <img
              className="h-[400px] md:[500px] w-auto "
              src={discover}
              alt=""
            />
          </div>
        </div>

        {/* personalized fashion */}
        <div className=" flex flex-col-reverse md:flex-row m-5 md:m-0 gap-12 md:items-center ">
          <div className="md:w-1/2">
            <div className="flex gap-3">
              <img className="w-1/2 h-fit" src={sketch} alt="" />
              <div className=" flex flex-col gap-3">
                <div className="flex w-full items-center justify-around py-5 text-white rounded-xl bg-[#025195]">
                  <span className="font-bold text-2xl md:text-4xl">250</span>
                  <span className="text-center leading-5">
                    Completed <br /> Projects
                  </span>
                </div>
                <img src={Guy} alt="" />
              </div>
            </div>
          </div>
          <div className="flex md:w-1/2 flex-col gap-5">
            <p className="text-sm font-semibold text-[#025195] ">
              WHY CHOOSE US
            </p>
            <p className="text-3xl md:text-4xl font-bold overflow">
              Your journey to{" "}
              <span className="text-[#025195]">PERSONALIZED FASHION</span>{" "}
              starts here.
            </p>
            <p className="text-[#727272]">
              Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
              venenatis cras sed eu massa Et purus duis sollicitudin dignissim
              habitant. Egestas nulla quis venenatis cras sed eu massa Et purus
              duis sollicitudin dignissim habitant. Egestas nulla
            </p>
            <button className="inline-flex font-semibold mt-6 w-fit rounded-full items-center justify-center px-8 md:px-16 py-4 border-[#025195] text-[#025195] border gap-3">
              <p>Read More</p>
              <FaArrowRightLong className="text-[#025195] p-2 h-8 w-8" />
            </button>
          </div>
        </div>

        {/* Journeys of Discovery Uncovering Hidden */}
        <h1 className="font-Gloock lg:w-1/2 text-[#025195] md:text-5xl text-4xl mx-5 my-14 md:mx-16 lg:mx-24 ">
          Journeys of Discovery Uncovering Hidden
        </h1>
        <div className="mx-5 md:mx-40 lg:mx-24 lg:flex-row flex flex-col gap-5 ">
          <div className="lg:w-1/3 w-full border rounded-2xl border-[#E3DBD8]">
            <img src={journey1} alt="" className="w-full" />
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
                World of Wander Discovering Diverse Landscapes
              </h2>
              <div className="text-[#727272]">
                Lorem Ipsum is simply dummy text the printing and typese Lorem
                Ipsum
              </div>
              <div className="flex items-center font-semibold mt-6 text-[#025195] gap-3">
                <p>Read More</p>
                <FaArrowRightLong className="text-[#025195] p-2 h-8 w-8" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full border rounded-2xl border-[#E3DBD8]">
            <img src={journey1} alt="" className="w-full" />
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
                World of Wander Discovering Diverse Landscapes
              </h2>
              <div className="text-[#727272]">
                Lorem Ipsum is simply dummy text the printing and typese Lorem
                Ipsum
              </div>
              <div className="flex items-center font-semibold mt-6 text-[#025195] gap-3">
                <p>Read More</p>
                <FaArrowRightLong className="text-[#025195] p-2 h-8 w-8" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full border rounded-2xl border-[#E3DBD8]">
            <img src={journey1} alt="" className="w-full" />
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
                World of Wander Discovering Diverse Landscapes
              </h2>
              <div className="text-[#727272]">
                Lorem Ipsum is simply dummy text the printing and typese Lorem
                Ipsum
              </div>
              <div className="flex items-center font-semibold mt-6 text-[#025195] gap-3">
                <p>Read More</p>
                <FaArrowRightLong className="text-[#025195] p-2 h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <STFooter /> */}
    </div>
  );
};

export default LandingPage;
