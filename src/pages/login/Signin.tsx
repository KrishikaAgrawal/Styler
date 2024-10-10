import React, { useState } from "react";

import "../../index.css";

import { FcGoogle } from "react-icons/fc";
import { IoMdMail, IoIosLock, IoMdEyeOff, IoMdEye } from "react-icons/io";

import SignupImg from "../../assets/Login/signupImg.png";
import instagram from "../../assets/Login/instagram.png";
import facebook from "../../assets/Login/facebook.png";

const Signin: React.FC = () => {
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
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[#8C4D33] text-white rounded-full text-7xl font-Gloock w-20 h-20 flex justify-center items-center">
              S
            </div>
            <div className="text-5xl font-Gloock">Styler.</div>
          </div>
          {/* Create your account */}
          <h1 className="text-3xl mt-3 mb-10 font-Gloock text-center text-[#531A02] ">
            Login to Your Account
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

          {/* sign up button */}
          <button className="flex p-4 items-center justify-center w-full bg-[#531A02] gap-4 rounded-full">
            <p className=" font-inter font-semibold text-white">Sign in</p>
          </button>

          <a
            href="/ForgotPassword"
            className="text-[#531A02] font-inter font-semibold text-sm mt-4"
          >
            Forgot the password?
          </a>

          {/* or continue with */}
          <div className="relative flex items-center my-4 w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EFEEEE] bottom-5 "></div>
            </div>
            <div className="relative px-4 text-xs bg-white font-semibold mx-auto">
              or continue with
            </div>
          </div>

          {/* other options */}
          <div className="flex flex-row justify-center gap-8">
            <button className=" border rounded-2xl border-[#EFEEEE] p-2 ">
              <FcGoogle className="text-lg" />
            </button>
            <button className=" border rounded-2xl border-[#EFEEEE] p-2 ">
              <img src={facebook} className="w-4 h-fit" />
            </button>
            <button className=" border rounded-2xl border-[#EFEEEE] p-2 ">
              <img src={instagram} className="w-4 h-fit" />
            </button>
          </div>

          {/* sign in option */}
          <p className="text-[#A0A2A2] text-center font-medium pt-3 ">
            Don’t have an account?
            <a
              href="/signup"
              className="text-[#531A02] font-semibold text-lg cursor-pointer"
            >
              {" "}
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
