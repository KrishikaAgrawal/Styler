import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCoupon: React.FC = () => {
  const [couponCode, setCouponCode] = useState(""); // State to store coupon code
  const navigate = useNavigate(); // React Router navigation hook

  const handleApply = () => {
    // Navigate to /Checkout with the coupon code passed as state
    navigate("/Checkout", { state: { couponCode } });
  };

  return (
    <div className="px-5 font-inter lg:px-24">
      <h1 className=" text-4xl lg:text-5xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
        Add coupon
      </h1>

      <h3 className="mb-4 font-semibold">Coupon Code</h3>
      <div className="flex gap-4">
        <input
          type="text"
          className="rounded-lg w-full py-2 px-3 border border-[#546879]"
          placeholder="Enter Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)} // Update state on input change
        />
        <button
          className="font-bold text-[#025195]"
          onClick={handleApply} // Trigger navigation on button click
        >
          APPLY
        </button>
      </div>
    </div>
  );
};

export default AddCoupon;
