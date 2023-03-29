import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContextNew from "../utils/UserContext";

const ResturantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,

  }) => {
    const {user}=useContext(UserContextNew);
    return (
      
      <div className="w-[200px] p-2 m-2  border-black overflow-">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(",")}</h3> 
        <h4 className="">{lastMileTravelString}</h4>
        <h5>{user.name}</h5>
        <h6>{user.email}</h6>
      </div>
    );
  };
  
  export default  ResturantCard;
  