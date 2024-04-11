import React from "react";
import HomeCarousel from "../Components/Carousel/HomeCarousel";
import About from "./About";
import SignupLead from "../Components/SignupLead";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <About />
      <SignupLead />
    </>
  );
};

export default Home;
