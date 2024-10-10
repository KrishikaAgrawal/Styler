import React from "react";

const PartnerWithUs: React.FC = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="flex flex-col lg:flex-row gap-16 py-10 px-5 md:px-10 lg:py-16 lg:px-14 bg-[#F4F0F0] w-full">
        <div className="flex flex-col lg:w-1/2 gap-8 lg:gap-14">
          <p className="font-Gloock text-[#5A3F2C] text-xl md:text-3xl lg:text-5xl">
            Partner with Styler – Elevate Your Brand, Reach Exclusive Clients,
            and Showcase Your Craft
          </p>
          <p className="text-[#807E7E] font-medium text-xs md:text-base font-inter">
            At Styler, we connect talented designers and tailors with a global
            audience seeking custom, high-quality fashion. As a partner, you’ll
            have the opportunity to showcase your unique designs, grow your
            brand, and collaborate with exclusive clients. Our platform provides
            the tools you need to manage orders, consultations, and custom
            requests seamlessly. Join us and take your fashion business to the
            next level.
          </p>
          <button className=""></button>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
