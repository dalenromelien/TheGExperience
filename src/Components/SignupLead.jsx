import React from "react";
import Section from "./Section";

const SignupLead = () => {
  return (
    <div className="w-full  bg-[#545455]">
      <Section className="flex flex-col justify-center  text-white  py-[2rem] gap-4  max-w-[68rem] m-auto">
        <p className=" text-[1.5rem] leading-7  font-oswald  break-normal    text-center  ">
          Unlock a world of exclusive experiences, networking opportunities, and
          personal growth. Join The Gentlemen's Experience and embark on a path
          that celebrates timeless virtues in a contemporary setting. Be part of
          a community that values chivalry, courtesy, and honor, and is
          dedicated to helping you achieve personal and professional success.
          Your refined journey begins here.
        </p>
        <div className="flex justify-center items-center">
          <button className="bg-black rounded-md px-[2rem] py-[1rem]">
            Sign Up for a Refined Journey
          </button>
        </div>
      </Section>
    </div>
  );
};

export default SignupLead;
