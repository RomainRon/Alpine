import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Configurateur from "./components/ConfigurateurPage";
import Home from './components/html/Home'
import ChoiceColor from './components/ChoiceColor'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/configurateur",
    element: <Configurateur />,
  },
  {
    path: "/colorCar",
    element: <ChoiceColor />,
  },
]);

export default router;