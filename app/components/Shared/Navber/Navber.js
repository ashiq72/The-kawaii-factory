"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidShoppingBags } from "react-icons/bi";
import Wrapper from "../../Wrapper/Wrapper";
import Menu from "./Menu";
import { MenuMobile } from "./MenuMobile";
import WishList from "../../WishList/WishList";
import { useSelector } from "react-redux";
import { Tooltip, Button } from "@material-tailwind/react";
// import Cart from "@/app/cart/page";

function Navber({ categories }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState("");
  const [wishListOpen, setWishListOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const wishLists = useSelector((state) => state.wishlist.wishlist);

  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <header
      className={`w-full h-[50px] lg:h-[80px] bg-white flex items-center justify-between sticky top-0 shadow-sm transition-transform duration-300 z-30 `}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <h1 className="text-black font-extrabold xl:text-2xl text-xl flex items-center">
            <span className="text-[#F9C1CE] pr-1">
              <BiSolidShoppingBags />
            </span>
            <span className="text-[#F9C1CE]">Kawaii</span>
            sss
            <span className="text-yellow-700">.</span>
          </h1>
        </Link>

        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
          // category={category}
        />

        <MenuMobile
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
          categories={categories}
        />

        <div className="flex items-center gap-2  text-black">
          {/* Icon start */}
          <Tooltip
            content="Wishlist"
            placement="bottom"
            className="z-50 border border-blue-gray-50 bg-white text-black shadow-xl shadow-black/10 rounded"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <button onClick={() => setWishListOpen(!wishListOpen)}>
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ">
                <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                <WishList
                  wishListOpen={wishListOpen}
                  setWishListOpen={setWishListOpen}
                  wishLists={wishLists}
                />
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {wishLists?.length}
                </div>
              </div>
            </button>
          </Tooltip>
          {/* Icon end */}

          {/* Icon start */}
          <Tooltip
            content="Cart"
            placement="bottom"
            className="z-50 border border-blue-gray-50 bg-white text-black  shadow-xl shadow-black/10 rounded"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Link href="/cart">
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ">
                <BsCart className="text-[15px] md:text-[20px]" />

                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              </div>
            </Link>
          </Tooltip>
          {/* Icon end */}
          {/* Account Icon start */}
          <Tooltip
            content="My Account"
            placement="bottom"
            className="z-50 border border-blue-gray-50 bg-white text-black  shadow-xl shadow-black/10 rounded"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Link href="/customer/account">
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ">
                <AiOutlineUser className="text-[18px] md:text-[25px]" />
              </div>
            </Link>
          </Tooltip>
          {/* Account Icon end */}

          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex lg:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer">
            {mobileMenu ? (
              <AiOutlineClose
                className="text-[22px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[30px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
}

export default Navber;
