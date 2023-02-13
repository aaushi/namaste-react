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
  className="logo"
/>
</>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline=useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>
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
