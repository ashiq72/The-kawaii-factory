import { currentUser } from "@clerk/nextjs";

import Home from "@components/Home/Home";

async function getProducts() {
  const res = await fetch("http://localhost:5000/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const HomePage = async () => {
  // const user = await currentUser();
  const products = await getProducts();
  return (
    <main className="overflow-hidden">
      <Home products={products} />
    </main>
  );
};
export default HomePage;
