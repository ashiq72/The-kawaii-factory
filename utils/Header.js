// components/Header.js
import MobileMenu from "./MobileMenu";
import AllLinks from "./AllLinks";

// All Categories fetching
async function getProducts() {
  const res = await fetch("http://localhost:5000/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Header = async () => {
  const categories = await getProducts();
  console.log(categories);
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className=" mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Your Logo</h1>
        <nav className="hidden lg:flex">
          <AllLinks categories={categories} />
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
