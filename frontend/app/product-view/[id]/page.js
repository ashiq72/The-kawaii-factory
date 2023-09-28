import ProductDetails from "@components/ProductDetails/ProductsDetails";

const ProductView = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/products/${params.id}`, {
    cache: "no-store",
  });
  const product = await res.json();
  console.log(params.id);
  return (
    <div>
      <ProductDetails key={product._id} data={product} />
    </div>
  );
};
export default ProductView;
