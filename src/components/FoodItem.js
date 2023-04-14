import { FOOD_ITEM_URL } from "../constants";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
const FoodItem = ({
    name,
    price,
    imageId,
    description,

  }) => {
    return (
      <div className="flex  mx-4 p-2" >
      <Card className="w-80 h-80">
        <CardHeader  className=" flex h-52 m-1 p-1">
          <img
            src={FOOD_ITEM_URL +
              imageId}
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody >
          <Typography variant="h5">
            {name}
          </Typography>
          {/* <Typography>{cuisines.join(", ")}</Typography> */}
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          
          <Typography variant="small">{description}</Typography>
          <Typography variant="small">
            {price/100}
          </Typography>
        </CardFooter>
      </Card>
    </div>
      
    );
  };
  
  export default  FoodItem;
  