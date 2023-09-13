"use client";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { RadioGroup } from "@headlessui/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function ProductDetails({ data }) {
  const { name, image, price } = data;
  const [activeImg, setActiveImage] = useState(image[0]);

  const [amount, setAmount] = useState(1);

  console.log(data);
  return (
    <div className="px-72 py-24">
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col items-center gap-6 lg:w-2/4">
          <Image
            src={activeImg}
            alt=""
            width={450}
            height={300}
            className="rounded-xl"
          />
          <RadioGroup className="flex flex-row justify-between h-24 gap-x-4">
            {image.map((img) => (
              <RadioGroup.Option
                className={({ active }) =>
                  classNames(
                    active ? "ring-2 ring-gray-900" : "",
                    "group relative flex items-center justify-center rounded-md border py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                  )
                }
              >
                <img
                  src={img}
                  alt=""
                  className={`w-24 h-24 rounded-md cursor-pointer border-2 duration-500`}
                  onClick={() => setActiveImage(img)}
                />
              </RadioGroup.Option>
            ))}

            {/* <img
              src={image[0]}
              alt=""
              className={
                activeImg === image[0]
                  ? `w-24 h-24 rounded-md cursor-pointer border-2 duration-500`
                  : `w-24 h-24 rounded-md cursor-pointer`
              }
              onClick={() => setActiveImage(image[0])}
            />
            <img
              src={image[1]}
              alt=""
              className={
                activeImg === image[1]
                  ? `w-24 h-24 rounded-md cursor-pointer border-2 duration-500`
                  : `w-24 h-24 rounded-md cursor-pointer`
              }
              onClick={() => setActiveImage(image[1])}
            />
            <img
              src={image[2]}
              alt=""
              className={
                activeImg === image[2]
                  ? `w-24 h-24 rounded-md cursor-pointer border-2 duration-500`
                  : `w-24 h-24 rounded-md cursor-pointer`
              }
              onClick={() => setActiveImage(image[2])}
            />
            <img
              src={image[3]}
              alt=""
              className={
                activeImg === image[3]
                  ? `w-24 h-24 rounded-md cursor-pointer border-2 duration-500`
                  : `w-24 h-24 rounded-md cursor-pointer`
              }
              onClick={() => setActiveImage(image[3])}
            /> */}
          </RadioGroup>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-violet-600 font-semibold">
              Special Sneaker
            </span>
            <h1 className="text-3xl font-bold">{name}</h1>
          </div>
          <p className="text-gray-700">
            Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
            chilometri, Invincible 3 offre un livello di comfort elevatissimo
            sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
            Questo modello incredibilmente elastico e sostenitivo, è pensato per
            dare il massimo lungo il tuo percorso preferito e fare ritorno a
            casa carico di energia, in attesa della prossima corsa.
          </p>
          <h6 className="text-2xl font-semibold">$ {price}</h6>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <Button> Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
