"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { Radio } from "@material-tailwind/react";

function EditPersonalInformation({ email, firstName }) {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("women");

  const createUser = user?._id;
  const phoneDB = user?.phone;
  const genderDB = user?.gender;

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch data from an external API

    fetch(`http://localhost:5000/api/v1/user/${email}`)
      .then((response) => response.json())
      .then((result) => {
        setUser(result.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate a delay of 5 seconds
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (createUser) {
        const res = await fetch(`http://localhost:5000/api/v1/user/${email}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ phone, birth, gender }),
        });
        if (res.ok) {
          router.refresh();
          router.push("/customer/account-information");
        } else {
          throw new Error("Failed to update a topic");
        }
      } else {
        const res = await fetch(`http://localhost:5000/api/v1/user/`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ phone, birth, gender, email, firstName }),
        });
        if (res.ok) {
          router.refresh();
          router.push("/customer/account-information");
        } else {
          throw new Error("Failed to update a topic");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      // Set loading to false when the request is finished, regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" p-6">
      {/* First Name  */}
      <div className="flex flex-col pb-6">
        <h1 className="font-sans text-gray-500">First Name</h1>
        <h1>{firstName}</h1>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-1 flex-col  gap-6">
          {/* Email Address  */}
          <div>
            <h1 className="font-sans text-gray-500">Email Address</h1>
            <h1>{email}</h1>
          </div>
          {/*  Gender */}
          <div>
            <h1 className="font-sans text-gray-500">Gender</h1>
            {/*<h1 className="font-sans">Male</h1> */}
            <div className="flex gap-5">
              <Radio
                onChange={(e) => setGender(e.target.value)}
                name="type"
                label="Men"
                value="men"
                // checked={genderDB === "men"}
                // defaultChecked={gender == "men"}
              />
              <Radio
                onChange={(e) => setGender(e.target.value)}
                name="type"
                value="womaen"
                label="Women"
                defaultChecked
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-6">
          {/* Mobile Number */}
          <div>
            <h1 className="font-sans text-gray-500">Mobile Number*</h1>
            <input
              name="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              // {...register("name")}
              className="border-2 rounded outline-none px-2"
              placeholder="Type here..."
              defaultValue={phoneDB}
            />
          </div>
          {/* Date of Birth */}
          <div>
            <h1 className="font-sans text-gray-500">Date of Birth*</h1>
            <input
              onChange={(e) => setBirth(e.target.value)}
              type="date"
              required
              className="border-2 rounded outline-none px-2"
              placeholder="12/12/23"
            />
          </div>
        </div>
      </div>
      <div className="pt-8 flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className={` text-white w-36 py-2  text-sm font-semibold duration-300 hover:bg-[#F9C1CE]  ${
            loading ? "bg-[#F9C1CE] cursor-not-allowed" : "bg-black"
          }`}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
        <Link
          href="/customer/account-information"
          className="border-2 border-black w-36 text-center py-2  text-sm font-semibold hover:bg-black hover:text-white duration-300"
        >
          CANCEL
        </Link>
      </div>
    </form>
  );
}

export default EditPersonalInformation;
