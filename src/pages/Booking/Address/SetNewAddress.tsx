import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SetNewAddress: React.FC = () => {
  const [newAddress, setNewAddress] = useState({ type: "", address: "" });
  const navigate = useNavigate();

  const handleNewAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAddress({
      ...newAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSetAddress = () => {
    const addresses = JSON.parse(localStorage.getItem("addresses") || "[]");
    localStorage.setItem(
      "addresses",
      JSON.stringify([...addresses, newAddress])
    );
    navigate("/address");
  };

  return (
    <div className="px-5 font-inter lg:px-24">
      <h1 className="text-4xl lg:text-5xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
        Set New Address
      </h1>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Add New Address</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="type"
            value={newAddress.type}
            onChange={handleNewAddressChange}
            placeholder="Type (e.g., Home, Office)"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            name="address"
            value={newAddress.address}
            onChange={handleNewAddressChange}
            placeholder="Address"
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            onClick={handleSetAddress}
            className="bg-[#025195] text-white py-2 px-4 rounded-md"
          >
            Set Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetNewAddress;
