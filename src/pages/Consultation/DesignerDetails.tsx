import React, { useState } from "react";
import Designer from "./Components/Designer";
import OurDesigner from "./Components/OurDesigner";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Packages from "./Components/Packages";
import Gallery from "./Components/Gallery";

type ComponentName = "AboutUs" | "Services" | "Packages" | "Gallery";

const DesignerDetails: React.FC = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentName>("AboutUs");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "AboutUs":
        return <AboutUs />;
      case "Services":
        return <Services />;
      case "Packages":
        return <Packages />;
      case "Gallery":
        return <Gallery />;
      default:
        return <AboutUs />;
    }
  };
  return (
    <div className="px-5 font-inter lg:px-24">
      <Designer />
      <OurDesigner />
      {/* Choices */}
      <div className="flex justify-center w-full">
        <div className="lg:w-2/3 grid lg:grid-cols-4 grid-cols-2 gap-3 lg:gap-5 mt-10 mb-8 lg:my-15 ">
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195] ${
              selectedComponent === "AboutUs"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={() => setSelectedComponent("AboutUs")}
          >
            About Us
          </button>
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195] ${
              selectedComponent === "Services"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={() => setSelectedComponent("Services")}
          >
            Services
          </button>
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195]  ${
              selectedComponent === "Packages"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={() => setSelectedComponent("Packages")}
          >
            Packages
          </button>
          <button
            className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195]  ${
              selectedComponent === "Gallery"
                ? "text-white bg-[#025195]"
                : "text-[#025195] "
            }`}
            onClick={() => setSelectedComponent("Gallery")}
          >
            Gallery
          </button>
        </div>
      </div>
      {/* description */}
      <p className="text-[#7C7C7C] text-xs lg:text-base">
        Aria Couture is a premier fashion atelier renowned for its dedication to
        elegance and timeless sophistication. Each custom piece is meticulously
        crafted, blending haute couture techniques with modern aesthetics. With
        a passion for intricate detailing, Aria Couture elevates every design by
        incorporating luxurious fabrics, hand-stitched embellishments, and
        flawless tailoring. Specializing inAria Couture is a premier fashion
        atelier renowned for its dedication to elegance and timeless
        sophistication. Each custom piece is meticulously crafted, blending
        haute couture techniques with modern aesthetics. With a passion for
        intricate detailing, Aria Couture elevates every design by incorporating
        luxurious fabrics, hand-stitched embellishments, and flawless tailoring.
        Specializing in{" "}
        <span className="text-[#025195] font-semibold">...Read More</span>
      </p>
      {/*   Openings Hours */}
      <h3 className="font-Gloock text-[#025195] lg:text-2xl text-xl py-5  ">
        Openings Hours
      </h3>
      <div className="text-[15px] lg:text-xl">
        <div className="flex w-full py-1 lg:py-2 border-b border-[#D1D1D1]">
          <div className="flex text-[#807E7E] w-1/2 border-r border-[#D1D1D1] lg:justify-center ">
            Monday - Tuesday
          </div>
          <div className="flex text-[#025195] font-bold w-1/2 justify-end lg:justify-center ">
            8:30 am - 9:30 pm
          </div>
        </div>
        <div className="flex w-full py-1 lg:py-2 border-b border-[#D1D1D1]">
          <div className="flex text-[#807E7E] w-1/2 border-r border-[#D1D1D1] lg:justify-center ">
            Monday - Tuesday
          </div>
          <div className="flex text-[#025195] font-bold w-1/2 justify-end lg:justify-center ">
            8:30 am - 9:30 pm
          </div>
        </div>
      </div>
      {/* Component Rendering */}
      <div>{renderComponent()}</div>
    </div>
  );
};

export default DesignerDetails;
