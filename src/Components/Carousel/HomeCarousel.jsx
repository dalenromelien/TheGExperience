import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import Image1 from "../../assets/photos/carouselPhotos/image1.jpg";
import Image2 from "../../assets/photos/carouselPhotos/image2.jpg";
import Image3 from "../../assets/photos/carouselPhotos/image3.jpg";
import "./HomeCarousel.css";
import Section from "../Section";

const HomeCarousel = () => {
  const imgContainerStyle =
    " w-[100%] h-[30rem] sm:max-w-[75rem] m-auto rounded-md overflow-hidden  md:h-[45rem]  ";
  const imgStyle =
    "w-full h-full  object-cover relative   top-1/2 -translate-y-1/2 ";
  return (
    <div className="w-full bg-[#545454]  ">
      <Section className="py-[2rem] md:pt-[3rem]  md:pb-[8rem]  ">
        <Carousel fade indicators={false}>
          <Carousel.Item>
            <div className={imgContainerStyle}>
              <Image src={Image1} className={imgStyle} />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={imgContainerStyle}>
              <Image src={Image2} className={imgStyle} />
            </div>{" "}
          </Carousel.Item>
          <Carousel.Item>
            <div className={imgContainerStyle}>
              <Image src={Image3} className={imgStyle} />
            </div>{" "}
          </Carousel.Item>
        </Carousel>
      </Section>
    </div>
  );
};

export default HomeCarousel;
