import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restuarantList } from "../constants";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
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

  if (!allRestuarantState) return null;

  //if(filteredRestuarantState.length===0) return <h1>No restuarant match your filter</h1>

  return allRestuarantState.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //console.log(restuarantState);
            const data = filterData(searchInput, allRestuarantState);

            setfilteredRestuarantState(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restuarant-list">
        {((a = 10), console.log(filteredRestuarantState))}
        {filteredRestuarantState.map((restaurant) => {
          return (
            <Link to={"/res/"+restaurant.data.id} key={restaurant.data.id}>
              <ResturantCard {...restaurant.data}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

function filterData(searchInput, restuarantState) {
  console.log(searchInput);
  const filteredData = restuarantState.filter((res) =>
    res?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  console.log("filtereddata");
  console.log(filteredData);
  return filteredData;
}

export default Body;
