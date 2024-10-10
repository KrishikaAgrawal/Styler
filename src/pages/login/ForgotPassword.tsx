import "../../index.css";
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Profile from "../../assets/Login/Profile.png";
import { FaArrowRight } from "react-icons/fa";

const ForgotPassword: React.FC = () => {
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

  return (
    <div className=" md:flex justify-center items-center lg:h-screen bg-[#F4F0F0] ">
      <div className="flex flex-col h-screen md:h-fit md:px-5 lg:w-2/3 md:flex-row bg-white gap-8 lg:border md:rounded-2xl lg:shadow-2xl ">
        <div className="flex flex-col py-5 md:w-1/4 ">
          {/*Forgot password  */}
          <div className="flex gap-4 pb-5">
            <a href="/Profile2">
              <FaArrowRight className="text-[#531A02] bg-[#FFF2ED] rounded-full p-2 h-7 w-7 transform rotate-180" />
            </a>
            <p className="text-2xl font-bold">Forgot Password</p>
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
          <p className="text-[#A0A2A2] text-center py-6  text-lg ">
            Select which contact details should we use to reset your password
          </p>

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

export default ForgotPassword;
