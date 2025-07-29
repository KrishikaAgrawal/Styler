import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "@/Hooks/useFetch"; // Import custom hook
import Loading from "@/pages/Loading/Loading"; // Import loading component
import packagesImage from "../../../assets/Services/package.png";

interface Package {
  _id: string;
  packageName: string;
  packageDescription: string;
  targetAudience: string[];
}

interface PartnerResponse {
  success: boolean;
  message: string;
  partner: {
    packages: Package[];
  };
}

interface ComponentProps {
  id: string | undefined;
}

const Packages: React.FC<ComponentProps> = ({ id }) => {
  const navigate = useNavigate();

  // Fetch partner data
  const { data, loading, error } = useFetch<PartnerResponse>(
    `/get-partner-details-by-id/${id}`
  );

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <h1 className="text-[#025195] font-Gloock text-2xl lg:text-4xl my-4 lg:my-8">
        Our Packages
      </h1>

      <div className="flex flex-col gap-6">
        {data?.partner?.packages?.map((pkg) => (
          <div
            key={pkg._id}
            className="w-full flex flex-col lg:flex-row border border-[#025195] rounded-2xl p-4 gap-4 lg:gap-16 items-center"
          >
            <img src={packagesImage} alt={pkg.packageName} />
            <div className="flex flex-col">
              <h3 className="font-Gloock text-[#025195] text-sm lg:text-2xl">
                {pkg.packageName}
              </h3>
              <p className="text-[#807E7E] text-xs lg:text-base mt-2">
                {pkg.packageDescription}
              </p>
              <h3 className="text-[#025195] mt-2 font-semibold">
                Target Audience
              </h3>
              <ul className="list-disc pl-5  text-[#807E7E] text-xs lg:text-base">
                {pkg.targetAudience.map((audience, index) => (
                  <li key={index}>{audience}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/Booking")}
        className="my-10 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex"
      >
        <p>Book Now</p>
      </button>
    </div>
  );
};

export default Packages;
