"use client";

import { decrement, increment } from "@/store/features/counter/counterSlice";
import { useGetAllProductsQuery } from "@/store/features/productsAPI/productsAPI";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const data = useGetAllProductsQuery("");
  console.log(data);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
