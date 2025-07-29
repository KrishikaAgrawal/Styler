import "../../index.css";
import React, { useState } from "react";

import Profile from "../../assets/Login/Profile.png";

import { FaArrowRight } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const ForgotPassword: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className=" md:flex justify-center items-center lg:h-screen bg-[#F4F0F0] font-inter ">
      <div className="flex flex-col h-screen md:h-fit p-5 md:px-5 lg:w-2/3 md:flex-row bg-white gap-8  lg:border md:rounded-2xl lg:shadow-2xl ">
        <div className="flex flex-col  ">
          {/*Forgot password  */}
          <div className="flex gap-4 pb-5 items-center">
            <a href="/Signin">
              <FaArrowRight className="text-[#025195] bg-[#DEF9FF] rounded-full p-2 h-7 w-7 transform rotate-180" />
            </a>
            <p className="text-2xl font-bold">Forgot Password</p>
          </div>

          {/* Page image */}
          <div className="md:flex flex-col h-[480px] hidden ">
            <img
              src={Profile}
              alt=""
              className="md:rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:w-2/3 gap-3">
          <p className="text-[#A0A2A2] text-center py-6  text-lg ">
            Select which contact details should we use to reset your password
          </p>

          <div className="w-full gap-3 flex flex-col">
            <div
              className={`flex gap-6 items-center border-2 rounded-2xl w-full justify-center p-6 ${
                selectedOption === "sms" ? "border-[#025195]" : ""
              }`}
              onClick={() => handleSelect("sms")}
            >
              <AiOutlineMessage className="text-[#025195] text-lg rounded-full w-16 h-16 p-3 bg-[#DEF9FF]" />
              <div className="flex flex-col ">
                <p className="text-[#A0A2A2] text-xs">via SMS</p>
                <p className="text-lg font-bold">+91 111 *******99</p>
              </div>
            </div>
            <div
              className={`flex gap-6 items-center border-2 rounded-2xl w-full justify-center p-6 ${
                selectedOption === "email" ? "border-[#025195]" : ""
              }`}
              onClick={() => handleSelect("email")}
            >
              <IoMdMail className="text-[#025195] text-lg rounded-full w-16 h-16 p-3 bg-[#DEF9FF]" />
              <div className="flex flex-col ">
                <p className="text-[#A0A2A2] text-xs">via Email</p>
                <p className="text-lg font-bold">neha****gh@gmail.com</p>
              </div>
            </div>
          </div>

          <a href="/ForgotPwOtp" className="w-full">
            <button className="flex p-4 mt-8 items-center justify-center w-full bg-[#025195] gap-4 rounded-full">
              <p className=" font-inter font-semibold text-white">Continue</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

// import "../../index.css";
// import React, { useState } from "react";
// import Profile from "../../assets/Login/Profile.png";
// import { FaArrowRight } from "react-icons/fa";
// import { AiOutlineMessage } from "react-icons/ai";
// import { IoMdMail } from "react-icons/io";
// import useFetch from "@/Hooks/useFetch";

// const ForgotPassword: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);

//   // Fetch user profile data
//   const { data, loading, error } = useFetch<{
//     user: { phone: string; email: string };
//   }>("get/user/profile");

//   // Mask phone number and email
//   const maskPhone = (phone: string) =>
//     phone.replace(/(\d{2})\d{6}(\d{2})/, "$1******$2");
//   const maskEmail = (email: string) => {
//     const [name, domain] = email.split("@");
//     return name.slice(0, 2) + "****" + "@" + domain;
//   };

//   const handleSelect = (option: string) => setSelectedOption(option);

//   return (
//     <div className="md:flex justify-center items-center lg:h-screen bg-[#F4F0F0] font-inter">
//       <div className="flex flex-col h-screen md:h-fit p-5 md:px-5 lg:w-2/3 md:flex-row bg-white gap-8 lg:border md:rounded-2xl lg:shadow-2xl">
//         <div className="flex flex-col">
//           {/* Forgot password */}
//           <div className="flex gap-4 pb-5 items-center">
//             <a href="/Signin">
//               <FaArrowRight className="text-[#025195] bg-[#DEF9FF] rounded-full p-2 h-7 w-7 transform rotate-180" />
//             </a>
//             <p className="text-2xl font-bold">Forgot Password</p>
//           </div>

//           {/* Page image */}
//           <div className="md:flex flex-col h-[480px] hidden">
//             <img
//               src={Profile}
//               alt="Profile"
//               className="md:rounded-2xl w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center md:w-2/3 gap-3">
//           <p className="text-[#A0A2A2] text-center py-6 text-lg">
//             Select which contact details should we use to reset your password
//           </p>

//           {loading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p className="text-red-500">Error: {error}</p>
//           ) : (
//             <div className="w-full gap-3 flex flex-col">
//               <div
//                 className={`flex gap-6 items-center border-2 rounded-2xl w-full justify-center p-6 ${
//                   selectedOption === "sms" ? "border-[#025195]" : ""
//                 }`}
//                 onClick={() => handleSelect("sms")}
//               >
//                 <AiOutlineMessage className="text-[#025195] text-lg rounded-full w-16 h-16 p-3 bg-[#DEF9FF]" />
//                 <div className="flex flex-col">
//                   <p className="text-[#A0A2A2] text-xs">via SMS</p>
//                   <p className="text-lg font-bold">
//                     {maskPhone(data?.user.phone || "")}
//                   </p>
//                 </div>
//               </div>
//               <div
//                 className={`flex gap-6 items-center border-2 rounded-2xl w-full justify-center p-6 ${
//                   selectedOption === "email" ? "border-[#025195]" : ""
//                 }`}
//                 onClick={() => handleSelect("email")}
//               >
//                 <IoMdMail className="text-[#025195] text-lg rounded-full w-16 h-16 p-3 bg-[#DEF9FF]" />
//                 <div className="flex flex-col">
//                   <p className="text-[#A0A2A2] text-xs">via Email</p>
//                   <p className="text-lg font-bold">
//                     {maskEmail(data?.user.email || "")}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           <a href="/ForgotPwOtp" className="w-full">
//             <button
//               className="flex p-4 mt-8 items-center justify-center w-full bg-[#025195] gap-4 rounded-full"
//               disabled={!selectedOption}
//             >
//               <p className="font-inter font-semibold text-white">Continue</p>
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
