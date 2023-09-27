"use client";

import Home from "@/components/Home/Home";
import { decrement, increment } from "@/store/features/counter/counterSlice";
import { useGetAllProductsQuery } from "@/store/features/productsAPI/productsAPI";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const count = useSelector((state) => state.counter.value);
  const products = useGetAllProductsQuery();

  const dispatch = useDispatch();
  return (
    <>
      <Home products={products} />
    </>
  );
}
