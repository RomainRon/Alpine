import React from 'react';

import { Provider } from 'react-redux';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';


const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  
);