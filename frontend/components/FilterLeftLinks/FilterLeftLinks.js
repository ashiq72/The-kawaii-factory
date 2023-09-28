"use client";

import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FcMenu } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useGetAllCategoriesQuery } from "@/store/features/categoriesAPI/categoriesAPI";
import { useState } from "react";
import Link from "next/link";

const FilterLeftLinks = () => {
  const categories = useGetAllCategoriesQuery();
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <div className="w-full">
      <ul
        className={`
        hidden md:flex justify-between w-full`}
      >
        {/*    All categories start   */}
        <div className="w-full">
          {categories?.data?.map((link, index) => (
            <div key={index}>
              <div className="text-left cursor-pointer group">
                {/* <h1
                  className="w-full py-2 hover:bg-gray-200 flex justify-between items-center md:pr-0 pr-5 group capitalize px-4 border-b-2"
                  onClick={() => {
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("");
                    setSubHeading("");
                  }}
                >
                 
                  <span>{link.name}</span>
                  <span className="text-xl ">
                    {link?.firstsublinks ? (
                      <span>
                        {heading === link.name ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                    ) : null}
                  </span>
                </h1> */}
                <h3
                  className="-my-3 flex justify-between w-full"
                  onClick={() => {
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("");
                    setSubHeading("");
                  }}
                >
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      {link.name}
                    </span>
                    <span className=" flex items-center">
                      {link?.firstsublinks ? (
                        <span>
                          {heading === link.name ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      ) : null}
                    </span>
                  </Disclosure.Button>
                </h3>
              </div>
              {/*-----------------------------------------------
           Mobile firstsublinks && secondsublinks menu start 
           ------------------------------------------------*/}
              <div
                className={`
            ${
              heading === link.name
                ? "ease-in-out duration-500 delay-300 transition-all"
                : "hidden ease-in-out duration-500 delay-300 transition-all "
            }
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
                          subHeading === slinks.name
                            ? "ease-in-out duration-500"
                            : "hidden ease-in-out duration-500 delay-300"
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
        </div>
      </ul>
    </div>
  );
};

export default FilterLeftLinks;
