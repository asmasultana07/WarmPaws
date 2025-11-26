import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Service from "../pages/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path: '/service',
        element:<Service/>
      }
    ]
  },
]);

export default router;