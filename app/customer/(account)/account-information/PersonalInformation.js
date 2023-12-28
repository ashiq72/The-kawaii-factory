import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

async function getData() {
  const user = await currentUser();
  const userEmail = user.emailAddresses[0].emailAddress;

  const res = await fetch(`http://localhost:5000/api/v1/user/${userEmail}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function PersonalInformation() {
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
  );
}

export default PersonalInformation;
