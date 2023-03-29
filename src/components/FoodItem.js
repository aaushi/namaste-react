import { FOOD_ITEM_URL } from "../constants";

const FoodItem = ({
    name,
    price,
    imageId,
    description,

  }) => {
    return (
      <div className="w-[200px] p-2 m-2  border-black overflow-">
        <img
          src={
            FOOD_ITEM_URL +
            imageId
          }
        />
        <h2 className="font-bold">{name}</h2>
        <h3>{description}</h3> 
        <h5>{price/100}</h5>

      </div>
    );
  };
  
  export default  FoodItem;
  