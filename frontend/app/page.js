"use client";

import Home from "@/components/Home/Home";
import { useGetAllProductsQuery } from "@/store/features/productsAPI/productsAPI";

export default function HomePage() {
  const products = useGetAllProductsQuery();
  return (
    <>
      <Home products={products} />
    </>
  );
}
