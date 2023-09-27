"use client";
import { useEffect, useState } from "react";
import Category from "./Category";
import Hero from "./Hero";
import HomeProductsSection from "./HomeProductsSection";
import MiniBanner from "./MiniBanner";
import PromoSection from "./PromoSection";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
  return (
    <div>
      <Hero />
      <Category />
      <HomeProductsSection products={products} />
      <MiniBanner />
      <PromoSection />
    </div>
  );
}
