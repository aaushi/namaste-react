import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/foodvillalogo.jpg";
import useOnline from "../utils/useOnline";
import Contact from "./Contact";
import UserContextNew from "../utils/UserContext";
import { useSelector } from "react-redux";
import { IconButton } from "@material-tailwind/react";
const loggedIn = () => {
  return true;
};

const Title = () => (
  <>
    {/* <img
    src={require("../../assets/images/foodvillalogo.jpg")}
    className="logo"
  /> */}

    {/*  or */}
    <img data-testid="logo" src={Logo} className="h-28 p-2" />
  </>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContextNew);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-[#2f4f4f] ">
      <Title />
      <div className="flex justify-end  text-amber-600">
        <ul className="flex py-10">
          <IconButton color="amber" size="sm">
            <i className="fa-sharp fa-solid fa-house" />
          </IconButton>
          <li className="px-2 my-1 text-xl">
            <Link to="/">Home</Link>
          </li>
          {/* <IconButton color="amber" size="sm">
            <i className="fa-sharp fa-solid fa-house" />
          </IconButton>
          <li className="px-2 my-1 text-xl">
            <Link to="/about">About</Link>
          </li> */}
          <IconButton color="amber" size="sm">
            <i className="fa-sharp fa-solid fa-phone" />
          </IconButton>
          <li className="px-2 my-1 text-xl">
            <Link to="/contact">Contact</Link>
          </li>
          <IconButton color="amber" size="sm">
            <i className="fa-solid fa-cart-shopping"></i>
          </IconButton>
          <li  className="px-2 my-1 text-xl">
            <Link data-testid="cart" to="/cart">Cart({cartItems.length})</Link>
          </li>
          {/*  <IconButton color="amber" size="sm">
            <i className="fa-sharp fa-solid fa-house" />
          </IconButton>
          <li className="px-2 my-1 text-xl">
            <Link to="/instamart">Instamart</Link>
          </li> */}
          <IconButton color="amber" size="sm">
            <i className="fa-sharp fa-solid fa-user" />
          </IconButton>
          <li className="px-2 my-1 text-xl">
            <Link to="/instamart">{user.name}</Link>
          </li>
        </ul>
      </div>
      {/* <h2>{isOnline?'✅':'🔴'}</h2> */}
      {/* {isLoggedIn ? (
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        
      )} */}
    </div>
  );
};

export default HeaderComponent;
