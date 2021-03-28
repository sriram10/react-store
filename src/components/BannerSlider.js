import { Carousel } from "react-bootstrap";
import { bannerItems } from "../assets/BannerItems";

const BannerSlider = () => (
  <Carousel>
    {bannerItems.map(({ image }) => {
      return (
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={image} alt="Picture Loading" />
          
        </Carousel.Item>
      );
    })}
  </Carousel>
);

export default BannerSlider;