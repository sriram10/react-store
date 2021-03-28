import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/banner.jpg';
import image2 from '../assets/banner1.png';
import image3 from '../assets/banner3.png';
 
const BannerSlider = (props) => {
 return (
 <div className="banner">
 <Carousel>
 <Carousel.Item>
 <img
 className="d-block w-100"
 src={image1}
 alt=""
 />
 <Carousel.Caption>
 <h3>Slide 1</h3>
 </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
 <img
 className="d-block w-100"
 src={image2}
 alt=""
 />
 
 <Carousel.Caption>
 <h3>Slide 2</h3>
 </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
 <img
 className="d-block w-100"
 src={image3}
 alt=""
 />
 
 <Carousel.Caption>
 <h3>Slide 3</h3>
 </Carousel.Caption>
 </Carousel.Item>
 </Carousel>
 </div>
 );
}
 
export default BannerSlider;