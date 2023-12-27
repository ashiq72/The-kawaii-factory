import React from "react";
import { BiError } from "react-icons/bi";

function AccountReturn() {
  return (
    <div>
      <div>
        <h1 className=" font-bold text-lg">RETURNS</h1>
        <p className="text-sm text-gray-500 font-sans">
          This section contains information related to your order return
        </p>
      </div>
      <div className="flex items-center bg-white py-3 px-4 mt-2 rounded gap-2">
        <span className="font-normal text-xl text-yellow-500">
          <BiError />
        </span>
        <p className="font-sans text-base">You have placed no returns.</p>
      </div>
    </div>
  );
}

export default AccountReturn;
