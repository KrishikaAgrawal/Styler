import React from "react";
import notFound from "../../assets/Services/notFound.png";

const ItemNotFound: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-5 md:px-12 font-inter pb-60 ">
      <img src={notFound} alt="" className="" />
      <p className=" text-[#025195] font-bold text-3xl lg:text-4xl mt-10 mb-4">
        Not Found!
      </p>
      <p className="text-[#025195] font-extrabold lg:text-2xl text-center text-sm">
        Oops!{" "}
        <span className="text-[#546879] font-medium">
          {" "}
          The searched product is not found
        </span>
      </p>
    </div>
  );
};

export default ItemNotFound;
