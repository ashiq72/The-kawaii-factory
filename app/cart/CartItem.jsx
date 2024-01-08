import {
  handleDecrement,
  handleIncrement,
  removeFromCart,
} from "@/store/features/cartSlice/cartSlice";
import Image from "next/image";

import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

import { useDispatch } from "react-redux";
const CartItem = ({ product }) => {
  const quantity = 1;
  const { _id, orginalPrice, status, qty } = product;

  const dispatch = useDispatch();

  const handleButtonClick = (type, name) => {
    if (type === "removeformCart") {
      toast.error("Remove form cart");
    }
  };

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
        <div className="flex justify-between">
          {/* PRODUCT TITLE */}
          <div className="lg:text-xl text-sm font-serif text-black/[0.8]">
            {product.name}
          </div>

          {/* PRODUCT PRICE */}
          <div
            className={`lg:text-lg text-[9px] font-semibold text-black/[0.8] lg:mt-2 mt-0 ${
              status === "out-of-stock" ? "line-through text-red-500" : ""
            }`}
          >
            {status === "out-of-stock" ? (
              <>MRP : &#2547; 00.00</>
            ) : (
              <div className="flex">
                <span>MRP : </span>
                <span className="pl-1"> </span>
                <span>&#2547; </span>
                <span> {orginalPrice}</span>
              </div>
            )}
          </div>
        </div>

        {/* PRODUCT Stutas */}
        <div
          className={`lg:text-sm text-xs font-medium text-black/[0.5] capitalize ${
            status === "out-of-stock" ? "text-red-400" : ""
          }`}
        >
          {status}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center  text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1 font-normal text-[10px]">
              {/* Quantity  */}
              <div className="lg:mb-5 flex lg:flex-col flex-row lg:items-start items-center gap-2">
                <h1 className="lg:text-sm text-xs font-medium ">Quantity: </h1>
                <div className="flex items-center">
                  <button
                    disabled={status === "out-of-stock"}
                    className="text-sm hover:bg-pink-200 hover:text-white duration-200 hover:border-pink-200 text-black border-2 px-3 lg:py-1 py-0 rounded"
                    onClick={() => dispatch(handleDecrement(_id))}
                  >
                    <FiMinus />
                  </button>
                  <span className="mx-4 text-base">
                    {status === "out-of-stock" ? <>0</> : <>{qty}</>}
                  </span>
                  <button
                    disabled={status === "out-of-stock"}
                    className=" text-sm hover:bg-pink-200 hover:text-white duration-200 hover:border-pink-200 text-black border-2 px-3 lg:py-1 py-0 rounded"
                    onClick={() => dispatch(handleIncrement(_id))}
                  >
                    <BsPlusLg />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              dispatch(removeFromCart(product._id));

              handleButtonClick("removeformCart", product.name);
            }}
            className="hover:bg-red-500/5  rounded-full p-2 hover:shadow"
          >
            <RiDeleteBin6Line className="cursor-pointer text-red-400   md:text-[20px] duration-300" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartItem;
