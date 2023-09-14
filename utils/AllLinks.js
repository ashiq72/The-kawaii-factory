"use client";
import { SignedOut, UserButton, SignedIn, useSession } from "@clerk/nextjs";
import { checkUserRole } from "@utils/userUtils";
import Link from "next/link";

const AllLinks = ({ categories }) => {
  const { session } = useSession();
  const userRole = checkUserRole(session);
  const conditionalLinks = [
    { title: "Profile", url: "/profile" },
    { title: "Dashboard", url: "/user" },
    { title: "Admin Dashboard", url: "/admin", role: "admin" },
  ];

  return (
    <>
      <nav>
        {/* Product Categories menu */}
        {categories.map((link) => (
          <span
            href=""
            key={link._id}
            className="cursor-pointer lg:px-7 capitalize"
          >
            {link.category}
          </span>
        ))}
      </nav>
      <nav className="font-semibold lg:flex justify-between  md:items-start sm:flex-col lg:flex-row font-[Poppins] lg:font-medium items-center uppercase">
        {/* Conditional Nav (Profile, Dashboard, Admin Dashboard) */}
        <SignedIn>
          {conditionalLinks.map((link) =>
            (link.role === "admin" && userRole === "admin") || !link.role ? (
              <Link key={link.title} href={link.url}>
                <div className=" cursor-pointer lg:px-7 ">{link.title}</div>
              </Link>
            ) : null
          )}
        </SignedIn>

        {/* User Photo / Login & Sign Up   */}

        <SignedOut>
          <Link href="/sign-in">
            <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mr-4">
              Login
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base">
              Sign Up
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <div className="ml-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </nav>
    </>
  );
};

export default AllLinks;
