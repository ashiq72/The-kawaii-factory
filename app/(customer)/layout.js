import AccountHeader from "./AccountHeader";
import Link from "next/link";

async function CustomerAccount({ children }) {
  const link = [
    { id: 1, name: "Adress Information", url: "/account-information" },
    { id: 1, name: "Order History", url: "/account-information" },
    { id: 1, name: "Wishlist", url: "/account-information" },
    { id: 1, name: "Contact US", url: "/account-information" },
    { id: 1, name: "Return", url: "/account-information" },
    { id: 1, name: "Credit Note", url: "/account-information" },
  ];
  return (
    <div className="">
      <div>
        <AccountHeader />
      </div>
      <div
        style={{ display: "flex" }}
        className="xl:w-3/4 mx-auto bg-slate-100 "
      >
        {/* Sidebar */}
        <div
          style={{ width: "250px", background: "#fff", padding: "20px" }}
          className="flex flex-col "
        >
          <h1 className="px-2 font-bold text-lg ">My Account</h1>
          {link.map((item, i) => (
            <Link
              key={i}
              href="/account-information"
              className="font-sans text-base py-3 text-gray-500 hover:text-black px-2 rounded"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Main content */}
        <div className="" style={{ flex: 1, padding: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CustomerAccount;
