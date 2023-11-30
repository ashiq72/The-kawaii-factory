import ProductDetails from "@/app/components/ProductDetails/ProductsDetails";

const ProductView = async ({ params }) => {
  const res = await fetch(
    `https://server-kawaiisss.vercel.app/api/v1/product/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();

  return (
    <div>
      <ProductDetails key={product._id} data={product?.data} />
    </div>
  );
};
export default ProductView;
