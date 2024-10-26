import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../index.css";

import { IoMdMail, IoIosLock, IoMdEyeOff, IoMdEye } from "react-icons/io";

import SignupImg from "../../assets/Login/signupImg.png";

const Signin: React.FC = () => {
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
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className=" md:flex justify-center items-center lg:h-screen bg-[#F4F0F0]">
      <div className="flex flex-col h-screen md:h-5/6 md:px-10 lg:w-2/3 md:flex-row-reverse bg-white gap-8 lg:border md:rounded-2xl lg:shadow-2xl ">
        {/* Page image */}
        <div className="flex flex-col md:py-10 w-full md:w-1/2 h-2/5 md:h-full">
          <img
            src={SignupImg}
            alt=""
            className="md:rounded-2xl w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col p-5  justify-center items-center md:w-1/2 ">
          <h1 className="text-3xl mt-3 mb-10 font-Gloock text-center text-[#531A02] ">
            Create New Password
          </h1>
          {/* input */}
          <div className="flex flex-col w-full gap-3">
            <div className="relative flex items-center w-full">
              <IoMdMail className="absolute left-3 text-gray-400 " />
              <input
                type="email"
                className="pl-10 pr-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="relative flex items-center w-full">
              <IoIosLock className="absolute left-3 text-gray-400" />
              <input
                type={passwordVisible ? "text" : "password"}
                className="pl-10 pr-10 py-2 rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none w-full"
                placeholder="Password"
              />
              {passwordVisible ? (
                <IoMdEyeOff
                  className="absolute right-3 cursor-pointer text-gray-400"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <IoMdEye
                  className="absolute right-3 cursor-pointer text-gray-400"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center my-6">
            <input
              id="rememberMe"
              type="checkbox"
              className="custom-checkbox"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 font-inter font-medium text-sm"
            >
              Remember Me
            </label>
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

export default Signin;
