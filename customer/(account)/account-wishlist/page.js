import React from "react";
import AccountWishlists from "./account-wishlist";

function AccountWishlist() {
  return (
    <div>
      <div>
        <h1 className=" font-bold text-lg">WISHLIST</h1>
        <p className="text-sm text-gray-500 font-sans">
          All your saved items in one place.
        </p>
      </div>
      <div>
        <AccountWishlists />
      </div>
    </div>
  );
}

export default AccountWishlist;
