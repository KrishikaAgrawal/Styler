import React from "react";

import { FcGoogle } from "react-icons/fc";

import boarding from "../../assets/Login/Onboarding.png";
import instagram from "../../assets/Login/instagram.png";
import facebook from "../../assets/Login/facebook.png";

const Login: React.FC = () => {
  return (
    <div className=" md:flex justify-center items-center lg:h-screen bg-[#F4F0F0]">
      <div className="flex flex-col h-screen md:h-5/6 md:px-10 lg:w-2/3 md:flex-row-reverse bg-white lg:border md:rounded-2xl lg:shadow-2xl ">
        <div className="flex flex-col md:py-10 w-full md:w-1/2 h-2/5 md:h-full">
          <img
            src={boarding}
            alt=""
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 p-5 justify-center items-center md:w-1/2">
          <h1 className="text-4xl font-Gloock text-center text-[#025195] ">
            Let’s you in!
          </h1>
          <button className="flex border rounded-2xl border-[#EFEEEE] w-full p-3 items-center justify-center gap-4">
            <FcGoogle className="text-3xl" />
            <p className=" font-inter font-semibold">Continue with Google</p>
          </button>
          <button className="flex border rounded-2xl border-[#EFEEEE] w-full p-3 items-center justify-center gap-4">
            <img src={facebook} className="w-8" />
            <p className=" font-inter font-semibold">Continue with Facebook</p>
          </button>
          <button className="flex border rounded-2xl border-[#EFEEEE] w-full p-3 items-center justify-center gap-4">
            <img src={instagram} className="w-8" />
            <p className=" font-inter font-semibold">Continue with Instagram</p>
          </button>
          <div className="relative flex items-center my-4 w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EFEEEE] bottom-5 "></div>
            </div>
            <div className="relative px-4 bg-white font-semibold mx-auto">
              or
            </div>
          </div>
          <a
            href="/Signin"
            className="flex p-4 items-center justify-center w-full bg-[#025195] gap-4 rounded-full"
          >
            <p className=" font-inter font-semibold text-white">
              Sign in with email
            </p>
          </a>
          <p className="text-[#A0A2A2] text-center font-medium ">
            Don’t have an account?
            <a
              href="/signup"
              className="text-[#025195] font-semibold text-lg cursor-pointer"
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

export default Login;
