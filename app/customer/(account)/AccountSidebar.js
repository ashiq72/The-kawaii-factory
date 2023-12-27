"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AccountSidebar() {
  const link = [
    { id: 1, name: "Adress Information", url: "/customer/account-information" },
    { id: 2, name: "Order History", url: "/customer/account-order" },
    { id: 3, name: "Wishlist", url: "/customer/account-wishlist" },
    { id: 4, name: "Contact US", url: "/customer/account-contact-us" },
    { id: 5, name: "Return", url: "/customer/account-return" },
    { id: 6, name: "Credit Note", url: "/customer/account-credit-note" },
  ];

  const router = usePathname();

  return (
    <div
      style={{ width: "250px", background: "#fff", padding: "0px" }}
      className="flex flex-col"
    >
      <h1 className="pt-10 px-6 font-bold text-lg ">My Account</h1>
      {link.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className={`font-sans text-base py-6 ${
            router === item.url ? "text-black shadow-md" : "text-gray-500"
          } hover:text-black px-6 rounded`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default AccountSidebar;
