"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white px-4 pt-4 ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-200"> Dashboard</h1>
          <p className="text-sm text-green-500 font-semibold">
            Welcome to your dashboard
          </p>
        </div>
        <div className="flex md:justify-end justify-start">
          <Button color="blue">Download Report</Button>
        </div>
      </div>
      {/* Seceond section  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 pt-8">
        {/* Card number: 1 */}
        <div className="bg-[#1F2453] w-full rounded-md p-2 py-4 flex justify-between">
          <div className="flex flex-col justify-center items-start">
            <Image
              src="https://i.postimg.cc/RCXhLNJ6/icons8-sell-64.png"
              alt=""
              width={35}
              height={35}
            />
            <h1 className="font-bold text-base">${"120"}</h1>
            <p className="text-green-500 text-sm">Today sales</p>
          </div>
          <div className="flex flex-col justify-between">
            <Image
              src="https://i.postimg.cc/MZ4tHKZR/icons8-health-graph-64.png"
              alt=""
              width={40}
              height={40}
            />
            <p className="text-green-500 text-sm">-20%</p>
          </div>
        </div>
        {/* Card number: 2 */}
        <div className="bg-[#1F2453] w-full rounded-md p-2 py-4 flex justify-between">
          <div className="flex flex-col justify-center items-start">
            <Image
              src="https://i.postimg.cc/NfVgdn8m/icons8-accounting-66.png"
              alt=""
              width={35}
              height={35}
            />
            <h1 className="font-bold text-base">${"1820"}</h1>
            <p className="text-green-500 text-sm">Total sales</p>
          </div>
          <div className="flex flex-col justify-between">
            <Image
              src="https://i.postimg.cc/MZ4tHKZR/icons8-health-graph-64.png"
              alt=""
              width={40}
              height={40}
            />
            <p className="text-green-500 text-sm">-20%</p>
          </div>
        </div>
        {/* Card number: 3 */}
        <div className="bg-[#1F2453] w-full rounded-md p-2 py-4 flex justify-between">
          <div className="flex flex-col justify-center items-start">
            <Image
              src="https://i.postimg.cc/Pq6h8FqC/icons8-products-66.png"
              alt=""
              width={35}
              height={35}
            />
            <h1 className="font-bold text-base">{"32"}</h1>
            <p className="text-green-500 text-sm">Total Products</p>
          </div>
          <div className="flex flex-col justify-between">
            <Image
              src="https://i.postimg.cc/MZ4tHKZR/icons8-health-graph-64.png"
              alt=""
              width={40}
              height={40}
            />
            <p className="text-green-500 text-sm">-20%</p>
          </div>
        </div>
        {/* Card number: 4 */}
        <div className="bg-[#1F2453] w-full rounded-md p-2 py-4 flex justify-between">
          <div className="flex flex-col justify-center items-start">
            <Image
              src="https://i.postimg.cc/rsVSYskn/icons8-health-64.png"
              alt=""
              width={35}
              height={35}
            />
            <h1 className="font-bold text-base">{"185"}</h1>
            <p className="text-green-500 text-sm">Total Customer</p>
          </div>
          <div className="flex flex-col justify-between">
            <Image
              src="https://i.postimg.cc/MZ4tHKZR/icons8-health-graph-64.png"
              alt=""
              width={40}
              height={40}
            />
            <p className="text-green-500 text-sm">-20%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
