import React, { useState, useEffect } from "react";
import image1 from "././../assets/photos/gentlemanEvent.jpeg";
import Section from "./../Components/Section";
import { urlFor, client } from "../SanityClient/SanityClient";

import image2 from "././../assets/photos/2024-Events-coming.png";

const Events = () => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'events']{title, imgUrl, description, venue, date, signupLink}`
      )
      .then((events) => {
        console.log("Events:", events);
        // Handle your data here
        setEvents(events);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //  <img src={urlFor(work.imgUrl)} alt={work.name} />

  return (
    <div className="w-full bg-black flex flex-col  justify-center">
      <header className="w-full bg-[#545454] flex justify-center py-[0.75rem]">
        {" "}
        <span className="text-white">Events Catalog</span>
      </header>
      <Section>
        <div
          id="events-container"
          className="bg-black py-3 w-full flex items-center   "
        >
          <div
            id="event-inner-container"
            className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-[4rem] px-[2rem] "
          >
            <div
              id="event"
              className="flex  flex-1 w-full h-full rounded-lg overflow-hidden  "
            >
              <img
                src={image1}
                alt="event-flyer"
                className="  w-full h-full  object-cover"
              />{" "}
            </div>
            <div
              id="event"
              className="flex  flex-1 w-full h-full rounded-lg overflow-hidden "
            >
              <img
                src={image2}
                alt="event-flyer"
                className="  w-full   h-full object-cover "
              />
            </div>
          </div>
        </div>
      </Section>
      <div className="bg-[#545454]">
        <Section className="">
          <div
            id="events-container"
            className=" py-[3rem] w-full flex items-center   "
          >
            <div
              id="event-inner-container"
              className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-[5rem] px-[2rem] "
            >
              <div
                id="event"
                className="flex  flex-1 w-full h-full rounded-lg overflow-hidden  "
              >
                <img
                  src={image1}
                  alt="event-flyer"
                  className="  w-full h-full  object-cover"
                />{" "}
              </div>
              <div
                id="event"
                className="flex  flex-1 w-full h-full rounded-lg overflow-hidden "
              >
                <img
                  src={image2}
                  alt="event-flyer"
                  className="  w-full   h-full object-cover "
                />
              </div>
              <div
                id="event"
                className="flex  flex-1 w-full h-full rounded-lg overflow-hidden "
              >
                <img
                  src={image2}
                  alt="event-flyer"
                  className="  w-full   h-full object-cover "
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Events;
