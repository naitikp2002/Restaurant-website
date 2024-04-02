import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Menu from "./comp/Menu";
import ResponsiveAppBar from "./DenseAppBar";
import Home from "./comp/Home";
import About from "./comp/About";
import Contact from "./comp/Contact";
import Error from "./comp/Error";
import RestaurantDetails from "./comp/RestaurantDetails";
import UserContext from "./store/item-context";
import { useContext } from "react";

const AppLayout = () => {
  const [userInfo, setUserInfo]= useState("Naitik");
  return (
    <UserContext.Provider value={{loggedinUser:userInfo, setName:setUserInfo}}>
    {/* <React.StrictMode> */}
      <ResponsiveAppBar />
      <Outlet />
    {/* </React.StrictMode> */}
    </UserContext.Provider> 
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Menu/:resId",
        element: <RestaurantDetails />,
      }
    ],
    errorElement: <Error/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
