import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart, totalCost } from "../utils/cartSlice";
import { Button } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalCartPrice = useSelector((store) => store.cart.totalPrice);
  const restuarantServing = useSelector((store) => store.cart.restaurant);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const removeFoodItem = (item, cartItems) => {
    dispatch(removeItem(item, cartItems));
  };
  console.log(restuarantServing);
  console.log(cartItems);
  return (
    <div className=" flex flex-col items-center">
      <Card className="w-4/5">
        <CardBody className="text-center">
          <Typography variant="h3" className="mb-2 text-black">
            {restuarantServing[0]?.name}
          </Typography>
          <Typography variant="h5" className="mb-2 text-black">
            {restuarantServing[0]?.areaName}
          </Typography>
          <Typography className=" text-lg text-black">
            {restuarantServing[0]?.cuisines.join(", ")}
          </Typography>
        </CardBody>
      </Card>
      <div className=" w-4/5  divide-y-2">
        <ul>
          {Object.values(cartItems).map((item) => (
            <>
              <div className="flex justify-between items-center h-28  ">
                <li
                  className="p-2 m-2 text-xl font-semibold"
                  key={item.card?.info?.name}
                >
                  {item.card?.info?.name} <br />
                </li>
                <div className="flex flex-col">
                  <span className="text-lg font-medium">Quantity: 1</span>
                  <span className="text-lg font-medium">
                    Rs. {item.card?.info?.price / 100}{" "}
                  </span>
                </div>
              </div>
              <hr
                style={{
                  borderColor: "lightgrey",
                  height: "3px",
                }}
              />
            </>
          ))}
        </ul>
        <div className="flex justify-end">
          <span className="text-lg font-medium">
            Total:<span>{totalCartPrice}</span>
          </span>
        </div>
        <div className="flex justify-end h-16">
          <Button className="w-56 p-2 m-2 "
            onClick={() => {
              handleClearCart()
            }}
          >
            Clear Cart
          </Button>
          <Button className="w-56 p-2 m-2 "
            onClick={() => {
              
            }}
          >
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
