import Link from "next/link";
import { VscInfo } from "react-icons/vsc";
import PersonalInformation from "./PersonalInformation";
import { currentUser } from "@clerk/nextjs";

async function getData() {
  const user = await currentUser();

  const userEmail = user.emailAddresses[0].emailAddress;

  const res = await fetch(`http://localhost:5000/api/v1/user/${userEmail}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function page() {
  const data = await getData();
  const {
    firstName,
    lastName,
    email,
    phone,
    gender,
    birth,
    billingAddress,
    shippingAddress,
  } = data.data[0];

  // Extract year, month, and day from the Date object
  var dateObject = new Date(birth);
  var year = dateObject.getUTCFullYear();
  var month = dateObject.getUTCMonth() + 1; //
  var day = dateObject.getUTCDate();
  var formattedDate = `${day}/${month}/${year}`;
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
            Edit
          </Link>
        </div>
        <div className="flex p-6 gap-8">
          <div className="flex flex-1 flex-col  gap-6">
            {/* First Name  */}
            <div>
              <h1 className="font-sans text-gray-500">First Name</h1>
              <h1 className="font-sans">{firstName}</h1>
            </div>
            {/* Email Address  */}
            <div>
              <h1 className="font-sans text-gray-500">Email Address</h1>
              <h1 className="font-sans">{email}</h1>
            </div>
            {/*  Gender */}
            <div>
              <h1 className="font-sans text-gray-500">Gender</h1>
              <h1 className="font-sans">{gender}</h1>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            {/* Last Name  */}
            <div>
              <h1 className="font-sans text-gray-500">Last Name</h1>
              <h1 className="font-sans">{lastName}</h1>
            </div>
            {/* Mobile Number */}
            <div>
              <h1 className="font-sans text-gray-500">Mobile Number</h1>
              <h1 className="font-sans">{phone}</h1>
            </div>
            {/* Date of Birth */}
            <div>
              <h1 className="font-sans text-gray-500">Date of Birth</h1>
              <h1 className="font-sans">{formattedDate}</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Default Address */}
      <div className="bg-white rounded mt-4">
        <div className="border-b-2 p-4 px-6 flex justify-between items-center">
          <h2 className="font-semibold">Default Address</h2>
          <button className="bg-black text-white px-4 py-2 rounded text-sm">
            Add New Address
          </button>
        </div>
        <div className="flex p-6 gap-6">
          {/* Default Billing Address  */}
          <div className="flex-1">
            <h2 className="font-medium pb-3">Default Billing Address</h2>
            <div className="flex flex-col gap-2 bg-gray-50 p-4 justify-center capitalize ">
              <h1 className="font-sans">ashik Ahmed</h1>
              <h1 className="font-sans">{billingAddress}</h1>
              <h1 className="font-sans">Keraniganj, Dhaka, -1310 Bangladesh</h1>
            </div>
          </div>

          {/* Default Billing Address  */}
          <div className="flex-1">
            <h2 className="font-medium pb-3">Default Shipping Address</h2>
            <div className="flex flex-col gap-2 bg-gray-50 p-4 justify-center capitalize ">
              <h1 className="font-sans">ashik Ahmed</h1>
              <h1 className="font-sans">{shippingAddress}</h1>
              <h1 className="font-sans">Keraniganj, Dhaka, -1310 Bangladesh</h1>
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

export default page;
