import React from "react";
import image1 from "././../assets/photos/gentlemanEvent.jpeg";

import image2 from "././../assets/photos/2024-Events-coming.png";
const Events = () => {
  return (
    <>
      <header className="w-full bg-[#545454] flex justify-center py-[0.75rem]">
        {" "}
        <span className="text-white">Events Catalog</span>
      </header>
      <main>
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

        <div
          id="events-container"
          className="bg-[#545454] py-[3rem] w-full flex items-center   "
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
      </main>
    </>
  );
};

export default Events;
