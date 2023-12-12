import Image from "next/image";
import React from "react";

export default function JewelleryBanner() {
  return (
    <div>
      <div className="hidden lg:flex">
        <Image
          alt=""
          src="https://new-ella-demo.myshopify.com/cdn/shop/files/banner-amber.gif?v=1641367490&width=2000"
          width="2000"
          height="2000"
        />
      </div>
      <div className="lg:hidden flex">
        <Image
          alt=""
          src="https://new-ella-demo.myshopify.com/cdn/shop/files/h16f4-image-banner-mb-2.jpg?v=1640596102&width=750"
          width="2000"
          height="2000"
        />
      </div>
    </div>
  );
}
