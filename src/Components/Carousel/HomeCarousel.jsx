import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import Image1 from "../../assets/photos/carouselPhotos/image1.jpg";
import Image2 from "../../assets/photos/carouselPhotos/image2.jpg";
import Image3 from "../../assets/photos/carouselPhotos/image3.jpg";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <Carousel fade className="home-carousel">
      <Carousel.Item>
        <Image src={Image1} className="image" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Image2} className="image" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Image3} className="image" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
