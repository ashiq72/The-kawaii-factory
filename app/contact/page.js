"use client";

import { RadioGroup } from "@headlessui/react";

const product = {
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Sizes */}
      <div className="mt-10">
        <RadioGroup className="mt-4">
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
            {product.sizes.map((size) => (
              <RadioGroup.Option
                key={size.name}
                className={({ active }) =>
                  classNames(
                    active ? "ring-2 ring-indigo-500" : "",
                    "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                  )
                }
              >
                <>
                  <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                </>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
