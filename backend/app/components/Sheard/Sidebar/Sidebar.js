"use client";
import Link from "next/link";
import { useState } from "react";
import { BiSolidShoppingBags } from "react-icons/bi";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const isSidebar = useSelector((state) => state.sidebar.value);

  return (
    <div className={` `}>
      <div
        className={`h-screen w-0  bg-[#1F2453] duration-300 ${
          isSidebar ? "w-0" : "w-48"
        }`}
      >
        <div className="pt-2">
          <div className="p-1 flex">
            <Link href="/">
              <h1 className="text-black font-extrabold text-2xl flex items-center">
                <span className="text-[#F9C1CE] pr-1">
                  <BiSolidShoppingBags />
                </span>
                <span className="text-[#F9C1CE]">Kawaii</span>
                <span className="text-white">sss</span>

                <span className="text-yellow-700">.</span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
