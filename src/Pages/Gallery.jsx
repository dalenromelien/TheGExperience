import React, { useState } from "react";
import Section from "./../Components/Section";
import galleryImages from "../assets/photos/galleryPhotos";
import { ModalView } from "../Components/modalView";

const Gallery = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    image: "",
  });

  return (
    <Section className={"max-w-[80rem]"}>
      <ModalView
        {...modalState}
        closeModal={() => setModalState({ isOpen: false })}
      />

      <div className="grid gap-2   md:grid-cols-3 md:gap-2 ">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative  overflow-clip rounded-sm"
            onClick={() => setModalState({ isOpen: true, image })}
          >
            <img
              className="w-full object-cover aspect-square "
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
