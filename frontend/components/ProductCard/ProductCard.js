"use client";
// import { getDiscountPricePercentage } from "@/utils/helper";
import { Typography, Button, Tooltip } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function ProductCard({ product }) {
  const { name, price, image, slug, thumbnail, orginalPrice } = product;
  const [hoverCart, setHoverCart] = useState(false);

  return (
    <div className="w-80 h-[520px]  border-2 border-gray-50 rounded-md">
      {/* --------------------------------------------------
       Start Image part : Background image, front image, add to cart button, wishlist, quick view  
       ---------------------------------------------------*/}
      <div
        className="h-[400px] max-h-full bg-center overflow-hidden shadow-sm relative"
        onMouseEnter={() => setHoverCart(!hoverCart)}
        onMouseLeave={() => setHoverCart(!hoverCart)}
      >
        <>
          {/*---------------- Front Image ----------------*/}
          {image.slice(1, 2).map((img, index) => (
            <>
              <div
                key={index}
                className={`h-full w-full absolute object-cover  z-40  ${
                  hoverCart
                    ? "scale-105 hover:opacity-100 ease-in-out duration-1000"
                    : "opacity-0 ease-in-out duration-1000"
                }  `}
              >
                <Image
                  src={img}
                  width={340}
                  height={300}
                  alt="card-image"
                  className="object-cover"
                />
              </div>
            </>
          ))}

          {/*------------ Background Image --------------- */}
          {image.slice(0, 1).map((img, index) => (
            <>
              <div
                key={index}
                className={`h-full w-full absolute z-20 object-cover ${
                  hoverCart ? " hover:opacity-0" : " opacity-100"
                }  `}
              >
                <Image
                  src={img}
                  width={340}
                  height={300}
                  alt="card-image"
                  className="object-cover"
                />
              </div>
            </>
          ))}
          {/* Start Button & Wishlist & Add to cart  */}
          <h1
            className={`absolute top-5 duration-500 z-40 text-2xl flex flex-col gap-2 ${
              hoverCart ? "right-2" : "-right-20"
            }`}
          >
            <div className="flex gap-3">
              <Tooltip
                className="z-40 p-1 px-2"
                content="Add to wishlist"
                placement="left"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <div className="bg-white rounded-full p-1 border-2 ease-in-out duration-100 border-gray-50 hover:border-2 hover:border-gray-900">
                  <AiOutlineHeart />
                </div>
              </Tooltip>
            </div>
            <div className="flex gap-3">
              <Tooltip
                className="z-40 py-1 px-2"
                content="Quick view"
                placement="left"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <div className="bg-white rounded-full p-1 border-2 ease-in-out duration-100 border-gray-50 hover:border-2 hover:border-gray-900">
                  <AiOutlineEye />
                </div>
              </Tooltip>
            </div>
          </h1>
          <div
            className={`absolute origin-center  duration-500 z-40 translate-x-1/2  gap-2 bg-white rounded-md  ${
              hoverCart ? "bottom-2" : "-bottom-20"
            }`}
          >
            <div class="relative flex  flex-col items-center justify-center overflow-hidden bg-gray-50 z-10 rounded-md ">
              <button class="relative w-full bg-transparent py-2 px-6 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-md ">
                Add to cart
              </button>
            </div>
          </div>
          {/* End Button & Wishlist & Add to cart  */}
        </>
      </div>
      {/* --------------------------------------------------
       End Image part : Background image, front image, add to cart button, wishlist, quick view  
       ---------------------------------------------------*/}
      {/* --------------------------------------------------
       Start Name, review star, price
       ---------------------------------------------------*/}
      <div className="px-1">
        {/*------------ Name ----------- */}
        <div className="font-[500] text-[16px] pt-5 hover:text-green-500">
          {name.length > 32 ? (
            <p>
              {name.slice(0, 32)}
              <span>...</span>
            </p>
          ) : (
            { name }
          )}
        </div>
        {/* -----------Reviews ------------ */}
        <div className="flex gap-1 text-xl py-2">
          <span className="text-yellow-600">
            <AiFillStar />
          </span>
          <span className="text-yellow-600">
            <AiFillStar />
          </span>
          <span className="text-yellow-600">
            <AiFillStar />
          </span>
          <span className="text-yellow-600">
            <AiFillStar />
          </span>
          <span className="text-gray-600">
            <AiOutlineStar />
          </span>
        </div>
        {/*------------ Price ----------- */}
        <div className="font-normal text-base py-1 flex px-1 gap-3">
          &#2547; {price}
          {/* {orginalPrice && ( */}
          <>
            <div className="text-base text-red-700 font-medium line-through">
              &#2547; 1200
            </div>
            <div className="ml-auto text-base font-medium text-green-500">
              <p>12 % Off</p>
            </div>
          </>
          {/* )} */}
        </div>
      </div>
      {/* --------------------------------------------------
       End Name, review star, price
       ---------------------------------------------------*/}
    </div>
  );
}
