import React from "react";

import ourDesigner from "../../../assets/Services/ourDesigner.png";

// for carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurDesigner: React.FC = () => {
  // Designer datatype
  interface Designer {
    img: string;
    name: string;
    post: string;
    exp: string;
    desc: string;
  }

  // Designer data
  const data: Designer[] = [
    {
      img: ourDesigner,
      name: "Alexa Montague",
      post: "Lead Fashion Designer",
      exp: "12 years ",
      desc: "Alexa specializes in luxury apparel and has a keen eye for blending traditional craftsmanship with modern trends. She leads the design team with creativity and passion.",
    },
    {
      img: ourDesigner,
      name: "Alexa Montague",
      post: "Lead Fashion Designer",
      exp: "12 years ",
      desc: "Alexa specializes in luxury apparel and has a keen eye for blending traditional craftsmanship with modern trends. She leads the design team with creativity and passion.",
    },
    {
      img: ourDesigner,
      name: "Alexa Montague",
      post: "Lead Fashion Designer",
      exp: "12 years ",
      desc: "Alexa specializes in luxury apparel and has a keen eye for blending traditional craftsmanship with modern trends. She leads the design team with creativity and passion.",
    },
    {
      img: ourDesigner,
      name: "Alexa Montague",
      post: "Lead Fashion Designer",
      exp: "12 years ",
      desc: "Alexa specializes in luxury apparel and has a keen eye for blending traditional craftsmanship with modern trends. She leads the design team with creativity and passion.",
    },
    {
      img: ourDesigner,
      name: "Alexa Montague",
      post: "Lead Fashion Designer",
      exp: "12 years ",
      desc: "Alexa specializes in luxury apparel and has a keen eye for blending traditional craftsmanship with modern trends. She leads the design team with creativity and passion.",
    },
    {
      img: ourDesigner,
      name: "Alexa Montague",
      post: "Lead Fashion Designer",
      exp: "12 years ",
      desc: "Alexa specializes in luxury apparel and has a keen eye for blending traditional craftsmanship with modern trends. She leads the design team with creativity and passion.",
    },
    {
      img: ourDesigner,
      name: "Alexa Montague",
      post: "Lead Fashion Designer",
      exp: "12 years ",
      desc: "Alexa specializes in luxury apparel and has a keen eye for blending traditional craftsmanship with modern trends. She leads the design team with creativity and passion.",
    },
    {
      img: ourDesigner,
      name: "Alexa Montague",
      post: "Lead Fashion Designer",
      exp: "12 years ",
      desc: "Alexa specializes in luxury apparel and has a keen eye for blending traditional craftsmanship with modern trends. She leads the design team with creativity and passion.",
    },
    {
      img: ourDesigner,
      name: "Alexa Montague",
      post: "Lead Fashion Designer",
      exp: "12 years ",
      desc: "Alexa specializes in luxury apparel and has a keen eye for blending traditional craftsmanship with modern trends. She leads the design team with creativity and passion.",
    },
  ];

  // designers carousel settings
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          //   initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className=" text-2xl lg:text-4xl text-[#025195] font-Gloock ">
        Our Designers
      </h1>
      <div>
        <Slider {...settings1} className="my-6">
          {data.map((designer, index) => (
            <div
              key={index}
              className=" m-0 lg:p-2 p-1 rounded-2xl lg:border-2 border border-[#025195]"
            >
              <img src={designer.img} alt="" className="rounded-2xl w-full" />
              <h1 className=" mt-2 leading-none text-sm lg:text-xl text-[#025195] font-bold">
                {designer.name}
              </h1>
              <p className=" font-medium text-[13px] lg:text-sm text-[#6B7280]">
                {designer.post}
              </p>
              <p className="font-bold text-[10px] lg:text-sm  text-[#025195]">
                {designer.exp}
              </p>
              <p className="text-[8px] lg:text-[10px] leading-2 text-[#6B7280]">
                {designer.desc}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurDesigner;
