import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class BannerSlider extends React.Component {

    render(){
        return(
 <div className='corosel-wrap'>  
<Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://wowslider.com/sliders/demo-18/data1/images/london830775.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  interval={2000}> 
    <img
      className="d-block w-100"
      src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
          );  }
}

export default BannerSlider;