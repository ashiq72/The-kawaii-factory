"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { addToCart } from "@/store/features/cartSlice/cartSlice";
import { removeFromWishList } from "@/store/features/wishListSlice/wishListSlice";

export default function WishList({ wishListOpen, setWishListOpen, wishLists }) {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleButtonClick = (type, name) => {
    if (type === "removeformwishlist") {
      toast.error("Remove form wishlist"); // Displays a success message
    }
    if (type === "addtocart") {
      toast.success("Added to cart");
    }
  };

  const sumOfOriginalPrice = wishLists
    .filter((product) => product.status !== "out-of-stock")
    .reduce((total, product) => total + product.orginalPrice, 0);

  return (
    <Transition.Root show={wishListOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Wishlist
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setWishListOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      {!wishLists.length > 0 ? (
                        <div className="py-5 text-base">
                          You have not added any wishlist products
                        </div>
                      ) : (
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {wishLists?.map((product, i) => (
                                <li key={i} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    {product?.imageURLs?.map((img, index) => (
                                      <Image
                                        src={img}
                                        key={index}
                                        width={340}
                                        height={300}
                                        alt="card-image"
                                      />
                                    ))}
                                  </div>

                                  <div className="lg:ml-4 ml-2 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between lg:text-sm text-[10px] font-medium text-gray-900">
                                        <h3>
                                          {/* <a href={product.href}> */}
                                          {product.name}
                                          {/* </a> */}
                                        </h3>
                                        <p className="ml-4 flex">
                                          <span
                                            className={
                                              product.status === "out-of-stock"
                                                ? "text-red-600 line-through"
                                                : ""
                                            }
                                          >
                                            &#2547;{" "}
                                          </span>
                                          {product.status === "out-of-stock" ? (
                                            <span className="text-red-600 line-through">
                                              {" "}
                                              00.00{" "}
                                            </span>
                                          ) : (
                                            <span> {product.orginalPrice}</span>
                                          )}
                                        </p>
                                      </div>
                                      <p
                                        className={`mt-1 text-sm text-gray-500 ${
                                          product.status === "out-of-stock"
                                            ? "text-red-600 line-through"
                                            : ""
                                        }`}
                                      >
                                        {product.status}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between lg:text-sm text-[10px]">
                                      {/* <p className="text-gray-500">
                                      Qty {product.wQuantity}
                                    </p> */}
                                      {/* Add to cart  */}
                                      <div className="flex">
                                        <button
                                          onClick={() => {
                                            addToCart(product);
                                            handleButtonClick(
                                              "addtocart",
                                              product.name
                                            );
                                            dispatch(
                                              removeFromWishList(product._id)
                                            );
                                          }}
                                          type="button"
                                          className="font-normal hover:bg-green-500 text-green-500 border-2 border-green-200 rounded-md px-2 hover:text-white duration-700 ease-in-out"
                                        >
                                          Add to cart
                                        </button>
                                      </div>
                                      {/* Remove from cart  */}
                                      <div className="flex">
                                        <button
                                          onClick={() => {
                                            dispatch(
                                              removeFromWishList(product._id)
                                            );

                                            handleButtonClick(
                                              "removeformwishlist",
                                              product.name
                                            );
                                          }}
                                          type="button"
                                          className="font-normal text-red-600 border-2 border-red-200 rounded-md px-2 hover:bg-red-400 hover:text-white duration-700 ease-in-out"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>TK {sumOfOriginalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <Link
                            href="/products"
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setWishListOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
