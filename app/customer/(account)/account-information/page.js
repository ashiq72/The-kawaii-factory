import { VscInfo } from "react-icons/vsc";

function page() {
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
          <button className="bg-black text-white px-4 py-2 rounded text-sm">
            Edit
          </button>
        </div>
        <div className="flex p-6 gap-8">
          <div className="flex-1">
            {/* First Name  */}
            <div>
              <h1 className="font-sans text-gray-500">First Name</h1>
              <h1 className="font-sans">Ashik</h1>
            </div>
            {/* Email Address  */}
            <div>
              <h1 className="font-sans text-gray-500">Email Address</h1>
              <h1 className="font-sans">ahmedashik18k@gmail.com</h1>
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
              <h1 className="font-sans text-gray-500">Last Name Name</h1>
              <h1 className="font-sans">Ahmed</h1>
            </div>
            {/* Mobile Number */}
            <div>
              <h1 className="font-sans text-gray-500">Mobile Number</h1>
              <h1 className="font-sans">01882402922</h1>
            </div>
            {/* Date of Birth */}
            <div>
              <h1 className="font-sans text-gray-500">Date of Birth</h1>
              <h1 className="font-sans">23 Apr 1998</h1>
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
              <h1 className="font-sans">keranijong, dhaka</h1>
              <h1 className="font-sans">Keraniganj, Dhaka, -1310 Bangladesh</h1>
            </div>
          </div>

          {/* Default Billing Address  */}
          <div className="flex-1">
            <h2 className="font-medium pb-3">Default Shipping Address</h2>
            <div className="flex flex-col gap-2 bg-gray-50 p-4 justify-center capitalize ">
              <h1 className="font-sans">ashik Ahmed</h1>
              <h1 className="font-sans">keranijong, dhaka</h1>
              <h1 className="font-sans">Keraniganj, Dhaka, -1310 Bangladesh</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded mt-4 py-4 px-6">
        <h1 className="font-sans flex items-center gap-1">
          <VscInfo />{" "}
          <span>You have no other address entries in your address book.</span>
        </h1>
      </div>
    </div>
  );
}

export default page;
