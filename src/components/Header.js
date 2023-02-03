import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/foodvillalogo.jpg';
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

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
