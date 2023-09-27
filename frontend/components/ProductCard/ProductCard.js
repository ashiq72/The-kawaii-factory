"use client";
// import { getDiscountPricePercentage } from "@/utils/helper";
import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

export function ProductCard({ product }) {
  const [hoverImg, setHoverImg] = useState(false);
  console.log(hoverImg);
  const { name, price, image, slug, thumbnail, orginalPrice } = product;
  const [hoverCartBtn, setHoverCartBtn] = useState(false);

  return (
    <div className="w-80 h-[520px] p-2 m-4 border-2">
      {/* <div
        className="h-[300px] bg-center overflow-hidden shadow-sm"
        onMouseEnter={() => setHoverImg(true)}
        onMouseLeave={() => setHoverImg(false)}
      >
        {hoverImg ? (
          <>
            {image.slice(1, 2).map((img, index) => (
              <div key={index}>
                <Image
                  src={img}
                  width={300}
                  height={300}
                  alt="card-image"
                  className="h-full w-full object-cover relative duration-1000 ease-in-out hover:origin-center hover:scale-125 "
                />
                <h1 className="absolute top-5 right-5 z-50">Hello</h1>
              </div>
            ))}
          </>
        ) : (
          <>
            {image.slice(0, 1).map((img, index) => (
              <div key={index}>
                <Image
                  src={img}
                  width={300}
                  height={300}
                  alt="card-image"
                  className="h-full w-full object-cover   "
                />
              </div>
            ))}
          </>
        )}
      </div> */}
      <div className="h-[300px] bg-center overflow-hidden shadow-sm relative  ">
        <>
          {image.slice(1, 2).map((img, index) => (
            <>
              <div
                key={index}
                className="h-full w-full absolute object-cover opacity-0 z-40 ease-in-out duration-1000 hover:scale-105 hover:opacity-100  "
              >
                <Image
                  src={img}
                  width={300}
                  height={300}
                  alt="card-image"
                  className="object-cover"
                  onMouseEnter={() => setHoverCartBtn(!hoverCartBtn)}
                  onMouseLeave={() => setHoverCartBtn(!hoverCartBtn)}
                />
              </div>
            </>
          ))}

          <h1
            className={`absolute top-5 duration-500 z-40 text-2xl flex flex-col gap-2 ${
              hoverCartBtn ? "right-4" : "-right-10"
            }`}
          >
            <AiOutlineHeart />
            <AiOutlineEye />
          </h1>

          {image.slice(0, 1).map((img, index) => (
            <>
              <div
                key={index}
                className="h-full w-full absolute z-20 object-cover opacity-100 hover:opacity-0"
              >
                <Image
                  src={img}
                  width={300}
                  height={300}
                  alt="card-image"
                  className=""
                />
              </div>
            </>
          ))}
        </>
      </div>
      {/*------------ Name ----------- */}
      <div className="font-[500] text-[16px] pt-4">
        {name.length > 32 ? (
          <p>
            {name.slice(0, 32)}
            <span>...</span>
          </p>
        ) : (
          { name }
        )}
      </div>
      {/*------------ Price ----------- */}
      <div className="font-normal text-base">
        &#2547; {price}
        {/* {orginalPrice && (
              <>
                <div className="text-base  font-medium line-through">
                  &#8377;{orginalPrice}
                </div>
                <div className="ml-auto text-base font-medium text-green-500">
                  <p>
                   
                    12 % Off
                  </p>
                </div>
              </>
            )} */}
      </div>

      <Typography
        variant="small"
        color="gray"
        className="font-normal opacity-75"
      >
        With plenty of talk and listen time, voice-activated Siri access, and an
        available wireless charging case.
      </Typography>

      <div className="pt-0">
        <Link href="">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Quick View
          </Button>
        </Link>
      </div>
    </div>
  );
}
