"use client";
import { useState } from "react";

import toast from "react-hot-toast";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

// import ReactMarkdown from "react-markdown";
import ProductDetailsCarousel from "./ProductDetailsCarousel";
import { addToCart } from "@/store/features/cartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  selectedWishlist,
} from "@/store/features/wishListSlice/wishListSlice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ProductDescription } from "./ProductDescription";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function ProductDetails({ data }) {
  const { _id, name, imageURLs, orginalPrice, size, description } = data[0];
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const dispatch = useDispatch();
  //Toast for selected wishlists & cart

  const wishlistSelected = useSelector(
    (state) => state.wishlist.selectedWishlist
  );

  const handleClick = () => {
    // Show an alert
  };

  const totalPrice = (quantity * orginalPrice).toFixed(2);

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="w-full md:py-20">
      <div className="w-full max-w-[1180px] px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={imageURLs} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[20px] font-semibold mb-2 leading-tight">
              {name}
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center pt-4">
              {/* <p className="mr-2 text-lg font-semibold">BDT : {price}</p> */}
              {/*------------ Price ----------- */}
              <div className="font-normal text-xl py-1 flex px-1 gap-3">
                &#2547; {totalPrice}
                {/* {orginalPrice && ( */}
                <>
                  <div className="text-lg text-red-700 font-medium line-through">
                    {/* &#2547; {orginalPrice} */}
                  </div>
                  <div className="ml-auto text-base font-medium text-green-500">
                    {/* {discountRate}% Off */}
                  </div>
                </>
                {/* )} */}
              </div>
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-5">
              {`(Also includes all applicable duties)`}
            </div>
            {/* Quantity  */}
            <div className="mb-5">
              <h1 className="text-md font-semibold">Quantity</h1>
              <div className="flex items-center mt-2">
                <button
                  className="bg-pink-200 text-white px-3 py-1 rounded-l"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span className="mx-4">{quantity}</span>
                <button
                  className="bg-pink-200 text-white px-3 py-1 rounded-r"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>
            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {size?.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      selectedSize === item
                        ? "hover:border-black cursor-pointer bg-pink-200"
                        : ""
                    } 
                   
                    `}
                    onClick={() => {
                      setSelectedSize("");
                      setSelectedSize(item);
                      // setShowError(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              {/* {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )} */}
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-pink-200 text-blcak text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  toast.error("Please select your size");
                } else {
                  dispatch(addToCart(data));
                }
              }}
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button
              // disabled={wishlistSelected}
              onClick={() => {
                dispatch(addToWishList(data));
                dispatch(selectedWishlist(_id));
                handleClick();
                if (wishlistSelected) {
                  toast.success("Added wishlist");
                }
              }}
              className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
            >
              Whishlist
              {wishlistSelected?.includes(_id) ? (
                <span className="text-pink-200">
                  <AiFillHeart />
                </span>
              ) : (
                <AiOutlineHeart />
              )}
              {/* <IoMdHeartEmpty size={20} /> */}
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <div>
                  <div className="flex items-start gap-6">
                    <div className="text-2xl">
                      <TbTruckDelivery />
                    </div>
                    <div className="">
                      <h1 className="font-semibold text-base">Free Shipping</h1>
                      <p className="pt-1 text-sm">
                        Free standard shipping on orders over $99 Estimated to
                        be delivered on 12/01/2022 - 15/10/2022.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 pt-4">
                    <div className="text-2xl">
                      <IoShieldCheckmarkOutline />
                    </div>
                    <div className="">
                      <h1 className="font-semibold text-base">Free Returns</h1>
                      <p className="pt-1 text-sm">
                        Free standard shipping on orders over $99 Estimated to
                        be delivered on 12/01/2022 - 15/10/2022.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        <ProductDescription description={description} />

        {/* <RelatedProducts products={products} /> */}
      </div>
    </div>
  );
}
