import { useState , useEffect} from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantMenu = (id) => {
  const [restuarantMenu, setRestuarantMenu] = useState(null);

  useEffect(() => {
    getRestuarantMenuInfo();
  }, []);

  async function getRestuarantMenuInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const dataJson = await data.json();
    console.log(dataJson.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    //console.log(dataJson.data.cards[0].card[2].groupedCard.cardGroupMap.REGULAR.cards);
    setRestuarantMenu(dataJson.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    
  }
  return restuarantMenu;
};
export default useRestaurantMenu;
