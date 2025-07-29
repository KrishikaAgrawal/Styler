import React from "react";
import useFetch from "@/Hooks/useFetch";
import Loading from "@/pages/Loading/Loading";

import address from "../../../assets/Services/address.png";
import Review from "../../../assets/Services/Review1.png";
// import Review2 from "../../../assets/Services/Review2.png";
// import reviewImg1 from "../../../assets/Services/reviewImg1.png";
// import reviewImg2 from "../../../assets/Services/reviewImg2.png";

import { IoMdStar } from "react-icons/io";
// import { IoMdStarHalf } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";

interface Location {
  lat: number;
  lng: number;
}

interface Partner {
  address1: string;
  address2: string;
  phone: string;
  location: Location;
}

interface User {
  _id: string;
  fullname: string;
}

interface UserReview {
  _id: string;
  rating: string;
  reviewMessage: string;
  userId: User;
  partnerId: Partner; // Update to fetch partner details
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface UserReviewsResponse {
  message: string;
  userReview: UserReview[];
}

interface ComponentProps {
  id: string | undefined;
}

const AboutUs: React.FC<ComponentProps> = ({ id }) => {
  const { data, loading, error } = useFetch<UserReviewsResponse>(
    `get/user/review/${id}`
  );
  const partner = data?.userReview[0]?.partnerId;
  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="font-inter">
      {/* contact */}
      <div className="flex justify-between mt-6 mb-4 lg:mt-8">
        <h2 className="font-bold text-xl lg:text-3xl">Contact</h2>
        <p className="font-bold text-xl lg:text-3xl text-[#025195]">
          {partner?.phone || "N/A"}
        </p>
      </div>
      {/* Address */}
      <div className="flex flex-col">
        <h2 className="font-bold text-xl lg:text-3xl">Address</h2>
        <p className="font-medium lg:text-lg text-[#025195]">
          {partner?.address1}, {partner?.address2 || ""}
        </p>
        <img
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${partner?.location.lat},${partner?.location.lng}`,
              "_blank"
            )
          }
          src={address}
          alt=""
          className="rounded-2xl cursor-pointer h-[250px] object-cover mt-4 lg:h-[400px]"
        />
      </div>

      {/* Review Header */}
      <h1 className="font-bold text-xl lg:text-3xl text-[#025195] mt-8 mb-5 lg:mt-10">
        Reviews
      </h1>

      {/* Render Reviews Dynamically */}
      {data?.userReview.map((review) => (
        <div key={review._id} className="flex flex-col w-full gap-2 mb-5">
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-2 lg:gap-6">
              <img src={Review} alt="" className="w-14 lg:w-28" />
              <div className="flex flex-col justify-center">
                <h3 className="font-bold lg:text-xl text-xs">
                  {review.userId.fullname}
                </h3>
                <div className="flex">
                  {[...Array(parseInt(review.rating))].map((_, i) => (
                    <IoMdStar key={i} className="text-yellow-400 lg:text-lg" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs lg:text-xl font-semibold text-[#025195]">
              {new Date(review.createdAt).toDateString()}
            </p>
          </div>
          <p className="text-[#8F959E] text-xs lg:text-base">
            {review.reviewMessage}
          </p>
        </div>
      ))}

      {/* Get Directions Button */}
      {partner?.location && (
        <button
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${partner.location.lat},${partner.location.lng}`,
              "_blank"
            )
          }
          className="my-10 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex"
        >
          <IoPaperPlaneOutline />
          <p>Get Directions</p>
        </button>
      )}
    </div>
  );
};

export default AboutUs;
