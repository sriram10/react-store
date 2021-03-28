import React from "react";
import '../App.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const slider = [
    "https://i.ibb.co/dmJR6DH/ny.jpg",
    "https://i.ibb.co/c2QCL87/chicago.jpg",
    "https://i.ibb.co/pbYcNHn/la.jpg",
    "https://m.media-amazon.com/images/I/51CEknIIHcL._AC_UY436_FMwebp_QL65_.jpg"
]
export default function App() {
  return (
    <div className="App">
     <AliceCarousel autoPlay autoPlayInterval="3000" className = "imagesC">
      <img src={slider[0]} className="sliderimg" alt=""/>
      <img src={slider[1]} className="sliderimg" alt=""/>
      <img src={slider[2]} className="sliderimg" alt=""/>
      <img src={slider[3]} className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
}
