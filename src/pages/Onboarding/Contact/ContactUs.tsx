import React from "react";
import ContactHero from "../../../assets/Contact/ContactHero.png";

const ContactUs: React.FC = () => {
  return (
    <div className="font-inter">
      {/* Hero section */}
      <div className="h-screen overflow-hidden relative">
        <img
          src={ContactHero}
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className=" lg:w-2/3 w-11/12 text-white font-extrabold text-2xl lg:text-4xl text-center">
            Style Chronicles: Your Guide to Fashion Trends and Tips
          </h2>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col lg:flex-row w-full px-5 lg:px-20 gap-8 lg:gap-16 lg:py-28 py-16 items-center">
        {/* address */}
        <div className="flex flex-col lg:w-1/2 gap-10">
          <div className="flex flex-col">
            <h2 className="text-[#025195] font-Gloock text-3xl">
              We’re here to help you with any queries or concerns
            </h2>
            <p className=" text-lg lg:text-xl font-medium">
              We value your privacy——your details are completely safe and
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
            <p className=" text-lg lg:text-xl">
              123 Innovation Park, Suite 456,
              <br />
              Tech Hub Road, Silicon Valley,
              <br />
              California, USA - 98765.
            </p>
          </div>
        </div>

        {/* contact form */}
        <div className="flex flex-col w-full lg:w-1/2 gap-8">
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="name" className="font-semibold pl-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Full Name"
              className="w-full border rounded-lg lg:p-4 p-3 border-[#7E8392] bg-[#FCFCFC]"
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="Company" className="font-semibold pl-2">
              Company Name
            </label>
            <input
              type="text"
              id="Company"
              placeholder="Enter your Company Name"
              className="w-full border rounded-lg lg:p-4 p-3 border-[#7E8392] bg-[#FCFCFC]"
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="Email" className="font-semibold pl-2">
              Email *
            </label>
            <input
              type="email"
              id="Email"
              placeholder="Enter Your Email"
              required
              className="w-full border rounded-lg lg:p-4 p-3 border-[#7E8392] bg-[#FCFCFC]"
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="Phone" className="font-semibold pl-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="Phone"
              placeholder="Phone Number"
              className="w-full border rounded-lg lg:p-4 p-3 border-[#7E8392] bg-[#FCFCFC]"
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <label htmlFor="Message" className="font-semibold pl-2">
              Message
            </label>
            <textarea
              id="Message"
              placeholder="Enter Your Query"
              required
              className="w-full border rounded-lg lg:p-4 p-3 border-[#7E8392] bg-[#FCFCFC] h-48 align-text-top"
              name=""
            ></textarea>
          </div>
          <button className="rounded-[50px] justify-center items-center text-white bg-[#025195] lg:py-4 py-3 lg:text-xl text-lg w-1/2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
