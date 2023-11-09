import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "@/store/features/productsAPI/productsAPI";

export default function AllProducts() {
  const products = useGetAllProductsQuery();

  return (
    <div className="bg-white">
      <div className="flex items-center flex-col max-w-full">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2> */}
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 xl:gap-x-8">
          {products?.data?.map((product, index) => (
            <div key={index} className="">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
