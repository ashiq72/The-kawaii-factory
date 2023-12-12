import Image from "next/image";
import React from "react";
import { GiDress } from "react-icons/gi";

export const TopCategory = () => {
  return (
    <div className="py-20  w-11/12 mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Top Categories</h1>
      </div>
      <div className="grid grid-cols-5 gap-4 pt-8">
        {/* 1- Tops category  */}
        <div className="bg-pink-100 rounded flex justify-between items-center px-8 py-5">
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/7LznkTjY/ezgif-com-png-to-jpg-converted-removebg-preview.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-xl font-normal text-gray-600">Tops</h3>
        </div>
        {/* 2- Long Frock category  */}
        <div className="bg-pink-100 rounded flex justify-between items-center px-8 py-5">
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/k5tPPfn6/ezgif-com-crop-removebg-preview.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-xl font-normal text-gray-600">Long Frock</h3>
        </div>
        {/* 3- Jeggings category  */}
        <div className="bg-pink-100 rounded flex justify-between items-center px-8 py-5">
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/rwf52Nhk/ezgif-com-crop-removebg-preview-2.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-xl font-normal text-gray-600">Jeggings</h3>
        </div>
        {/* 4- Party Dress category  */}
        <div className="bg-pink-100 rounded flex justify-between items-center px-8 py-5">
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/MHmR4RPM/ezgif-com-crop-1-removebg-preview.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-xl font-normal text-gray-600">Party Dress</h3>
        </div>
        {/* 5- Skirt category  */}
        <div className="bg-pink-100 rounded flex justify-between items-center px-8 py-5">
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/qBDCtJfd/ezgif-com-crop-2-removebg-preview.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-xl font-normal text-gray-600">Skirt</h3>
        </div>
        {/* 6- Skirt category  */}
        <div className="bg-pink-100 rounded flex justify-between items-center px-8 py-5">
          <span className="text-3xl text-gray-600">
            <Image
              alt=" "
              src="https://i.postimg.cc/7LznkTjY/ezgif-com-png-to-jpg-converted-removebg-preview.png"
              width="40"
              height="40"
            />
          </span>

          <h3 className="text-xl font-normal text-gray-600">Tops</h3>
        </div>
      </div>
    </div>
  );
};
