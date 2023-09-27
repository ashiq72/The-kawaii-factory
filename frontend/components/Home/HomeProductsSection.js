import { ProductCard } from "../ProductCard/ProductCard";

export default function HomeProductsSection({ products }) {
  return (
    <div className="bg-white">
      <div className="flex items-center flex-col max-w-full  py-16  sm:py-24 ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products?.data?.slice(0, 3).map((product, index) => (
            <div key={index} className="">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
