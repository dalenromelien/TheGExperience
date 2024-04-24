import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
