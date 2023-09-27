"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Menu = ({ showCatMenu, setShowCatMenu, categories, category }) => {
  const [heading, setHeading] = useState("");
  // console.log(category);
  return (
    <div className="lg:flex lg:gap-8 hidden">
      {/* Only for Woman category start */}
      {categories?.slice(0, 1).map((link, index) => (
        <div key={index}>
          <div className="text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group capitalize"
              onMouseEnter={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
              onMouseLeave={() => {
                setHeading("");
              }}
            >
              {link.name}
              <span className="text-base pt-1 inline transition duration-300 ease-in-out">
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
            {link.firstsublinks && (
              <div>
                <div className="absolute top-14 hidden group-hover:md:block hover:md:block z-30 ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45 -z-10"
                    ></div>
                  </div>
                  <div className="bg-white grid grid-cols-3 gap-7 p-2 rounded">
                    {link.firstsublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className="text-base font-medium border-b-2">
                          {mysublinks.name}
                        </h1>
                        {mysublinks?.secondsublinks?.map((slink, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 rounded-md py-2 px-2 list-none hover:bg-slate-100 "
                          >
                            <Link href="" className="hover:text-primary">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      {/* Only for Woman category End */}
      {/* Only for others category start */}
      {categories?.slice(1).map((link, index) => (
        <div key={index}>
          <div className="text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-2 group capitalize"
              onMouseEnter={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
              onMouseLeave={() => {
                setHeading("");
              }}
            >
              {link.name}
              <span className="text-base pt-1 inline ">
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

            {link.firstsublinks && (
              <div>
                <div className="absolute top-14 hidden group-hover:md:block hover:md:block z-30 ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45 -z-10"
                    ></div>
                  </div>
                  <div className="bg-white p-2 rounded">
                    {link.firstsublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className="text-sm text-gray-600 rounded-md py-2 px-2 list-none hover:bg-slate-100 capitalize">
                          {mysublinks.name}
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      {/* Only for othewrs category End */}
    </div>
  );
};

export default Menu;
