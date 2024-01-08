"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidShoppingBags } from "react-icons/bi";
import Menu from "./Menu";
import { MenuMobile } from "./MenuMobile";
import WishList from "../../WishList/WishList";
import { useSelector } from "react-redux";
import { Tooltip } from "@material-tailwind/react";
import { IoPersonAddOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { PiSignIn } from "react-icons/pi";
import { useSession } from "next-auth/react";

function Navber() {
  const [categories, setCategories] = useState(null);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState("");
  const [wishListOpen, setWishListOpen] = useState(false);

  const [isAccountMenu, setIsAccountMenu] = React.useState(false);

  const { wishListItems } = useSelector((state) => state.wishlist);

  const { loading, cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    // Fetch data from an external API
    fetch("https://kawaiisss-server.vercel.app/api/v1/categories")
      .then((response) => response.json())
      .then((result) => {
        setCategories(result?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { data: session } = useSession();

  // console.log(session?.user?.user_photo);
  return (
    <header
      className={`w-full h-[50px] lg:h-[80px] bg-white flex items-center justify-between sticky top-0 shadow-sm transition-transform duration-300 z-30 `}
    >
      <div className="h-[60px] flex justify-between items-center w-full max-w-[1580px] px-5 mx-auto">
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
                  wishLists={wishListItems}
                />
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {wishListItems?.length}
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
                  {cartItems?.length}
                </div>
              </div>
            </Link>
          </Tooltip>
          {/* Icon end */}
          {/* Account Icon start */}

          <div
            className="hidden lg:flex"
            onMouseLeave={() => setIsAccountMenu(false)}
          >
            <div className="relative">
              <div onMouseEnter={() => setIsAccountMenu(!isAccountMenu)}>
                {session?.user?.user_photo ? (
                  <>
                    <img
                      src={session?.user?.user_photo}
                      alt=""
                      width={35}
                      height={35}
                      className="rounded-full w-8 h-8"
                    />
                  </>
                ) : (
                  <>
                    <AiOutlineUser className="text-[18px] md:text-[25px]" />
                  </>
                )}
              </div>
              <div
                className={`-right-8 absolute bg-white p-2  rounded ${
                  isAccountMenu ? "flex" : "hidden"
                }`}
              >
                <ul className="">
                  {session ? (
                    <>
                      <Link href="/customer/account-information">
                        <li className="hover:bg-gray-100 px-4 duration-200 py-1 cursor-pointer flex items-center gap-2">
                          <span>
                            <VscAccount />
                          </span>
                          <span>Account</span>
                        </li>
                      </Link>
                      <Link href="/user-setting">
                        <li className="hover:bg-gray-100 px-4 duration-200 py-1 cursor-pointer flex items-center gap-2">
                          <span>
                            <IoSettingsOutline />
                          </span>
                          <span>Setting</span>
                        </li>
                      </Link>
                      <li
                        className="hover:bg-gray-100 px-4 duration-200 py-1 cursor-pointer text-red-700 flex items-center gap-2"
                        onClick={() =>
                          signOut(() => {
                            toast.error("Logout you account");
                            router.push("/");
                          })
                        }
                      >
                        <span>
                          <CiLogout />
                        </span>
                        <span>Logout</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <Link href="/login">
                        <li className="hover:bg-gray-100 px-4 duration-200 py-1 cursor-pointer flex items-center gap-2">
                          <span>
                            <PiSignIn />
                          </span>
                          <span>Login</span>
                        </li>
                      </Link>
                      <Link href="/register">
                        <li className="hover:bg-gray-100 px-4 duration-200 py-1 cursor-pointer flex items-center gap-2">
                          <span>
                            <IoPersonAddOutline />
                          </span>
                          <span>Register</span>
                        </li>
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
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
      </div>
    </header>
  );
}

export default Navber;
