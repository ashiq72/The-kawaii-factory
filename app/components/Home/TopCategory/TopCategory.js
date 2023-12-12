import { menuCategory } from "@/store/features/categoryFilterSlice/categoryFilterSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiWatchThin } from "react-icons/pi";
import { PiTShirtThin } from "react-icons/pi";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { useDispatch } from "react-redux";

export const TopCategory = () => {
  const dispatch = useDispatch();
  return (
    <div className="py-20  w-11/12 mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Top Categories</h1>
      </div>
      <div className="grid grid-cols-5 gap-4 pt-8">
        {/* 1- Tops category  */}
        <Link
          href="/products"
          onClick={() => {
            dispatch(menuCategory("tops"));
          }}
          className="bg-pink-100 rounded flex justify-between items-center px-8 py-5 hover:shadow-xl duration-200 hover:underline cursor-pointer"
        >
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/7LznkTjY/ezgif-com-png-to-jpg-converted-removebg-preview.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-lg font-medium text-gray-600">Tops</h3>
        </Link>
        {/* 2- Long Frock category  */}
        <Link
          href="/products"
          onClick={() => {
            dispatch(menuCategory("long frock"));
          }}
          className="bg-pink-100 rounded flex justify-between items-center px-8 py-5 hover:shadow-xl duration-200 hover:underline cursor-pointer"
        >
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/k5tPPfn6/ezgif-com-crop-removebg-preview.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-lg font-medium text-gray-600"> Long Frock </h3>
        </Link>
        {/* 3- Jeggings category  */}
        <Link
          href="/products"
          onClick={() => {
            dispatch(menuCategory("jeggings"));
          }}
          className="bg-pink-100 rounded flex justify-between items-center px-8 py-5 hover:shadow-xl duration-200 hover:underline cursor-pointer"
        >
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/rwf52Nhk/ezgif-com-crop-removebg-preview-2.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-lg font-medium text-gray-600">Jeggings</h3>
        </Link>
        {/* 4- Party Dress category  */}
        <Link
          href="/products"
          onClick={() => {
            dispatch(menuCategory("party dress"));
          }}
          className="bg-pink-100 rounded flex justify-between items-center px-8 py-5 hover:shadow-xl duration-200 hover:underline cursor-pointer"
        >
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/MHmR4RPM/ezgif-com-crop-1-removebg-preview.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-lg font-medium text-gray-600">Party Dress</h3>
        </Link>
        {/* 5- Skirt category  */}
        <Link
          href="/products"
          onClick={() => {
            dispatch(menuCategory("skirt"));
          }}
          className="bg-pink-100 rounded flex justify-between items-center px-8 py-5 hover:shadow-xl duration-200 hover:underline cursor-pointer"
        >
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/qBDCtJfd/ezgif-com-crop-2-removebg-preview.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-lg font-medium text-gray-600">Skirt</h3>
        </Link>
        {/* 6- Watch category  */}
        <Link
          href="/products"
          onClick={() => {
            dispatch(menuCategory("shirts"));
          }}
          className="bg-pink-100 rounded flex justify-between items-center px-8 py-5 hover:shadow-xl duration-200 hover:underline cursor-pointer"
        >
          <span className="text-5xl text-gray-600">
            {/* <Image
              alt=" "
              src="https://i.postimg.cc/9XqH5bBH/ezgif-com-crop-3-removebg-preview.png"
              width="40"
              height="40"
            /> */}
            <PiTShirtThin />
          </span>

          <h3 className="text-lg font-medium text-gray-600">Women Shirts</h3>
        </Link>
        {/* 7- Kids Dress category  */}
        <Link
          href="/products"
          onClick={() => {
            dispatch(menuCategory("dress"));
          }}
          className="bg-pink-100 rounded flex justify-between items-center px-8 py-5 hover:shadow-xl duration-200 hover:underline cursor-pointer"
        >
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/9XqH5bBH/ezgif-com-crop-3-removebg-preview.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-lg font-medium text-gray-600">Kids Dress</h3>
        </Link>

        {/* 8- Watch category  */}
        <Link
          href="/products"
          onClick={() => {
            dispatch(menuCategory("watch"));
          }}
          className="bg-pink-100 rounded flex justify-between items-center px-8 py-5 hover:shadow-xl duration-200 hover:underline cursor-pointer"
        >
          <span className="text-5xl text-gray-600">
            {/* <Image
              alt=" "
              src="https://i.postimg.cc/9XqH5bBH/ezgif-com-crop-3-removebg-preview.png"
              width="40"
              height="40"
            /> */}
            <PiWatchThin />
          </span>

          <h3 className="text-lg font-medium text-gray-600">Watch</h3>
        </Link>

        {/* 9- Shoes category  */}
        <Link
          href="/products"
          onClick={() => {
            dispatch(menuCategory("shoes"));
          }}
          className="bg-pink-100 rounded flex justify-between items-center px-8 py-5 hover:shadow-xl duration-200 hover:underline cursor-pointer"
        >
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/8zVs2jQN/shoes-removebg-preview.png"
              width="50"
              height="50"
            />
          </span>

          <h3 className="text-lg font-medium text-gray-600">Shoes</h3>
        </Link>

        {/* 10- Bags category  */}
        <Link
          href="/products"
          onClick={() => {
            dispatch(menuCategory("bags"));
          }}
          className="bg-pink-100 rounded flex justify-between items-center px-8 py-5 hover:shadow-xl duration-200 hover:underline cursor-pointer"
        >
          <span className="text-5xl text-gray-600">
            {/* <Image
              alt=" "
              src="https://i.postimg.cc/9XqH5bBH/ezgif-com-crop-3-removebg-preview.png"
              width="40"
              height="40"
            /> */}
            <PiHandbagSimpleThin />
          </span>

          <h3 className="text-lg font-medium text-gray-600  duration-500">
            Bags
          </h3>
        </Link>
      </div>
    </div>
  );
};
