import Image from "next/image";
import React from "react";

export default function NewArrivalsBanner() {
  return (
    <div>
      <div className="hidden lg:flex">
        <Image
          alt=""
          src="https://new-ella-demo.myshopify.com/cdn/shop/files/banner-milance.gif?v=1641367523&width=2000"
          width="2000"
          height="2000"
        />
      </div>
      <div className="lg:hidden flex">
        <Image
          alt=""
          src="https://new-ella-demo.myshopify.com/cdn/shop/files/h16f4-slideshow2-mb-1.jpg?v=1640599001&width=750"
          width="2000"
          height="2000"
        />
      </div>
    </div>
  );
}
