import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";

import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/About" element={<About />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
