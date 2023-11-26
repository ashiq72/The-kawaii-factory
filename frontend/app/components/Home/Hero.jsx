"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
  return (
    <div className=" z-10">
      <div className="">
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
                  style={{ height: "calc(100vh - 12vh)" }}
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
                  style={{ height: "calc(100vh - 12vh)" }}
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
                  style={{ height: "calc(100vh - 12vh)" }}
                />
              </div>
            </SwiperSlide>
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
                  style={{ height: "calc(100vh - 15vh)" }}
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
                  style={{ height: "calc(100vh - 15vh)" }}
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
                  style={{ height: "calc(100vh - 15vh)" }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
