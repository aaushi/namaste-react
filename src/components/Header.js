import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/foodvillalogo.jpg';
import useOnline from "../utils/useOnline";
import Contact from "./Contact";
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
  <img
  src={Logo}
  className="h-28 p-2"
/>
</>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline=useOnline();

  return (
    <div className="flex justify-between bg-pink-50 sm:bg-blue-200 ">
      <Title />
      <div className="flex">
        <ul className="flex py-10">

          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About</Link></li>
          <li className="px-2"><Link to="/contact">Contact</Link></li>
          <li className="px-2"><Link to="/cart">Cart</Link></li>
          <li className="px-2"><Link to="/instamart">Instamart</Link></li>
        </ul>
      </div>
      <h2>{isOnline?'✅':'🔴'}</h2>
      {isLoggedIn ? (
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        
      )}
    </div>
  );
};

export default HeaderComponent;
