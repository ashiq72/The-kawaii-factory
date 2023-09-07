"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import { BsFillCarFrontFill } from "react-icons/bs";
import { UserButton } from "@clerk/nextjs";
import { BiSolidLike } from "react-icons/bi";
import TopNavbar from "@components/Shared/TopNavber";

export default function Hero() {
  return (
    <div className="bg-transparent bg-opacity-400 w-full relative overflow-hidden ">
      <div className=" top-0">
        {/* Slider for large screen  */}
        <div className="hidden lg:flex">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            // style={{
            //   "--swiper-navigation-color": "#fff",
            // }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/B67St410/slider-1.png"
                  alt=""
                  height={300}
                  width={1920}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/SKJq5Hv1/slider-2.png"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/zvqQmgfD/slider-3.png"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/ZntGzCL2/1.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
        {/* Slider for small screen  */}
        <div className="lg:hidden sm:flex">
          <Swiper
            // navigation={true}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            // style={{
            //   "--swiper-navigation-color": "#fff",
            // }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/Vkfy94Bh/s-1.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/5NMWyfHb/s-2.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/YqfKmTgg/s-3.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/SRc0dvvB/s-4.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Navber  */}
        <div className=" w-full absolute z-10  top-0">
          <div className="flex items-center justify-between p-2 lg:px-20 px-6 shadow-sm border-b-[1px] bg-white text-black ">
            {/* <Link href="/">
              <h1 className="text-white font-extrabold text-2xl flex items-center">
                <span className="text-yellow-500 pr-1">
                  <BsFillCarFrontFill />
                </span>
                <span className="text-yellow-500 pr-1">Car </span>
                Rental
                <span className="text-yellow-500">..</span>
              </h1>
            </Link>
            <div className="hidden md:flex gap-5 text-white text-lg">
              <h2 className="hover:bg-yellow-500 ease-in duration-300 p-2 px-3 rounded-full hover:text-white cursor-pointer ">
                Home
              </h2>
              <h2 className="hover:bg-yellow-500 ease-in duration-300 p-2 px-3 rounded-full hover:text-white cursor-pointer ">
                About
              </h2>
              <h2 className="hover:bg-yellow-500 ease-in duration-300 p-2 px-3 rounded-full hover:text-white cursor-pointer ">
                Content
              </h2>
            </div>
            <UserButton afterSignOutUrl="/" /> */}
            <TopNavbar />
          </div>
        </div>
        {/* Text section  */}
        {/* <div className="absolute flex justify-end transform -translate-y-1/2 lg:px-40 px-4 top-1/2 z-20 flex-col  sm:pl-0">
          <div>
            <div className="bg-slate-100 flex items-start rounded-2xl px-3 py-1 w-fit sm:text-[10px]">
              <span className="text-yellow-600 pr-2 ">
                <BiSolidLike />
              </span>
              {"  "}
              100% Trusted car rental platform in the Bangladesh
            </div>
            <h1 className="text-6xl pt-3 font-bold text-white">
              Find Your Best Car for
              <br />
              <span className="text-yellow-500"> Rental</span>
            </h1>
            <p className="text-xl text-white pt-5">
              Everything your taxi business needs is already here!
            </p>
            <div className="flex pt-5">
              <button className="btn btn-warning mr-5 warning hover:btn-neutral ease-in duration-200">
                <Link href="#" className="text-base">
                  Rent Now
                </Link>
              </button>
              <button className="btn btn-outline btn-warning">
                <Link href="/login">Login</Link>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
