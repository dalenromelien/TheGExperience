import React from "react";
import Section from "../Components/Section";

import image from "../assets/photos/city-at-night.png";
import image1 from "../assets/photos/handshake.jpeg";
import image2 from "../assets/photos/boat-on-water.jpeg";

const About = () => {
  return (
    <Section className="bg-black text-white">
      <h1 className=" text-center "> ABOUT US</h1>
      <div className="flex flex-wrap md:gap-6  w-full items-center mb-[2rem]">
        <div className=" relative  md:w-[33%] rounded-md overflow-hidden ">
          <img
            className=" object-cover top-0 left-0 aspect-square "
            src={image}
            alt="Nighttime view of city"
          />
        </div>
        <div className="flex gap-3 flex-col flex-1   py-4">
          <h3 className=" text-[1.8125rem] font-bold">Our History</h3>
          <span className="text-[1rem] leading-[1.5rem]  break-normal ">
            The Gentlemen's Experience began as a vision to redefine modern
            masculinity and celebrate the timeless virtues of chivalry,
            courtesy, and honor. Established in 2023, our journey has been one
            of transformation and evolution, reflecting the changing aspirations
            of contemporary gentlemen.
          </span>
          <span className="text-[1rem]">
            Our inception was a response to the need for a space where
            high-earning, ambitious individuals could come together, connect,
            and grow personally and professionally. Since then, we've embarked
            on a remarkable journey of curating upscale events and experiences
            designed to celebrate these values and provide a platform for
            networking and personal development.
          </span>
        </div>
      </div>

      <div className="flex  flex-col-reverse sm:flex-row   flex-wrap md:gap-6  w-full items-center  mb-[2rem]">
        <div className="flex gap-3 flex-col flex-1  py-4">
          <h3 className=" text-[1.8125rem] font-bold">Our Mission</h3>
          <span className="text-[1rem] leading-[1.5rem]  break-normal ">
            At The Gentlemen's Experience, our mission is to nurture a new
            generation of modern gentlemen by upholding the timeless virtues of
            chivalry, courtesy, and honor. We are dedicated to curating upscale
            events that celebrate these values, fostering camaraderie, and
            providing a platform for high-earning, driven individuals who are
            committed to personal growth and success. Our aim is to inspire,
            empower, and create an environment where character, integrity, and
            the pursuit of excellence thrive, bridging tradition with
            contemporary ambition. Join us on the path to becoming the best
            version of yourself, and let us celebrate not just where you are,
            but the remarkable journey that lies ahead.
          </span>
        </div>
        <div className=" relative  md:w-[33%] rounded-md overflow-hidden ">
          <img
            className=" object-cover top-0 left-0 aspect-square"
            src={image1}
            alt="Nighttime view of city"
          />
        </div>
      </div>
      <div className="flex flex-wrap md:gap-6  w-full items-center mb-[2rem]">
        <div className=" relative  md:w-[33%] rounded-md overflow-hidden ">
          <img
            className=" object-cover top-0 left-0 aspect-square "
            src={image2}
            alt="Nighttime view of city"
          />
        </div>
        <div className="flex gap-3 flex-col flex-1  py-4">
          <h3 className=" text-[1.8125rem] font-bold">Our Vision</h3>
          <span className="text-[1rem] leading-[1.5rem]  break-normal ">
            We envision a world where the virtues of the past seamlessly blend
            with the aspirations of the present. The Gentlemen's Experience is
            the bridge that connects tradition with contemporary ambition,
            fostering an environment where character, integrity, and camaraderie
            flourish.
          </span>
        </div>
      </div>
    </Section>
  );
};

export default About;
