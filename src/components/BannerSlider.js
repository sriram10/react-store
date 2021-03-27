import { Carousel } from "react-bootstrap";
import { bannerItems } from "../assets/bannerItems";

const BannerSlider = () => (
  <Carousel>
    {bannerItems.map(({ image, title, subText }) => {
      return (
        <Carousel.Item>
          <img className="d-block w-100" src={image} alt={title} />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{subText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    })}
  </Carousel>
);

export default BannerSlider;
