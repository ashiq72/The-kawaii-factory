import Link from "next/link";
import { useState } from "react";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FcMenu } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const MenuMobile = ({ setMobileMenu, mobileMenu, categories }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <ul
      className={`
        lg:hidden bg-white fixed h-screen w-[300px] left-0 top-0 bottom-0 shadow-xl
        duration-500 z-50 ${mobileMenu ? "left-0" : "left-[-100%]"}
        `}
    >
      <li>
        <div className="w-full mx-auto z-50 py-2 px-6 lg:w-auto flex justify-between shadow-sm">
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
      {/*    All categories start   */}
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
                          <Link href="">{slink.name}</Link>
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
                {link.name}
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
                    <h1
                      onClick={() =>
                        subHeading !== slinks.name
                          ? setSubHeading(slinks.name)
                          : setSubHeading("")
                      }
                      className="py-3 pl-7 font-normal md:pr-0 pr-5 flex justify-between items-center  hover:bg-gray-200 cursor-pointer hover:text-green-600 capitalize"
                    >
                      {/* Mobile firstsublinks menu */}
                      {slinks.name}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            {/*-----------------------------------------------
           Mobile firstsublinks && secondsublinks menu end 
           ------------------------------------------------*/}
          </div>
        ))}
      </div>
    </ul>
  );
};
