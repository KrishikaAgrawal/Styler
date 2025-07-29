import "../../index.css";
import Profile from "../../assets/Login/Profile.png";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Profile2: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state || {}; // Get previous data from Profile1

  const token = localStorage.getItem("authToken"); // Retrieve token from localStorage

  // Address form state
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!token) {
      setError("Unauthorized: No token found.");
      return;
    }

    setLoading(true);
    setError("");

    const completeData = {
      ...userData, // Merge Profile1 data
      address1,
      address2,
      landmark,
      city,
      state,
      pincode,
      country,
    };

    try {
      const response = await axios.put(
        `${SERVER_URL}/api/v1/complete/user/profile`,
        completeData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Profile updated successfully:", response.data);
      // localStorage.setItem("profileCompleted", "true");
      navigate("/Dashboard"); // Navigate with full data
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Something went wrong.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:flex justify-center items-center lg:h-screen bg-[#F4F0F0]">
      <div className="flex flex-col h-screen md:h-fit p-5 lg:w-2/3  bg-white lg:border md:rounded-2xl lg:shadow-2xl gap-5 lg:gap-0 ">
        <div className="flex flex-row justify-between w-full ">
          <div className="flex gap-4 lg:pb-5 items-center">
            <a href="/Profile1">
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

          {/* Form */}
          <div className="flex flex-col lg:px-5 justify-center items-center md:w-2/3 w-full gap-3">
            <input
              type="text"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
              placeholder="Address 1"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
            <input
              type="text"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
              placeholder="Address 2"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
            <input
              type="text"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
              placeholder="Landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
            <input
              type="text"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <input
              type="text"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            {error && <p className="text-red-500">{error}</p>}

            {/* Continue button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex p-4 mt-8 items-center justify-center w-full bg-[#025195] gap-4 rounded-full"
            >
              {loading ? (
                <p className="font-inter font-semibold text-white">Saving...</p>
              ) : (
                <p className="font-inter font-semibold text-white">Continue</p>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
