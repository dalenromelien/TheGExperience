import React from "react";
import HomeCarousel from "../Components/Carousel/HomeCarousel";
import About from "./About";
import SignupLead from "../Components/Signup/SignupLead";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Hero />
      <About />
      <SignupLead />
    </>
  );
};

export default Home;
