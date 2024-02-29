// default imports
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//private routes
import { PrivateRoute } from "./PrivateRoutes";

// pages
import Home from "pages/home";

export const AllRoutes = (props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
