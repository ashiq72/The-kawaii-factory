"use client";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import { BiSolidShoppingBags } from "react-icons/bi";
import ProfileNav from "./ProfileNav";
import ConditionalNav from "./ConditionalNav";

const TopNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" w-full ">
        <div className="flex items-center font-medium justify-between">
          <div className="z-50 p-3 md:w-auto w-full flex justify-between">
            <Link href="/">
              <h1 className="text-black font-extrabold text-2xl flex items-center">
                <span className="text-yellow-700 pr-1">
                  <BiSolidShoppingBags />
                </span>
                <span className="text-yellow-700 pr-1">Kawaii </span>
                Factory
                <span className="text-yellow-700">.</span>
              </h1>
            </Link>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {open ? <MdClose /> : <FcMenu />}
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li>
              <Link href="/" className="py-5 px-3 inline-block">
                Home
              </Link>
            </li>
            <li>
              <ConditionalNav />
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            {/* <Button /> */}
            <ProfileNav />
          </div>
          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 items-start   ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li>
              <Link href="/" className="py-7 inline-block">
                Home
              </Link>
            </li>
            <li>
              <ConditionalNav />
            </li>
            <NavLinks />
            <div className="py-5">
              {/* <Button /> */}
              <ProfileNav />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
