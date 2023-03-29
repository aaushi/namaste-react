import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import useRestaurantMenu from "../utils/useRestuarantMenu";
import Shimmer from "./Shimmer";
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

  return !(restuarantMenu && restuarant ) ? (
    <Shimmer />
  ) : (
    <div>
      <div>
      {console.log(restuarantMenu[0].card?.info?.name)}
        <h2>RestuarantMenu id: {id}</h2>
        <h2>{restuarant?.name}</h2>
        <h2>{restuarant?.areaName}</h2>
        <h2>{restuarant?.city}</h2>
        <h2>{restuarant?.costForTwoMessage}</h2>
        <h2>{restuarant?.avgRating}</h2>
        <div>
          {/* <button
            className="p-2 m-2 bg-green-100"
            onClick={() => handleAddItem()}
          >
            Add Item
          </button> */}
        </div>
        <div className="menu">
          
          <h1>Menu</h1>
          <ul>
            {Object.values(restuarantMenu).map((item) => (
              <li key={item.card?.info?.id}>
                {item.card?.info?.name}{" "}
                <button
                  className="p-1 bg-green-50"
                  onClick={() => addFoodItem(item)}
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RestuarantMenu;
