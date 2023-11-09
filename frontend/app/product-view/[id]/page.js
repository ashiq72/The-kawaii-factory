import ProductDetails from "@/app/components/ProductDetails/ProductsDetails";

const ProductView = async ({ params }) => {
  const res = await fetch(
    `https://kawaiisss-server.vercel.app/products/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();
  console.log(product);
  return (
    <div>
      <ProductDetails key={product._id} data={product} />
    </div>
  );
};
export default ProductView;
