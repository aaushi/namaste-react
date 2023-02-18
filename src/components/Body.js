import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { restuarantList } from "../constants";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = ({user}) => {
  //let searchedText = "KFC";
  const [searchInput, setSearchInput] = useState();
  const [filteredRestuarantState, setfilteredRestuarantState] = useState([]);
  const [allRestuarantState, setallRestuarantState] = useState([]);
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

  const isOnline=useOnline();

  if(!isOnline){
    return <h2>~~~~~Please check your internet connection~~~~~</h2>
  }
  if (!allRestuarantState) return null;

  //if(filteredRestuarantState.length===0) return <h1>No restuarant match your filter</h1>

  return allRestuarantState.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          className="search-input focus:bg-yellow-200"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn p-2 m-2 bg-blue-400 text-white rounded-md"
          onClick={() => {
            //console.log(restuarantState);
            const data = filterData(searchInput, allRestuarantState);

            setfilteredRestuarantState(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {((a = 10), console.log(filteredRestuarantState))}
        {filteredRestuarantState.map((restaurant) => {
          return (
            <Link to={"/res/"+restaurant.data.id} key={restaurant.data.id}>
              <ResturantCard {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </>
  );
};


export default Body;
