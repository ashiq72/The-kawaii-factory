"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import TopNavbar from "@components/Shared/MainTopNavber/TopNavber";

export default function Hero() {
  return (
    <div className="bg-transparent bg-opacity-400 w-full relative overflow-hidden border-b-2">
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
                  src="https://i.postimg.cc/B6xhg9F1/orginal-the-kawaii-factory-1-sm.png"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/3J3N8XJX/original-the-kawaii-factory-2-sm.png"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/NMfyNR97/orginal-the-kawaii-factory-3-sm.png"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Navber  */}
        <div className=" w-full z-10 absolute  top-0">
          <div className="flex items-center justify-between p-2 lg:px-28 px-6 lg:shadow-sm lg:bg-white  text-black ">
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
      </div>
    </div>
  );
}
