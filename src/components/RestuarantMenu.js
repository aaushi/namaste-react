import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer"
const RestuarantMenu = () => {
  

  const { id } = useParams();

  const restuarant=useRestaurant(id);

  const handleAddItem=()=>{
    dispatch(addItem("grapes"))
  }
  return (!restuarant)?<Shimmer/>:(
    <div>
      <div >
        <h2>RestuarantMenu id: {id}</h2>
        <h2>{restuarant?.name}</h2>
        <img src={IMG_CDN_URL + restuarant?.cloudinaryImageId} />
        <h2>{restuarant?.area}</h2>
        <h2>{restuarant?.city}</h2>
        <h2>{restuarant?.costForTwoMsg}</h2>
        <h2>{restuarant?.avgRating}</h2>
        <div>
          <button className="p-2 m-2 bg-green-100" onClick={handleAddItem()}>Add Item</button>
        </div>
        <div className="menu">
            {console.log(Object.values(restuarant?.menu?.items))}
            <h1>Menu</h1>
            <ul>
              {Object.values(restuarant?.menu?.items).map((item)=>(<li key={item.id}>{item.name}</li>))}
            </ul>
        </div>
        
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default RestuarantMenu;
