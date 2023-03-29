import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);

  return (
    <div>
      <div className="flex">
        <button
          className="p-2 m-2 bg-green-50"
          onClick={() => handleClearCart()}
        >
          clear Cart
        </button>
        {cartItems.map((item) => (
          <FoodItem key={item.card.info.id} {...item.card.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
