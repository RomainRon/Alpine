import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Configurateur from "./components/ConfigurateurPage";
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/configurateur",
    element: <Configurateur />,
  },

]);

export default router;