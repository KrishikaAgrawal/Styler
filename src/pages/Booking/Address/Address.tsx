import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";

interface Address {
  type: string;
  Address1: string;
  Address2: string;
  Landmark: string;
  City: string;
  State: string;
  Pincode: string;
  Country: string;
}

interface DisplayAddress {
  type: string;
  address: string;
  landmark: string;
}

const AddressComponent: React.FC = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<DisplayAddress[]>([
    {
      type: "Home",
      address: "1234 Elm Street, Springfield, IL 62704, USA",
      landmark: "Near Central Park",
    },
    {
      type: "Office",
      address: "123467 Elm Street, Springfield, IL 62704, USA",
      landmark: "Opposite Big Mall",
    },
    {
      type: "College",
      address: "12 Elm Street, Springfield, IL 62704, USA",
      landmark: "Next to Library",
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState<DisplayAddress | null>(
    null
  );

  const handleSelectAddress = (type: string) => {
    const selected = addresses.find((addr) => addr.type === type);
    if (selected) {
      setSelectedAddress(selected);
    }
  };

  const handleApply = () => {
    navigate("/InPersonConsultationConfirm", {
      state: { chosenAddress: selectedAddress },
    });
  };

  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState<Address>({
    type: "",
    Address1: "",
    Address2: "",
    Landmark: "",
    City: "",
    State: "",
    Pincode: "",
    Country: "",
  });

  const handleNewAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAddress({
      ...newAddress,
      [e.target.name]: e.target.value,
    });
  };

  const formatAddress = (address: Address) => {
    const { Address1, Address2, City, State, Pincode, Country } = address;
    const parts = [Address1, Address2, City, State, Pincode, Country].filter(
      Boolean
    );
    return parts.join(", ");
  };

  const handleAddNewAddress = () => {
    if (!newAddress.Landmark) {
      alert("Landmark is required");
      return;
    }

    const formattedAddress = formatAddress(newAddress);
    const newAddressWithFormattedAddress = {
      type: newAddress.type,
      address: formattedAddress,
      landmark: newAddress.Landmark,
    };

    setAddresses((prevAddresses) => [
      ...prevAddresses,
      newAddressWithFormattedAddress,
    ]);

    setNewAddress({
      type: "",
      Address1: "",
      Address2: "",
      Landmark: "",
      City: "",
      State: "",
      Pincode: "",
      Country: "",
    });

    setShowForm(false);
  };

  return (
    <div className="px-5 font-inter lg:px-24 mb-20">
      {!showForm ? (
        <>
          <h1 className="text-4xl lg:text-5xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
            Choose Address
          </h1>
          {addresses.map((addr, index) => (
            <div key={index} className="flex w-full flex-col mb-5">
              <div className="flex gap-4 shadow-custom rounded-2xl px-3 lg:px-12 py-3 w-full">
                <div className="flex bg-[#DEF9FF] p-7 rounded-full">
                  <ImHome className="text-[#025195] text-2xl" />
                </div>
                <div className="flex flex-col justify-center w-full">
                  <div className="flex justify-between w-full">
                    <p className="text-lg lg:text-xl font-bold">{addr.type}</p>
                  </div>
                  <p className="text-[#546879] text-xs lg:text-base">
                    Address: {addr.address}
                  </p>
                  {addr.landmark && (
                    <p className="text-[#546879] text-xs lg:text-base">
                      Landmark: {addr.landmark}
                    </p>
                  )}
                </div>
                <input
                  type="radio"
                  name="address"
                  value={addr.type}
                  checked={selectedAddress?.type === addr.type}
                  onChange={() => handleSelectAddress(addr.type)}
                  className="ml-auto"
                />
              </div>
            </div>
          ))}

          <button
            className="border-2 border-[#025195] text-[#025195] py-4 px-4 rounded-full w-full mt-5 font-bold"
            onClick={() => setShowForm(true)}
          >
            Add New Address
          </button>

          <div className="flex justify-center w-full">
            <button
              className="my-10 w-full lg:w-1/2 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 flex"
              onClick={handleApply}
            >
              <p>Apply</p>
            </button>
          </div>
        </>
      ) : (
        <div className="pt-10 lg:px-20 px-1">
          <h2 className="text-4xl lg:text-5xl text-[#025195] font-Gloock mb-8 lg:mb-12 mt-5">
            Set Address
          </h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="type"
              value={newAddress.type}
              onChange={handleNewAddressChange}
              placeholder="Type (e.g., Home, Office,Others)"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            />
            <input
              type="text"
              name="Address1"
              value={newAddress.Address1}
              onChange={handleNewAddressChange}
              placeholder="Address1"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            />
            <input
              type="text"
              name="Address2"
              value={newAddress.Address2}
              onChange={handleNewAddressChange}
              placeholder="Address2"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            />
            <input
              type="text"
              name="Landmark"
              value={newAddress.Landmark}
              onChange={handleNewAddressChange}
              placeholder="Landmark"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            />
            <input
              type="text"
              name="City"
              value={newAddress.City}
              onChange={handleNewAddressChange}
              placeholder="City"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            />
            <input
              type="text"
              name="State"
              value={newAddress.State}
              onChange={handleNewAddressChange}
              placeholder="State"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            />
            <input
              type="text"
              name="Pincode"
              value={newAddress.Pincode}
              onChange={handleNewAddressChange}
              placeholder="Pincode"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            />
            <input
              type="text"
              name="Country"
              value={newAddress.Country}
              onChange={handleNewAddressChange}
              placeholder="Country"
              className="px-4 py-2 w-full rounded-2xl border border-[#EFEEEE] bg-[#FCFCFC] focus:outline-none"
            />
            <button
              onClick={handleAddNewAddress}
              className="my-10 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 flex w-full"
            >
              Set Address
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressComponent;
