import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import pic1 from "../../../assets/Services/services/pic1.png";
import pic2 from "../../../assets/Services/services/pic2.png";
import pic3 from "../../../assets/Services/services/pic3.png";
import pic4 from "../../../assets/Services/services/pic4.png";

import { IoIosArrowDown } from "react-icons/io";

const Services: React.FC = () => {
  interface Item {
    img: string;
    title: string;
    cost: string;
  }
  interface SubCategory {
    [key: string]: Item[];
  }
  interface Category {
    [key: string]: SubCategory[];
  }

  const data: Category[] = [
    {
      "Luxury Custom Apparel": [
        {
          "Bespoke Couture Gowns": [
            {
              img: pic1,
              title: "Elegant Bridal Gown",
              cost: "₹25,000",
            },
            {
              img: pic2,
              title: "Red Carpet Evening Gown",
              cost: "₹18,000",
            },
            {
              img: pic3,
              title: "Embellished Mermaid Gown",
              cost: "₹22,500",
            },
            {
              img: pic4,
              title: "Traditional Wedding Lehenga Gown",
              cost: "₹28,000",
            },
          ],
        },
        {
          "Bridal Couture": [
            {
              img: pic1,
              title: "Elegant Bridal Gown",
              cost: "₹25,000",
            },
            {
              img: pic2,
              title: "Red Carpet Evening Gown",
              cost: "₹18,000",
            },
            {
              img: pic3,
              title: "Embellished Mermaid Gown",
              cost: "₹22,500",
            },
            {
              img: pic4,
              title: "Traditional Wedding Lehenga Gown",
              cost: "₹28,000",
            },
          ],
        },
        {
          "Evening Wear": [
            {
              img: pic1,
              title: "Elegant Bridal Gown",
              cost: "₹25,000",
            },
            {
              img: pic2,
              title: "Red Carpet Evening Gown",
              cost: "₹18,000",
            },
            {
              img: pic3,
              title: "Embellished Mermaid Gown",
              cost: "₹22,500",
            },
            {
              img: pic4,
              title: "Traditional Wedding Lehenga Gown",
              cost: "₹28,000",
            },
          ],
        },
      ],
    },
    {
      "Ready-to-Wear Collection": [
        {
          "Bespoke Couture Gowns": [
            {
              img: pic1,
              title: "Elegant Bridal Gown",
              cost: "₹25,000",
            },
            {
              img: pic2,
              title: "Red Carpet Evening Gown",
              cost: "₹18,000",
            },
            {
              img: pic3,
              title: "Embellished Mermaid Gown",
              cost: "₹22,500",
            },
            {
              img: pic4,
              title: "Traditional Wedding Lehenga Gown",
              cost: "₹28,000",
            },
          ],
        },
        {
          "Bridal Couture": [
            {
              img: pic1,
              title: "Elegant Bridal Gown",
              cost: "₹25,000",
            },
            {
              img: pic2,
              title: "Red Carpet Evening Gown",
              cost: "₹18,000",
            },
            {
              img: pic3,
              title: "Embellished Mermaid Gown",
              cost: "₹22,500",
            },
            {
              img: pic4,
              title: "Traditional Wedding Lehenga Gown",
              cost: "₹28,000",
            },
          ],
        },
        {
          "Evening Wear": [
            {
              img: pic1,
              title: "Elegant Bridal Gown",
              cost: "₹25,000",
            },
            {
              img: pic2,
              title: "Red Carpet Evening Gown",
              cost: "₹18,000",
            },
            {
              img: pic3,
              title: "Embellished Mermaid Gown",
              cost: "₹22,500",
            },
            {
              img: pic4,
              title: "Traditional Wedding Lehenga Gown",
              cost: "₹28,000",
            },
          ],
        },
      ],
    },
    {
      "Personal Styling & Wardrobe Consultation": [
        {
          "Bespoke Couture Gowns": [
            {
              img: pic1,
              title: "Elegant Bridal Gown",
              cost: "₹25,000",
            },
            {
              img: pic2,
              title: "Red Carpet Evening Gown",
              cost: "₹18,000",
            },
            {
              img: pic3,
              title: "Embellished Mermaid Gown",
              cost: "₹22,500",
            },
            {
              img: pic4,
              title: "Traditional Wedding Lehenga Gown",
              cost: "₹28,000",
            },
          ],
        },
        {
          "Bridal Couture": [
            {
              img: pic1,
              title: "Elegant Bridal Gown",
              cost: "₹25,000",
            },
            {
              img: pic2,
              title: "Red Carpet Evening Gown",
              cost: "₹18,000",
            },
            {
              img: pic3,
              title: "Embellished Mermaid Gown",
              cost: "₹22,500",
            },
            {
              img: pic4,
              title: "Traditional Wedding Lehenga Gown",
              cost: "₹28,000",
            },
          ],
        },
        {
          "Evening Wear": [
            {
              img: pic1,
              title: "Elegant Bridal Gown",
              cost: "₹25,000",
            },
            {
              img: pic2,
              title: "Red Carpet Evening Gown",
              cost: "₹18,000",
            },
            {
              img: pic3,
              title: "Embellished Mermaid Gown",
              cost: "₹22,500",
            },
            {
              img: pic4,
              title: "Traditional Wedding Lehenga Gown",
              cost: "₹28,000",
            },
          ],
        },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenSubCategory(null); // Close subcategories when switching categories
  };

  const handleSubCategoryClick = (subCategory: string) => {
    setOpenSubCategory(openSubCategory === subCategory ? null : subCategory);
  };

  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate("/Booking");
  };

  return (
    <div>
      <h1 className="text-[#025195] font-Gloock text-2xl lg:text-4xl my-4 lg:my-8">
        Services
      </h1>

      {data.map((category, index) => {
        const categoryName = Object.keys(category)[0];
        const subCategories = category[categoryName];

        return (
          // main category
          <div key={index} className="mb-6 font-inter">
            <div
              className={`p-4 flex justify-between items-center cursor-pointer transition duration-1000 rounded-xl ${
                openCategory === categoryName ? "bg-[#025195]" : "bg-[#FCFCFC]"
              }`}
              onClick={() => handleCategoryClick(categoryName)}
            >
              <p
                className={`font-medium text-xs lg:text-xl ${
                  openCategory === categoryName
                    ? "text-white"
                    : "text-[#546879]"
                }`}
              >
                {categoryName}
              </p>
              <div className=" flex gap-6 items-center">
                <p
                  className={`font-semibold text-xs lg:text-xl ${
                    openCategory === categoryName ? "text-white" : "text-black"
                  }`}
                >
                  {subCategories.length} Types
                </p>
                <IoIosArrowDown
                  className={`text-xl transition-transform duration-1000 ${
                    openCategory === categoryName
                      ? "text-white transform rotate-180"
                      : "text-[#025195]"
                  }`}
                />
              </div>
            </div>

            {/* sub category */}
            {openCategory === categoryName && (
              <div className="mt-2 ">
                {subCategories.map((subCategory, subIndex) => {
                  const subCategoryName = Object.keys(subCategory)[0];
                  const items = subCategory[subCategoryName];

                  return (
                    <div
                      key={subIndex}
                      className="mb-2 rounded-xl border-2 border-[#025195]"
                    >
                      <div
                        className=" p-4 flex justify-between items-center cursor-pointer "
                        onClick={() => handleSubCategoryClick(subCategoryName)}
                      >
                        <p className="font-semibold  text-xs lg:text-xl">
                          {subCategoryName}
                        </p>
                        <IoIosArrowDown
                          className={`text-xl text-[#025195] transition-transform duration-1000 ${
                            openSubCategory === subCategoryName
                              ? " transform rotate-180"
                              : ""
                          }`}
                        />
                      </div>

                      {/* cards */}
                      {openSubCategory === subCategoryName && (
                        <div className=" flex gap-1 w-full px-4 pb-4 lg:gap-7">
                          {items.map((item, itemIndex) => (
                            <div key={itemIndex} className="lg:w-40 w-20">
                              <img
                                src={item.img}
                                alt={item.title}
                                className=" h-40 w-full object-cover rounded-lg"
                              />
                              <h3 className="text-[8px] mt-2 font-medium text-[#546879] lg:text-sm ">
                                {item.title}
                              </h3>
                              <p className="text-[10px] font-extrabold text-[#025195] lg:text-sm">
                                {item.cost}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <button
        onClick={navigateToBooking}
        className="my-10 rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-4 py-3 lg:text-xl text-lg gap-2 w-full flex"
      >
        <p className="">Book Now</p>
      </button>
    </div>
  );
};

export default Services;
