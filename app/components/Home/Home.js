import { useEffect, useState } from "react";
import Hero from "./Hero";
import Category from "./Category";
import HomeProductsSection from "./HomeProductsSection";
import MiniBanner from "./MiniBanner";
import PromoSection from "./PromoSection";
import { TopCategory } from "./TopCategory/TopCategory";
import HomeNewArrivals from "./HomeNewArrivals/HomeNewArrivals";

export default function Home({ products }) {
  return (
    <div>
      <Hero />
      <TopCategory />
      <HomeNewArrivals />
      <Category />
      <HomeProductsSection products={products} />
      <MiniBanner />
      <PromoSection />
    </div>
  );
}
