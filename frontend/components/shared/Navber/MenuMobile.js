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
        md:hidden bg-white fixed h-screen w-[300px] left-0 top-0 bottom-0 shadow-xl
        duration-500 z-50}
        `}
    >
      <li>
        <div className="w-full mx-auto z-50 py-2 px-6 md:w-auto flex justify-between shadow-sm">
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
            className="text-3xl md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <MdClose /> : <FcMenu />}
          </div>
        </div>
      </li>
      {/*--------------------------------------
                All categories start
       ---------------------------------------- */}
      {categories.map((link, index) => (
        <div key={index}>
          <div className="text-left cursor-pointer group">
            <h1
              className="py-2 hover:bg-gray-200 flex justify-between items-center md:pr-0 pr-5 group capitalize px-4 border-b-2"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {/* Mobile MainCategory menu */}
              {link.name}
              <span className="text-xl md:hidden inline">
                {link.firstsublinks ? (
                  <span>
                    {heading === link.name ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                ) : null}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
          </div>
          {/*-----------------------------------------------
           Mobile firstsublinks && secondsublinks menu start 
           ------------------------------------------------*/}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
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
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center "
                  >
                    {/* Mobile firstsublinks menu */}
                    {slinks.name}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.name ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.name ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks?.secondsublinks?.map((slink, index) => (
                      <li key={index} className="py-3 pl-14">
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
      {/* <div className="py-5">
        <SignedOut>
          <a href="/sign-in">
            <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mr-4">
              Login
            </button>
          </a>
          <a href="/sign-up">
            <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base">
              Sign Up
            </button>
          </a>
        </SignedOut>
        <SignedIn>
          <div className="">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div> */}
    </ul>
  );
};
