import React, { useState } from "react";

import "../../index.css";

import { FaArrowRight } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaCalendar } from "react-icons/fa6";
// import { Dropdown, DropdownProps } from "semantic-ui-react";
import Profile from "../../assets/Login/Profile.png";
import image from "../../assets/Login/image.png";

/* interface CountryOption {
  key: string;
  value: string;
  flag: string;
} */

const Profile1: React.FC = () => {
  // to handle profile image
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // to handle font color of Prefix
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsPlaceholder(event.target.value === "");
  };
  // to handle dob
  const [date, setDate] = useState("");
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  const handleIconClick = () => {
    const dateInput = document.getElementById("customDateInput");
    if (dateInput) {
      dateInput.click();
    }
  };
  // to handle ph no.
  /*   const [countryCode, setCountryCode] = useState<string>("+1");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const options: CountryOption[] = [
    { key: "us", value: "+1", flag: "us" },
    { key: "in", value: "+91", flag: "in" },
    { key: "gb", value: "+44", flag: "gb" },
    { key: "au", value: "+61", flag: "au" },
    { key: "jp", value: "+81", flag: "jp" },
  ];
  const handleCountryCodeChange = (data: DropdownProps) => {
    setCountryCode(data.value as string);
  }; */

  // to handle font color of Gender
  const [isPlaceholderGender, setIsPlaceholderGender] = useState(true);
  const handleSelectChangeGender = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setIsPlaceholderGender(event.target.value === "");
  };

  return (
    <div className=" md:flex justify-center items-center md:h-screen bg-[#F4F0F0] ">
      <div className="flex flex-col h-screen md:h-fit p-5 lg:w-2/3 md:flex-row bg-white gap-5 lg:gap-8 lg:border md:rounded-2xl lg:shadow-2xl ">
        {/* Page image */}
        <div className="flex flex-col   ">
          <div className="flex gap-4 lg:pb-5 items-center">
            <a href="/Signup">
              <FaArrowRight className="text-[#025195] bg-[#DEF9FF] rounded-full p-2 h-7 w-7 transform rotate-180" />
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
        <div className="flex flex-col lg:px-5 justify-center items-center md:w-2/3 ">
          {/* profile image */}
          <div className="flex justify-center items-center mb-5">
            <label className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer "
              />
              <div
                className={`w-28 h-28 bg-[#F5F5F5] rounded-full flex justify-center items-center overflow-hidden ${
                  selectedImage ? "border-2 border-gray-300" : ""
                }`}
                style={{
                  backgroundImage: `url(${selectedImage || image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!selectedImage && (
                  <span className="text-gray-400 text-2xl">+</span>
                )}
              </div>
            </label>
          </div>
          <div className="flex flex-col w-full gap-3">
            {/* Prefix */}
            <select
              className={`pl-4 pr-10 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none  ${
                isPlaceholder
                  ? "custom-select-placeholder"
                  : "custom-select-option"
              }`}
              defaultValue=""
              onChange={handleSelectChange}
            >
              <option value="" disabled hidden>
                Prefix
              </option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
            </select>
            {/* Full Name */}
            <input
              type="text"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
              placeholder="Full Name"
            />
            {/* Email */}
            <div className="relative flex items-center w-full">
              <IoMdMail className="absolute right-3 text-gray-400 " />
              <input
                type="email"
                className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
                placeholder="Email"
              />
            </div>
            {/* DOB */}
            <div className="relative flex items-center w-full">
              <FaCalendar
                className="absolute right-3 text-gray-400 cursor-pointer"
                onClick={handleIconClick}
              />
              <input
                type="text"
                id="customDateInput"
                className="pl-4 pr-2 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
                placeholder="Date of Birth"
                value={date}
                onChange={handleDateChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
            {/* Ph. No. */}
            <div className="flex items-center border border-[#EFEEEE] bg-[#FCFCFC] rounded-2xl">
              {/*               <Dropdown
                selection
                options={options}
                value={countryCode}
                onChange={handleCountryCodeChange}
                renderLabel={(labelProps) => (
                  <img
                    src={`https://react.semantic-ui.com/images/flags/${labelProps.flag}.png`}
                    alt={`${labelProps.flag} flag`}
                    className="ui mini flag "
                  />
                )}
              /> */}
              <input
                type="tel"
                // value={phoneNumber}
                // onChange={(event) => setPhoneNumber(event.target.value)}
                className="px-4 py-2 w-full rounded-r-2xl bg-transparent focus:outline-none"
                placeholder="Phone Number"
              />
            </div>
            {/* Gender */}
            <select
              className={`pl-4 pr-10 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none  ${
                isPlaceholderGender
                  ? "custom-select-placeholder"
                  : "custom-select-option"
              }`}
              defaultValue=""
              onChange={handleSelectChangeGender}
            >
              <option value="" disabled hidden>
                Gender
              </option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <a href="/Profile2" className="w-full">
            <button className="flex p-4 mt-10 items-center justify-center w-full bg-[#025195] gap-4 rounded-full">
              <p className=" font-inter font-semibold text-white">Continue</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
