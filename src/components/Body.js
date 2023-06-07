import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { restuarantList } from "../constants";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContextNew from "../utils/UserContext";
import { Input } from "@material-tailwind/react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestuarantState, setfilteredRestuarantState] = useState([]);
  const [allRestuarantState, setallRestuarantState] = useState([]);
  const { user, setUser } = useContext(UserContextNew);
  
  //const  [searchClicked, setSearchClicked] = useState("false");

  useEffect(() => {
    getRestuarants();
  }, []);

  async function getRestuarants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.930428&lng=77.678404&page_type=DESKTOP_WEB_LISTING"
    );

    const dataJson = await data.json();
    console.log(dataJson);
    setallRestuarantState(dataJson?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestuarantState(dataJson?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h2>~~~~~Please check your internet connection~~~~~</h2>;
  }
  if (!allRestuarantState) return null;

  //if(filteredRestuarantState.length===0) return <h1>No restuarant match your filter</h1>

  return allRestuarantState.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    <div className="flex justify-end" >
    <div className="w-72 p-2 m-2 " >
        <Input label="Search" value={searchInput} data-testid='search-input'
          onChange={(e) => setSearchInput(e.target.value)}   icon={<i className="fas fa-heart" data-testid='search'  onClick={() => {
            //console.log(restuarantState);
            const data = filterData(searchInput, allRestuarantState);
            setfilteredRestuarantState(data);
          }}/>} />
      </div> 
    </div>
      
     
        {/* <input value={user.name} onChange={e=>setUser({
          ...user,
          name:e.target.value,
          
        })}></input>
        <input value={user.email} onChange={e=>setUser({
          ...user,
          email:e.target.value
        })}></input> */}
      
      <div className="flex flex-wrap" key={Math.random()} data-testId="res-list">
        {((a = 10), console.log(filteredRestuarantState))}
        {filteredRestuarantState.map((restaurant) => {
          console.log(restaurant.data);
          return (
            <Link to={"/res/" + restaurant.data.id} key={restaurant.data.id}>
              <ResturantCard  {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
