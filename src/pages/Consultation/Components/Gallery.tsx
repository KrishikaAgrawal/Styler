import React from "react";
import { useNavigate } from "react-router-dom";

import gallery1 from "../../../assets/Services/gallery1.png";
import gallery2 from "../../../assets/Services/gallery2.png";
import gallery3 from "../../../assets/Services/gallery3.png";
import gallery4 from "../../../assets/Services/gallery4.png";
import gallery5 from "../../../assets/Services/gallery5.png";

interface ComponentProps {
  id: string | undefined;
}

const Gallery: React.FC<ComponentProps> = ({ id }) => {
  console.log("id", id);
  
  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate("/Booking");
  };
  return (
    <div>
      <h1 className="text-[#025195] font-Gloock text-2xl lg:text-4xl my-4 lg:my-8">
        Gallery
      </h1>
      <div>
        <div className=" md:flex-row  flex flex-col items-center lg:overflow-hidden  md:h-[412px] ">
          <img
            className="w-full px-7 pb-1 md:p-1 md:w-2/5 h-full object-cover"
            src={gallery1}
            alt=""
          />

          <div className="flex w-full md:px-0 md:min-w-[381px] md:h-full px-6 flex-wrap lg:w-3/5 lg:overflow-hidden">
            <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={gallery2}
                alt="Casuals"
              />
            </div>
            <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={gallery3}
                alt="Traditional"
              />
            </div>
            <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={gallery4}
                alt="Suits"
              />
            </div>
            <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={gallery5}
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
                src={gallery3}
                alt="Casuals"
              />
            </div>
            <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={gallery4}
                alt="Traditional"
              />
            </div>
            <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={gallery1}
                alt="Suits"
              />
            </div>
            <div className="w-1/2 md:h-1/2 p-1 flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={gallery5}
                alt="Kids"
              />
            </div>
          </div>
          <img
            className="w-full px-7 pb-1 md:p-1 md:w-2/5 h-full object-cover"
            src={gallery1}
            alt=""
          />
        </div>
      </div>
      <button
        onClick={navigateToBooking}
        className="my-10 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex"
      >
        <p className="">Book Now</p>
      </button>
    </div>
  );
};

export default Gallery;
