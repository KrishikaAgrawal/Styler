import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useUserContext from "@/context/useUserContext";

import "../../index.css";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

import { FcGoogle } from "react-icons/fc";
import { IoMdMail, IoIosLock, IoMdEyeOff, IoMdEye } from "react-icons/io";

import SignupImg from "../../assets/Login/signupImg.png";
import instagram from "../../assets/Login/instagram.png";
import facebook from "../../assets/Login/facebook.png";

const Signin: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setIsRegistered } = useUserContext();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignin = async () => {
    setLoading(true);
    setError(null);

    try {
      // Step 1: User Login
      const response = await axios.post(`${SERVER_URL}/api/v1/user/login`, {
        email,
        password,
      });

      const token = response.data.token;

      if (token) {
        localStorage.setItem("authToken", token);
        console.log("Token stored:", token);
        setIsRegistered(true);

        // Step 2: Fetch User Profile
        const profileResponse = await axios.get(
          `${SERVER_URL}/api/v1/get/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("Profile API Response:", profileResponse.data);

        // Extract user profile details
        const user = profileResponse.data.user;
        const phone = user?.phone || "";

        // Step 3: Store in LocalStorage & Redirect
        localStorage.setItem("userProfile", JSON.stringify(user));

        if (!phone.trim()) {
          navigate("/Profile1"); // If phone is empty, go to profile completion
        } else {
          navigate("/dashboard"); // Otherwise, go to dashboard
        }
      } else {
        setError("Invalid response from server.");
      }
    } catch (err) {
      setError("Invalid email or password.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:flex justify-center items-center lg:h-screen bg-[#F4F0F0]">
      <div className="flex flex-col md:h-fit md:px-10 lg:w-2/3 md:flex-row-reverse bg-white gap-4 md:gap-8 lg:border md:rounded-2xl lg:shadow-2xl items-center">
        {/* Page Image */}
        <div className="flex flex-col md:py-10 w-full md:w-1/2 h-[200px] md:h-[580px]">
          <img
            src={SignupImg}
            alt=""
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
            Login to Your Account
          </h1>

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Input Fields */}
          <div className="flex flex-col w-full gap-3">
            <div className="relative flex items-center w-full">
              <IoMdMail className="absolute left-3 text-gray-400" />
              <input
                type="email"
                className="pl-10 pr-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative flex items-center w-full">
              <IoIosLock className="absolute left-3 text-gray-400" />
              <input
                type={passwordVisible ? "text" : "password"}
                className="pl-10 pr-10 py-2 rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none w-full"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Remember Me */}
          <div className="flex items-center my-4">
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

          {/* Sign-in Button */}
          <button
            onClick={handleSignin}
            disabled={loading}
            className="flex p-4 items-center justify-center w-full bg-[#025195] gap-4 rounded-full"
          >
            {loading ? (
              <p className="font-inter font-semibold text-white">
                Signing in...
              </p>
            ) : (
              <p className="font-inter font-semibold text-white">Sign in</p>
            )}
          </button>

          <a
            href="/ForgotPassword"
            className="text-[#025195] font-inter font-semibold text-sm mt-4"
          >
            Forgot the password?
          </a>

          {/* Or Continue With */}
          <div className="relative flex items-center my-2 w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EFEEEE] bottom-5"></div>
            </div>
            <div className="relative px-4 text-xs bg-white font-semibold mx-auto">
              or continue with
            </div>
          </div>

          {/* Social Login */}
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

          {/* Signup Redirect */}
          <p className="text-[#A0A2A2] text-center font-medium pt-2">
            Don’t have an account?
            <a
              href="/SignUp"
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

export default Signin;
