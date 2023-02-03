import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestuarantMenu from "./components/RestuarantMenu";

/* const heading1 = React.createElement("h1", { key: "head1" }, "hey heading1");
const heading2 = React.createElement("h1", { key: "head2" }, "hey heading2");
const heading3 = React.createElement("h1", { key: "head3" }, "hey heading3");
const divElement = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]); */

//JSX

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/res/:id",
        element: <RestuarantMenu />,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
//root.render(<AppLayout />);
