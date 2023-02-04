import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer"
const RestuarantMenu = () => {
  const [restuarant, setRestuarant] = useState(null);

  useEffect(() => {
    getRestuarantInfo();
  }, []);

  async function getRestuarantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.930428&lng=77.678404&menuId="+id
    );
    const dataJson = await data.json();
    //console.log("hiiiii");
    console.log(dataJson.data);
    setRestuarant(dataJson.data);
    //return dataJson;
  }
  const { id } = useParams();
  //console.log(params);
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
