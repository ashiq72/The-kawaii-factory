"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { VscInfo } from "react-icons/vsc";

function AccountInformation({ session }) {
  const [data, setData] = useState(null);

  // Single user Data fatching by Email
  useEffect(() => {
    async function fetchData() {
      const mail = "ashik@gmail.com";
      try {
        const res = await fetch(
          `http://localhost:5000/api/v1/user/${session?.user?.email}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await res.json();
        setData(jsonData?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Personal Information variable
  let phone = 0;
  let gender = "N/A";
  let birth = "N/A";
  let billingAddress = "N/A";
  let shippingAddress = "N/A";

  if (data) {
    // const { email, phone, gender, birth, billingAddress, shippingAddress } =
    phone = data?.phone;
    gender = data?.gender;
    billingAddress = data?.billingAddress;
    shippingAddress = data?.shippingAddress;

    // Extract year, month, and day from the Date object
    var dateObject = new Date(data?.birth);
    var year = dateObject.getUTCFullYear();
    var month = dateObject.getUTCMonth() + 1;
    var day = dateObject.getUTCDate();
    var formattedDate = `${day}/${month}/${year}`;
    birth = formattedDate;
  }

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
            href="/customer/account-information/edit-personal-information"
            className="bg-black text-white px-4 py-2 rounded text-sm"
          >
            Edit
          </Link>
        </div>
        {/* First Name  */}
        <div className="flex flex-col px-6  pt-6">
          <h1 className="font-sans text-gray-500">First Name</h1>
          <h1 className="font-sans">{session?.user?.name}</h1>
        </div>
        <div className="flex p-6 gap-8">
          <div className="flex flex-1 flex-col  gap-6">
            {/* Email Address  */}
            <div>
              <h1 className="font-sans text-gray-500">Email Address</h1>
              <h1 className="font-sans">{session?.user?.email}</h1>
            </div>
            {/*  Gender */}
            <div>
              <h1 className="font-sans text-gray-500">Gender</h1>
              <h1 className="font-sans capitalize">{gender}</h1>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            {/* Mobile Number */}
            <div>
              <h1 className="font-sans text-gray-500">Mobile Number</h1>
              <h1 className="font-sans">
                0{phone}
                {/* {phone} */}
              </h1>
            </div>
            {/* Date of Birth */}
            <div>
              <h1 className="font-sans text-gray-500">Date of Birth</h1>
              <h1 className="font-sans">{birth?.length > 0 ? birth : "N/A"}</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Default Address */}
      <div className="bg-white rounded mt-4">
        <div className="border-b-2 p-4 px-6 flex justify-between items-center">
          <h2 className="font-semibold">Default Address</h2>
          <Link
            href="/customer/account-information/edit-default-address"
            className="bg-black text-white px-4 py-2 rounded text-sm"
          >
            Add New Address
          </Link>
        </div>
        <div className="flex p-6 gap-6">
          {/* Default Billing Address  */}
          <div className="flex-1">
            <h2 className="font-medium pb-3">Default Billing Address</h2>
            <div className="flex flex-col gap-2 bg-gray-50 p-4 justify-center capitalize ">
              <h1 className="font-sans">{session?.user?.name}</h1>

              <h1 className="font-sans">
                {billingAddress?.length > 0 ? billingAddress : "N/A"}
              </h1>
            </div>
          </div>

          {/* Default Billing Address  */}
          <div className="flex-1">
            <h2 className="font-medium pb-3">Default Shipping Address</h2>
            <div className="flex flex-col gap-2 bg-gray-50 p-4 justify-center capitalize ">
              <h1 className="font-sans">{session?.user?.name}</h1>

              <h1 className="font-sans">
                {shippingAddress?.length > 0 ? shippingAddress : "N/A"}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded mt-4 py-4 px-6">
        <h1 className="font-sans flex items-center gap-1">
          <span className="">
            <VscInfo />
          </span>
          <span>You have no other address entries in your address book.</span>
        </h1>
      </div>
    </div>
  );
}

export default AccountInformation;
