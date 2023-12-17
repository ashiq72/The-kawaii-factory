"use client";
import { useState } from "react";
import { MdDone } from "react-icons/md";
import { Radio, Typography } from "@material-tailwind/react";
import { Switch } from "@headlessui/react";
import { Button } from "@material-tailwind/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Checkout = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="lg:w-7/12 w-full lg:px-0 px-4 mx-auto py-8">
      <div className="pb-2">
        <h1 className="font-medium font-sans lg:text-3xl text-xl pb-1">
          CHECKOUT
        </h1>
        <p className="text-sm text-gray-400 font-sans">
          Please fill in the fields below and place order to complete your
          purchase!
        </p>
      </div>

      <div className=" flex lg:flex-row flex-col gap-6">
        <div className="lg:w-2/3 w-full flex flex-col gap-8 ">
          {/* 1- SHIPPING ADDRESS  */}
          <div className="rounded-b-md shadow-xl">
            <div className="bg-slate-700 flex px-4 py-2 items-center gap-3 rounded-sm">
              <h1 className="bg-white rounded-full w-6 h-6 flex items-center text-center justify-center">
                1
              </h1>
              <span className="text-white font-sans lg:text-base text-sm font-medium">
                SHIPPING ADDRESS
              </span>
            </div>
            <form className=" border-2 p-4 w-full">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="tel"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="sm:col-span-2 pt-4">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Street Address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 pt-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? "bg-indigo-600" : "bg-gray-200",
                        "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      )}
                    >
                      <span className="sr-only">
                        My billing and shipping address are the same
                      </span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? "translate-x-3.5" : "translate-x-0",
                          "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </div>
                  <Switch.Label className="text-sm leading-6 text-gray-600">
                    My billing and shipping address are the same
                  </Switch.Label>
                </Switch.Group>
              </div>
              <div className="mt-10 flex gap-4">
                <Button className="rounded-sm">UPDATE</Button>
                <Button className="rounded-sm">CANCEL</Button>
              </div>
            </form>
          </div>
          {/* 2- SHIPPING METHOD  */}
          <div className="rounded-b-md shadow-xl">
            <div className="bg-slate-700 flex px-4 py-2 items-center gap-3 rounded-sm">
              <h1 className="bg-white rounded-full w-6 h-6 flex items-center text-center justify-center">
                2
              </h1>
              <span className="text-white font-sans lg:text-base text-sm font-medium">
                SHIPPING METHOD
              </span>
            </div>
            <div></div>
          </div>
          {/* 3- PAYMENT METHOD  */}
          <div className="rounded-b-md shadow-xl">
            <div className="bg-slate-700 flex px-4 py-2 items-center gap-3 rounded-sm">
              <h1 className="bg-white rounded-full w-6 h-6 flex items-center text-center justify-center">
                2
              </h1>
              <span className="text-white font-sans lg:text-base text-sm font-medium">
                PAYMENT METHOD
              </span>
            </div>
            <div className="">
              <div className="flex flex-col gap-0 border-2 pt-2">
                <Radio
                  name="description"
                  label={
                    <div>
                      <Typography color="blue-gray" className="font-light">
                        Debit/Credit cards and mobile money
                      </Typography>
                    </div>
                  }
                />
                <Radio
                  name="description"
                  defaultChecked
                  label={
                    <div>
                      <Typography color="blue-gray" className="font-light">
                        bKash
                      </Typography>
                    </div>
                  }
                />
                <Radio
                  name="description"
                  color="blue"
                  label={
                    <div>
                      <Typography color="blue-gray" className="font-light">
                        Cash on delivery
                      </Typography>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          <div className="bg-slate-700 flex px-4 py-2 items-center gap-3 rounded-sm">
            <h1 className="bg-white rounded-full w-6 h-6 flex items-center text-center justify-center">
              <span className="">
                <MdDone />
              </span>
            </h1>
            <span className="text-white font-sans lg:text-base text-sm font-medium">
              ORDER REVIEW
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
