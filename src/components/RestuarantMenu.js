import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

const RestuarantMenu = () => {
  const [restuarant, setRestuarant] = useState({});

  useEffect(() => {
    getRestuarantInfo();
  }, []);

  async function getRestuarantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.930428&lng=77.678404&menuId=418"
    );
    const dataJson = await data.json();
    console.log(dataJson.data);
    setRestuarant(dataJson.data);
    //return dataJson;
  }
  const { id } = useParams();
  //console.log(params);
  return (
    <div>
      <div>
        <h2>RestuarantMenu id: {id}</h2>
        <h2>{restuarant.name}</h2>
        <img src={IMG_CDN_URL + restuarant.cloudinaryImageId} />
        <h2>{restuarant.area}</h2>
        <h2>{restuarant.city}</h2>
        <h2>{restuarant.costForTwoMsg}</h2>
        <h2>{restuarant.avgRating}</h2>
        <div>
            {/* {console.log(Object.values(restuarant.menu.items))} */}
        </div>
        
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default RestuarantMenu;
