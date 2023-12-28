"use client";
import React, { useState } from "react";

function Edit({ email }) {
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  console.log(phone, birth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/v1/user/${email}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ phone, birth }),
      });

      if (res.ok) {
        // router.refresh();
        // router.push("/");
        console.log(res);
      } else {
        throw new Error("Failed to update a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex p-6 gap-8">
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
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            // {...register("name")}
            className="border-2 rounded outline-none px-2"
            placeholder="01882402922"
          />
        </div>
        {/* Date of Birth */}
        <div>
          <h1 className="font-sans text-gray-500">Date of Birth</h1>
          <input
            onChange={(e) => setBirth(e.target.value)}
            type="date"
            className="border-2 rounded outline-none px-2"
            placeholder="12/12/23"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded text-sm"
      >
        Save
      </button>
    </form>
  );
}

export default Edit;
