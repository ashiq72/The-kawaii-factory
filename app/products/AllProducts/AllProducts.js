"use client";
import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "@/store/features/productsAPI/productsAPI";
import { useSelector } from "react-redux";

export default function AllProducts() {
  const productsQuery = useGetAllProductsQuery();

  const filters = useSelector((state) => state.categoryFilter.category);
  const sorts = useSelector((state) => state.categoryFilter.sort);

  let content = [];

  if (productsQuery.data) {
    let productList = [...productsQuery.data.data];

    // Apply category filters
    if (filters?.length) {
      productList = productList.filter((product) =>
        filters.includes(product.category)
      );
    }

    // Apply sorting logic - low to high
    if (sorts.includes("low to high")) {
      productList?.sort((a, b) => a.orginalPrice - b.orginalPrice);
    } else if (sorts.includes("high to low")) {
      productList?.sort((a, b) => b.orginalPrice - a.orginalPrice);
    }

    content = productList.map((product, index) => (
      <div key={index} className="">
        <ProductCard product={product} />
      </div>
    ));
  }
  if (productsQuery.data && filters?.length && content?.length === 0) {
    content = (
      <div className="text-green-500 border-2 px-10 rounded mt-5">
        There are no products available.
      </div>
    );
  }

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
