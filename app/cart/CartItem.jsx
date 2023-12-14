import {
  handleDecrement,
  handleIncrement,
  removeFromCart,
} from "@/store/features/cartSlice/cartSlice";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useDispatch } from "react-redux";
const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { _id, orginalPrice, status, cQuantity } = product;
  console.log(product);

  const dispatch = useDispatch();

  const handleButtonClick = (type, name) => {
    if (type === "removeformCart") {
      toast.error("Remove form cart"); // Displays a success message
    }
  };
  const totalPrice = (quantity * orginalPrice).toFixed(2);

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-t">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        {product?.imageURLs?.slice(1, 2).map((img, index) => (
          <Image
            key={index}
            src={img}
            width={340}
            height={300}
            alt="card-image"
          />
        ))}
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="lg:text-xl text-xs font-light text-black/[0.8]">
            {product.name}
          </div>

          {/* PRODUCT SUBTITLE */}
          {/* <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Sub Title
          </div> */}

          {/* PRODUCT PRICE */}
          <div
            className={`lg:text-lg text-[9px] font-semibold text-black/[0.8] mt-2 ${
              status === "out-of-stock" ? "line-through text-red-500" : ""
            }`}
          >
            {status === "out-of-stock" ? (
              <>MRP : &#2547; 00.00</>
            ) : (
              <>MRP : &#2547; {totalPrice}</>
            )}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div
          className={`text-sm font-medium text-black/[0.5] capitalize ${
            status === "out-of-stock" ? "text-red-500" : ""
          }`}
        >
          {status}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center  text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1 font-normal text-[10px]">
              {/* Quantity  */}
              <div className="mb-5 ">
                <h1 className="text-sm font-medium">Quantity:</h1>
                <div className="flex items-center mt-2">
                  <button
                    disabled={status === "out-of-stock"}
                    className="text-xl hover:bg-pink-200 hover:text-white duration-200 hover:border-pink-200 text-black border-2 px-4 py-0 rounded-r"
                    onClick={() => dispatch(handleDecrement(_id))}
                  >
                    -
                  </button>
                  <span className="mx-4 text-base">{cQuantity}</span>
                  <button
                    disabled={status === "out-of-stock"}
                    className=" text-xl hover:bg-pink-200 hover:text-white duration-200 hover:border-pink-200 text-black border-2 px-4 py-0 rounded-r"
                    onClick={() => dispatch(handleIncrement(_id))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              dispatch(removeFromCart(product));

              handleButtonClick("removeformCart", product.name);
            }}
            className="hover:bg-red-500/5  rounded-full p-2 hover:shadow"
          >
            <RiDeleteBin6Line className="cursor-pointer text-red-400   md:text-[20px] duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
