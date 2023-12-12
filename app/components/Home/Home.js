import { useEffect, useState } from "react";
import Hero from "./Hero";
import Category from "./Category";
import HomeProductsSection from "./HomeProductsSection";
import MiniBanner from "./MiniBanner";
import PromoSection from "./PromoSection";
import { TopCategory } from "./TopCategory/TopCategory";

export default function Home({ products }) {
  return (
    <div>
      <Hero />
      <TopCategory />
      <Category />
      <HomeProductsSection products={products} />
      <MiniBanner />
      <PromoSection />
    </div>
  );
}
