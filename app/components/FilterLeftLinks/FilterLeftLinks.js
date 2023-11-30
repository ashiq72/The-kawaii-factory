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

import { useState } from "react";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { toggleCategory } from "@/store/features/categoryFilterSlice/categoryFilterSlice";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useGetAllCategoriesQuery } from "@/store/features/categoriesAPI/categoriesAPI";

const FilterLeftLinks = () => {
  const categories = useGetAllCategoriesQuery();
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <ul
        className={`
        hidden md:flex justify-between w-full`}
      >
        {/*    All categories start   */}
        <div className="w-full">
          {categories?.data?.data?.slice(0, 1).map((link, index) => (
            <div key={index}>
              <div className="text-left cursor-pointer group">
                <h1
                  className="py-3 hover:bg-pink-100 flex justify-between items-center group capitalize pl-2 rounded duration-300"
                  onClick={() => {
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("");
                    setSubHeading("");
                  }}
                >
                  {link.name}

                  <span className="text-xl hover:text-gray-500">
                    {link?.firstsublinks ? (
                      <span>
                        {heading === link.name ? (
                          <MinusIcon
                            className="h-5 w-5 hover:text-gray-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusIcon
                            className="h-5 w-5 hover:text-gray-400"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    ) : null}
                  </span>
                </h1>
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
                        className="py-2 font-medium  flex justify-between items-center  hover:bg-pink-100 cursor-pointer pl-2 rounded"
                      >
                        {/* Mobile firstsublinks menu */}
                        <span className="font-normal text-gray-600 capitalize">
                          {slinks.name}
                        </span>
                        <span className="text-xl md:mt-1 md:ml-2 inline">
                          {slinks?.secondsublinks ? (
                            <>
                              {subHeading === slinks.name ? (
                                <MinusIcon
                                  className="h-5 w-5 hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5 hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </>
                          ) : null}
                        </span>
                      </h1>
                      <div
                        className={`${
                          subHeading === slinks.name
                            ? "ease-in-out duration-500"
                            : "hidden ease-in-out duration-500 delay-300"
                        } flex flex-col `}
                      >
                        {slinks?.secondsublinks?.map((slink, index) => (
                          // <li
                          //   onClick={() => dispatch(toggleCategory(slink.name))}
                          //   key={index}
                          //   className="py-3 hover:bg-pink-100 cursor-pointer hover:text-green-600 pl-2"
                          // >
                          //   {/* Mobile secondsublinks menu */}
                          //   <span className="font-medium  text-sm capitalize">
                          //     {slink.name}
                          //   </span>
                          // </li>

                          <Checkbox
                            key={index}
                            onClick={() => dispatch(toggleCategory(slink.name))}
                            label={
                              <Typography
                                color="blue-gray"
                                className="flex font-medium capitalize"
                              >
                                {slink.name}
                              </Typography>
                            }
                          />
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
