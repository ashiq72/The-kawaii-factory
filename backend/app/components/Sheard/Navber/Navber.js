"use client";

import { UserButton } from "@clerk/nextjs";

import { FaBars } from "react-icons/fa";
import { Input } from "@material-tailwind/react";
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { isSidebar } from "@/store/features/SideberSlice/SideberSlice";

const Navber = ({ users }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#181C3B] shadow-lg px-4 py-3 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button
            onClick={() => dispatch(isSidebar())}
            className="text-white text-2xl"
          >
            <FaBars />
          </button>
          <div className="md:flex hidden w-72 text-white text-2xl">
            <Input
              className="text-white bg-blue-gray-100 "
              icon={<IoMdSearch />}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <UserButton />
          <h2 className="text-sm font-semibold text-white">{users[0].name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Navber;
