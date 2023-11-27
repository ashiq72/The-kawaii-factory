"use client";
import { addToCart } from "@/store/features/cartSlice/cartSlice";
import {
  addToWishList,
  selectedWishlist,
} from "@/store/features/wishListSlice/wishListSlice";
import { Tooltip } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ProductCard({ product }) {
  const { _id, name, image, orginalPrice, discountRate } = product;

  const [hoverCart, setHoverCart] = useState(false);
  const [isToastVisible, setToastVisibility] = useState(false);
  const [selectedCart, setSelectedCart] = useState([]);

  const dispatch = useDispatch();

  //Toast for selected wishlists & cart
  useEffect(() => {
    if (isToastVisible) {
      toast.success("Already Added");
    }
    return () => {
      setToastVisibility(false);
    };
  }, [isToastVisible]);

  //Handle-checkbox cart function for selecting images
  const handleSelectedCart = (_id) => {
    const selectedID = selectedCart.find((id) => id === _id);
    if (!selectedID) {
      setSelectedCart([...selectedCart, _id]);
    } else {
      selectedCart
        .filter((id) => id !== _id)
        .push(setSelectedCart([selectedID]));
      setToastVisibility(true);
    }
  };

  function pricceCalculation(orginalPrice, discountRate) {
    const discountPrice = orginalPrice - orginalPrice / discountRate;
    return parseInt(discountPrice);
  }

  const wishlistSelected = useSelector(
    (state) => state.wishlist.selectedWishlist
  );

  const handleClick = (id) => {
    // Show an alert
    console.log("id", typeof id);
  };
  console.log(wishlistSelected);
  return (
    <div className="w-80 h-[520px]  border-2 border-gray-50 rounded-md">
      {/* --------------------------------------------------
       Start Image part : Background image, front image, add to cart button, wishlist, quick view  
       ---------------------------------------------------*/}
      <div
        className="h-[400px] max-h-full bg-center overflow-hidden shadow-sm relative"
        onMouseOver={() => setHoverCart(true)}
        onMouseLeave={() => setHoverCart(false)}
      >
        <>
          {/*----------------
          Front Image
          ----------------*/}
          {image.slice(1, 2).map((img, index) => (
            <div
              key={index}
              className={`h-full w-full absolute object-cover  z-10  ${
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
          ))}

          {/*------------ Background Image --------------- */}
          {image.slice(0, 1).map((img, index) => (
            <div
              key={index}
              className={`h-full w-full absolute z-0 object-cover ${
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
          ))}
          {/* Start Button & Wishlist & Add to cart  */}
          <h1
            className={`absolute top-5 duration-500 z-20 text-2xl flex flex-col gap-2 ${
              hoverCart ? "right-2" : "-right-20"
            }`}
          >
            {/* start Add wishlist */}
            <div
              className="flex gap-3"
              // onClick={() => }
            >
              <Tooltip
                className="z-40 p-1 px-2"
                content="Add to wishlist"
                placement="left"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <div
                  className={`bg-white rounded-full p-1 border-2 ease-in-out duration-100 border-gray-50 hover:border-2 ${
                    wishlistSelected?.includes(_id)
                      ? "hover:border-red-600 text-red-600"
                      : "hover:border-gray-900"
                  }
                  `}
                  onClick={() => {
                    dispatch(addToWishList(product));
                    dispatch(selectedWishlist(_id));
                    handleClick(_id);
                    if (wishlistSelected) {
                      toast.success("Added wishlist");
                    }
                  }}
                >
                  {wishlistSelected.includes(_id) ? (
                    <span className="text-pink-400">
                      <AiFillHeart />
                    </span>
                  ) : (
                    <AiOutlineHeart />
                  )}
                </div>
              </Tooltip>
            </div>
            {/* Quick add to cart  */}
            <div
              className="flex gap-3"
              onClick={() => dispatch(addToCart(product))}
            >
              <Tooltip
                className="z-20 py-1 px-2"
                content="Add to cart"
                placement="left"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <div
                  className={`bg-white rounded-full p-1 border-2 ease-in-out duration-100 border-gray-50 hover:border-2 text-[20px] ${
                    selectedCart.includes(_id)
                      ? "hover:border-green-600 text-green-600 "
                      : "hover:border-gray-900"
                  }`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default checkbox behavior
                    handleSelectedCart(_id);
                  }}
                >
                  {/* <AiOutlineEye /> */}
                  {selectedCart.includes(_id) ? <BsCart /> : <BsCart />}
                </div>
              </Tooltip>
            </div>
          </h1>
          <Link href={`/product-view/${_id}`}>
            <div
              className={`absolute origin-center  duration-500 z-20 translate-x-1/2  gap-2 bg-white rounded-md  ${
                hoverCart ? "bottom-2" : "-bottom-20"
              }`}
            >
              <div className="relative flex  flex-col items-center justify-center overflow-hidden bg-gray-50 z-10 rounded-md ">
                <button className="relative w-full bg-transparent py-2 px-6 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-md ">
                  Details view
                </button>
              </div>
            </div>
          </Link>
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
          &#2547; {pricceCalculation(orginalPrice, discountRate)}
          {/* {orginalPrice && ( */}
          <>
            <div className="text-base text-red-700 font-medium line-through">
              &#2547; {orginalPrice}
            </div>
            <div className="ml-auto text-base font-medium text-green-500">
              {discountRate}% Off
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
