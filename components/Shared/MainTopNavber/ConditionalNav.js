import React from "react";

import { SignedOut, UserButton, SignedIn, useSession } from "@clerk/nextjs";
import { checkUserRole } from "@utils/userUtils";
import Link from "next/link";

const ConditionalNav = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);
  const conditionalLinks = [
    { title: "Profile", url: "/profile" },
    { title: "Dashboard", url: "/user" },
    { title: "Admin Dashboard", url: "/admin", role: "admin" },
    // Add more placeholder links as needed
  ];
  return (
    <nav className="font-semibold lg:flex justify-between md:items-start sm:flex-col lg:flex-row lg:font-[Poppins] lg:font-medium">
      <SignedIn>
        {conditionalLinks.map((link) =>
          (link.role === "admin" && userRole === "admin") || !link.role ? (
            <Link key={link.title} href={link.url}>
              {/* Use a div instead of an anchor tag */}
              <div className="py-7 cursor-pointer lg:px-7 ">{link.title}</div>
            </Link>
          ) : null
        )}
      </SignedIn>
    </nav>
  );
};
export default ConditionalNav;
