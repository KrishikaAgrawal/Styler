import "../../index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Profile from "../../assets/Login/Profile.png";
import { FaArrowRight } from "react-icons/fa";

const Otp: React.FC = () => {
  const navigate = useNavigate();

  const notify = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    toast.success(" Successfully Registered !!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/LandingPage");
    }, 5000);
  };

  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [isMasked, setIsMasked] = useState<boolean[]>(Array(4).fill(false));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Ensure only numbers are allowed

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    const newIsMasked = [...isMasked];
    if (value.length === 1 && index < 3) {
      newIsMasked[index] = true; // Mask the current input
      setIsMasked(newIsMasked);
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      const newIsMasked = [...isMasked];
      newIsMasked[index - 1] = false;
      setIsMasked(newIsMasked);

      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLInputElement).focus();
      }
    }
  };
  return (
    <div className=" md:flex justify-center items-center lg:h-screen bg-[#F4F0F0] ">
      <div className="flex flex-col h-screen md:h-fit md:px-5 lg:w-2/3 md:flex-row bg-white gap-8 lg:border md:rounded-2xl lg:shadow-2xl ">
        <div className="flex flex-col py-5 md:w-1/4 ">
          {/*Enter OTP code  */}
          <div className="flex gap-4 pb-5">
            <a href="/Profile2">
              <FaArrowRight className="text-[#531A02] bg-[#FFF2ED] rounded-full p-2 h-7 w-7 transform rotate-180" />
            </a>
            <p className="text-2xl font-bold">Enter OTP code</p>
          </div>

          {/* Page image */}

          <div className="md:flex flex-col h-[500px] hidden ">
            <img
              src={Profile}
              alt=""
              className="md:rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col p-5 justify-center items-center md:w-2/3 gap-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[#8C4D33] text-white rounded-full text-7xl font-Gloock w-20 h-20 flex justify-center items-center">
              S
            </div>
            <div className="text-5xl font-Gloock">Styler.</div>
          </div>
          <h1 className="text-3xl mt-3 font-Gloock text-center text-[#531A02] ">
            Add Your OTP Code
          </h1>
          <p className="text-[#A0A2A2] text-center py-6  text-lg ">
            Please enter the
            <span className="text-[#531A02] font-semibold cursor-pointer">
              {" "}
              OTP sent{" "}
            </span>
            to your phone number below to verify.
          </p>
          {/* otp */}
          <div className="flex space-x-2 justify-center">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`w-24 h-12 text-center text-xl border border-[#531A02] rounded-lg ${
                  isMasked[index] && value ? "otp-mask" : ""
                }`}
                maxLength={1}
                autoComplete="off"
              />
            ))}
          </div>
          <a href="" className="w-full">
            <button
              className="flex p-4 mt-8 items-center justify-center w-full bg-[#531A02] gap-4 rounded-full"
              onClick={notify}
            >
              <p className=" font-inter font-semibold text-white">Continue</p>
            </button>
            <ToastContainer />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Otp;
