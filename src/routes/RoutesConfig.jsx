import React from "react";
import Home from '../pages/Home/index';
import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';
import Details from "../pages/CepPage/CepPage"

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
        path: "/signup",
        element: <SignUp />,
      },
    {
      path: "/home",
      element: <Home />,
    },
    {
        path: "/infoprodutos",
        element: <Details />,
      },
      
    
  ]);