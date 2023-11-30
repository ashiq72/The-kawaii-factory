"use client";

import { useGetAllProductsQuery } from "@/store/features/productsAPI/productsAPI";
import Home from "./components/Home/Home";

export default function HomePage() {
  const products = useGetAllProductsQuery();

  return (
    <>
      <Home products={products?.data?.data} />
    </>
  );
}
