import Link from "next/link";
import { useState } from "react";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FcMenu } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { menuCategory } from "@/store/features/categoryFilterSlice/categoryFilterSlice";
import { IoPersonAddOutline, IoSettingsOutline } from "react-icons/io5";
import { PiSignIn } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";

export const MenuMobile = ({ setMobileMenu, mobileMenu, categories }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const dispatch = useDispatch();

  const router = useRouter();
  const userData = false;

  // User data
  const { data: session } = useSession();

  return (
    <ul
      className={`
        lg:hidden bg-white fixed h-screen w-[300px] left-0 top-0 bottom-0 shadow-xl
        duration-500 z-50 ${mobileMenu ? "left-0" : "left-[-100%]"}
        `}
    >
      <li>
        <div className="w-full mx-auto z-50 py-2 px-3 lg:w-auto flex justify-between shadow-sm ">
          <Link href="/">
            <h1 className="text-black font-extrabold text-2xl flex items-center">
              <span className="text-[#F9C1CE] pr-1">
                <BiSolidShoppingBags />
              </span>
              <span className="text-[#F9C1CE]">Kawaii</span>
              sss
              <span className="text-yellow-700">.</span>
            </h1>
          </Link>
          <div
            className=" w-8 md:w-12 h-8 lg:h-12 rounded-full flex lg:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {/* {mobileMenu ? <MdClose /> : <FcMenu />} */}
            {mobileMenu ? (
              <MdClose className="text-[22px]" />
            ) : (
              <FcMenu className="text-[30px]" />
            )}
          </div>
        </div>
      </li>
      {/*    Total categories start   */}
      <div className="h-screen overflow-scroll scroll-smooth">
        {/* Woman category only */}
        {categories?.slice(0, 1).map((link, index) => (
          <div key={index}>
            <div className=" cursor-pointer group">
              <h1
                className="py-3 hover:bg-gray-200 flex justify-between items-center group pr-5 capitalize px-4 border-b-2"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {/* Mobile MainCategory menu */}
                {link.name}
                <span className="text-xl lg:hidden">
                  {link.firstsublinks ? (
                    <span>
                      {heading === link.name ? (
                        <span className="">
                          <IoIosArrowUp />
                        </span>
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  ) : null}
                </span>
                <span className="text-xl md:mt-1 md:ml-2  lg:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </h1>
            </div>
            {/*-----------------------------------------------
           Mobile firstsublinks && secondsublinks menu start 
           ------------------------------------------------*/}
            <div
              className={`
            ${heading === link.name ? "lg:hidden" : "hidden"}
          `}
            >
              {link?.firstsublinks?.map((slinks, index) => (
                <div key={index}>
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.name
                          ? setSubHeading(slinks.name)
                          : setSubHeading("")
                      }
                      className="py-2 pl-7 font-medium  pr-5 flex justify-between items-center  hover:bg-gray-200 cursor-pointer capitalize"
                    >
                      {/* Mobile firstsublinks menu */}
                      {slinks.name}

                      <span className="text-xl lg:mt-1 lg:ml-2 inline">
                        {subHeading === slinks.name ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                    </h1>
                    <div
                      className={`${
                        subHeading === slinks.name ? "lg:hidden" : "hidden"
                      }`}
                    >
                      {slinks?.secondsublinks?.map((slink, index) => (
                        <li
                          key={index}
                          className="py-3 pl-14 hover:bg-gray-200 cursor-pointer hover:text-green-600 capitalize"
                        >
                          {/* Mobile secondsublinks menu */}
                          <Link
                            href="/products"
                            onClick={() => {
                              dispatch(menuCategory(slink.name));
                              setMobileMenu(!mobileMenu);
                            }}
                            className="hover:text-green-600 capitalize"
                          >
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/*-----------------------------------------------
           Mobile firstsublinks && secondsublinks menu end 
           ------------------------------------------------*/}
          </div>
        ))}
        {/* All Others category */}
        {categories?.slice(1).map((link, index) => (
          <div key={index}>
            <div className="text-left cursor-pointer group">
              <h1
                className="py-3 hover:bg-gray-200 flex justify-between items-center  pr-5 group capitalize px-4 border-b-2"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {/* Mobile MainCategory menu */}

                {!link?.firstsublinks?.length > 0 ? (
                  <>
                    <Link
                      href="/products"
                      onClick={() => {
                        dispatch(menuCategory(link.name));
                        setMobileMenu(!mobileMenu);
                      }}
                    >
                      {link.name}
                    </Link>
                  </>
                ) : (
                  link.name
                )}

                {/* {link.name} */}
                <span className="text-xl lg:hidden ">
                  {link.firstsublinks ? (
                    <span>
                      {heading === link.name ? (
                        <span className="">
                          <IoIosArrowUp />
                        </span>
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  ) : null}
                </span>
                <span className="text-xl lg:mt-1 lg:ml-2  lg:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </h1>
            </div>
            {/*-----------------------------------------------
           Mobile firstsublinks && secondsublinks menu start 
           ------------------------------------------------*/}
            <div
              className={`
            ${heading === link.name ? "lg:hidden" : "hidden"}
          `}
            >
              {link?.firstsublinks?.map((slinks, index) => (
                <div key={index}>
                  <div>
                    <Link
                      href="/products"
                      onClick={() => {
                        subHeading !== slinks.name
                          ? setSubHeading(slinks.name)
                          : setSubHeading("");
                        dispatch(menuCategory(slinks.name));
                        setMobileMenu(!mobileMenu);
                      }}
                      className="py-3 pl-7 font-normal md:pr-0 pr-5 flex justify-between items-center  hover:bg-gray-200 cursor-pointer hover:text-green-600 capitalize"
                    >
                      {/* Mobile firstsublinks menu */}
                      {slinks.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/*-----------------------------------------------
           Mobile firstsublinks && secondsublinks menu end 
           ------------------------------------------------*/}
          </div>
        ))}
        <div>
          <div className={`  bg-white py-2  rounded`}>
            <ul className="">
              {session ? (
                <>
                  <Link
                    onClick={() => setMobileMenu(!mobileMenu)}
                    href="/customer/account-information"
                  >
                    <li className="hover:bg-gray-100 px-4 duration-200 py-2 cursor-pointer flex items-center gap-2">
                      <span>
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
                      </span>
                      <span>My Account</span>
                    </li>
                  </Link>
                  <Link
                    onClick={() => setMobileMenu(!mobileMenu)}
                    href="/user-setting"
                  >
                    <li className="hover:bg-gray-100 px-5 duration-200 py-2 cursor-pointer flex items-center gap-3">
                      <span>
                        <IoSettingsOutline />
                      </span>
                      <span>Setting</span>
                    </li>
                  </Link>
                  <li
                    className="hover:bg-gray-100 px-5 duration-200 py-2 cursor-pointer text-red-700 flex items-center gap-3"
                    onClick={() =>
                      signOut(() => {
                        router.push("/");
                        setMobileMenu(!mobileMenu);
                        toast.error("Logout you account");
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
                  <Link
                    onClick={() => setMobileMenu(!mobileMenu)}
                    href="/login"
                  >
                    <li className="hover:bg-gray-100 px-5 duration-200 py-2 cursor-pointer flex items-center gap-3">
                      <span>
                        <PiSignIn />
                      </span>
                      <span>Login</span>
                    </li>
                  </Link>
                  <Link
                    onClick={() => setMobileMenu(!mobileMenu)}
                    href="/register"
                  >
                    <li className="hover:bg-gray-100 px-5 duration-200 py-2 cursor-pointer flex items-center gap-3">
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
    </ul>
  );
};
