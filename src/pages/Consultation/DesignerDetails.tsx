import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "@/Hooks/useFetch";
import Loading from "../Loading/Loading";
import Designer from "./Components/Designer";
import OurDesigner from "./Components/OurDesigner";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Packages from "./Components/Packages";
import Gallery from "./Components/Gallery";

// Define the possible component names
type ComponentName = "AboutUs" | "Services" | "Packages" | "Gallery";

// Define the Designer interface
interface DesignerInterface {
  _id: string;
  description: string;
  openingHours: { day: string; timing: string }[];
  inpersonMeetingPrice: number;
  virtualMeetingPrice: number;
}

const DesignerDetails: React.FC = () => {
  // State for the selected component in the UI
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentName>("AboutUs");

  // Get the designer ID from the URL parameters
  const { id } = useParams<{ id: string }>();

  // State for storing designer data
  const [designerData, setDesignerData] = useState<DesignerInterface | null>(
    null
  );

  // Fetch designer data from API
  const { data, loading, error } = useFetch<{ partner: DesignerInterface }>(
    `/get-partner-details-by-id/${id}`
  );

  // Effect to update state when API data is available
  useEffect(() => {
    if (data?.partner) {
      const {
        _id,
        description,
        openingHours = [],
        inpersonMeetingPrice = 0,
        virtualMeetingPrice = 0,
      } = data.partner;
      setDesignerData({
        _id,
        description,
        openingHours,
        inpersonMeetingPrice,
        virtualMeetingPrice,
      });
    }
  }, [data]);

  console.log(designerData);

  // Display loading state
  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!designerData) return <p>No designer found</p>;

  // Function to render selected component
const renderComponent = () => {
  switch (selectedComponent) {
    case "AboutUs":
      return <AboutUs id={id} />;
    case "Services":
      return <Services id={id} />;
    case "Packages":
      return <Packages id={id} />;
    case "Gallery":
      return <Gallery id={id} />;
    default:
      return <AboutUs id={id} />;
  }
};

  return (
    <div className="px-5 font-inter lg:px-24">
      <Designer id={id} />
      <OurDesigner id={id} />

      {/* Navigation buttons for different sections */}
      <div className="flex justify-center w-full">
        <div className="lg:w-2/3 grid lg:grid-cols-4 grid-cols-2 gap-3 lg:gap-5 mt-10 mb-8 lg:my-15 ">
          {(
            ["AboutUs", "Services", "Packages", "Gallery"] as ComponentName[]
          ).map((comp) => (
            <button
              key={comp}
              className={`flex rounded-full items-center justify-center font-semibold px-8 py-2 lg:py-4 border border-[#025195] ${
                selectedComponent === comp
                  ? "text-white bg-[#025195]"
                  : "text-[#025195] "
              }`}
              onClick={() => setSelectedComponent(comp)}
            >
              {comp.replace(/([A-Z])/g, " $1").trim()}{" "}
              {/* Formats "AboutUs" to "About Us" */}
            </button>
          ))}
        </div>
      </div>

      {/* Designer Description */}
      <p className="text-[#7C7C7C] text-xs lg:text-base">
        {designerData.description}
      </p>

      {/* Opening Hours Section */}
      <h3 className="font-Gloock text-[#025195] lg:text-2xl text-xl py-5">
        Opening Hours
      </h3>
      <div className="text-[15px] lg:text-xl">
        {designerData.openingHours.map((hour) => (
          <div
            key={hour.day}
            className="flex w-full py-1 lg:py-2 border-b border-[#D1D1D1]"
          >
            <div className="flex text-[#807E7E] w-1/2 border-r border-[#D1D1D1] lg:justify-center">
              {hour.day.charAt(0).toUpperCase() + hour.day.slice(1)}
            </div>
            <div className="flex text-[#025195] font-bold w-1/2 justify-end lg:justify-center">
              {hour.timing}
            </div>
          </div>
        ))}
      </div>

      {/* Meeting Prices Section */}
      <h3 className="font-Gloock text-[#025195] lg:text-2xl text-xl py-5 mt-5">
        Meeting Prices
      </h3>
      <div className="text-[15px] lg:text-xl">
        <div className="flex w-full py-1 lg:py-2 border-b border-[#D1D1D1]">
          <div className="flex text-[#807E7E] w-1/2 border-r border-[#D1D1D1] lg:justify-center">
            Virtual Meeting
          </div>
          <div className="flex text-[#025195] font-bold w-1/2 justify-end lg:justify-center">
            ${designerData.virtualMeetingPrice}
          </div>
        </div>
        <div className="flex w-full py-1 lg:py-2 border-b border-[#D1D1D1]">
          <div className="flex text-[#807E7E] w-1/2 border-r border-[#D1D1D1] lg:justify-center">
            In-person Meeting
          </div>
          <div className="flex text-[#025195] font-bold w-1/2 justify-end lg:justify-center">
            ${designerData.inpersonMeetingPrice}
          </div>
        </div>
      </div>

      {/* Render Selected Component */}
      <div>{renderComponent()}</div>
    </div>
  );
};

export default DesignerDetails;
