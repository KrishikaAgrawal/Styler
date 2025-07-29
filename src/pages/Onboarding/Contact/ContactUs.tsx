import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactHero from "../../../assets/Contact/ContactHero.png";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/v1/contact/us`,
        formData
      );

      if (response.status >= 200 && response.status <= 205) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

        // console.log("Message sent successfully!");
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message?: string }>;
        toast.error(
          axiosError.response?.data?.message || "Something went wrong!"
        );
      } else {
        toast.error("An unexpected error occurred!");
      }
    }
  };

  return (
    <div className="font-inter">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Hero Section */}
      <div className="h-screen overflow-hidden relative">
        <img
          src={ContactHero}
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="lg:w-2/3 w-11/12 text-white font-extrabold text-2xl lg:text-4xl text-center">
            Style Chronicles: Your Guide to Fashion Trends and Tips
          </h2>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col lg:flex-row w-full px-5 lg:px-20 gap-8 lg:gap-16 lg:py-28 py-16 items-center">
        {/* Address */}
        <div className="flex flex-col lg:w-1/2 gap-10">
          <div className="flex flex-col">
            <h2 className="text-[#025195] font-Gloock text-3xl">
              We’re here to help you with any queries or concerns
            </h2>
            <p className="text-lg lg:text-xl font-medium">
              We value your privacy—your details are completely safe and
              confidential. Submit your contact information, and our team will
              reach out to you shortly. If you'd like to connect directly, feel
              free to email us at{" "}
              <span className="text-[#025195] font-bold text-base underline">
                info@stylerapp.in
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-extrabold">Address:</h3>
            <p className="text-lg lg:text-xl">
              123 Innovation Park, Suite 456,
              <br />
              Tech Hub Road, Silicon Valley,
              <br />
              California, USA - 98765.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col w-full lg:w-1/2 gap-8">
          {["name", "companyName", "email", "phone", "message"].map((field) => (
            <div key={field} className="flex flex-col w-full gap-4">
              <label htmlFor={field} className="font-semibold pl-2">
                {field === "name"
                  ? "Full Name"
                  : field === "companyName"
                  ? "Company Name"
                  : field === "email"
                  ? "Email *"
                  : field === "phone"
                  ? "Phone Number"
                  : "Message"}
              </label>
              {field === "message" ? (
                <textarea
                  id="message"
                  placeholder="Enter Your Query"
                  required
                  className="w-full border rounded-lg lg:p-4 p-3 border-[#7E8392] bg-[#FCFCFC] h-48 align-text-top"
                  value={formData.message}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  id={field}
                  placeholder={
                    field === "name"
                      ? "Enter Your Full Name"
                      : field === "companyName"
                      ? "Enter Your Company Name"
                      : field === "email"
                      ? "Enter Your Email"
                      : "Phone Number"
                  }
                  required={field === "email"}
                  className="w-full border rounded-lg lg:p-4 p-3 border-[#7E8392] bg-[#FCFCFC]"
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="rounded-[50px] justify-center items-center text-white bg-[#025195] lg:py-4 py-3 lg:text-xl text-lg w-1/2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
