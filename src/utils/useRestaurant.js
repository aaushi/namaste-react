import { useState , useEffect} from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {
  const [restuarant, setRestuarant] = useState(null);

  useEffect(() => {
    getRestuarantInfo();
  }, []);

  async function getRestuarantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const dataJson = await data.json();
    //console.log(dataJson.data.cards[0].card.card.info);
    setRestuarant(dataJson.data.cards[0].card.card.info);
    
  }
  return restuarant;
};
export default useRestaurant;
