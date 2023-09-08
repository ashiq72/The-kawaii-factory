"use client";

import NavLinks from "./NavLinks";
import Link from "next/link";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import { BiSolidShoppingBags } from "react-icons/bi";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
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
            <NavLinks />
            <li className=" lg:flex sm:hidden">
              <ConditionalNav />
            </li>
          </ul>
          <div className="md:block hidden ">
            {/* <Button /> */}
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
              <div className="ml-4">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500  ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li>
              <Link href="/" className="py-7 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <li className="">
              <ConditionalNav />
            </li>
            <div className="py-5">
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
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
