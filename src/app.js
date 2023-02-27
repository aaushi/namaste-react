import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestuarantMenu from "./components/RestuarantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContextNew from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

/* const heading1 = React.createElement("h1", { key: "head1" }, "hey heading1");
const heading2 = React.createElement("h1", { key: "head2" }, "hey heading2");
const heading3 = React.createElement("h1", { key: "head3" }, "hey heading3");
const divElement = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]); */
//JSX
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "sonu",
    email: "sonu@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContextNew.Provider
        value={{
          user:user,
          setUser:setUser
          
      }}
      >
        <HeaderComponent />
        <Outlet />
        <Footer />
      </UserContextNew.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body  />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading.......</h2>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/res/:id",
        element: <RestuarantMenu />,
      },
      {
        path: "/instamart",
        //element: <Instamart />,
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
//root.render(<AppLayout />);
