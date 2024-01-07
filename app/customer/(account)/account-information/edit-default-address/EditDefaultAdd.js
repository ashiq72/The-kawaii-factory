"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";

function EditDefaultAdd({ email }) {
  const [user, setUser] = useState(null);
  const createUser = user?._id;
  const billingAddressDB = user?.billingAddress;
  const shippingAddressDB = user?.shippingAddress;

  const [billingAddress, setBillingAddress] = useState(billingAddressDB);
  const [shippingAddress, setShippingAddress] = useState(shippingAddressDB);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch data from an external API

    fetch(`https://kawaiisss-server.vercel.app/api/v1/user/${email}`)
      .then((response) => response.json())
      .then((result) => {
        setUser(result.data);
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
        const res = await fetch(
          `https://kawaiisss-server.vercel.app/api/v1/user/${email}`,
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ billingAddress, shippingAddress }),
          }
        );
        if (res.ok) {
          router.refresh();
          router.push("/customer/account-information");
        } else {
          throw new Error("Failed to update a topic");
        }
      } else {
        const res = await fetch(
          `https://kawaiisss-server.vercel.app/api/v1/user/`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ email, firstName }),
          }
        );
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
      <div className="flex gap-8">
        <div className="flex flex-1 flex-col  gap-6">
          {/* First Name  */}
          <div className="flex flex-col">
            <h2 className="font-medium">Default Billing Address</h2>
          </div>

          {/* Email Address  */}
          <div>
            <h1 className="font-sans text-gray-500">Default Billing Address</h1>
            <textarea
              name="Bllinging Address"
              required
              onChange={(e) => setBillingAddress(e.target.value)}
              type="text"
              className="border-2 rounded outline-none px-2 w-full mt-2"
              placeholder="Type here..."
              defaultValue={billingAddressDB}
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-6">
          {/* First Name  */}
          <div className="flex flex-col">
            <h2 className="font-medium ">Default Shipping Address</h2>
          </div>

          {/* Mobile Number */}
          <div>
            <h1 className="font-sans text-gray-500">
              Default Shipping Address*
            </h1>
            <textarea
              name="Shipping Address"
              onChange={(e) => setShippingAddress(e.target.value)}
              type="text"
              className="border-2 rounded outline-none px-2 w-full mt-2"
              placeholder="Type here..."
              defaultValue={shippingAddressDB}
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

export default EditDefaultAdd;
