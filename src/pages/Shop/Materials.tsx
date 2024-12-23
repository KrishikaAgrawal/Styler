import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import silk from "../../assets/Shop/silk.png";

import { IoIosStar } from "react-icons/io";

const Materials: React.FC = () => {
  // const navigate = useNavigate();
  // const navigateToMaterial = () => {
  //   navigate("/MaterialDetails");
  // };

  interface Material {
    img: string;
    name: string;
    company: string;
    spec: string;
    discription: string;
    colors: string[];
    price: string;
    rating: string;
    reviews: string;
  }

  // Material Data
  const data2: Material[] = [
    {
      img: silk,
      name: "Silk Satin",
      company: "Luxe Fabrics Boutique",
      spec: "#1 Silk Brand",
      discription:
        "Luxurious, smooth, and lightweight, silk satin is perfect for evening gowns, wedding dresses, and high-end fashion. This fabric has a glossy finish on one side and a matte finish on the other.",
      colors: [
        "#025195",
        "#FDD805",
        "#000000",
        "#071C6D",
        "#0B8AA0",
        "#F0618A",
        "#07E098",
        "#FF9C00",
        "#FFFFFF",
      ],
      price: "$ 45",
      rating: "(4.9/5)",
      reviews: "75",
    },
    {
      img: silk,
      name: "Silk Satin",
      company: "Luxe Fabrics Boutique",
      spec: "#1 Silk Brand",
      discription:
        "Luxurious, smooth, and lightweight, silk satin is perfect for evening gowns, wedding dresses, and high-end fashion. This fabric has a glossy finish on one side and a matte finish on the other.",
      colors: [
        "#025195",
        "#FDD805",
        "#000000",
        "#071C6D",
        "#0B8AA0",
        "#F0618A",
        "#07E098",
        "#FF9C00",
        "#FFFFFF",
      ],
      price: "$ 45",
      rating: "(4.9/5)",
      reviews: "75",
    },
    {
      img: silk,
      name: "Silk Satin",
      company: "Luxe Fabrics Boutique",
      spec: "#1 Silk Brand",
      discription:
        "Luxurious, smooth, and lightweight, silk satin is perfect for evening gowns, wedding dresses, and high-end fashion. This fabric has a glossy finish on one side and a matte finish on the other.",
      colors: [
        "#025195",
        "#FDD805",
        "#000000",
        "#071C6D",
        "#0B8AA0",
        "#F0618A",
        "#07E098",
        "#FF9C00",
        "#FFFFFF",
      ],
      price: "$ 45",
      rating: "(4.9/5)",
      reviews: "75",
    },
    {
      img: silk,
      name: "Silk Satin",
      company: "Luxe Fabrics Boutique",
      spec: "#1 Silk Brand",
      discription:
        "Luxurious, smooth, and lightweight, silk satin is perfect for evening gowns, wedding dresses, and high-end fashion. This fabric has a glossy finish on one side and a matte finish on the other.",
      colors: [
        "#025195",
        "#FDD805",
        "#000000",
        "#071C6D",
        "#0B8AA0",
        "#F0618A",
        "#07E098",
        "#FF9C00",
        "#FFFFFF",
      ],
      price: "$ 45",
      rating: "(4.9/5)",
      reviews: "75",
    },
    {
      img: silk,
      name: "Silk Satin",
      company: "Luxe Fabrics Boutique",
      spec: "#1 Silk Brand",
      discription:
        "Luxurious, smooth, and lightweight, silk satin is perfect for evening gowns, wedding dresses, and high-end fashion. This fabric has a glossy finish on one side and a matte finish on the other.",
      colors: [
        "#025195",
        "#FDD805",
        "#000000",
        "#071C6D",
        "#0B8AA0",
        "#F0618A",
        "#07E098",
        "#FF9C00",
        "#FFFFFF",
      ],
      price: "$ 45",
      rating: "(4.9/5)",
      reviews: "75",
    },
    {
      img: silk,
      name: "Silk Satin",
      company: "Luxe Fabrics Boutique",
      spec: "#1 Silk Brand",
      discription:
        "Luxurious, smooth, and lightweight, silk satin is perfect for evening gowns, wedding dresses, and high-end fashion. This fabric has a glossy finish on one side and a matte finish on the other.",
      colors: [
        "#025195",
        "#FDD805",
        "#000000",
        "#071C6D",
        "#0B8AA0",
        "#F0618A",
        "#07E098",
        "#FF9C00",
        "#FFFFFF",
      ],
      price: "$ 45",
      rating: "(4.9/5)",
      reviews: "75",
    },
    {
      img: silk,
      name: "Silk Satin",
      company: "Luxe Fabrics Boutique",
      spec: "#1 Silk Brand",
      discription:
        "Luxurious, smooth, and lightweight, silk satin is perfect for evening gowns, wedding dresses, and high-end fashion. This fabric has a glossy finish on one side and a matte finish on the other.",
      colors: [
        "#025195",
        "#FDD805",
        "#000000",
        "#071C6D",
        "#0B8AA0",
        "#F0618A",
        "#07E098",
        "#FF9C00",
        "#FFFFFF",
      ],
      price: "$ 45",
      rating: "(4.9/5)",
      reviews: "75",
    },
    {
      img: silk,
      name: "Silk Satin",
      company: "Luxe Fabrics Boutique",
      spec: "#1 Silk Brand",
      discription:
        "Luxurious, smooth, and lightweight, silk satin is perfect for evening gowns, wedding dresses, and high-end fashion. This fabric has a glossy finish on one side and a matte finish on the other.",
      colors: [
        "#025195",
        "#FDD805",
        "#000000",
        "#071C6D",
        "#0B8AA0",
        "#F0618A",
        "#07E098",
        "#FF9C00",
        "#FFFFFF",
      ],
      price: "$ 45",
      rating: "(4.9/5)",
      reviews: "75",
    },
    {
      img: silk,
      name: "Silk Satin",
      company: "Luxe Fabrics Boutique",
      spec: "#1 Silk Brand",
      discription:
        "Luxurious, smooth, and lightweight, silk satin is perfect for evening gowns, wedding dresses, and high-end fashion. This fabric has a glossy finish on one side and a matte finish on the other.",
      colors: [
        "#025195",
        "#FDD805",
        "#000000",
        "#071C6D",
        "#0B8AA0",
        "#F0618A",
        "#07E098",
        "#FF9C00",
        "#FFFFFF",
      ],
      price: "$ 45",
      rating: "(4.9/5)",
      reviews: "75",
    },
  ];

  return (
    <div className="p-5 w-full md:p-12 font-inter">
      <h1 className="font-Gloock text-[#025195] mb-5 md:mb-10 text-3xl md:text-5xl">
        Choose Materials
      </h1>
      <div className="w-full grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-3">
        {data2.map((Material, index) => (
          <Link
            to="/MaterialDetails"
            state={{ Material }}
            key={index}
            className="w-full cursor-pointer rounded-2xl border border-black"
          >
            <img
              src={Material.img}
              alt=""
              className="rounded-t-2xl border-b border-black lg:h-52 h-28 bg-cover w-full "
            />

            <div className="w-full p-2 lg:p-4 flex flex-col gap-1 lg:gap-3">
              {/* Heading */}
              <div className="flex items-center justify-between">
                <h1 className=" leading-none text-xs lg:text-4xl text-[#025195] font-Gloock  ">
                  {Material.name}
                </h1>
                <p className="border lg:border-2 rounded-lg py-1 text-[6px] lg:text-[10px] px-2 font-semibold text-[#0B1957] bg-[#D9E0FF] border-[#0B1957]">
                  {Material.spec}
                </p>
              </div>

              {/* Shop */}
              <h3 className="text-[#025195] font-extrabold text-[8px] lg:text-xs">
                LUXE FABRICS BOUTIQUE
              </h3>

              {/* description */}
              <p className="text-[#141416] text-justify text-[6px] italic lg:text-xs">
                Luxurious, smooth, and lightweight, silk satin is perfect for
                evening gowns, wedding dresses, and high-end fashion. This
                fabric has a glossy finish on one side and a matte finish on the
                other.
              </p>

              {/* colors */}
              <div className="flex flex-wrap gap-1 lg:gap-1">
                {Material.colors.map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className="h-4 lg:w-6 w-3 rounded-sm"
                  ></div>
                ))}
              </div>

              {/* price reviews */}
              <div className="flex w-full items-center gap-2 justify-between">
                <div className="flex flex-col w-fit items-end">
                  <p className="text-2xl text-[#025195] font-bold lg:text-4xl whitespace-nowrap">
                    $ 45
                  </p>
                  <p className="text-[#546879] font-medium text-[10px] whitespace-nowrap">
                    Per Metres
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1 mr-14">
                    <IoIosStar className="w-3 h-3 text-[#025195]" />
                    <IoIosStar className="w-3 h-3 text-[#025195]" />
                    <IoIosStar className="w-3 h-3 text-[#025195]" />
                    <IoIosStar className="w-3 h-3 text-[#025195]" />
                    <IoIosStar className="w-3 h-3 text-[#025195]" />
                  </div>
                  <p className=" font-bold leading-none text-[10px]">
                    {Material.rating}
                  </p>
                  <p className=" font text-[#FF0000] text-[10px]">
                    ({Material.reviews} Reviews)
                  </p>
                </div>
              </div>
              <button className=" rounded-[50px] justify-center items-center bg-[#025195] text-white lg:py-2 py-1 lg:text-sm text-xs gap-2 w-full flex">
                Add to Cart
              </button>

              <button className=" rounded-[50px] justify-center items-center border font-semibold border-[#025195] text-[#025195] lg:py-2 py-1 lg:text-sm text-xs gap-2 w-full flex">
                Buy Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Materials;
