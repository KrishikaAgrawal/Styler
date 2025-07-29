import React, { useState, useEffect } from "react";
import useFetch from "@/Hooks/useFetch";
import ourDesigner from "../../../assets/Services/ourDesigner.png";

// for carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ComponentProps {
  id: string | undefined;
}
// API Response Interface
interface ApiResponse {
  partner?: {
    ourAdditionalDesigners?: Designer[];
  };
}
// Designer interface
interface Designer {
  _id: string;
  name: string;
  role: string;
  about: string;
  link: string;
}

// Component
const OurDesigner: React.FC<ComponentProps> = ({ id }) => {
  const { data, loading, error } = useFetch<ApiResponse>(
    `/get-partner-details-by-id/${id}`
  ); // Adjust the endpoint as needed
  const [designers, setDesigners] = useState<Designer[]>([]);

    useEffect(() => {
    if (data?.partner?.ourAdditionalDesigners) {
      setDesigners(data.partner.ourAdditionalDesigners);
    }
  }, [data]);

  // Carousel settings
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4, // Default to 3 on large screens (desktop)
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 6, // Show 4 items on medium desktop screens
          slidesToScroll: 2,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3, // Show 3 items on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Show 2 items on small screens
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

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error fetching designers</p>
      ) : designers.length > 0 ? (
        <Slider {...settings1} className="my-6">
          {designers.map((designer) => (
            <div
              key={designer._id}
              className=" m-0 lg:p-2 p-1 rounded-2xl lg:border-2 border border-[#025195]"
            >
              <img src={ourDesigner} alt="" className="rounded-2xl w-full" />
              <h1 className="mt-2 leading-none text-sm lg:text-xl text-[#025195] font-bold">
                {designer.name}
              </h1>
              <p className="font-medium text-xs lg:text-sm text-[#6B7280]">
                {designer.role}
              </p>
              <p className="text-[8px] lg:text-[10px] leading-2 text-[#6B7280]">
                {designer.about}
              </p>
              <a
                href={designer.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[#025195] text-[10px] font-semibold"
              >
                View Portfolio
              </a>
            </div>
          ))}
        </Slider>
      ) : (
        <p>No designers available.</p>
      )}
    </div>
  );
};

export default OurDesigner;
