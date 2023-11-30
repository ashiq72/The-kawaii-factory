"use client";
import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "@/store/features/productsAPI/productsAPI";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function AllProducts() {
  const products = useGetAllProductsQuery();
  const filters = useSelector((state) => state.categoryFilter.category);

  let content;

  if (products) {
    content = products?.data?.data?.map((product, index) => (
      <div key={index} className="">
        <ProductCard product={product} />
      </div>
    ));
  }

  if (products && filters?.length) {
    const filteredProducts = products?.data?.data?.filter((product) => {
      if (filters.length) {
        const filter = filters.includes(product.category);
        return filter;
      }
      return product;
    });

    if (filteredProducts.length === 0) {
      content = (
        <div className="text-green-500 border-2 px-10 rounded mt-5">
          There are no products available.
        </div>
      );
    } else {
      content = filteredProducts.map((product, index) => (
        <div key={index} className="">
          <ProductCard product={product} />
        </div>
      ));
    }
  }

  // if (products && filters?.length) {
  //   content = products?.data?.data
  //     ?.filter((product) => {
  //       if (filters.length) {
  //         const filter = filters.includes(product.category);

  //         return filter;
  //       }
  //       return product;
  //     })
  //     .map((product, index) => (
  //       <div key={index} className="">
  //         <ProductCard product={product} />
  //       </div>
  //     ));
  // }
  // if (products && filters?.length === 0) {
  //   content = (
  //     <div className="text-red-500">There are no products available.</div>
  //   );
  // }
  // if (products && filters?.length) {
  //   content = products?.data?.data?.filter((product) => {
  //     if (filters.length) {
  //       return filters.includes(product.category);
  //     }
  //     return product;
  //   });
  // }

  return (
    <div className="bg-white">
      <div className="flex items-center flex-col max-w-full">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2> */}
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 xl:gap-x-8">
          {content}
        </div>
      </div>
    </div>
  );
}
