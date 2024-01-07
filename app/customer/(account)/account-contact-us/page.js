import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
function AccountContactUs() {
  return (
    <div>
      <div>
        <h1 className=" font-bold text-lg">CONTACT US</h1>
      </div>
      <div className="flex bg-white p-6 gap-6 mt-2 rounded">
        <div className="flex flex-1 items-start gap-4 border-r-2 border-gray-100">
          <div className=" p-2 rounded-full border-2 border-gray-100">
            <FiPhoneCall />
          </div>
          <div>
            <h1 className="font-serif font-medium text-lg">Hotline</h1>
            <p className="text-gray-500 ">(+88) 09 678 444 777</p>
            <p className="text-gray-500 ">
              7 days a week, 10:00 am to 8:00 pm (BST)
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-start gap-4 ">
          <div className=" p-2 rounded-full border-2 border-gray-100 ">
            <HiOutlineMail />
          </div>
          <div>
            <h1 className="font-serif font-medium text-lg">Email</h1>
            <p className="text-gray-500 ">customerservice.aarong@brac.net</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountContactUs;
