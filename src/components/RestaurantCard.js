import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContextNew from "../utils/UserContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
  avgRating,
  lastMileTravelString
}) => {
  const { user } = useContext(UserContextNew);
  return (
    <div className="flex  mx-4 p-2" >
      <Card className="w-80 h-80">
        <CardHeader  className=" flex h-52 m-1 p-1">
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody >
          <Typography variant="h5">
            {name}
          </Typography>
          <Typography>{cuisines.join(", ")}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Chip color="green" value={avgRating}/>
          <Typography variant="small">{lastMileTravelString}</Typography>
          <Typography variant="small">
            {costForTwoString}
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
  {
    /* <div className="w-[200px] p-2 m-2  border-black overflow-">
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
      </div> */
  }
};

export default ResturantCard;
