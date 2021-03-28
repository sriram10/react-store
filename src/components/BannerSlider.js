import { Carousel } from "react-bootstrap";
import { bannerList } from "../assets/bannerList";

const BannerSlider = () => (
  <Carousel>
    {bannerList.map(({ image, title, desc }) => {
      return (
        <Carousel.Item>
          <img 
          height="300"
          className="d-block w-100" src={image} alt={title} />
          <Carousel.Caption>
            <h3 class="text-primary">{title}</h3>
            <p class="text-primary"> {desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    })}
  </Carousel>
);

export default BannerSlider;