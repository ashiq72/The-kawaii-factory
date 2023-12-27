import Link from "next/link";
import React from "react";
import { VscInfo } from "react-icons/vsc";

function PersonalInfomationEdit() {
  return (
    <div>
      <div>
        <h1 className=" font-bold text-lg">Account Information</h1>
        <p className="text-sm text-gray-500 font-sans">
          This section contains your address information
        </p>
      </div>
      {/* Personal Information */}
      <div className="bg-white rounded mt-4">
        <div className="border-b-2 p-4 px-6 flex justify-between items-center">
          <h2 className="font-semibold">Personal Information</h2>
          <Link
            href="/customer/account-information/edit"
            className="bg-black text-white px-4 py-2 rounded text-sm"
          >
            Save
          </Link>
        </div>
        <div className="flex p-6 gap-8">
          <div className="flex flex-1 flex-col  gap-6">
            {/* First Name  */}
            <div>
              <h1 className="font-sans text-gray-500">First Name</h1>
              <input
                type="text"
                className="border-2 rounded outline-none px-2"
                placeholder="Ashik"
              />
            </div>
            {/* Email Address  */}
            <div>
              <h1 className="font-sans text-gray-500">Email Address</h1>
              <input
                type="email"
                className="border-2 rounded outline-none px-2"
                placeholder="ahmedashik18k@gmail.com"
              />
            </div>
            {/*  Gender */}
            <div>
              <h1 className="font-sans text-gray-500">Gender</h1>
              <h1 className="font-sans">Male</h1>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            {/* Last Name  */}
            <div>
              <h1 className="font-sans text-gray-500">Last Name</h1>
              <input
                type="text"
                className="border-2 rounded outline-none px-2"
                placeholder="Ahmed"
              />
            </div>
            {/* Mobile Number */}
            <div>
              <h1 className="font-sans text-gray-500">Mobile Number</h1>
              <input
                type="number"
                className="border-2 rounded outline-none px-2"
                placeholder="01882402922"
              />
            </div>
            {/* Date of Birth */}
            <div>
              <h1 className="font-sans text-gray-500">Date of Birth</h1>
              <input
                type="date"
                className="border-2 rounded outline-none px-2"
                placeholder="12/12/23"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfomationEdit;
