"use client";

import Link from "next/link";

const Navber = () => {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default Navber;
