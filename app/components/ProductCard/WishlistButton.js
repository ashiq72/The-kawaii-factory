import { addToWishList } from "@/store/features/wishListSlice/wishListSlice";
import toast from "react-hot-toast";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function WishlistButton({ product }) {
  const { wishListItems } = useSelector((state) => state.wishlist);

  const wishListSelected = wishListItems.find(
    (item) => item._id === product._id
  );
  const dispatch = useDispatch();

  return (
    <div
      className={`bg-white rounded-full p-1 border-2 ease-in-out duration-100 border-gray-50 hover:border-2 ${
        wishListSelected
          ? "hover:border-red-600 text-red-600"
          : "hover:border-gray-900"
      }
                  `}
      onClick={() => {
        dispatch(addToWishList(product));
        toast.success("Added wishlist");
      }}
    >
      {wishListSelected ? (
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
