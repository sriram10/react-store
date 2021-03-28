import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function BannerSlider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} indicators={false} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.creatopy.com/wp-content/uploads/2016/06/images-for-banner-ads.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tslconsulting.in/wp-content/uploads/2018/11/content-blog-banner.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Banner Second</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.creatopy.com/wp-content/uploads/2016/06/images-for-banner-ads.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Banner Third</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default BannerSlider;