import React ,{Component} from 'react'; 
import  Carousel from 'react-bootstrap/Carousel';
import '../App.css'

class BannerSlider extends Component{      

    render(){
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./banner.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Live Life the Way you Want</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="sliderbtn">View Products</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./banner1.png"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Live Life the Way you Want</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="sliderbtn">View Products</button>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./banner2.png"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Live Life the Way you Want</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="sliderbtn">View Products</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    }
 
}
export default BannerSlider;

   
