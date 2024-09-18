import { STImageWithLoading, STNavbar } from "@/components/common";
import STFooter from "@/components/common/STFooter";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div>
      <STNavbar />

      {/* Hero Section */}
      <div className="relative">
        {/* Hero Text */}
        <div className="absolute inset-0 bg-black/50 w-full h-full z-10 text-white lg:p-32 py-6 px-4 flex flex-col justify-center">
          <p className="lg:text-9xl text-7xl font-bold text-st-light-brown">25%</p>
          <p className="lg:text-6xl text-3xl font-bold mt-4 ">Today's Special</p>
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

      {/* Footer */}
      <STFooter />
    </div>
  );
};

export default LandingPage;
