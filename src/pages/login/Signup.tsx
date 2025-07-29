import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { IoMdMail, IoIosLock, IoMdEyeOff, IoMdEye } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

import SignupImg from "../../assets/Login/signupImg.png";
import instagram from "../../assets/Login/instagram.png";
import facebook from "../../assets/Login/facebook.png";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Signup: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  // handle password
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // post user credentials
    try {
      const response = await axios.post(`${SERVER_URL}/api/v1/user/signup`, {
        fullname,
        email,
        password,
        confirmPassword,
      });

      if (response.status >= 200 && response.status <= 205) {
        console.log(response.data.message);
        setSuccessMessage(response.data.message);
        navigate("/Otp");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Something went wrong.");
      } else {
        setError("An error occurred.");
      }
    }
  };

  return (
    <div className="md:flex justify-center items-center lg:h-screen bg-[#F4F0F0]">
      <div className="flex flex-col md:h-fit md:px-5 lg:w-2/3 md:flex-row-reverse bg-white gap-4 md:gap-8 lg:border md:rounded-2xl lg:shadow-2xl items-center">
        <div className="flex flex-col md:py-5 w-full md:w-1/2 h-[200px] md:h-[580px]">
          <img
            src={SignupImg}
            alt="Signup"
            className="md:rounded-2xl w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col p-5 justify-center items-center md:w-1/2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[#025195] text-white rounded-full text-5xl font-Gloock w-16 h-16 flex justify-center items-center">
              S
            </div>
            <div className="text-5xl font-Gloock">Styler.</div>
          </div>

          <h1 className="text-3xl mt-2 mb-6 font-Gloock text-center text-[#025195]">
            Create Your Account
          </h1>

          {/* input */}
          <div className="flex flex-col w-full gap-3">
            <div className="relative flex items-center w-full">
              <BsFillPersonFill className="absolute left-3 text-gray-400" />
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
                placeholder="Full Name"
              />
            </div>
            <div className="relative flex items-center w-full">
              <IoMdMail className="absolute left-3 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="relative flex items-center w-full">
              <IoIosLock className="absolute left-3 text-gray-400" />
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <div className="relative flex items-center w-full">
              <IoIosLock className="absolute left-3 text-gray-400" />
              <input
                type={passwordVisible ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-10 pr-10 py-2 rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none w-full"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="my-2">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {successMessage && (
              <p className="text-green-500 text-sm">{successMessage}</p>
            )}
          </div>
          <button
            onClick={handleSignUp}
            className="flex p-3 items-center justify-center w-full bg-[#025195] gap-4 rounded-full "
          >
            <p className="font-inter font-semibold text-white">Sign up</p>
          </button>

          <div className="relative flex items-center mt-3 mb-2 w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EFEEEE] bottom-5"></div>
            </div>
            <div className="relative px-4 text-xs bg-white font-semibold mx-auto">
              or continue with
            </div>
          </div>

          {/* other options */}
          <div className="flex flex-row justify-center gap-8">
            <button className="border rounded-2xl border-[#EFEEEE] p-2">
              <FcGoogle className="text-lg" />
            </button>
            <button className="border rounded-2xl border-[#EFEEEE] p-2">
              <img src={facebook} className="w-4 h-fit" />
            </button>
            <button className="border rounded-2xl border-[#EFEEEE] p-2">
              <img src={instagram} className="w-4 h-fit" />
            </button>
          </div>

          {/* sign in option */}
          <p className="text-[#A0A2A2] text-center font-medium pt-1">
            Already have an account?
            <a
              href="/Signin"
              className="text-[#025195] font-semibold text-lg cursor-pointer"
            >
              {" "}
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
