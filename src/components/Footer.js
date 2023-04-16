import { useContext } from "react";
import UserContextNew from "../utils/UserContext";
import { Typography } from "@material-tailwind/react";

const Footer = () => {

return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center  border-t border-blue-gray-500  text-center md:justify-between p-1 m-2 bg-blue-gray-100 text-xl">
      <Typography color="blue-gray" className="font-normal">
        &copy; FoodVilla
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors  hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://github.com/aaushi/namaste-react"
            color="blue-gray" target="_blank"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 p-2 m-2"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
  /* const {user}=useContext(UserContextNew)
    console.log("foooooter");
    return (<div>©️ This is developed by {user.name}. Please reach out to {user.email} for any issues</div>)
  }; */

  export default Footer;