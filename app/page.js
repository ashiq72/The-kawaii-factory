"use client";
import { useGetAllProductsQuery } from "@/store/features/productsAPI/productsAPI";
import Home from "./components/Home/Home";
// import { useSession } from "next-auth/react";

export default function HomePage() {
  const products = useGetAllProductsQuery();

  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/ClientMember");
  //   },
  // });
  // console.log(session?.user);
  return (
    <>
      <Home products={products?.data?.data} />
    </>
  );
}
