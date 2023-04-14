import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const restuarantServing = useSelector((store) => store.cart.restaurant);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(restuarantServing);

  return (
    <div className=" flex flex-col items-center">
    <Card className="w-4/5">
      <CardBody className="text-center">
        <Typography variant="h3" className="mb-2 text-black">
        {restuarantServing[0]?.areaName}
        </Typography>
        <Typography className=" text-lg text-black">
        {restuarantServing[0]?.cuisines}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small"  className=" text-lg text-black">{restuarantServing?.costForTwoMessage}</Typography>
        <Chip color="green" value={restuarantServing?.avgRating} className=" text-lg" />
        
        
      </CardFooter>
    </Card>
    </div>
   /*  <div className="flex flex-col items-center">
      <div >
        
        {cartItems.map((item) => (
          <FoodItem key={item.card.info.id} {...item.card.info} />
        ))}
        <button
          className="p-2 m-2 bg-green-50"
          onClick={() => handleClearCart()}
        >
          clear Cart
        </button>
        <span>restuarantServing</span>
      </div>
    </div>  */
  );
};

export default Cart;
