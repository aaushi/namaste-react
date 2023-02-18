import { IMG_CDN_URL } from "../constants";

const ResturantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    user
  }) => {
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
        <h4>{user.name}</h4>
      </div>
    );
  };
  
  export default  ResturantCard;
  