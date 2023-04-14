import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { addItem, addRestaurant } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import useRestaurantMenu from "../utils/useRestuarantMenu";
import Shimmer from "./Shimmer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
const RestuarantMenu = () => {
  const { id } = useParams();

  const restuarant = useRestaurant(id);

  const restuarantMenu = useRestaurantMenu(id);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("grapes")); //{payload:grapes}
  };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const addRestaurantDetails = (restuarantServing) => {
    dispatch(addRestaurant(restuarantServing));
  };
  console.log(restuarant)
  return !(restuarantMenu && restuarant) ? (
    <Shimmer />
  ) : (
    
    <div className=" flex flex-col items-center">
      <Card className="w-4/5">
        <CardBody className="text-center">
          <Typography variant="h3" className="mb-2 text-black">
          {restuarant?.name}
          </Typography>
          <Typography className=" text-lg text-black">
          {restuarant?.cuisines.join(", ")}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small"  className=" text-lg text-black">{restuarant?.costForTwoMessage}</Typography>
          <Chip color="green" value={restuarant?.avgRating} className=" text-lg" />
          
          
        </CardFooter>
      </Card>
      {/* <div className="flex flex-row ">
      <div >
        <h2 className="text-xl font-bold ">{restuarant?.name}</h2>
        <br/>
        <h2>{restuarant?.areaName}</h2><br/>
        <h2>{restuarant?.city}</h2><br/>
        <h2>{restuarant?.costForTwoMessage}</h2><br/>
        <h2>{restuarant?.avgRating}</h2>
      </div>

      </div>
       */}

      <div className=" w-4/5  divide-y-2">
       
        <ul>
          {Object.values(restuarantMenu).map((item) => (
            <>
            <div className="flex justify-between items-center h-56  ">
              <li
                className="p-2 m-2 text-xl font-semibold"
                key={item.card?.info?.id}
              >
                {item.card?.info?.name} <br />
                <span className="text-lg font-medium">
                  Rs. {item.card?.info?.price / 100}{" "}
                </span>
              </li>
              <div className="flex flex-col">
                <img
                  src={IMG_CDN_URL + item.card?.info?.imageId}
                  className="h-28 p-2 "
                />
                <Button  onClick={() => {addFoodItem(item) ; addRestaurantDetails(restuarant)}}>
                  Add
                </Button>
              </div>
             
            </div>
             <hr
             style={{
               
               borderColor: 'lightgrey',
               height: '3px',
             }}
           />
           </>
          ))}
        </ul>
       
      </div>
     
      
    </div>
    
  );
};

export default RestuarantMenu;
