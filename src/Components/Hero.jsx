import React from "react";
import Section from "./Section";
import SignupButton from "./Signup/SignupButton";

const Hero = () => {
  return (
    <div className="bg-[#545455] py-8 text-white">
      <Section className="gap-7 flex-wrap">
        <h1 className="text-center text-[2.25rem] font-semibold">
          {" "}
          The Gentleman Experience
        </h1>
        <span className=" text-center text-[1.5rem]">
          Our core belief is in the timeless virtues of chivalry, courtesy, and
          honor, and we are passionate about bringing these values to life
          through a collection of exclusive and refined experiences.
        </span>
        <SignupButton />
      </Section>
    </div>
  );
};

export default Hero;
