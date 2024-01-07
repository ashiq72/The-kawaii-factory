import {
  addToWishList,
  selectedWishlist,
} from "@/store/features/wishListSlice/wishListSlice";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function WishlistButton({ id, product }) {
  const wishlistSelected = useSelector(
    (state) => state.wishlist.selectedWishlist
  );
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-white rounded-full p-1 border-2 ease-in-out duration-100 border-gray-50 hover:border-2 ${
        wishlistSelected?.includes(id)
          ? "hover:border-red-600 text-red-600"
          : "hover:border-gray-900"
      }
                  `}
      onClick={() => {
        dispatch(addToWishList(product));
        dispatch(selectedWishlist(id));
        // handleClick(_id);
        // if (wishlistSelected) {
        //   toast.success("Added wishlist");
        // }
      }}
    >
      {wishlistSelected.includes(id) ? (
        <span className="text-pink-400">
          <AiFillHeart />
        </span>
      ) : (
        <AiOutlineHeart />
      )}
    </div>
  );
}

export default WishlistButton;
