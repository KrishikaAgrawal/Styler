import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { FaArrowRight } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaCalendar } from "react-icons/fa6";
// import { Dropdown, DropdownProps } from "semantic-ui-react";
import Profile from "../../assets/Login/Profile.png";
import image from "../../assets/Login/image.png";

const Profile1: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Form state
  const [prefix, setPrefix] = useState("");
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setGender] = useState("");
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleSubmit = () => {
    navigate("/profile2", {
      state: {
        prefix,
        fullname,
        email,
        dob: date,
        phone,
        gender,
        avatar: selectedImage,
      },
    });
  };

  // const [prefix, setPrefix] = useState(localStorage.getItem("prefix") || "");
  // const [fullname, setfullname] = useState(
  //   localStorage.getItem("fullname") || ""
  // );
  // const [email, setEmail] = useState(localStorage.getItem("email") || "");
  // const [date, setDate] = useState(localStorage.getItem("dob") || "");
  // const [phone, setphone] = useState(localStorage.getItem("phone") || "");
  // const [gender, setGender] = useState(localStorage.getItem("gender") || "");

  // const handleSubmit = () => {
  //   localStorage.setItem("prefix", prefix);
  //   localStorage.setItem("fullname", fullname);
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("dob", date);
  //   localStorage.setItem("phone", phone);
  //   localStorage.setItem("gender", gender);
  //   localStorage.setItem("avatar", selectedImage as string);

  //   navigate("/profile2", {
  //     state: {
  //       prefix,
  //       fullname,
  //       email,
  //       dob: date,
  //       phone,
  //       gender,
  //       avatar: selectedImage,
  //     },
  //   });
  // };

  // to handle profile image
  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          // Create a canvas to resize the image
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Set desired width & height (adjust as needed)
          const maxWidth = 300;
          const maxHeight = 300;
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            if (width > height) {
              height *= maxWidth / width;
              width = maxWidth;
            } else {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            // Convert to base64 with lower quality (adjust quality as needed)
            const compressedImage = canvas.toDataURL("image/jpeg", 0.7);
            setSelectedImage(compressedImage);
          }
        };
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
  // const [date, setDate] = useState("");
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  const [isFocused, setIsFocused] = useState(false);

  // to handle font color of Gender
  const [isPlaceholderGender, setIsPlaceholderGender] = useState(true);
  const handleSelectChangeGender = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setIsPlaceholderGender(event.target.value === "");
  };

  return (
    <div className=" md:flex justify-center items-center md:h-screen bg-[#F4F0F0] ">
      <div className="flex flex-col h-screen md:h-fit p-5 lg:w-2/3  bg-white lg:border md:rounded-2xl lg:shadow-2xl gap-5 lg:gap-0 ">
        <div className="flex flex-row justify-between w-full ">
          <div className="flex gap-4 lg:pb-5 items-center">
            <a href="/Signin">
              <FaArrowRight className="text-[#025195] bg-[#DEF9FF] rounded-full p-2 h-7 w-7 transform rotate-180" />
            </a>
            <p className="text-2xl font-bold">Fill Your Profile</p>
          </div>
          <button
            onClick={() => navigate("/Dashboard")}
            className=" text-sm lg:text-lg font-semibold text-[#025195] border border-[#025195] rounded-3xl lg:px-8 px-6"
          >
            Skip
          </button>
        </div>
        <div className="flex gap-5 lg:gap-8 ">
          {/* Page image */}
          <div className="md:flex flex-col h-[500px] hidden ">
            <img
              src={Profile}
              alt=""
              className="md:rounded-2xl w-full h-full object-cover"
            />
          </div>
          {/* form */}
          <div className="flex flex-col lg:px-5 justify-center items-center md:w-2/3 w-full ">
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
                value={prefix}
                onChange={(e) => {
                  handleSelectChange(e);
                  setPrefix(e.target.value);
                }}
              >
                <option value="" disabled hidden>
                  Prefix
                </option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss">Miss</option>
                {/* <option value="Dr">Dr</option>
              <option value="Prof">Prof</option> */}
              </select>
              {/* Full Name */}
              <input
                type="text"
                className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
              />
              {/* Email */}
              <div className="relative flex items-center w-full">
                <IoMdMail className="absolute right-3 text-gray-400 " />
                <input
                  type="email"
                  className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* DOB */}
              <div className="relative flex items-center w-full">
                {!isFocused && (
                  <FaCalendar className="absolute right-3 text-gray-400 cursor-pointer" />
                )}
                <input
                  type="text"
                  id="customDateInput"
                  className="pl-4 pr-2 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
                  placeholder="Date of Birth"
                  value={date}
                  onChange={handleDateChange}
                  onFocus={(e) => {
                    e.target.type = "date";
                    setIsFocused(true);
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
                    setIsFocused(false);
                  }}
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
                  // value={phone}
                  // onChange={(event) => setphone(event.target.value)}
                  className="px-4 py-2 w-full rounded-r-2xl bg-transparent focus:outline-none"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
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
                value={gender}
                onChange={(e) => {
                  handleSelectChangeGender(e);
                  setGender(e.target.value);
                }}
              >
                <option value="" disabled hidden>
                  Gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              className="flex p-4 mt-10 items-center justify-center w-full bg-[#025195] gap-4 rounded-full"
              onClick={handleSubmit}
            >
              <p className=" font-inter font-semibold text-white">Continue</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
