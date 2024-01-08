import { ProductCard } from "../ProductCard/ProductCard";

export default function HomeProductsSection({ products }) {
  if (!products) {
    return (
      <div className="bg-white">
        <div className="flex items-center flex-col max-w-full  py-16  sm:py-24 ">
          <h2 className="lg:text-2xl text-xl font-bold">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <h2 className="text-lg font-medium text-green-500">
              Product Loading....
            </h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white">
      <div className="flex items-center flex-col max-w-full  py-16  sm:py-24 ">
        <h2 className="lg:text-2xl text-xl font-bold">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.slice(0, 4).map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
