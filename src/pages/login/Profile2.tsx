import "../../index.css";

import Profile from "../../assets/Login/Profile.png";
import { FaArrowRight } from "react-icons/fa";

const Profile2: React.FC = () => {
  return (
    <div className=" md:flex justify-center items-center lg:h-screen bg-[#F4F0F0] ">
      <div className="flex flex-col h-screen md:h-fit md:px-5 lg:w-2/3 md:flex-row bg-white gap-8 lg:border md:rounded-2xl lg:shadow-2xl ">
        {/* Page image */}
        <div className="flex flex-col py-5 md:w-1/4 ">
          <div className="flex gap-4 pb-5">
            <a href="/Profile1">
              <FaArrowRight className="text-[#531A02] bg-[#FFF2ED] rounded-full p-2 h-7 w-7 transform rotate-180" />
            </a>
            <p className="text-2xl font-bold">Fill Your Profile</p>
          </div>

          <div className="md:flex flex-col h-[500px] hidden ">
            <img
              src={Profile}
              alt=""
              className="md:rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>
        {/* form */}
        <div className="flex flex-col p-5 justify-center items-center md:w-2/3 gap-3">
          {/* Address 1 */}
          <input
            type="text"
            className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            placeholder="Address 1"
          />
          {/* Address 2 */}
          <input
            type="text"
            className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            placeholder="Address 2"
          />

          {/* Landmark*/}
          <input
            type="text"
            className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            placeholder="Landmark"
          />
          {/* City*/}
          <input
            type="text"
            className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            placeholder="City"
          />
          {/* State */}
          <input
            type="text"
            className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            placeholder="State"
          />
          {/* Pincode */}
          <input
            type="text"
            className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            placeholder="Pincode"
          />
          {/* Country */}
          <input
            type="text"
            className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            placeholder="Country"
          />
          <a href="/Otp" className="w-full">
            <button className="flex p-4 mt-8 items-center justify-center w-full bg-[#531A02] gap-4 rounded-full">
              <p className=" font-inter font-semibold text-white">Continue</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
