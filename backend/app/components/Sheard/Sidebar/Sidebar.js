"use client";
import Link from "next/link";
import { useState } from "react";
import { BiSolidShoppingBags } from "react-icons/bi";
import { useSelector } from "react-redux";
import SidebarLinks from "./SidebarLinks";
import { FaHome } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";

const Sidebar = () => {
  const isSidebar = useSelector((state) => state.sidebar.value);

  return (
    <div
      className={`h-screen w-0  bg-[#1F2453] duration-300 ${
        isSidebar ? "w-[0px] " : "w-56 opacity-100"
      }`}
    >
      {!isSidebar && (
        <div className="duration-300">
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

          <div>
            <h1 className="text-2xl font-bold text-center text-white py-4 border-b-2 border-gray-800">
              Admin
            </h1>
          </div>
          <div className="flex flex-col pl-3">
            <div className="">
              <Link className="flex items-center gap-2  py-3" href="/">
                <span>
                  <FaHome className="text-gray-300" />
                </span>
                <h2 className="text-gray-300">Dashboard</h2>
              </Link>
            </div>
            <div>
              <div className="flex flex-col">
                <p className="flex  gap-2 py-2 text-gray-600 font-semibold text-sm">
                  Data
                </p>
                <Link
                  className="flex items-center gap-2  py-3"
                  href="/products"
                >
                  <span>
                    <FaProductHunt className="text-yellow-600" />
                  </span>
                  <h2 className="text-gray-300">Products</h2>
                </Link>
                <Link
                  className="flex items-center gap-2  py-3"
                  href="/addproduct"
                >
                  <span>
                    <LiaClipboardListSolid className="text-yellow-600" />
                  </span>
                  <h2 className="text-gray-300">Invoices Balances</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
