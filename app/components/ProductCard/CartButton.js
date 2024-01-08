import { addToCart } from "@/store/features/cartSlice/cartSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

function CartButton({ product }) {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const cartSelected = cartItems.find((item) => item._id === product._id);

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    let newQty = qty;
    const existItem = cartItems.find((x) => x._id === product._id);
    if (existItem) {
      if (existItem.qty + 1 <= product.countInStock) {
        newQty = existItem.qty + 1;
      } else {
        return alert("No more product exist");
      }
    }

    dispatch(addToCart({ ...product, qty: newQty }));
    toast.success("Added card");
  };
  return (
    <div
      className={`bg-white rounded-full p-1 border-2 ease-in-out duration-100 border-gray-50 hover:border-2 text-[20px] ${
        cartSelected
          ? "hover:border-green-600 text-green-600 "
          : "hover:border-gray-900"
      }`}
      onClick={addToCartHandler}
      //   onClick={() => dispatch(addToCart(product))}
    >
      {/* <AiOutlineEye /> */}
      {cartSelected ? <BsCart /> : <BsCart />}
    </div>
  );
}

export default CartButton;
