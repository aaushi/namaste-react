import { useContext } from "react";
import UserContextNew from "../utils/UserContext";

const Footer = () => {
  const {user}=useContext(UserContextNew)
    console.log("foooooter");
    return (<div>©️ This is developed by {user.name}. Please reach out to {user.email} for any issues</div>)
  };

  export default Footer;