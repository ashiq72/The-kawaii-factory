// "use client";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Edit from "./Edit";
// import React, { useState } from "react";

async function PersonalInfomationEdit() {
  // const [phone, setPhone] = useState("");
  // const [birth, setBirth] = useState("");

  // const { register, handleSubmit } = useForm();
  const user = await currentUser();
  const email = user.emailAddresses[0].emailAddress;
  // const onSubmit = async (formData) => {
  //   const user = await currentUser();
  //   const email = user.emailAddresses[0].emailAddress;

  //   try {
  //     const res = await fetch(`http://localhost:5000/api/v1/user/${email}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({ phone, birth }),
  //     });

  //     if (res.ok) {
  //       // router.refresh();
  //       // router.push("/");
  //       console.log(res);
  //     } else {
  //       throw new Error("Failed to update a topic");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
        <Edit email={email} />
      </div>
    </div>
  );
}

export default PersonalInfomationEdit;
